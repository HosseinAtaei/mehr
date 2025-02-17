import Image from "next/image";
import pic from "../../public/images/needLoan.svg";
import Link from "next/link";

const NeedLoan = () => {
  return (
    <div className="w-[386px] h-[350px] bg-white rounded-md shadow pr-5 pt-6">
      <h1>اگر نیاز به وام داری همین حالا درخواست بده</h1>
      <div className="flex flex-col justify-center items-center gap-5 pt-5">
        <Image src={pic} alt="need loan?" />
        <Link href="#">
          <div className="bg-[#4FD1C5] text-white w-[320px] h-[42px] rounded-md flex justify-center items-center">
            درخواست وام
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NeedLoan;
