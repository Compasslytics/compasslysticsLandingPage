declare module 'next/link' {
  import { ComponentType, ReactNode } from 'react';
  
  interface LinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    [key: string]: any;
  }
  
  const Link: ComponentType<LinkProps>;
  export default Link;
}

declare module 'next/image' {
  import { ComponentType, ReactNode } from 'react';
  
  interface ImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    [key: string]: any;
  }
  
  const Image: ComponentType<ImageProps>;
  export default Image;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
