import React, { useState, useEffect } from "react";
import axios from 'axios'
import ApexChart from './ApexChart.js'

function Alert() {
 //EMG
 const [emgValue, setEmgValue] = useState()
 setTimeout(() => {

   axios.get("http://192.168.51.125/").then((data) => {
         setEmgValue(data.data)
       })
 }, 500)
//SpO2
 const [spValue, setSpValue] = useState()
 setTimeout(() => {

   axios.get("http://192.168.51.25/").then((data) => {
         setSpValue(data.data)
       })
 }, 500)
 //Magnesium
 const [mgValue, setMgValue] = useState()
 setTimeout(() => {

   axios.get("http://192.168.51.3/").then((data) => {
         setMgValue(data.data);
       })
 }, 500)

  return (

<div class="py-4 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto bg-indigo-400">
 
 <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
   <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
     <div class="flex flex-col justify-start items-start  bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full border-solid border-2 border-sky-500">
      <ApexChart/>
     </div>





     
     <div class="rounded-lg flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
       <div class="rounded-lg flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6 rounded-lg">
         <h3 class="text-xl text-red-500 font-bold leading-5">Alert Box</h3>
       <p class="text-sm font-bold leading-5">Sends alerts on the occurrence of the cramp</p>
       </div>



       
       <div class="rounded-lg flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
         <h3 class="text-xl dark:text-white font-bold leading-5 text-gray-800">No past history available!</h3>
         
        
       </div>
     </div>
   </div>











   <div class="rounded-lg bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
     <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Detection Values</h3>
     <div class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
      <div class="py-4 font-bold">
  EMG : {emgValue}  μV
  {/* 650 */}
      </div>
      <div class="py-4 font-bold">
  Sodium : 138mmol/L
      </div>
      <div class="py-4 font-bold">
  Calcium : 2.4mmol/L
      </div>
      <div class="py-4 font-bold">
  Potassium : 4.2mmol/L
      </div>
      <div class="py-4 font-bold">
  Oxygen : {spValue} %
  {/* 95 */}
      </div>
      <div class="py-4 font-bold">
  Glucose : 5.9mmol/L
      </div>
      <div class="py-4 font-bold">
  Magnessium : {mgValue} mmol/L
  1.01
      </div>
     </div>
   </div>
 </div>
</div>
  );
};

export default Alert;