import Link from "next/link";

const WalletCard = () => {
  return (
    <div className="bg-white w-[410px] h-[350px] rounded-md shadow p-5">
      <h1 className="pb-5">شماره کارت صندوق</h1>
      <div
        className="w-[320px] h-[168px] rounded-xl m-auto pl-6 flex flex-col justify-evenly shadow-xl text-left text-white"
        style={{ backgroundImage: "url('/images/cardBackground.svg')" }}
      >
        <p>امیرمحمد قنبری</p>
        <p dir="ltr">7812 2139 0823 3354</p>
      </div>
      <div className="flex justify-center">
        <button className="text-center mt-9 border-2 text-[#394860a4] border-[#394860a4] w-[320px] py-2 rounded-md">
          شماره کارت را کپی کنید
        </button>
      </div>
    </div>
  );
};

export default WalletCard;
