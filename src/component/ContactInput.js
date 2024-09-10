const ContactInput = (props) => {
  const { text } = props;
  return (
    <div className="flex flex-col gap-6 bg-[#F6F6F7] w-[643px] p-6 rounded-md ">
      <h1 className="text-[#000000] font-semibold text-base">
        Leave a message
      </h1>
      <div className="flex flex-col gap-8">
        <div className="flex gap-7">
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered input-xs w-[225px] h-[38px]  "
          />
          <input
            type="text"
            placeholder="Your E-mail"
            className="input input-bordered input-xs w-[225px] h-[38px] "
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className=" input input-bordered input-xs  w-[478px] h-[35px] text-start "
        />
        <input
          type="text"
          placeholder="Write a message"
          className=" input input-bordered input-xs  w-[478px] h-[134px] text-start "
        />
      </div>

      <button className="btn btn-primary border-none bg-[#4B6BFB] w-fit">
        Send message
      </button>
    </div>
  );
};
export default ContactInput;
