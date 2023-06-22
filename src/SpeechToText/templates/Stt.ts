const SttTemplate = document.createElement("template");

SttTemplate.innerHTML = `<div>
 <button id="start">Start recording</button>
        <button id="stop">Stop recording</button>
        <select name="language" id="language">
            <option value="nl-NL">Nedelands</option>
            <option value="en-GB">Proper British</option>
        </select>
        <p id="result"></p>
  </div>
 
`;

export default SttTemplate;
