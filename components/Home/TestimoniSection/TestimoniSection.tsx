"use client";

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { MdStar } from "react-icons/md";

const TestimoniSection = () => {
  const testimoni = [
    {
      name: "Kharisma Fajar",
      job: "Karyawan Swasta",
      description:
        "Motor saya jadi kinclong banget setelah dicuci di sini. Prosesnya cepat, hasilnya rapi, dan harganya pas di kantong. Pasti bakal balik lagi!",
      rating: 5,
      picture: "kharisma-fajar.png",
    },
    {
      name: "Rina",
      job: "Ibu Rumah Tangga",
      description:
        "Mobil keluarga kami terlihat seperti baru keluar showroom. Detailnya benar-benar diperhatikan, bahkan bagian kolong pun bersih. Recommended banget!",
      rating: 5,
      picture: "rina.png",
    },
    {
      name: "Budi",
      job: "Pegawai Kantoran",
      description:
        "Karpet mobil saya tadinya bau dan penuh noda. Setelah dicuci di sini, jadi bersih, wangi, dan nyaman lagi. Servisnya memuaskan!",
      rating: 5,
      picture: "budi.png",
    },
    {
      name: "Muchamim",
      job: "Pengurus Masjid",
      description:
        "Karpet masjid jadi bersih lagi. Ga ada lagi bau apek dan harumnya jadi lebih tahan lama. Makasih buat servicenya yang memuaskan.",
      rating: 5,
      picture: "muchamim.png",
    },
  ];
  return (
    <section className="section-bg">
      <div className="container">
        <div className="text-center mb-12">
          <span className="section-subtitle">Testimoni</span>
          <h2 className="section-title">
            Apa Kata <span className="text-primary">Pelanggan</span> Kami
          </h2>
          <p className="section-description w-full lg:w-1/2 mx-auto">
            Bukan hanya janji, tapi bukti nyata. Lihat bagaimana pelanggan kami
            merasakan kepuasan setelah kendaraan mereka dirawat dengan sepenuh
            hati.
          </p>
        </div>

        <Swiper
          spaceBetween={20}
          loop={true}
          modules={[Navigation, Autoplay, Pagination]}
          pagination={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          className="testimoni-swiper pb-8"
        >
          {testimoni.map((item, index) => {
            return (
              <SwiperSlide key={index} className="h-full">
                <div className="card p-6 rounded-xl border-2 border-color hover:border-primary bg-white transition-colors duration-150 h-full">
                  <div>
                    <div className="flex flex-row gap-1 mb-3">
                      {Array.from({ length: item.rating }).map((_, index) => (
                        <MdStar
                          key={index}
                          className="text-yellow-500"
                          size={18}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-secondary font-secondary text-justify text-base mb-3">
                    {`"${item.description}"`}
                  </p>
                  <div className="flex flex-row items-center gap-2">
                    <Image
                      src={`/images/testimoni/${item.picture}`}
                      alt={`Testimoni dari ${item.name} untuk Demangan Carwash`}
                      width={500}
                      height={500}
                      className="w-12 h-12 rounded-full"
                    ></Image>
                    <div>
                      <h3 className="font-medium mb-0">{item.name}</h3>
                      <p className="font-secondary text-secondary text-sm">
                        {item.job}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimoniSection;
