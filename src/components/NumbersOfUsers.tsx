import Image from "next/image";
import Groupe from "../../public/images/Groupe.svg";

const NumbersOfUsers = () => {
  return (
    <div className="bg-white flex flex-col justify-around items-center rounded-md shadow w-[260px] h-[156px]">
      <div className="flex w-full justify-evenly font-bold">
        <h2>تعداد اعضای عضو</h2>
        <Image src={Groupe} alt="تعداد اعضای عضو" />
      </div>
      <div className="flex w-full justify-evenly text-[#A0AEC0] text-sm">
        <p>تعداد : </p>
        <p>60 نفر عضو </p>
      </div>
    </div>
  );
};

export default NumbersOfUsers;
