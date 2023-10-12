"use client";

import Logo from "../Nav/Logo";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPinterest, FaFacebook, FaInstagram } from "react-icons/fa";

const routes = [
  { path: "/projekty", label: "Projekty" },
  { path: "/publikacje", label: "Publikacje" },
  { path: "/wspolpraca", label: "Współpraca" },
  { path: "/o-mnie", label: "O mnie" },
  { path: "/kontakt", label: "Kontakt" },
];

const iconClassname = "h-6 w-6";

const socialMediaLinks = [
  {
    path: "https://www.instagram.com/palmowska__studio",
    label: <FaInstagram className={iconClassname} />,
  },
  {
    path: "https://www.pinterest.com/palmowskastudio/",
    label: <FaPinterest className={iconClassname} />,
  },
  {
    path: "https://www.facebook.com/profile.php?id=100087842247172",
    label: <FaFacebook className={iconClassname} />,
  },
];

export default function Footer() {
  return (
    <footer className="flex w-full flex-col gap-6 bg-lightblue px-page-mobile py-10 md:pb-12 [@media(min-width:900px)]:px-page-desktop">
      <div className="flex flex-col gap-10">
        <Link className="w-max" href="/">
          <Logo className="h-20 w-12" />
        </Link>
      </div>
      <div className="grid auto-rows-auto grid-cols-1 gap-4 md:mt-0 md:grid-cols-[1.5fr,1fr] md:gap-y-4">
        <h5 className="font-sans text-lg font-semibold uppercase">
          Palmowska Studio
        </h5>
        <div className="my-4 flex flex-col gap-3 font-sans text-[20px] md:row-start-1 md:row-end-3 md:my-0">
          {routes.map((link) => (
            <Link key={link.path} href={link.path} className="w-max">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="my-3 flex flex-col justify-center font-sans text-base font-medium md:col-start-1 md:row-start-2 md:my-0 md:justify-normal">
          <a
            className="font-sans text-base"
            href="mailto:hello@kamilapalmowska.com"
          >
            hello@kamilapalmowska.com
          </a>
          <a className="font-sans text-base" href="tel:+48 600 897 821">
            +48 600 897 821
          </a>
        </div>
        <div className="mb-3 flex w-full flex-row items-end gap-3 font-sans text-md font-medium lg:mb-0">
          {socialMediaLinks.map((link) => (
            <Link key={link.path} href={link.path} className="w-max">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.1, ease: [0.22, 0.16, 0.89, 1.01] },
                }}
              >
                {link.label}
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="flex items-end font-sans text-sm md:row-start-4 md:mt-6">
          © 2023 - All rights reserved.
        </div>
      </div>
    </footer>
  );
}
