import { useEffect, useState } from "react";
import "./App.css";
import Checkbox from "./components/checkbox";
import Copy from "./assets/images/icon-copy.svg";
import Empty from "./components/empty";
import TooWeak from "./components/tooweak";
import Weak from "./components/weak";
import Medium from "./components/medium";
import Strong from "./components/strong";

function App() {
  const [value, setValue] = useState(0);
  const [password, setPassword] = useState("P4$5W0rD!");
  const [isCopied, setIsCopied] = useState(false);
  const [isUppercaseChecked, setIsUppercaseChecked] = useState(false);
  const [isLowercaseChecked, setIsLowercaseChecked] = useState(false);
  const [isNumbersChecked, setIsNumbersChecked] = useState(false);
  const [isSymbolsChecked, setIsSymbolsChecked] = useState(false);
  const [isColorWhite, setColorWhite] = useState(false);

  useEffect;

  const handleCheckboxChange = (checkboxType) => {
    switch (checkboxType) {
      case "uppercase":
        setIsUppercaseChecked(!isUppercaseChecked);
        break;
      case "lowercase":
        setIsLowercaseChecked(!isLowercaseChecked);
        break;
      case "numbers":
        setIsNumbersChecked(!isNumbersChecked);
        break;
      case "symbols":
        setIsSymbolsChecked(!isSymbolsChecked);
        break;
    }
  };

  const handleRangeChange = (event) => {
    setValue(event.target.value);
  };

  const generatePassword = () => {
    setColorWhite(true);

    const lowerCase = "abcdefghijklmnopqrstuvwxyz";

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const nums = "0123456789";

    const symbols = "!@#$%^&*()-_=+";

    let sentence = "";

    if (isUppercaseChecked) sentence += upperCase;
    if (isLowercaseChecked) sentence += lowerCase;
    if (isNumbersChecked) sentence += nums;
    if (isSymbolsChecked) sentence += symbols;

    if (sentence == "") {
      alert(
        "Please choose at least one condition before generating a password."
      );
    }

    let generatedPassword = "";

    for (let i = 0; i < value; i++) {
      const randomIndex = Math.floor(Math.random() * sentence.length);
      generatedPassword += sentence.charAt(randomIndex);
      console.log(sentence);
    }

    setPassword(generatedPassword);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1200);
  };

  const ReturnComponents = () => {
    if (isColorWhite == false) {
      return <Empty />;
    }
    if (
      password.length > 8 &&
      password.length <= 14 &&
      (isUppercaseChecked ||
        isLowercaseChecked ||
        isNumbersChecked ||
        isSymbolsChecked)
    ) {
      return <Strong />;
    }
    if (
      password.length > 4 &&
      password.length <= 8 &&
      isUppercaseChecked &&
      isLowercaseChecked &&
      isNumbersChecked &&
      isSymbolsChecked
    ) {
      return <Strong />;
    }
    if (
      password.length > 4 &&
      password.length <= 8 &&
      (isUppercaseChecked ||
        isLowercaseChecked ||
        isNumbersChecked ||
        isSymbolsChecked)
    ) {
      return <Medium />;
    }
    if (password.length > 14) {
      return <Strong />;
    }
    if (password.length > 8) {
      return <Medium />;
    }
    if (password.length > 4) {
      return <Weak />;
    }
    if (password.length <= 4 && password.length > 0) {
      return <TooWeak />;
    }
    if (password.length == 0 ) {
      return <Empty />;
    }
  };

  return (
    <>
      <main>
        <h1>Password Generator</h1>
        <div className="generator">
          <p className={`generatetxt ${isColorWhite ? "white" : null}`}>
            {password}
          </p>
          <div className="copied">
            <p className={`copiedp ${isCopied ? "copiedtxt" : null}`}>copied</p>
            <svg
              onClick={handleCopy}
              className="copy"
              width="21"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
                fill="#A4FFAF"
              />
            </svg>
          </div>
        </div>
        <section>
          <div className="charlength">
            <p className="same">Character Length</p>
            <p className="number"> {value} </p>
          </div>
          <div className="inputdiv">
            <input
              onChange={handleRangeChange}
              className="range"
              type="range"
              defaultValue="0"
              min="0"
              max="20"
            />
            <progress min="0" max="20" value={value}></progress>
          </div>
          <div className="checkboxdiv">
            <Checkbox
              isChecked={isUppercaseChecked}
              handleCheckboxChange={() => handleCheckboxChange("uppercase")}
            >
              Include Uppercase Letters
            </Checkbox>
            <Checkbox
              isChecked={isLowercaseChecked}
              handleCheckboxChange={() => handleCheckboxChange("lowercase")}
            >
              Include Lowercase Letters
            </Checkbox>
            <Checkbox
              isChecked={isNumbersChecked}
              handleCheckboxChange={() => handleCheckboxChange("numbers")}
            >
              Include Numbers
            </Checkbox>
            <Checkbox
              isChecked={isSymbolsChecked}
              handleCheckboxChange={() => handleCheckboxChange("symbols")}
            >
              Include Symbols
            </Checkbox>
          </div>
          <div className="strength">
            <p className="strengthp">strength</p>
            {ReturnComponents()}
          </div>

          <button className="generatebutton" onClick={generatePassword}>
            <h2>Generate</h2>
            <svg
              className="arrow"
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="arrow"
                fill="#24232C"
                d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
              />
            </svg>
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
