import Image from "next/image";

const page = () => {
  const Messages = [
    {
      id: 1,
      name: "جمال رستمی",
      avatar: "",
      content:
        "سلام من هرکاری میکنم نمیتونم رسید پرداختمو بارگداری کنم و خطا میده باید چیکار کنم ؟؟؟",
    },
    {
      id: 2,
      name: "امیر قنبری",
      avatar: "",
      content:
        "سلام من هرکاری میکنم نمیتونم رسید پرداختمو بارگداری کنم و خطا میده باید چیکار کنم ؟؟؟",
    },
  ];
  return (
    <div className="pr-8 pt-4">
      <h1 className="text-xl pb-5">تیکت ها</h1>
      <h1 className="pb-5">پیام های در انتظار پاسخگویی</h1>
      <div className="bg-whites rounded-md shadow">
        <div className="py-5 rounded-md space-y-4 px-7">
          {Messages.map((message, index) => (
            <div
              key={index}
              className={`px-4 py-2 border-r-4 rounded-md text-[#5B5B5B] ${
                message.id % 2 === 0
                  ? "bg-[#4FD1C544] border-[#4FD1C5]"
                  : "bg-[#E5E7EB] border-[#394860]"
              }`}
            >
              <div className="flex items-center gap-2">
                <Image src={message.avatar} alt={message.name} />
                <div className="flex flex-col gap-3">
                  <h2 className="text-lg font-semibold">{message.name}</h2>
                  <p className="text-md">{message.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
