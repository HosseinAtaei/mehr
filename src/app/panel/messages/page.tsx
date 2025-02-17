const page = () => {
  const Messages = [
    {
      title: "قسط وام",
      date: "01/06/1402",
      content:
        "با سلام جناب آقای مسعود رمضانی زمان لطفا قسط تاریخ 1402/05/01 خود را پرداخت کنید",
    },
    {
      title: "یادآوری حق عضویت صندوق",
      date: "04/03/1402",
      content: "با سلام لطفا حق عضویت ماهانه صندوق را پرداخت کنید",
    },
  ];

  return (
    <div className="pr-8 pt-4">
      <h1 className="text-xl pb-5">پیام‌های ارسال شده</h1>
      <div className="pt-10 rounded-md space-y-4">
        {Messages.map((message, index) => (
          <div
            key={index}
            className={`p-8 border-r-4 rounded-md text-[#5B5B5B] ${
              message.title === "قسط وام"
                ? "bg-[#4FD1C544] border-[#4FD1C5]"
                : "bg-[#E5E7EB] border-[#394860]"
            }`}
          >
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">{message.title}</h2>
              <p className="text-sm text-gray-500">{message.date}</p>
            </div>
            <p className="pt-9 text-md">{message.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
