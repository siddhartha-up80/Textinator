import React from "react";

export default function TextForm() {
  return (
    <div className="container flex justify-center items-center mx-auto">
      <div className=" my-8 max-w-3xl h-9">
        <div className="mb-3 xl:w-96 w-full">
          <label
            for="exampleFormControlTextarea1"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Example textarea
          </label>
          <textarea
            className="
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleFormControlTextarea1"
            rows="8"
            
            placeholder="Your message"
          ></textarea>
        </div>

        <div className="">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-2 px-2">
            Button
          </button>

          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-2 px-2">
            Button
          </button>

          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-2 px-2">
            Button
          </button>
        </div>
      </div>
    </div>
  );
}
