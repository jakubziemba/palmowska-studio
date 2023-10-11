"use client";

import Logo from "../../../public/palmowska-logo-bw.svg";
import Link from "next/link";
import { FaPinterest, FaFacebook, FaInstagram } from "react-icons/fa";

const routes = [
  { path: "/projekty", label: "Projekty" },
  { path: "/publikacje", label: "Publikacje" },
  { path: "/wspolpraca", label: "Współpraca" },
  { path: "/o-mnie", label: "O mnie" },
  { path: "/kontakt", label: "Kontakt" },
];

const socialMediaLinks = [
  {
    path: "https://www.instagram.com/palmowska__studio",
    label: <FaInstagram />,
  },
  { path: "https://www.pinterest.com/kpalmowska", label: <FaPinterest /> },
  {
    path: "https://www.facebook.com/profile.php?id=100087842247172",
    label: <FaFacebook />,
  },
];

export default function Footer() {
  return (
    <footer className="flex w-full flex-col bg-lightblue px-page-mobile py-8 lg:px-page-desktop">
      <div className="flex flex-col gap-10">
        <Link className="w-max" href="/">
          <Logo className="h-20 w-16" />
        </Link>
      </div>
      <div className="my-8 grid auto-rows-auto grid-cols-[1.5fr,1fr] gap-4 gap-y-8">
        <h5 className="font-sans text-lg font-semibold uppercase">
          Palmowska Studio
        </h5>
        <div className="row-start-1 row-end-3 flex flex-col gap-3 text-md">
          {routes.map((link) => (
            <Link key={link.path} href={link.path} className="w-max font-sans">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="col-start-1 row-start-2 flex flex-col justify-center font-sans text-base font-medium">
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
        <div className="flex w-full flex-row items-end gap-3 font-sans text-md font-medium">
          {socialMediaLinks.map((link) => (
            <Link key={link.path} href={link.path} className="w-max">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-8 font-sans text-sm">
          © 2023 - All rights reserved.
        </div>
      </div>
    </footer>
  );
}
