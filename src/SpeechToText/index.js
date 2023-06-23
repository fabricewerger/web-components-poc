import SttTemplate from "./templates/Stt";

class Speech extends HTMLElement {
    constructor() {
        super();
        const stt = SttTemplate.content;
        const shadowRoot = this.attachShadow({mode: "open"});
        shadowRoot.appendChild(stt.cloneNode(true));
        this.final_transcript = "";
        this.recognition = undefined;
        this.audioStream = null;
        this.isTalking = false; // Added isTalking flag
        this.animationRequestId = null; // Added animation request ID
    }

    connectedCallback() {
        const startButton = this.shadowRoot.getElementById("start");
        startButton.addEventListener("click", this.startRecording.bind(this));

        const languageButton = this.shadowRoot.getElementById("language");
        languageButton.addEventListener(
            "change",
            this.changeLanguage.bind(this)
        );

        if (!("webkitSpeechRecognition" in window)) {
            // upgrade();
        } else {
            this.recognition = new webkitSpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = true;
            this.recognition.lang = "nl-NL";

            this.recognition.onresult = (event) => this.onResult(event);

            this.recognition.onend = () => this.onEnd();
        }
    }

    startRecording() {
        this.final_transcript = "";
        this.recognition.start();
        this.shadowRoot.getElementById("lvl").style.transition =
            "background-color 0.3s"; // Add transition CSS
        this.shadowRoot.getElementById("lvl").style.backgroundColor = "#E40046"; // Reset background color

        // Check if audio stream already exists or get new audio stream
        if (this.audioStream) {
            this.processAudioStream();
        } else {
            navigator.mediaDevices
                .getUserMedia({audio: true})
                .then((stream) => {
                    this.audioStream = stream;
                    this.processAudioStream();
                })
                .catch((err) => {
                    /* handle the error */
                });
        }
    }

    stopRecording() {
        this.recognition.stop();
        cancelAnimationFrame(this.animationRequestId); // Stop animation frame updates
        this.isTalking = false; // Reset the isTalking flag
        this.shadowRoot.getElementById("lvl").style.backgroundColor = ""; // Reset background color
        this.shadowRoot.getElementById("lvl").style.width = ""; // Reset width
        this.shadowRoot.getElementById("lvl").style.height = ""; // Reset height
    }

    changeLanguage(event) {
        this.recognition.lang = event.target.value;
        console.log(event);
    }

    processAudioStream() {
        const audioContext = new AudioContext();
        const analyser = audioContext.createAnalyser();
        const microphone = audioContext.createMediaStreamSource(
            this.audioStream
        );
        const javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);
        analyser.smoothingTimeConstant = 0.8;
        analyser.fftSize = 1024;
        microphone.connect(analyser);
        analyser.connect(javascriptNode);
        javascriptNode.connect(audioContext.destination);

        const updateLvlSize = () => {
            const array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            let values = 0;
            const length = array.length;
            for (let i = 0; i < length; i++) {
                values += array[i];
            }
            const average = values / length;

            if (Math.round(average) > 15) {
                const sizeValue = Math.round(average) + 200;
                this.shadowRoot.getElementById("lvl").style.width =
                    sizeValue + "px";
                this.shadowRoot.getElementById("lvl").style.height =
                    sizeValue + "px";

                this.isTalking = true; // Person is talking
            } else {
                // Check if the person was talking previously
                if (this.isTalking) {
                    // Person has stopped talking, reset width and height
                    this.shadowRoot.getElementById("lvl").style.width = "200px";
                    this.shadowRoot.getElementById("lvl").style.height =
                        "200px";
                    this.isTalking = false; // Reset the talking flag
                }
            }

            this.animationRequestId = requestAnimationFrame(updateLvlSize); // Continue updating
        };

        updateLvlSize();
    }

    onResult(event) {
        let interim_transcript = "";

        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                this.final_transcript += event.results[i][0].transcript;
            } else {
                interim_transcript += event.results[i][0].transcript;
            }
        }

        this.shadowRoot.getElementById("result").innerText = interim_transcript;
    }

    onEnd() {
        this.shadowRoot.getElementById("result").innerText =
            this.final_transcript;
        this.stopRecording();
    }
}

customElements.define("speech-component", Speech);

export default Speech;
