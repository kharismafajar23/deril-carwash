import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiCheckCircle, HiOutlineChat } from "react-icons/hi";

const HargaSection = () => {
  const harga = [
    {
      title: "Cuci Motor",
      price: 10000,
      points: [
        "Pembersihan menyeluruh body & velg",
        "Cuci detail hingga ke sela-sela",
        "Pengeringan cepat & aman",
        "Semir ban agar lebih segar",
        "Wangi motor lebih fresh",
      ],
      images: "cuci-motor.png",
    },
    {
      title: "Cuci Mobil",
      price: 35000,
      points: [
        "Cuci eksterior dengan shampo khusus anti-baret",
        "Pembersihan velg & kolong mobil",
        "Lap & pengeringan detail",
        "Semir ban untuk tampilan maksimal",
        "Vakum interior",
      ],
      images: "cuci-mobil.png",
    },
    {
      title: "Cuci Karpet",
      price: 20000,
      points: [
        "Pembersihan menyeluruh dengan cairan khusus",
        "Hilangkan debu & noda membandel",
        "Proses pengeringan cepat",
        "Menghilangkan bau apek",
        "Karpet kembali bersih & segar",
      ],
      images: "cuci-karpet.png",
    },
    {
      title: "Cuci Lainnya",
      price: 0,
      points: [],
      images: "cuci-lainnya.png",
    },
  ];
  return (
    <section id="harga">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Harga dari kami</span>
          <h2 className="section-title">
            Harga <span className="text-primary">Spesial</span> dari Kami
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {harga.map((item, index) => {
            return (
              <div
                className="col-span-12 md:col-span-6 lg:col-span-3"
                key={index}
              >
                <div className="flex flex-col rounded-xl border-2 border-color h-full p-4 pb-6 hover-up hover:border-primary transition-all duration-300">
                  <div className="card-header">
                    <Image
                      src={`/images/${item.images}`}
                      alt={`jasa ${item.title} di Deriel Carwash`}
                      width={1000}
                      height={1000}
                      className="w-full rounded-lg mb-3"
                    ></Image>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <h4 className="text-primary font-semibold text-xl mb-3">
                      {item.price === 0
                        ? "Menyesuaikan"
                        : new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                          }).format(item.price)}
                    </h4>
                    <ul className="flex flex-col gap-1 mb-6">
                      {item.points.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="flex flex-row gap-1 font-secondary text-secondary text-sm md:text-base"
                          >
                            <HiCheckCircle size={20} /> {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="card-footer mt-auto">
                    <Link
                      href="#"
                      className="btn btn-primary flex items-center justify-center gap-1"
                    >
                      <HiOutlineChat size={20} /> Chat Sekarang
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HargaSection;
