import Image from "next/image";
import Link from "next/link";
import Edit from "../../public/images/edit.svg";

const MainCard = () => {
  return (
    <div className="bg-white w-[443px] h-[328px] text-white rounded-md shadow text-left pt-8">
      {/* Card Section */}
      <div
        className="w-[320px] h-[168px] rounded-xl m-auto pl-6 flex flex-col justify-evenly shadow-xl"
        style={{ backgroundImage: "url('/images/cardBackground.svg')" }}
      >
        <p>امیرمحمد قنبری</p>
        <p dir="ltr">7812 2139 0823 XXXX</p>

        <div className="text-sm">
          <p>انقضا</p>
          <div dir="ltr" className="flex">
            <p>05</p> <p>/</p> <p>24</p>
          </div>
        </div>
      </div>
      {/* Button Section */}
      <Link href="#">
        <div className="text-[#394860] flex items-center px-8 mt-12 py-2 w-fit m-auto gap-5 rounded-md border-2 border-[#4FD1C5]">
          <Image src={Edit} alt="edit" />
          <p>آیا شماره کارت صندوق را تغییر میدهید؟</p>
        </div>
      </Link>
    </div>
  );
};

export default MainCard;
