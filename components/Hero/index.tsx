"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { Suspense, useEffect, useState } from "react";
import Loader from "./Loader";
const Hero = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3500);
  });
  return (
    <>
      <Suspense fallback={<Loader />}>
        <section
          id="home"
          className=" relative z-10 h-screen overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
        >
          <div className="container">
            {/* <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Canvas for your Brand!
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  We make websites that bring out your brand story using cutting
                  edge tools.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:pt-4">
                  <Link
                    href="/contact"
                    className="rounded-md bg-primary/[80%] py-4 px-8  text-base font-semibold uppercase text-white duration-300 ease-in-out hover:bg-primary/80 dark:bg-primary/40"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
            <div className="experience my-component">
              <Canvas
                camera={{
                  fov: 45,
                  near: 0.1,
                  far: 2000,
                  position: [-1, 1, 2],
                }}
              >
                <Experience />
              </Canvas>
            </div>
          </div>

          <div className="flex items-center justify-center text-2xl font-bold md:absolute md:w-screen md:pt-16 md:text-5xl">
            {show && (
              <h1 className="title">
                Captivate.<span style={{ color: "#FFFF00" }}> Engage.</span>{" "}
                Inspire.
              </h1>
            )}
          </div>
        </section>
      </Suspense>
    </>
  );
};

export default Hero;
