"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/panel", icon: "/images/dashboard.svg", label: "داشبورد" },
  {
    href: "/admin/users",
    icon: "/images/ghestha.svg",
    label: "مشاهده کاربران",
  },
  {
    href: "/admin/vam",
    icon: "/images/loan-pay.svg",
    label: "درخواست های وام",
  },
  {
    href: "/panel/create-member",
    icon: "/images/loan-req.svg",
    label: "ثبت عضو جدید",
  },
  {
    href: "/panel/money-managment",
    icon: "/images/moneyManagment.svg",
    label: "مدیریت مالی",
  },
  // { href: "/admin/setting", icon: "/images/setting.svg", label: "تنظیمات" },
  {
    href: "/panel/support",
    icon: "/images/support.svg",
    label: "پشتیبانی",
  },
  {
    href: "/panel/messages",
    icon: "/images/notifications.svg",
    label: "پیام ها",
  },
  {
    href: "/panel/admin-profile",
    icon: "/images/profile.svg",
    label: "پروفایل مدیریت",
  },
  // { href: "/admin/enserafha", icon: "/images/enseraf.svg", label: "انصراف ها" },
];

const AdminPanel = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="py-10 flex text-[#2B2B2B] gap-6 items-center">
        <Image src="/images/logo.svg" alt="Logo" height={24} width={24} />
        <h1 className="font-bold text-base lg:text-lg">صندوق قرض الحسنه مهر</h1>
      </div>
      <Image src="/images/line.svg" alt="Line" width={230} height={1} />

      {menuItems.map((item, index) => (
        <Link href={item.href} key={index}>
          <div
            className={`flex items-center h-10 w-[170px] gap-3 my-5 rounded-md 
              ease-out duration-300 hover:scale-105 hover:bg-white hover:text-[#2B2B2B] hover:shadow-md
              ${pathname === item.href && "bg-white text-[#2B2B2B] shadow-lg"}`}
          >
            <Image src={item.icon} alt={item.label} width={35} height={35} />
            <span>{item.label}</span>
          </div>
        </Link>
      ))}

      <button
        className="flex items-center h-10 w-[170px] gap-3 my-5 rounded-md text-[#FB1D1D]
            ease-out duration-300 hover:scale-105 hover:bg-red-100 hover:text-[#2B2B2B] hover:shadow-md"
      >
        <Image src="/images/exit.svg" alt="خروج" width={24} height={24} />
        <span>خروج</span>
      </button>
    </div>
  );
};

export default AdminPanel;
