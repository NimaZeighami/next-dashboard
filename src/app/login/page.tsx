import Image from "next/image";
import LoginForm from "../_components/LoginForm";

export default function Login() {
  return (
    <div className="flex flex-col items-center md:flex-row md:h-screen  bg-slate-300">
      <div className="flex flex-col items-center justify-center w-full md:w-1/4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-2xl font-bold">خوش آمدید !</h1>
            <p className="mt-2 text-gray-600">به اکانت خود وارد شوید .</p>
          </div>
          <LoginForm />
        </div>
      </div>
      <div className="flex items-center justify-center w-full md:w-1/2">
        <Image src="./vercel.svg" alt="Login Image" width={800} height={600} />
      </div>
    </div>
  );
}
