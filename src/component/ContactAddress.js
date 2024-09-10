const ContactAddress = (props) => {
  return (
    <div className="flex gap-10">
      <div className="w-[294px] h-[133px] border-2 rounded-md border-gray-100 flex flex-col gap-3 p-2">
        <p className="font-semibold text-xl text-[#000000]"> Address</p>
        <p className="font-normal text-lg text-[#696A75]">
          {" "}
          1328 Oak Ridge Drive, Saint Louis, Missouri{" "}
        </p>
      </div>
      <div className="w-[294px] h-[133px] border-2 rounded-md border-gray-100 flex flex-col gap-3 p-2">
        <p className="font-semibold text-xl text-[#000000]"> Contact</p>
        <p className="font-normal text-lg text-[#696A75]">
          {" "}
          313-332-8662 info@email.com{" "}
        </p>
      </div>
    </div>
  );
};
export default ContactAddress;
