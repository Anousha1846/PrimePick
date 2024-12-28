import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import pay2 from '../../../public/images/pay2.svg'

const Footer = () => {
  return (
    <div>
 <footer className="footer bg-base-200 text-base-content p-10">
  <aside>
  <section>
          <Link
            href="/"
            className="sm:text-4xl text-3xl font-extrabold text-burgundy flex items-center space-x-1 font-mono  "
          >
            PrimePick
          </Link>
        </section>
    <p className='text-charcoal'>
    PrimePick is a premium e-commerce platform <br /> offering curated, high-quality products, exceptional value, <br /> seamless shopping, and fast, reliable delivery.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title text-black">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title  text-black">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Products</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title  text-black">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer> <hr /><hr /> <hr />
<footer className="footer bg-base-200 text-base-content items-center p-4 px-10">
  <aside className="grid-flow-col items-center">
    
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
   <Image src={pay2} alt=''  />
  </nav>
</footer>
    </div>
  )
}

export default Footer
