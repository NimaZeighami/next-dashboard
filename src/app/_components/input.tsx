export default function Input(props: any) {
  return (
    <div className="flex flex-col gap-3">
      {/* {label ? ( */}
      <span className=" text-[#464F60] text-xs font-normal">{props.label}</span>
      {/* // ) : null} */}
      <div
        className={`bg-white flex items-center rounded-lg ${props.width}`}
        // style={{
        //   boxShadow: error
        //     ? '0px 0px 0px 1px #FF3E3E, 0px 1px 2px 0px rgba(0, 0, 0, 0.06)'
        //     : focused
        //     ? '0px 0px 0px 1px rgba(134, 143, 160, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 0px 0px 3px rgba(178, 231, 253, 0.50)'
        //     : '0px 0px 0px 1px rgba(134, 143, 160, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)',
        // }}
      >
        {/* {icon ? ( */}
        <div className="mr-3">
          {/* <FontAwesomeIcon
                icon={icon}
                size="sm"
                className="text-black-opacity-40 text-sm"
              /> */}
        </div>
        {/* ) : null} */}

        {/* <Controller
            {...register(title)}
            control={control}
            render={({ field: { ref, ...field } }) => {
              const { value } = field;
  
              return ( */}
        <div className="relative w-full">
          <input
            // {...field}
            // {...register(title)}
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-8 w-full text-primary placeholder-black-opacity-40 leading-tight focus:outline-none focus:shadow-outline text-sm rounded-lg py-3 px-3"
            // onFocus={() => setFocused(true)}
            // onBlur={() => setFocused(false)}
            // id={title}
            // {...props}
          />
          {/* {!value && ( */}
          <label
            // htmlFor={title}
            className="absolute right-3 top-1.5 text-sm text-black-opacity-40 cursor-text"
          >
            {props.placeholder}
          </label>
          {/* )} */}
        </div>
        {/* );
            }}
          /> */}
      </div>
    </div>
  );
}

//    )
// }
