const page = () => {
  return (
    <div className="pr-8 pt-4">
      <h1 className="text-xl pb-5">خروج از حساب کاربری</h1>
      <div className="w-[1017px] h-[789px] bg-white rounded-md shadow flex justify-center pt-10 ">
        <div>
          <h1 className="text-[#B3261E] text-xl pb-3"> انصراف از صندوق</h1>
          <div className="flex flex-col gap-5 border-2 border-[#AE0000] w-[918px] h-[306px] rounded-md text-[#B3261E] px-5 py-6 text-lg">
            <li>حذف کامل حساب کاربری</li>
            <li>حذف تمامی وام های فعال</li>
            <li>حذف تمامی اطلاعات و داده های ذخیره شده در صندوق</li>
            <li>تسویه حساب و پاکسازی حساب ها</li>
            <li>
              در صورت داشتن وام فعال مبلغ باقی مانده اقساط از موجودی حساب شما در
              صندوق کسر و مابقی به شما بازگردانده میشود.
            </li>
          </div>
          <button className="w-[213px] h-[38px] text-white bg-[#B3261E] rounded-md mt-7">
            انصراف میدهم
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
