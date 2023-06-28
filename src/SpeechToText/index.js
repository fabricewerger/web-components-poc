import SttTemplate from "./templates/Stt";

const API_ENDPOINT =
    "https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/";

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
        this.recording = false;
    }

    connectedCallback() {
        // Set up event listeners
        const micButton = this.shadowRoot.getElementById("micButton");
        micButton.addEventListener("click", this.toggleRecording.bind(this));

        const languageButton = this.shadowRoot.getElementById("language");
        languageButton.addEventListener(
            "change",
            this.changeLanguage.bind(this)
        );

        const analyseResult = this.shadowRoot.getElementById("analyseResult");
        analyseResult.addEventListener("click", this.analyseSpeech.bind(this));

        if (!("webkitSpeechRecognition" in window)) {
            this.shadowRoot.getElementById("result").innerText =
                "Uh oh. The webkitSpeechRecognition API is not supported in your browser.";
            this.shadowRoot.getElementById("micButton").disabled = true;
        } else {
            this.recognition = new webkitSpeechRecognition();

            // Default settings
            this.recognition.continuous = true;
            this.recognition.interimResults = true;
            this.recognition.lang = "nl-NL";

            // Set up functions
            this.recognition.onresult = (event) => this.onResult(event);
            this.recognition.onend = () => this.onEnd();
        }
    }

    toggleRecording() {
        this.recording ? this.stopRecording() : this.startRecording();
        this.recording = !this.recording;

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
                .catch((error) => {
                    console.log(`Error thrown: ${error}`);
                });
        }
    }

    startRecording() {
        this.shadowRoot.getElementById("analyseResult").style.opacity = "0";
        this.shadowRoot.getElementById("analyseResult").style.transition =
            "none";
        this.shadowRoot.getElementById("result").innerText = "";
        this.final_transcript = "";
        this.shadowRoot.getElementById("lvl").style.transition =
            "all 200ms ease-in-out"; // Add transition CSS
        this.shadowRoot.getElementById("lvl").style.borderColor = "#E40046";
        this.shadowRoot.getElementById("lvl").style.backgroundColor = "#E40046"; // Reset background color
        this.recognition.start();
        const micButton = this.shadowRoot.getElementById("micButton");
        micButton.classList.remove("start-animation");
        void micButton.offsetWidth;
        micButton.classList.add("start-animation");
    }

    stopRecording() {
        this.recognition.stop();
        cancelAnimationFrame(this.animationRequestId); // Stop animation frame updates
        this.isTalking = false; // Reset the isTalking flag
        this.recording = false;
        this.shadowRoot.getElementById("lvl").style.borderColor = "#FFFFFF";
        this.shadowRoot.getElementById("lvl").style.backgroundColor = ""; // Reset background color
        this.shadowRoot.getElementById("lvl").style.width = ""; // Reset width
        this.shadowRoot.getElementById("lvl").style.height = ""; // Reset height
        this.shadowRoot.getElementById("result").innerText =
            this.final_transcript;

        if (
            this.final_transcript.length > 10 &&
            (this.recognition.lang == "en-US" ||
                this.recognition.lang == "en-GB")
        ) {
            this.shadowRoot.getElementById("analyseResult").style.opacity =
                "0.7";
            this.shadowRoot.getElementById("analyseResult").style.transition =
                "all 200ms ease-in-out";
        }
    }

    async analyseSpeech() {
        const analysis = await this.sendSpeechtoAPI(this.final_transcript);

        if (analysis && analysis?.result_msg == "Success") {
            const emotionsDetected = analysis.emotions_detected;
            const emotionsWithScore = emotionsDetected.map((emotion) => {
                return {
                    emotion: emotion,
                    score: analysis.emotions_normalized[emotion],
                };
            });
            const feedback =
                emotionsWithScore.length > 0
                    ? `Primary emotion: ${emotionsWithScore[0].emotion}`
                    : "No emotions detected";
            this.shadowRoot.getElementById("emotionDetected").innerHTML =
                feedback;
        } else {
            console.log(`There was an error: ${analysis.result_msg}`);
        }
    }

    async sendSpeechtoAPI(text) {
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "X-RapidAPI-Key":
                    "3fd651326emsh482f3ef4eb761b5p116a01jsnb7887dd226cd",
                "X-RapidAPI-Host":
                    "twinword-emotion-analysis-v1.p.rapidapi.com",
            },
            body: new URLSearchParams({
                text,
            }),
        };

        try {
            const response = await fetch(API_ENDPOINT, options);
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }

    changeLanguage(event) {
        this.stopRecording();
        this.recognition.lang = event.target.value;
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

            if (Math.round(average) > 10) {
                const sizeValue = Math.round(average);
                this.shadowRoot.getElementById(
                    "lvl"
                ).style.transform = `translate(-50%, -50%) scale(${
                    sizeValue < 14 ? sizeValue / 16 : 1.4
                })`;

                this.isTalking = true; // Person is talking
            } else {
                // Check if the person was talking previously
                if (this.isTalking) {
                    // Person has stopped talking, reset width and height
                    this.shadowRoot.getElementById(
                        "lvl"
                    ).style.transform = `translate(-50%, -50%) scale(1)`;
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
                if (event.results[i][0].transcript.length > 0)
                    this.final_transcript += `${event.results[i][0].transcript}.`;
            } else {
                interim_transcript += event.results[i][0].transcript;
            }
        }

        this.shadowRoot.getElementById("result").innerText =
            this.final_transcript + interim_transcript;
    }

    onEnd() {
        this.shadowRoot.getElementById("result").innerText =
            this.final_transcript;
        this.stopRecording();
        this.shadowRoot.getElementById(
            "lvl"
        ).style.transform = `translate(-50%, -50%) scale(1)`;
        this.recording = false;
    }
}

customElements.define("speech-component", Speech);

export default Speech;
