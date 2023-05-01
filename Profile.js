import React from "react";


function Profile() {
 
  return (
<div class="flex items-center justify-center p-12 bg-white">
  <div class="mx-auto w-full max-w-[550px] bg-white shadow-2xl rounded-xl">
    <form
      class="py-6 px-9"
    >
      <div class="mb-5">
        <label
          class="mb-3 block text-base font-medium text-[#07074D]"
        >Name
        </label>
        <input
          type="text"
          placeholder="enter your name"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
<div class="grid grid-cols-2 gap-4 mb-5">
  <div>
     <label
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Height
        </label>
        <input
          type="number"
          placeholder="in cms"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />

  </div>
  <div
  > <label
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Weight
        </label>
        <input
          type="number"
          placeholder="in kgs"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
  </div>
</div>

<label
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Choose your role
        </label>
<select class="bg-gray-50 border  text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#6A64F1]">
  <option >Athelete</option>
  <option >Trainer</option>
  <option >General User</option>
</select>

      <div>

        <div class="grid grid-cols-2 gap-4 mb-5 mt-3">
  <div>
     <label
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Age
        </label>
        <input
          type="number"
          placeholder="enter age"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />

  </div>
  <div
  > 
  <label
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Date of Birth
        </label>
  <div class="relative max-w-sm">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
</div>
  </div>
</div>
        <button
          class=" hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
<a href="http://localhost:3000/main">
          Save 
        </a>
        </button>
      </div>
    </form>
  </div>
</div>
  );
};

export default Profile;