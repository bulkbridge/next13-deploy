import React from 'react';
import Image from 'next/image';
import logo from '@/assets/img/logo/logo-white.png';
import { RightArrow, SvgBgSm } from '@/components/svg';
import Link from 'next/link';

export default function FooterFour() {
  return (
    <footer>
      <div className="tp-footer-3-area dark-bg pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-1">
                <div className="tp-footer-3-widget mb-40">
                  <h4 className="tp-footer-3-title">Dream diary</h4>
                  <div className="tp-footer-3-menu">
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="/about-us">About</a></li>
                     
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Newsletter</h4>
                  <div className="tp-footer-3-input-box d-flex align-items-center">
                    <input type="text" placeholder="Enter Address..." />
                    <button className="tp-footer-3-btn p-relative">
                      <span className="icon-1">
                        <RightArrow clr='#19191A' />
                      </span>
                      <span className="icon-2">
                        <SvgBgSm/>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget text-md-center footer-col-3-2">
                <div className="tp-footer-3-logo-box">
                  <p className="mb-100">
                    Drop us a line sed id semper <br />
                    risus in hend rerit.
                  </p>
                  <Link className="tp-footer-3-logo p-relative" href="/">
                    <Image src={logo} alt="logo" />
                  </Link>
                  <p className="tp-footer-3-copyright">
                    {new Date().getFullYear()} @dreamdiary <br /> © All rights reserved
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-3">
                <div className="tp-footer-3-widget mb-30">
                  <h4 className="tp-footer-3-title">Contact</h4>
                  <div className="tp-footer-2-contact-item">
                    <span>
                      <a href="https://www.google.com/maps/@23.8223596,90.3656686,15z?entry=ttu"
                      target="_blank">Dream diary, Velur kuttamkulam, Thrissur,680322</a>
                      </span>
                  </div>
                  <div className="tp-footer-2-contact-item">
                    <span>Phone: <a href="tel:+91 90722 84664">+91 90722 84664</a></span>
                    <span>E mail: <a href="mailto:dreamdiary@gmail.com">dreamdiary@gmail.com</a></span>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Follow</h4>
                  <div className="tp-footer-3-social">
                    <a href="https://x.com/elonmusk"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=61556651561669"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/dream_diary_weds_ads/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/sundarpichai/"><i className="fa-brands fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
