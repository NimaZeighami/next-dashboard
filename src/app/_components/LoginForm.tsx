"use client";
import { useState } from "react";
export default function LoginForm() {
  const [name, setname] = useState("");
  const hello = () => {
    console.log("Hello World !");
  };
  return (
    <form className="mt-8 space-y-6">
      <div>
        <label htmlFor="email" className="block font-bold text-gray-700">
          آدرس ایمیل :
        </label>
        <input
          id="email"
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block font-bold text-gray-700">
          رمز عبور :
        </label>
        <input
          id="password"
          type="password"
          placeholder="رمز خود را وارد کنید "
          className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
          onClick={hello}
        >
          ورود
        </button>
      </div>
    </form>
  );
}
