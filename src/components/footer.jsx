import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#574B3F] text-white px-6 md:px-10 pt-12 pb-12">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.4fr_0.45fr_1.15fr] gap-10 lg:gap-8">
        <div className="flex flex-col items-start">
          <p className="font-bold text-base leading-[29px]">
            Jafuta Foundation<br />
            Elephant’s Walk,<br />
            273 Adam Stander Road,<br />
            Victoria Falls, Zimbabwe<br />
            PVO Registration No: 201/26
          </p>
          <img
            src="./images/Jafuta-candid-logo.png"
            alt="Silver Transparency 2026 - Candid"
            className="w-[202px] h-[183px] object-fill mt-[50px]"
          />
        </div>
        <div className="flex flex-col items-start lg:pt-[36px]">
          <p className="font-bold text-base leading-[29px]">
            Jafuta Foundation<br />
            525 Bingham Knoll,<br />
            Jacksonville, OR 97530<br />
            Registered 501(c)3
          </p>
          <p className="text-base leading-[29px]">
            <span className="font-bold">Ein No.</span> 81-3902811
          </p>
          <a
            href="mailto:gcvj@jafuta.org"
            className="text-base mt-3 hover:opacity-75 transition-opacity"
          >
            Email: gcvj{`{at}`}jafuta.org
          </a>
          <div className="flex items-center gap-5 mt-9">
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              className="text-xl hover:opacity-70 transition-opacity"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              className="text-xl hover:opacity-70 transition-opacity"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-normal mb-6">About</h2>
          <ul className="flex flex-col gap-[7px] text-base">
            <li><a href="#vision" className="underline underline-offset-2 hover:opacity-70">Our Vision</a></li>
            <li><a href="#about" className="underline underline-offset-2 hover:opacity-70">About Us</a></li>
            <li><a href="#team" className="underline underline-offset-2 hover:opacity-70">Our Team</a></li>
            <li><a href="#blog" className="underline underline-offset-2 hover:opacity-70">Blog</a></li>
            <li><a href="#donate" className="underline underline-offset-2 hover:opacity-70">Donate</a></li>
            <li><a href="#contact" className="underline underline-offset-2 hover:opacity-70">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-normal mb-6">Projects</h2>
          <ul className="flex flex-col gap-[7px] text-base">
            <li><a href="#women-youth" className="underline underline-offset-2 hover:opacity-70">Women &amp; Youth Empowerment</a></li>
            <li><a href="#education" className="underline underline-offset-2 hover:opacity-70">Education &amp; Digital Access</a></li>
            <li><a href="#wash" className="underline underline-offset-2 hover:opacity-70">Water, Sanitation (WASH) &amp; Health</a></li>
            <li><a href="#livelihoods" className="underline underline-offset-2 hover:opacity-70">Livelihoods &amp; Food Security</a></li>
            <li><a href="#conservation" className="underline underline-offset-2 hover:opacity-70">Conservation &amp; Community Co-Existence</a></li>
            <li><a href="#arts" className="underline underline-offset-2 hover:opacity-70">Creativity, Arts &amp; Culture</a></li>
          </ul>
        </div>
        </div>
      <div className="text-center mt-4 lg:mt-3">
        <p className="text-base">
          © 2026 Jafuta Foundation
        </p>
      </div>

    </footer>
  );
};

export default Footer;