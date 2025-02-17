import Image from "next/image";
import Link from "next/link";
import Support from "../../public/images/contactSupport.svg";

const NeedHelp = () => {
  return (
    <div className="w-[617px] h-[350px] bg-white rounded-md shadow pr-5 pt-6">
      <h1>نیاز به پشتیبانی دارید؟</h1>
      <p className="text-[#2D3748] pt-7">
        اگر مشکلی برایتان بوجود آمده همین حالا به مدیر صندوق پیام دهید یا
        میتوانید بصورت مستقیم تماس بگیرید .
      </p>
      <div className="flex justify-around items-center pt-7">
        <Link href="#">
          <div className="border-2 border-[#394860a4] px-16 py-2 rounded-md">
            پیام به مدیر صندوق
          </div>
        </Link>
        <Image src={Support} alt="Contact to Support" />
      </div>
    </div>
  );
};

export default NeedHelp;
