import Image from "next/image";
import Pic from "../../public/images/noPayment.svg";

const NoPayment = () => {
  return (
    <div className="pr-8 pt-4">
      <h1 className="pb-5 text-xl">نمایش اقساط</h1>
      <div className="bg-white rounded-md shadow h-[786px] w-[1056px] pt-[83px]">
        <div className="text-center">
          <h2>در حال حاضر شما وام فعالی برای پرداخت اقساط ندارید</h2>
          <p className="text-[#9F9F9F] pt-6 text-sm">
            بعد از تایید و واریز وام از سوی مدیر صندوق اقساط شما در این بخش
            نمایش داده میشود
          </p>
        </div>
        <div className="flex justify-center pt-[75px]">
          <Image src={Pic} alt="No Payment" />
        </div>
      </div>
    </div>
  );
};

export default NoPayment;
