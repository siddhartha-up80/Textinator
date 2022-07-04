import React, { useState } from "react";

export default function TextForm(props) {
  // convert to uppercase by code with harry cwh
  // const handleUpClick = () => {
  //   let newText = text.toUpperCase();

  //   setText(newText);
  // };

  // clearAll text in the text field
  const clearAll = () => {
    setText("");
  };

  // text to Speech

  const textToSpeech = () => {
    let utternance = new SpeechSynthesisUtterance(text);

    utternance.lang = "en-US";
    speechSynthesis.speak(utternance);
  };

  // Events

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container flex justify-center items-center mx-auto  ">
        <div className=" my-8  h-9 ">
          <div className="mb-3  w-full ">
            <label
              for="exampleFormControlTextarea1"
              className="form-label inline-block mb-2 text-gray-700 "
            >
              <h1 className="text-2xl font-medium my-3 mx-20 ">
                Write Your Text Here!
              </h1>
            </label>
            <textarea
              className="
              border-solid border-4 border-red-500
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-red-700 focus:outline-none
        
      "
              value={text}
              onChange={handleOnChange}
              id="exampleFormControlTextarea1"
              rows="14"
              
              placeholder="Your message"
            ></textarea>
          </div>

          <div className="container flex justify-center items-center mx-auto my-2 ">
            <button
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border--700 rounded mx-2 px-2"
              onClick={textToSpeech}
            >
              Text to Speech
            </button>

            {/*  upper case code by code with harry*/}
            {/* <button
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border--700 rounded mx-2 px-2"
              onClick={handleUpClick}
            >
              Change to Uppercase
            </button> */}

            <button
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border--700 rounded mx-2 px-2"
              onClick={clearAll}
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
