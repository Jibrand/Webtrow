"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
  <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
    <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
      <div className=" md:w-1/2">
        <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
          🚀 Webtrow - Transform Your Business Online
        </h4>
        <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
          Elevate Your{" "}
          <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
            Sales & Brand
          </span>{" "}
          with Expert Web Design
        </h1>
        <p>
          At Webtrow, we design websites that don't just look good—they boost
          your sales, enhance your brand, and get you more <b><u>appointments</u></b>. Let us
          help you double your income with a site that works for you.
        </p>

        <div className="mt-10">
            <div className="flex flex-wrap gap-5">
              {/* <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter your email address"
                className="rounded-full border border-green-600 px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
              /> */}
           <a href="#support" 
  aria-label="Schedule free consultation"
  className="flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-blue-500 to-black px-8 py-3 text-lg font-semibold text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:from-blue-600 hover:via-blue-600 hover:to-black dark:bg-gradient-to-r dark:from-blue-600 dark:via-blue-600 dark:to-black dark:hover:from-blue-700 dark:hover:via-purple-700 dark:hover:to-pink-700"
>
  📅 Schedule Free Consultation

</a>

            </div>

          <p className="mt-5 text-black dark:text-white">
            Try for free—no credit card required.
          </p>
        </div>
      </div>

      <div className="animate_right hidden md:w-1/2 lg:block">
        <div className="relative 2xl:-mr-7.5">
          <Image
            src="/images/shape/shape-01.png"
            alt="shape"
            width={46}
            height={246}
            className="absolute -left-11.5 top-0"
          />
          <Image
            src="/images/shape/shape-02.svg"
            alt="shape"
            width={36.9}
            height={36.7}
            className="absolute bottom-0 right-0 z-10"
          />
          <Image
            src="/images/shape/shape-03.svg"
            alt="shape"
            width={21.64}
            height={21.66}
            className="absolute -right-6.5 bottom-0 z-1"
          />
          <div className="relative aspect-[700/444] w-full">
            <Image
              className="shadow-solid-l dark:hidden"
              src="/images/hero/hero-light.svg"
              alt="Hero"
              fill
            />
            <Image
              className="hidden shadow-solid-l dark:block"
              src="/images/hero/hero-dark.svg"
              alt="Hero"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Hero;
