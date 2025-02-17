import Image from "next/image";
import Link from "next/link";
// assets
import logo from "../../public/images/logo.svg";
import image1 from "../../public/images/landing.svg";

export default function Landing() {
  return (
    <div
      className="w-full h-[438.5px] bg-cover"
      style={{ backgroundImage: "url('/images/main-header.svg')" }}
    >
      <div className="pt-8 pr-11 flex gap-6 items-center">
        <Image src={logo} alt="Logo" className="w-6 h-6" />
        <h1 className="font-bold text-base lg:text-lg">صندوق قرض الحسنه مهر</h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-11">
        <div className="w-full lg:w-[675px] text-[#394860]">
          <h2 className="text-xl lg:text-2xl pt-8 lg:pt-16">
            صندوق قرض الحسنه مهر ، با مهر در کنار هم
          </h2>
          <p className="text-base lg:text-lg pt-8 lg:pt-16 pb-16 leading-6 lg:leading-10">
            ما در کنارهم جمع شده‌ایم تا در صندوق قرض الحسنه شریک باشیم ، هر یک
            از کاربران صندوق حق اشتراک ثابت ماهانه ی خود را دارد و در صورتی که
            وام بخواهند میتوانند مبلغ پیشنهادی خود را اعلام کنند و وام دریافت
            کنند .
          </p>
          <Link
            href="/login"
            className="bg-[#4FD1C5] w-full lg:w-[350px] h-[56px] text-white flex items-center justify-center rounded-md transition duration-150 active:scale-95"
          >
            ورود کاربر
          </Link>
        </div>
        <Image
          src={image1}
          alt="صندوق قرض‌الحسنه"
          className="pt-8 lg:pt-12 w-full lg:w-auto"
        />
      </div>

      <div className="text-[#394860] px-6 lg:px-12 pt-8 lg:pt-20 leading-6 lg:leading-9">
        <p>
          برای عضویت در صندوق مهر به عنوان
          <span className="text-[#4FD1C5]"> کاربر</span> ، شما ابتدا باید با
          مدیر صندوق هماهنگ و اعلام عضویت کنید ، سپس نام کاربری و رمز شما در
          سیستم ثبت و آماده ورود به صندوق میشوید ، اگر نام کاربری و رمز شما
          تایید شده است ، خوش آمدید !
        </p>
        <p className="pt-4 lg:pt-10">
          <span className="text-[#4FD1C5]">*</span>ورود به سایت به منزله پذیرش
          تمامی قوانین سایت است .
        </p>
      </div>
    </div>
  );
}
