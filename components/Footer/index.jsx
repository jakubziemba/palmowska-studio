'use client';

import Logo from '../../public/palmowska-logo-bw.svg';
import Link from 'next/link';

const routes = [
  { path: '/projekty', label: 'Projekty' },
  { path: '/publikacje', label: 'Publikacje' },
  { path: '/wspolpraca', label: 'Współpraca' },
  { path: '/o-mnie', label: 'O mnie' },
  { path: '/kontakt', label: 'Kontakt' },
];

const socialMediaLinks = [
  { path: 'https://www.instagram.com/palmowska__studio', label: 'Instagram' },
  { path: 'https://www.pinterest.com/kpalmowska', label: 'Pinterest' },
  { path: 'https://www.facebook.com/profile.php?id=100087842247172', label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className='flex flex-col w-full bg-lightblue px-page-mobile py-8 lg:px-page-desktop'>
      <div className='flex flex-col gap-4'>
        <Link className='w-max' href='/'>
          <Logo className='w-12 h-12' />
        </Link>
        <h5 className='uppercase text-2xl font-sans font-medium'>Palmowska Studio</h5>
      </div>
      <div className='grid grid-cols-2 my-8'>
        <div className='flex flex-col gap-2'>
          {routes.map(link => (
            <Link key={link.path} href={link.path} className='w-max text-lg font-sans'>
              {link.label}
            </Link>
          ))}
        </div>
        <div className='flex flex-col gap-2 w-full text-base font-sans font-medium'>
          {socialMediaLinks.map(link => (
            <Link key={link.path} href={link.path} className='w-max text-lg font-sans'>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className='flex flex-col justify-center font-sans font-medium text-base'>
        <a className='font-sans text-base' href='mailto:hello@kamilapalmowska.com'>
          hello@kamilapalmowska.com
        </a>
        <a className='font-sans text-base' href='tel:+48 600 897 821'>
          +48 600 897 821
        </a>
      </div>
      <div className='font-sans text-sm mt-8'>© 2023 - All rights reserved.</div>
    </footer>
  );
}
