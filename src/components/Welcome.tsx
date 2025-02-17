import Image from "next/image";
import Avatar from "../../public/images/avatar.png";

const Welcome = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-white h-16 rounded-md w-[1030px] px-6 shadow">
        <p>
          سلام ، وقت شما بخیر به بخش داشبورد خوش آمدید ، گزارشات مورد نیاز شما
          در اختیار شماست !
        </p>
        <div className="flex items-center gap-4">
          <Image src={Avatar} alt="Avatar" />
          <p>امیر محمد قنبری</p>
        </div>
      </div>
    </>
  );
};

export default Welcome;
