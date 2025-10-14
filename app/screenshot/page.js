"use client"

import { File } from "lucide-react";

const screenshot = () => {

  const handleSubmit = () => {
    return  console.log("Buton is clicked.")
  }
  return (
    <div className="text-4xl text-center text-white mt-8 min-h-screen">
      <h1>Screenshot</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4 items-center justify-center">
          <div className="flex space-x-2 justify-center items-center mt-4">
            <File className="h-10 w-10"/>
            <input 
            className="border-2 rounded-xl max-w-150 p-2 text-center hover:border-blue-500 cursor-pointer"
            type="file" name="screenshot" id="pic" required placeholder="Please insert screenshot of payment"/>
          </div>
          <button type="submit" className="cursor-pointer font-bold bg-white text-black rounded-2xl hover:text-blue-500 hover:bg-blue-50 p-2"> Submit </button>
        </div>
      </form>
    </div>
  );
};

export default screenshot;