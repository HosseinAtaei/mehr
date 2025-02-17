import Image from "next/image";
import Wallet from "../../public/images/loanReqNumbers.svg";

const NumbersOfLoanReq = () => {
  return (
    <div className="bg-white flex flex-col justify-around items-center rounded-md shadow w-[260px] h-[156px]">
      <div className="flex w-full justify-evenly font-bold">
        <h2>درخواست های وام </h2>
        <Image src={Wallet} alt="درخواست های وام " />
      </div>
      <div className="flex w-full justify-evenly text-[#A0AEC0] text-sm">
        <p>تعداد : </p>
        <p>24 نفر در صف </p>
      </div>
    </div>
  );
};

export default NumbersOfLoanReq;
