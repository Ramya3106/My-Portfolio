import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="divyaramya1422@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 9150695141" Image={FiPhone} />
      <SingleInfo text="Tamilnadu, India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
