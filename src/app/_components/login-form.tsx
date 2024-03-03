"use client";
import { useState } from "react";
import Button, { PrimaryButton } from "./button";
import Input from "./input";
export default function LoginForm() {
  const [name, setname] = useState("");
  const hello = () => {
    console.log("Hello World !");
  };
  return (
    <form
      // onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-14  pb-16"
    >
      <div className="flex flex-col gap-4">
        <Input
          placeholder="نام کاربری را یا شماره موبایل خود را وارد کنید"
          type="text"
          // register={register}
          title="username"
          // control={control}
          label="نام کاربری  "
          width="w-80"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Input
          placeholder=" مثال 123456789   "
          type="password"
          // register={register}
          title="password"
          // control={control}
          label=" رمز عبور "
          width="w-80"
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[10px]">
          رمز خود را فراموش کرده اید؟
          {/* <Link to={"/forget"}> */}
          <span className="text-blue-600 border-b-2 border-blue-200  mr-1">
            اینجا کلیک کنید
          </span>
          {/* </Link> */}
        </p>
        <Button
          title=" ورود "
          active={true}
          // icon={faArrowLeft}
          style={PrimaryButton}
          // className="bg-primary text-white hover:bg-[#161F31] focus:bg-primary-opacity-90 focus:shadow-primary-focus whitespace-nowrap rounded-md px-3 py-1 text-sm flex items-center gap-2"
          onClick={() => {}}
        />
      </div>
    </form>
  );
}
