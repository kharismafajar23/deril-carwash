import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { FiThumbsUp } from "react-icons/fi";
import { GrFormNextLink } from "react-icons/gr";
import { LuShieldCheck } from "react-icons/lu";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="container h-full flex">
        <div className="grid grid-cols-12 items-center h-full">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col gap-3 lg:gap-5">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-[130%]">
                Kendaraan jadi <span className="text-primary">kinclong,</span>
                <br />
                tanpa bikin kantong kosong
              </h1>
              <p className="font-secondary text-lg lg:text-xl/9 text-secondary">
                Percayakan mobil & motor Anda pada layanan cuci profesional
                kami. Bersih maksimal, aman untuk body kendaraan, dan cepat
                selesai.
              </p>
              <div className="button-hero flex flex-col md:flex-row gap-2 lg:gap-4">
                <Link
                  href="#"
                  className="btn btn-primary hover-up text-center md:text-start"
                >
                  Pesan Sekarang
                </Link>
                <Link
                  href="#"
                  className="btn btn-secondary flex items-center justify-center gap-1 hover-up"
                >
                  Layanan Kami <GrFormNextLink className="inline" size={20} />
                </Link>
              </div>
              <div className="flex flex-row items-center gap-1 text-secondary">
                <BiTimeFive />
                <div>
                  Setiap Hari{" "}
                  <span className="text-primary font-semibold">
                    08.00 - 17.00
                  </span>{" "}
                  <span className="text-sm">(kecuali kiamat)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block col-span-2"></div>
          <div className="col-span-12 lg:col-span-4">
            <div className="relative">
              <Image
                src={"/images/hero-images.png"}
                alt="Deril Carwash"
                className="rounded-lg w-full h-70 md:h-90 lg:h-180 object-cover"
                width={1000}
                height={1000}
              ></Image>
              <div className="absolute gap-1 -top-6 -right-1 lg:-right-5">
                <div className="relative">
                  <div className="absolute inset-0.5 bg-primary rounded-[6px] blur opacity-50 animate-fade-in-scale"></div>
                  <div className="btn btn-secondary text-sm md:text-base flex items-center relative">
                    <LuShieldCheck size={20} className="text-primary" />
                    Garansi Bersih
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-1 lg:-left-5">
                <div className="relative">
                  <div className="absolute inset-0.5 bg-primary rounded-[6px] blur opacity-50 animate-fade-in-scale"></div>
                  <div className="btn btn-secondary text-sm md:text-base flex items-center gap-1 relative">
                    <FiThumbsUp size={20} className="text-primary" />
                    Layanan Memuaskan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
