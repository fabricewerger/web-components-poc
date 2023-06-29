/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/SpeechToText/templates/Stt.ts":
/*!*******************************************!*\
  !*** ./src/SpeechToText/templates/Stt.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst SttTemplate = document.createElement(\"template\");\nSttTemplate.innerHTML = `\n<dialog id=\"dialog\">\n  <div id=\"container\">\n    <button id=\"micButton\">\n      <div id=\"lvl\" tabindex=\"0\"></div>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\" id=\"microphoneSVG\">\n        <path d=\"M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z\"/>\n      </svg>\n    </button>\n    <div id=\"content\">\n      <div id=\"wrapper\">\n        <div id=\"contentScroll\">\n          <span id=\"result\"></span>\n          <span id=\"analyseResult\">Analyse speech? <span id=\"emotionDetected\"></span></span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id=\"controls\">\n    <select name=\"language\" id=\"language\">\n      <option value=\"nl-NL\" selected>Nederlands</option>\n      <option value=\"en-GB\" >English</option>\n    </select>\n  </div>\n</dialog>\n\n<style>\n  #controls {\n    display: flex;\n    gap: 18px;\n    position: absolute;\n    left: 50%;\n    top: 90%;\n    transform: translate(-50%, -50%);\n  }\n\n  @media only screen and (max-width: 600px) {\n    #controls {\n      flex-direction: column;\n      gap: 8px;\n    }\n  }\n\n  #dialog {\n    background: #04152D;\n    width: 100vw;\n    height: 100vh;\n    display: block;\n    margin: 0;\n    padding: 0;\n  }\n\n  #container {\n    align-items: center;\n    width: 90%;\n    height: 100vh;\n    color: white;\n    max-width: 1028px;\n    margin: 0 auto;\n    display: flex;\n    gap: 32px;\n  }\n\n  @media only screen and (max-width: 600px) {\n    #container {\n      flex-direction: column;\n      gap: 32px;\n      height: auto;\n      padding: 32px 0;\n    }\n  }\n\n  svg#microphoneSVG {\n    fill: white;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    height: 50px;\n    width: 50px;\n  }\n\n  #content {\n    display: flex;\n    justify-content: center;\n    flex: 1;\n    order: 1;\n  }\n\n  #wrapper {\n    align-items: center;\n    position: relative;\n    display: flex;\n    width: 100%;\n  }\n\n  @media only screen and (min-width: 600px) {\n    #wrapper {\n      height: 100vh;\n    }\n  }\n\n  #contentScroll {\n    max-height: 45vh;\n    display: flex;\n    flex-direction: column-reverse;\n    position: relative;\n    width: 100%;\n  }\n\n  @media only screen and (min-width: 600px) {\n    #contentScroll {\n      max-height: 55vh;\n    }\n  }\n\n  #result {\n    font-size: 22px;\n    line-height: 32px;\n    padding-right: 22px;\n    position: relative;\n    display: flex;\n    overflow: scroll;\n  }\n\n  @media only screen and (min-width: 600px) {\n    #result {\n      font-size: 30px;\n      line-height: 44px;\n      padding-right: 32px;\n    }\n  }\n\n  #micButton {\n    border-radius: 50%;\n    cursor: pointer;\n    height: fit-content;\n    order: 2;\n    width: 200px;\n    height: 200px;\n    position: relative;\n  }\n\n  #micButton:disabled {\n    cursor: not-allowed;\n  }\n\n  #micButton:disabled #lvl {\n    border-color: rgba(255,255,255,0.4);\n  }\n\n  #micButton:disabled #microphoneSVG {\n    fill: rgba(255,255,255,0.4);\n  }\n\n  .start-animation {\n    animation: pulse-background 900ms;\n    animation-timing-function: ease-in-out;\n  }\n\n  @media only screen and (max-width: 600px) {\n    #micButton {\n      height: 170px;\n      order: 1;\n      width: 170px;\n    }\n  }\n\n  #lvl {\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    transition: width 0.3s ease, height 0.3s ease, background 0.3s ease;\n    background: #04152D;\n    border: 1px solid white;\n    transition-delay: 300ms;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    &:focus {\n      outline: 2px solid #E40046;\n      outline-offset: -2px;\n    }\n  }\n\n  @media only screen and (max-width: 600px) {\n    #lvl {\n      width: 170px;\n      height: 170px;\n    }\n  }\n\n  button {\n    all: unset;\n    position: relative;\n    z-index: 1;\n    color: black;\n  }\n\n  select {\n    margin: 0;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    font-family: 'AktivGrotesk', sans-serif;\n    font-stretch: expanded;\n    background-color: #E40046;\n    border: thin solid #E40046;\n    border-radius: 4px;\n    display: inline-block;\n    color: white;\n    padding: 0.5em 3.5em 0.5em 1em;\n    background-image:\n      linear-gradient(45deg, transparent 50%, white 50%),\n      linear-gradient(135deg, white 50%, transparent 50%),\n      linear-gradient(to right, #ccc, #ccc);\n    background-position:\n      calc(100% - 20px) calc(1em + 2px),\n      calc(100% - 15px) calc(1em + 2px),\n      calc(100% - 2.5em) 0.5em;\n    background-size:\n      5px 5px,\n      5px 5px,\n      1px 1.5em;\n    background-repeat: no-repeat;\n  }\n\n  select:focus {\n    background-image:\n      linear-gradient(45deg, white 50%, transparent 50%),\n      linear-gradient(135deg, transparent 50%, white 50%),\n      linear-gradient(to right, #ccc, #ccc);\n    background-position:\n      calc(100% - 15px) 1em,\n      calc(100% - 20px) 1em,\n      calc(100% - 2.5em) 0.5em;\n    background-size:\n      5px 5px,\n      5px 5px,\n      1px 1.5em;\n    background-repeat: no-repeat;\n    border-color: white;\n    outline: 0;\n  }\n\n  .styled-select select {\n    -moz-appearance: none; /* Firefox */\n    -webkit-appearance: none; /* Safari and Chrome */\n    appearance: none;\n    -webkit-padding-right: 20px;\n  }\n\n  #analyseResult {\n    position: absolute;\n    top: calc(100% + 20px);\n    text-decoration: underline;\n    text-underline-offset: 2px;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  #analyseResult:hover {\n    opacity: 1;\n  }\n\n  @keyframes pulse-background {\n    0% {\n      box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);\n    }\n\n    70% {\n      box-shadow: 0 0 0 50px rgba(255, 0, 0, 0);\n    }\n    \n    100% {\n      box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);\n    }\n  }\n\n</style>\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SttTemplate);\n\n\n//# sourceURL=webpack://poc/./src/SpeechToText/templates/Stt.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SpeechToText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpeechToText */ \"./src/SpeechToText/index.js\");\n\n\n\n//# sourceURL=webpack://poc/./src/index.ts?");

/***/ }),

/***/ "./src/SpeechToText/index.js":
/*!***********************************!*\
  !*** ./src/SpeechToText/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates_Stt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/Stt */ \"./src/SpeechToText/templates/Stt.ts\");\n\n\nconst API_ENDPOINT =\n    \"https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/\";\n\nclass Speech extends HTMLElement {\n    constructor() {\n        super();\n        const stt = _templates_Stt__WEBPACK_IMPORTED_MODULE_0__[\"default\"].content;\n        const shadowRoot = this.attachShadow({mode: \"open\"});\n        shadowRoot.appendChild(stt.cloneNode(true));\n        this.final_transcript = \"\";\n        this.recognition = undefined;\n        this.audioStream = null;\n        this.isTalking = false; // Added isTalking flag\n        this.animationRequestId = null; // Added animation request ID\n        this.recording = false;\n    }\n\n    connectedCallback() {\n        // Set up event listeners\n        const micButton = this.shadowRoot.getElementById(\"micButton\");\n        micButton.addEventListener(\"click\", this.toggleRecording.bind(this));\n\n        const languageButton = this.shadowRoot.getElementById(\"language\");\n        languageButton.addEventListener(\n            \"change\",\n            this.changeLanguage.bind(this)\n        );\n\n        const analyseResult = this.shadowRoot.getElementById(\"analyseResult\");\n        analyseResult.addEventListener(\"click\", this.analyseSpeech.bind(this));\n\n        if (!(\"webkitSpeechRecognition\" in window)) {\n            this.shadowRoot.getElementById(\"result\").innerText =\n                \"Uh oh. The webkitSpeechRecognition API is not supported in your browser.\";\n            this.shadowRoot.getElementById(\"micButton\").disabled = true;\n        } else {\n            this.recognition = new webkitSpeechRecognition();\n\n            // Default settings\n            this.recognition.continuous = true;\n            this.recognition.interimResults = true;\n            this.recognition.lang = \"nl-NL\";\n\n            // Set up functions\n            this.recognition.onresult = (event) => this.onResult(event);\n            this.recognition.onend = () => this.onEnd();\n        }\n    }\n\n    toggleRecording() {\n        this.recording ? this.stopRecording() : this.startRecording();\n        this.recording = !this.recording;\n\n        // Check if audio stream already exists or get new audio stream\n        if (this.audioStream) {\n            this.processAudioStream();\n        } else {\n            navigator.mediaDevices\n                .getUserMedia({audio: true})\n                .then((stream) => {\n                    this.audioStream = stream;\n                    this.processAudioStream();\n                })\n                .catch((error) => {\n                    console.log(`Error thrown: ${error}`);\n                });\n        }\n    }\n\n    startRecording() {\n        this.shadowRoot.getElementById(\"analyseResult\").style.opacity = \"0\";\n        this.shadowRoot.getElementById(\"analyseResult\").style.transition =\n            \"none\";\n        this.shadowRoot.getElementById(\"result\").innerText = \"\";\n        this.final_transcript = \"\";\n        this.shadowRoot.getElementById(\"lvl\").style.transition =\n            \"all 200ms ease-in-out\"; // Add transition CSS\n        this.shadowRoot.getElementById(\"lvl\").style.borderColor = \"#E40046\";\n        this.shadowRoot.getElementById(\"lvl\").style.backgroundColor = \"#E40046\"; // Reset background color\n        this.recognition.start();\n        const micButton = this.shadowRoot.getElementById(\"micButton\");\n        micButton.classList.remove(\"start-animation\");\n        void micButton.offsetWidth;\n        micButton.classList.add(\"start-animation\");\n    }\n\n    stopRecording() {\n        this.recognition.stop();\n        cancelAnimationFrame(this.animationRequestId); // Stop animation frame updates\n        this.isTalking = false; // Reset the isTalking flag\n        this.recording = false;\n        this.shadowRoot.getElementById(\"lvl\").style.borderColor = \"#FFFFFF\";\n        this.shadowRoot.getElementById(\"lvl\").style.backgroundColor = \"\"; // Reset background color\n        this.shadowRoot.getElementById(\"lvl\").style.width = \"\"; // Reset width\n        this.shadowRoot.getElementById(\"lvl\").style.height = \"\"; // Reset height\n        this.shadowRoot.getElementById(\"result\").innerText =\n            this.final_transcript;\n\n        if (\n            this.final_transcript.length > 10 &&\n            (this.recognition.lang == \"en-US\" ||\n                this.recognition.lang == \"en-GB\")\n        ) {\n            this.shadowRoot.getElementById(\"analyseResult\").style.opacity =\n                \"0.7\";\n            this.shadowRoot.getElementById(\"analyseResult\").style.transition =\n                \"all 200ms ease-in-out\";\n        }\n    }\n\n    async analyseSpeech() {\n        const analysis = await this.sendSpeechtoAPI(this.final_transcript);\n\n        if (analysis && analysis?.result_msg == \"Success\") {\n            const emotionsDetected = analysis.emotions_detected;\n            const emotionsWithScore = emotionsDetected.map((emotion) => {\n                return {\n                    emotion: emotion,\n                    score: analysis.emotions_normalized[emotion],\n                };\n            });\n            const feedback =\n                emotionsWithScore.length > 0\n                    ? `Primary emotion: ${emotionsWithScore[0].emotion}`\n                    : \"No emotions detected\";\n            this.shadowRoot.getElementById(\"emotionDetected\").innerHTML =\n                feedback;\n        } else {\n            console.log(`There was an error: ${analysis.result_msg}`);\n        }\n    }\n\n    async sendSpeechtoAPI(text) {\n        const options = {\n            method: \"POST\",\n            headers: {\n                \"content-type\": \"application/x-www-form-urlencoded\",\n                \"X-RapidAPI-Key\":\n                    \"3fd651326emsh482f3ef4eb761b5p116a01jsnb7887dd226cd\",\n                \"X-RapidAPI-Host\":\n                    \"twinword-emotion-analysis-v1.p.rapidapi.com\",\n            },\n            body: new URLSearchParams({\n                text,\n            }),\n        };\n\n        try {\n            const response = await fetch(API_ENDPOINT, options);\n            return await response.json();\n        } catch (error) {\n            console.error(error);\n        }\n    }\n\n    changeLanguage(event) {\n        this.stopRecording();\n        this.recognition.lang = event.target.value;\n    }\n\n    processAudioStream() {\n        const audioContext = new AudioContext();\n        const analyser = audioContext.createAnalyser();\n        const microphone = audioContext.createMediaStreamSource(\n            this.audioStream\n        );\n        const javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);\n        analyser.smoothingTimeConstant = 0.8;\n        analyser.fftSize = 1024;\n        microphone.connect(analyser);\n        analyser.connect(javascriptNode);\n        javascriptNode.connect(audioContext.destination);\n\n        const updateLvlSize = () => {\n            const array = new Uint8Array(analyser.frequencyBinCount);\n            analyser.getByteFrequencyData(array);\n            let values = 0;\n            const length = array.length;\n            for (let i = 0; i < length; i++) {\n                values += array[i];\n            }\n            const average = values / length;\n\n            if (Math.round(average) > 10) {\n                const sizeValue = Math.round(average);\n                this.shadowRoot.getElementById(\n                    \"lvl\"\n                ).style.transform = `translate(-50%, -50%) scale(${\n                    sizeValue < 14 ? sizeValue / 16 : 1.4\n                })`;\n\n                this.isTalking = true; // Person is talking\n            } else {\n                // Check if the person was talking previously\n                if (this.isTalking) {\n                    // Person has stopped talking, reset width and height\n                    this.shadowRoot.getElementById(\n                        \"lvl\"\n                    ).style.transform = `translate(-50%, -50%) scale(1)`;\n                    this.isTalking = false; // Reset the talking flag\n                }\n            }\n\n            this.animationRequestId = requestAnimationFrame(updateLvlSize); // Continue updating\n        };\n\n        updateLvlSize();\n    }\n\n    onResult(event) {\n        let interim_transcript = \"\";\n\n        for (let i = event.resultIndex; i < event.results.length; ++i) {\n            if (event.results[i].isFinal) {\n                if (event.results[i][0].transcript.length > 0)\n                    this.final_transcript += `${event.results[i][0].transcript}.`;\n            } else {\n                interim_transcript += event.results[i][0].transcript;\n            }\n        }\n\n        this.shadowRoot.getElementById(\"result\").innerText =\n            this.final_transcript + interim_transcript;\n    }\n\n    onEnd() {\n        this.shadowRoot.getElementById(\"result\").innerText =\n            this.final_transcript;\n        this.stopRecording();\n        this.shadowRoot.getElementById(\n            \"lvl\"\n        ).style.transform = `translate(-50%, -50%) scale(1)`;\n        this.recording = false;\n    }\n}\n\ncustomElements.define(\"speech-component\", Speech);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Speech);\n\n\n//# sourceURL=webpack://poc/./src/SpeechToText/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;