import React from 'react';
import Image from 'next/image';
import { ImageProps } from 'next/image';

const MyImage = (props: ImageProps) => {
  return (
    <Image
      {...props}
      sizes='(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 50vw'
    />
  );
};

export default MyImage;
