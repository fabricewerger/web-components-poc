const SttTemplate = document.createElement("template");

SttTemplate.innerHTML = `
<div>
  <div class="container">
    <button id="start">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/>
      </svg>
      <div id="lvl"></div>
    </button>

    <div class="row">
      <div class="two-thirds">
        <p id="result"></p>
      </div>
      <div>
        <div class="mic"></div>
      </div>
    </div>
  </div>

  <div class='buttons'>
    <button id="stop">Stop recording</button>
    <select name="language" id="language">
      <option value="nl-NL">Nederlands</option>
      <option value="en-GB">Proper British</option>
    </select>
  </div>
</div>

<style>
  .buttons {
    display: flex;
    gap: 30px;
    position: absolute;
    left: 50%;
    top: 90%;
    transform: translate(-50%, -50%);
  }

  .container {
    width: 100%;
    height: 100vh;
    background: #04152D;
    color: white;
  }

  svg {
    fill: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 50px;
    width: 50px;
  }

  .row {
    display: flex;
    justify-content: center;
  }

  .two-thirds {
    width: 30%;
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
  }

  #result {
    font-family: 'Helvetica', 'Arial', sans-serif;
    font-size: 30px;
  }

  #start {
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
  }

  #stop {
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-family: 'Helvetica', 'Arial', sans-serif;
    background-color: #E40046;
    border: thin solid #E40046;
    border-radius: 4px;
    display: inline-block;
    color: white;
    line-height: 1.5em;
    font-size: 13px;
    padding: 7px 12px;
  }

  #lvl {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    transition: width 0.3s ease, height 0.3s ease, height 0.3s ease, background 0.3s ease;
    background: #04152D;
    border: 1px solid white;
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
    font-family: 'Helvetica', 'Arial', sans-serif;
    background-color: #E40046;
    border: thin solid #E40046;
    border-radius: 4px;
    display: inline-block;
    color: white;
    line-height: 1.5em;
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
</style>
`;

export default SttTemplate;
