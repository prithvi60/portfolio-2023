"use client";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
// Universal
import { scroll } from "framer-motion/dom";
export const ProgressWheel = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    scroll((progress) => {
      setProgress(progress);
    });
  }, []);

  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 100 100"
      className="progress-wheel"
      style={{ strokeDasharray: `${progress}, 1` }}
    >
      <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
      <circle cx="50" cy="50" r="30" pathLength="1" className="progress" />
    </svg>
  );
};
const Header = () => {
  const [width, setWidth] = useState(700);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [setWidth]);
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
  // useEffect(()=>{
  //   const progressWheel = document.querySelector(".progress");
  // console.log(progressWheel)
  // scroll((progress) => {
  //   progressWheel.attributes.strokeDasharray = `${progress}, 1`;
  // });

  // })
  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
            : "absolute"
        }
        ${
          width<600
            ? "!fixed !z-[9999] !bg-white !bg-opacity-60 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
            : "absolute"
        }
        `
      
      }
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo  flex w-full items-center justify-center gap-2 dark:flex-row-reverse ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                {/* <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={30}
                  height={30}
                  className="w-full dark:hidden"
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                /> */}
                <h2 className="text-2xl font-bold text-black dark:text-white">
                  Webibee
                </h2>
                {/* <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={30}
                  height={30}
                  className="hidden w-full dark:block"
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                /> */}
              </Link>

              {width < 600 ? null : (
                <Suspense fallback={null}>
                  <ProgressWheel />
                </Suspense>
              )}
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={menuItem.id} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <a
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="15" height="14" viewBox="0 0 15 14">
                                  <path
                                    d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </a>
                            <div
                              className={`submenu relative top-full left-0 rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem) => (
                                <Link
                                  href={submenuItem.path}
                                  key={submenuItem.id}
                                  className="block rounded py-2.5 text-sm text-dark hover:opacity-70 dark:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {sticky ? null : (
          <>
            <div className="absolute top-0 right-0 z-[-1] opacity-10 ">
              <svg
                width="450"
                height="556"
                viewBox="0 0 450 556"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="277"
                  cy="63"
                  r="225"
                  fill="url(#paint0_linear_25:217)"
                />
                <circle
                  cx="17.9997"
                  cy="182"
                  r="18"
                  fill="url(#paint1_radial_25:217)"
                />
                <circle
                  cx="76.9997"
                  cy="288"
                  r="34"
                  fill="url(#paint2_radial_25:217)"
                />
                <circle
                  cx="325.486"
                  cy="302.87"
                  r="180"
                  transform="rotate(-37.6852 325.486 302.87)"
                  fill="url(#paint3_linear_25:217)"
                />
                <circle
                  opacity="0.8"
                  cx="184.521"
                  cy="315.521"
                  r="132.862"
                  transform="rotate(114.874 184.521 315.521)"
                  stroke="url(#paint4_linear_25:217)"
                />
                <circle
                  opacity="0.8"
                  cx="356"
                  cy="290"
                  r="179.5"
                  transform="rotate(-30 356 290)"
                  stroke="url(#paint5_linear_25:217)"
                />
                <circle
                  opacity="0.8"
                  cx="191.659"
                  cy="302.659"
                  r="133.362"
                  transform="rotate(133.319 191.659 302.659)"
                  fill="url(#paint6_linear_25:217)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_25:217"
                    x1="-54.5003"
                    y1="-178"
                    x2="222"
                    y2="288"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A6CF7" />
                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                  </linearGradient>
                  <radialGradient
                    id="paint1_radial_25:217"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
                  >
                    <stop
                      offset="0.145833"
                      stopColor="#4A6CF7"
                      stopOpacity="0"
                    />
                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_25:217"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
                  >
                    <stop
                      offset="0.145833"
                      stopColor="#4A6CF7"
                      stopOpacity="0"
                    />
                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
                  </radialGradient>
                  <linearGradient
                    id="paint3_linear_25:217"
                    x1="226.775"
                    y1="-66.1548"
                    x2="292.157"
                    y2="351.421"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A6CF7" />
                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_25:217"
                    x1="184.521"
                    y1="182.159"
                    x2="184.521"
                    y2="448.882"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A6CF7" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_25:217"
                    x1="356"
                    y1="110"
                    x2="356"
                    y2="470"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A6CF7" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_25:217"
                    x1="118.524"
                    y1="29.2497"
                    x2="166.965"
                    y2="338.63"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A6CF7" />
                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 z-[-1] opacity-100">
              <svg
                width="364"
                height="201"
                viewBox="0 0 364 201"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
                  stroke="url(#paint0_linear_25:218)"
                />
                <path
                  d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
                  stroke="url(#paint1_linear_25:218)"
                />
                <path
                  d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
                  stroke="url(#paint2_linear_25:218)"
                />
                <path
                  d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
                  stroke="url(#paint3_linear_25:218)"
                />
                <circle
                  opacity="0.8"
                  cx="214.505"
                  cy="60.5054"
                  r="49.7205"
                  transform="rotate(-13.421 214.505 60.5054)"
                  stroke="url(#paint4_linear_25:218)"
                />
                <circle
                  cx="220"
                  cy="63"
                  r="43"
                  fill="url(#paint5_radial_25:218)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_25:218"
                    x1="184.389"
                    y1="69.2405"
                    x2="184.389"
                    y2="212.24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A6CF7" stopOpacity="0" />
                    <stop offset="1" stopColor="#4A6CF7" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_25:218"
                    x1="156.389"
                    y1="69.2405"
                    x2="156.389"
                    y2="212.24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A6CF7" stopOpacity="0" />
                    <stop offset="1" stopColor="#4A6CF7" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_25:218"
                    x1="125.389"
                    y1="69.2405"
                    x2="125.389"
                    y2="212.24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A6CF7" stopOpacity="0" />
                    <stop offset="1" stopColor="#4A6CF7" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_25:218"
                    x1="93.8507"
                    y1="67.2674"
                    x2="89.9278"
                    y2="210.214"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A6CF7" stopOpacity="0" />
                    <stop offset="1" stopColor="#4A6CF7" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_25:218"
                    x1="214.505"
                    y1="10.2849"
                    x2="212.684"
                    y2="99.5816"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A6CF7" />
                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                  </linearGradient>
                  <radialGradient
                    id="paint5_radial_25:218"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(220 63) rotate(90) scale(43)"
                  >
                    <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.08" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
