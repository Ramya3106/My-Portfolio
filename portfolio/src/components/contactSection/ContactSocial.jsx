import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://github.com/Ramya3106"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.linkedin.com/in/ramya-v-20971b2a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://x.com/VRamya311407?t=7a8I0ql7UUdpnFIfpcItig&s=08"
        Icon={FaTwitter}
      />
    </div>
  );
};

export default ContactSocial;
