"use client";
import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-green-300 to-yellow-300",
    title: "Animal Health Checkup",
    desc: "Providing comprehensive health assessments for a variety of animals, ensuring their well-being through thorough examinations and diagnostics.",
    img: "https://images.pexels.com/photos/2647053/pexels-photo-2647053.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://vetcare.example.com",
  },
  {
    id: 2,
    color: "from-yellow-300 to-orange-300",
    title: "Surgical Assistance",
    desc: "Assisting in various surgical procedures with precision and care, contributing to successful outcomes and speedy recoveries.",
    img: "https://images.pexels.com/photos/7469213/pexels-photo-7469213.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://vetcare.example.com",
  },
  {
    id: 3,
    color: "from-orange-300 to-red-300",
    title: "Emergency Care",
    desc: "Providing immediate and effective emergency care for animals in critical conditions, ensuring their safety and comfort.",
    img: "https://images.pexels.com/photos/19145879/pexels-photo-19145879/free-photo-of-groomer-brushing-a-dog.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://vetcare.example.com",
  },
  {
    id: 4,
    color: "from-red-300 to-green-300",
    title: "Nutritional Advice",
    desc: "Offering expert nutritional advice and diet plans to promote the health and longevity of pets.",
    img: "https://images.pexels.com/photos/5490711/pexels-photo-5490711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://vetcare.example.com",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center flex-col gap-11">
          <div>My Works</div>
          {/* SKILL SCROLL SVG */}
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
          </motion.svg>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-green-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] text-black">
                    {item.desc}
                  </p>
                  {/* <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link> */}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-full h-[95vh] flex flex-col gap-11 items-center justify-center text-center">
        <h1 className="text-7xl sm:text-8xl">Need Veterinary Expertise?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-full md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Veterinary Student and Animal Care Specialist
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
