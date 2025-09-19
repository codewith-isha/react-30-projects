import React from "react";
import { useState } from "react";

const App = () => {
  
  const [weight , setWeight] = useState('');
  const [height , setHeight] = useState('');
  const [bmi, setbmi] = useState('');
  const [message ,setMessage] = useState('');

  // logic
let calcBmi = (e) => {
  e.preventDefault();

  if (!weight || !height || weight <= 0 || height <= 0) {
    alert("Please enter valid details");
  } else {
    let weightInKg = Number(weight)
      let heightInMeters = Number(height) * 0.0254
      
    let bmi = (weightInKg / (heightInMeters * heightInMeters));
    setbmi(bmi.toFixed(1));

    if (bmi < 18.5) {
      setMessage("You are Underweight");
    } else if (bmi >= 18.5 && bmi < 25) {
      setMessage("You are Healthy");
    } else if (bmi >= 25 && bmi < 30) {
      setMessage("You are Overweight");
    } else {
      setMessage("You are Obese");
    }
  }
};


  // reload 
let reload = () =>{
  window.location.reload()
}
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
      <div className="w-full max-w-md p-8 bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-yellow-300 drop-shadow-md">BMI Calculator</h2>
        <form onSubmit={calcBmi} className="space-y-5">
          <div  className="flex flex-col">
            <label className="mb-2 font-semibold text-green-300"> Weight (Kg)</label>
            <input
              type="text"
              placeholder="Enter Weight value"
              value={weight}
              onChange={(e)=>setWeight(e.target.value)}
             className="px-4 py-2 rounded-xl border border-gray-300 bg-white/80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-sm"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-pink-300"> Height (inhes)</label>
            <input
              type="text"
              placeholder="Enter height value in inches"
              value={height}
              onChange={(e)=>setHeight(e.target.value)}
               className="px-4 py-2 rounded-xl border border-gray-300 bg-white/80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-sm"
            />
          </div>

          <div className="flex justify-between gap-4">
            <button  className="w-1/2 px-4 py-2 text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-md hover:scale-105 transform transition" type="submit">
              Submit
            </button>
            <button className="w-1/2 px-4 py-2 text-indigo-600 font-semibold border border-indigo-400 bg-white/80 rounded-xl shadow-md hover:bg-indigo-100 hover:scale-105 transform transition" onClick={reload} type="submit">
              Reload
            </button>
          </div>

          <div className="text-center mt-8">
            <h3 className="text-xl font-bold text-white drop-shadow-sm">Your BMI is :{bmi}</h3>
            <p className="text-white/90 italic mt-2">{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
