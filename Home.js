import React, { useState, useEffect } from "react";
import axios from 'axios'

function Home() {
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
        <><section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div class="flex flex-col p-2 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-yellow-500 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 class="mb-2 text-2xl font-bold">EMG Value</h3>
            <div class="flex justify-center items-baseline my-4">
              <span class="mr-2 text-3xl font-extrabold">
              {emgValue}
              </span>
              <span class="text-gray-500 dark:text-gray-400">mV</span>
            </div>
          </div>
          <div class="flex flex-col p-2 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-yellow-500 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 class="mb-2 text-2xl font-bold">Magnesium</h3>
            <div class="flex justify-center items-baseline my-4">
              <span class="mr-2 text-3xl font-extrabold">
                {mgValue}
                </span>
              <span class="text-gray-500 dark:text-gray-400">mmol/L</span>
            </div>
          </div>
          <div class="flex flex-col p-2 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-yellow-500 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 class="mb-2 text-2xl font-bold">SpO2</h3>
            <div class="flex justify-center items-baseline my-4">
              <span class="mr-2 text-3xl font-extrabold">
              {spValue}
              </span>
              <span class="text-gray-500 dark:text-gray-400">%</span>
            </div>
          </div>
        </div>
      </div>
    </section></>
  );
};

export default Home;