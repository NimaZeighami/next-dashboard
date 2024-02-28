import Link from "next/link";

const routes = [
  { title: "کاربران", href: "/user" },
  { title: "مشتریان", href: "/customer" },
  { title: "سفارشات", href: "/order" },
];

export default function Sidebar() {
  return (
    <div className="w-[10%] h-[100%] bg-slate-300 absolute  flex flex-col">
      {routes.map((element) => {
        return (
          <Link
            href={element.href}
            className="bg-slate-200 rounded-xl m-2 p-4 "
            key={element.title}
          >
            {element.title}
          </Link>
        );
      })}
    </div>
  );
}
