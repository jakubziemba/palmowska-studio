"use client";

import Logo from "../../../public/palmowska-logo-bw.svg";
import Link from "next/link";

const routes = [
  { path: "/projekty", label: "Projekty" },
  { path: "/publikacje", label: "Publikacje" },
  { path: "/wspolpraca", label: "Współpraca" },
  { path: "/o-mnie", label: "O mnie" },
  { path: "/kontakt", label: "Kontakt" },
];

const socialMediaLinks = [
  { path: "https://www.instagram.com/palmowska__studio", label: "Instagram" },
  { path: "https://www.pinterest.com/kpalmowska", label: "Pinterest" },
  {
    path: "https://www.facebook.com/profile.php?id=100087842247172",
    label: "Facebook",
  },
];

export default function Footer() {
  return (
    <footer className="flex w-full flex-col bg-lightblue px-page-mobile py-8 lg:px-page-desktop">
      <div className="flex flex-col gap-10">
        <Link className="w-max" href="/">
          <Logo className="h-[88px] w-16" />
        </Link>
        <h5 className="font-sans text-lg font-semibold uppercase">
          Palmowska Studio
        </h5>
      </div>
      <div className="my-8 mb-14 grid grid-cols-2">
        <div className="flex flex-col gap-3 text-md">
          {routes.map((link) => (
            <Link key={link.path} href={link.path} className="w-max font-sans">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex w-full flex-col gap-3 font-sans text-md font-medium">
          {socialMediaLinks.map((link) => (
            <Link key={link.path} href={link.path} className="w-max">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center font-sans text-base font-medium">
        <a
          className="font-sans text-md"
          href="mailto:hello@kamilapalmowska.com"
        >
          hello@kamilapalmowska.com
        </a>
        <a className="font-sans text-md" href="tel:+48 600 897 821">
          +48 600 897 821
        </a>
      </div>
      <div className="mt-8 font-sans text-sm">
        © 2023 - All rights reserved.
      </div>
    </footer>
  );
}
