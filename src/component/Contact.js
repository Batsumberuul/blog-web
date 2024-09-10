import ContactText from "./ContactText";
import ContactAddress from "./ContactAddress";

import ContactInput from "./ContactInput";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="  flex justify-center py-12">
      <div className=" flex flex-col gap-6 w-[643px]">
        <ContactText />
        <ContactAddress />
        <ContactInput />
      </div>
    </div>
  );
};
export default Contact;
