const SttTemplate = document.createElement("template");

SttTemplate.innerHTML = `
<dialog id="dialog">
  <div id="container">
    <button id="micButton">
      <div id="lvl" tabindex="0"></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" id="microphoneSVG">
        <path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/>
      </svg>
    </button>
    <div id="content">
      <div id="wrapper">
        <div id="contentScroll">
          <span id="result"></span>
          <span id="analyseResult">Analyse speech? <span id="emotionDetected"></span></span>
        </div>
      </div>
    </div>
  </div>
  <div id="controls">
    <select name="language" id="language">
      <option value="nl-NL" selected>Nederlands</option>
      <option value="en-GB" >British</option>
    </select>
  </div>
</dialog>

<style>
  #controls {
    display: flex;
    gap: 18px;
    position: absolute;
    left: 50%;
    top: 90%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 600px) {
    #controls {
      flex-direction: column;
      gap: 8px;
    }
  }

  #dialog {
    background: #04152D;
    width: 100vw;
    height: 100vh;
    display: block;
    margin: 0;
    padding: 0;
  }

  #container {
    align-items: center;
    width: 90%;
    height: 100vh;
    color: white;
    max-width: 1028px;
    margin: 0 auto;
    display: flex;
    gap: 32px;
  }

  @media only screen and (max-width: 600px) {
    #container {
      flex-direction: column;
      gap: 32px;
      height: auto;
      padding: 32px 0;
    }
  }

  svg#microphoneSVG {
    fill: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 50px;
    width: 50px;
  }

  #content {
    display: flex;
    justify-content: center;
    flex: 1;
    order: 1;
  }

  #wrapper {
    align-items: center;
    position: relative;
    display: flex;
    width: 100%;
  }

  @media only screen and (min-width: 600px) {
    #wrapper {
      height: 100vh;
    }
  }

  #contentScroll {
    max-height: 45vh;
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    width: 100%;
  }

  @media only screen and (min-width: 600px) {
    #contentScroll {
      max-height: 55vh;
    }
  }

  #result {
    font-size: 22px;
    line-height: 32px;
    padding-right: 22px;
    position: relative;
    display: flex;
    overflow: scroll;
  }

  @media only screen and (min-width: 600px) {
    #result {
      font-size: 30px;
      line-height: 44px;
      padding-right: 32px;
    }
  }

  #micButton {
    border-radius: 50%;
    cursor: pointer;
    height: fit-content;
    order: 2;
    width: 200px;
    height: 200px;
    position: relative;
  }

  #micButton:disabled {
    cursor: not-allowed;
  }

  #micButton:disabled #lvl {
    border-color: rgba(255,255,255,0.4);
  }

  #micButton:disabled #microphoneSVG {
    fill: rgba(255,255,255,0.4);
  }

  .start-animation {
    animation: pulse-background 900ms;
    animation-timing-function: ease-in-out;
  }

  @media only screen and (max-width: 600px) {
    #micButton {
      height: 170px;
      order: 1;
      width: 170px;
    }
  }

  #lvl {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    transition: width 0.3s ease, height 0.3s ease, background 0.3s ease;
    background: #04152D;
    border: 1px solid white;
    transition-delay: 300ms;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &:focus {
      outline: 2px solid #E40046;
      outline-offset: -2px;
    }
  }

  @media only screen and (max-width: 600px) {
    #lvl {
      width: 170px;
      height: 170px;
    }
  }

  button {
    all: unset;
    position: relative;
    z-index: 1;
    color: black;
  }

  select {
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-family: 'AktivGrotesk', sans-serif;
    font-stretch: expanded;
    background-color: #E40046;
    border: thin solid #E40046;
    border-radius: 4px;
    display: inline-block;
    color: white;
    padding: 0.5em 3.5em 0.5em 1em;
    background-image:
      linear-gradient(45deg, transparent 50%, white 50%),
      linear-gradient(135deg, white 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position:
      calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px),
      calc(100% - 2.5em) 0.5em;
    background-size:
      5px 5px,
      5px 5px,
      1px 1.5em;
    background-repeat: no-repeat;
  }

  select:focus {
    background-image:
      linear-gradient(45deg, white 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, white 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position:
      calc(100% - 15px) 1em,
      calc(100% - 20px) 1em,
      calc(100% - 2.5em) 0.5em;
    background-size:
      5px 5px,
      5px 5px,
      1px 1.5em;
    background-repeat: no-repeat;
    border-color: white;
    outline: 0;
  }

  .styled-select select {
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    -webkit-padding-right: 20px;
  }

  #analyseResult {
    position: absolute;
    top: calc(100% + 20px);
    text-decoration: underline;
    text-underline-offset: 2px;
    opacity: 0;
    cursor: pointer;
  }

  #analyseResult:hover {
    opacity: 1;
  }

  @keyframes pulse-background {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
    }

    70% {
      box-shadow: 0 0 0 50px rgba(255, 0, 0, 0);
    }
    
    100% {
      box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
    }
  }

</style>
`;

export default SttTemplate;
