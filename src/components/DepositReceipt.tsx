import Image from "next/image";
import Vector from "../../public/images/recivemoney.svg";
import Link from "next/link";

const DepositReceipt = () => {
  return (
    <div className="flex items-center justify-between px-8 bg-white w-[558px] rounded-md shadow -mt-36 py-3">
      <div>
        <h1 className="mb-8"> 20 فیش واریزی جدید</h1>
        <Link href="#">
          <div className="bg-[#4FD1C5] w-[286px] h-[42px] text-white flex items-center justify-center rounded-md">
            دیدن همه
          </div>
        </Link>
      </div>
      <div>
        <Image src={Vector} alt="فیش واریزی جدید" />
      </div>
    </div>
  );
};

export default DepositReceipt;
