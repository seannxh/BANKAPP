import { logoGithub, mailOutline, logoLinkedin } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const Footer = () => {
  return (
    <footer className="relative bg-black pt-8 mt-40 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-gray-200">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-300">
              Please feel free to reach out to me in any platform.
            </h5>
            <p className="text-red-700 font-bold text-sm">
              DISCLAIMER: NOT ALL FUNCTIONS ARE ENABLED AS THIS IS NOT AN ACTUAL BANK.
            </p>
            <div className="mt-6 lg:mb-0 mb-6 flex">
            <a
                href="mailto:nohsean6@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 cursor-pointer text-center transform transition-transform duration-300 hover:scale-105"
              >
                <IonIcon icon={mailOutline} />
              </a>
              <a
                href="https://www.linkedin.com/in/seannxh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 cursor-pointer text-center transform transition-transform duration-300 hover:scale-105"
              >
                <IonIcon icon={logoLinkedin} />
              </a>
              <a
                href="https://www.github.com/seannxh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 cursor-pointer text-center transform transition-transform duration-300 hover:scale-105"
              >
                <IonIcon icon={logoGithub} />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-400 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-400 hover:text-gray-200 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-gray-200 font-semibold block pb-2 text-sm"
                      href="https://seansportfolio.blog/"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-gray-200 font-semibold block pb-2 text-sm"
                      href="https://www.github.com/seannxh"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-gray-200 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Benefits
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-400 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-400 hover:text-gray-200 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-gray-200 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-gray-200 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-gray-200 font-semibold block pb-2 text-sm"
                      href="/contactus"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-400 font-semibold py-1">
              All Rights Reserved. © <span id="get-current-year">2025</span>{" "}
              <a href="#" className="text-gray-400 hover:text-gray-200" target="_blank">
                Finactial Stone Inc.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
