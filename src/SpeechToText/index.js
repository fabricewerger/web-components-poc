import SttTemplate from "./templates/Stt";

class Speech extends HTMLElement {
    constructor() {
        super();
        const stt = SttTemplate.content;
        const shadowRoot = this.attachShadow({mode: "open"});
        shadowRoot.appendChild(stt.cloneNode(true));
        this.final_transcript = "";
        this.recognition = undefined;
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
    }

    stopRecording() {
        this.recognition.stop();
    }

    changeLanguage(event) {
        this.recognition.lang = event.target.value;
        console.log(event);
    }

    onResult(event) {
        var interim_transcript = "";

        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                this.final_transcript += event.results[i][0].transcript;
            } else {
                interim_transcript += event.results[i][0].transcript;
            }
        }
        console.log(event);
        this.shadowRoot.getElementById("result").innerText = interim_transcript;
    }

    onEnd() {
        this.shadowRoot.getElementById("result").innerText =
            this.final_transcript;
    }
}

customElements.define("speech-component", Speech);

export default Speech;
