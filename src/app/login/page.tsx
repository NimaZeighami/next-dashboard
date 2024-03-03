import LoginForm from "../_components/login-form";
import backgroundImage from "../../../public/gulagula_1.jpg";

const Login: React.FunctionComponent = () => {
  return (
    <div
      style={{
        direction: "rtl",
        background:  `url(${backgroundImage.src})`,
        backgroundSize: "100%",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "center",
      }}
      className="flex flex-row-reverse gap-28 justify-center bg-red200 items-center h-screen"
    >
      <div className="h-[675px]  flex flex-col justify-between">
        <div className="flex gap-3">
          {/* <img
          alt="logo"
          className="w-8 h-8 flex justify-center items-center"
          src={require('../assets/images/small-logo.png')}
        /> */}
          <p className="text-[#D6DBD5] text-[20px]">پنل تامین کنندگان</p>
        </div>
      </div>
      {/* OK */}
      <div className="w-[520px]  py-10 h-[675px] bg-white  rounded-2xl flex flex-col justify-around items-center">
        <h1 className="text-lg font-bold ">ورود به داشبورد</h1>
        {/* <form
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
              {/* <Link to={"/forget"}> */ /*}
                <span className="text-blue-600 border-b-2 border-blue-200  mr-1">
                اینجا کلیک کنید
                </span>
              {/* </Link> */ /*}
            </p>
            <Button
              title=" ورود "
              active={true}
              // icon={faArrowLeft}
              // style={PrimaryButton}
              onClick={() => {}}
            />
          </div>
        </form> */}
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
