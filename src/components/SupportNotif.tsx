import Image from "next/image";

const SupportNotif = () => {
  const Notifications = [
    {
      picture: "",
      name: "الهه علی نیا",
      describe: "سلام چرا وام من واریز نمیشه",
      time: "07:00",
    },
  ];

  return (
    <div className="w-[442px] h-[479px] rounded-md shadow bg-white">
      <h1 className="py-4 pr-8">پیام های پشتیبانی</h1>
      {Notifications.map((notification, index) => (
        <div key={index} className="flex items-center justify-around pt-4">
          <Image
            className="rounded-full"
            width={23}
            height={23}
            src={notification.picture}
            alt="Avatar"
          />
          <div>
            <h2>{notification.name}</h2>
            <p className="text-xs text-[#A0AEC0]">{notification.describe}</p>
          </div>
          <p>{notification.time}</p>
        </div>
      ))}
    </div>
  );
};

export default SupportNotif;
