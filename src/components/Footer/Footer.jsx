import React from "react";
import styles from "./Footer.module.scss";
import linkedIn from "../../assets/images/linkedin.svg";
import github from "../../assets/images/github.svg";
import email from "../../assets/images/mail.svg";
import resume from "../../assets/images/file.svg";
import resumeDoc from "../../assets/files/McBride_Resume.pdf";

const contactInformation = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/megan-d-mcbride/",
    icon: linkedIn,
  },
  {
    name: "GitHub",
    link: "https://github.com/Meggs625",
    icon: github,
  },
  {
    name: "Email",
    link: "mailto:mcbride.megd@gmail.com",
    icon: email,
  },
  {
    name: "Resume",
    link: resumeDoc,
    icon: resume,
  },
];

export default function Footer() {
  return (
    <footer className={styles.contact_footer_container}>
      <div className={styles.contact_container}>
        {contactInformation.map(({ name, link, icon }) => (
          <a
            href={link}
            className={styles.contact_links}
            target="blank"
            key={name}
            title={name}
          >
            <img src={icon} />
          </a>
        ))}
      </div>
    </footer>
  );
}
