import Image from "next/image";
import { title } from "process";
import React from "react";

const LayananSection = () => {
  const layanan = [
    {
      title: "Cuci Motor",
      description:
        "Motor kembali kinclong dan nyaman dikendarai. Kami bersihkan hingga ke detail terkecil agar tampil selalu segar di jalan.",
      icon: "motor.svg",
    },
    {
      title: "Cuci Mobil",
      description:
        "Perawatan maksimal untuk mobil kesayangan Anda. Dengan shampo khusus dan teknik profesional, body tetap berkilau seperti baru.",
      icon: "mobil.svg",
    },
    {
      title: "Cuci Karpet",
      description:
        "Karpet bebas debu, noda, dan bau apek. Hasilnya lebih bersih, segar, dan membuat kabin terasa nyaman kembali.",
      icon: "karpet.svg",
    },
    {
      title: "Cuci Kendaraan Lainnya",
      description:
        "Truk, pick-up, hingga kendaraan besar lainnya kami rawat dengan teliti, agar selalu siap digunakan dalam kondisi prima.",
      icon: "truk.svg",
    },
  ];

  return (
    <section id="layanan">
      <div className="container">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 lg:col-span-6">
            <span className="section-subtitle">Layanan Kami</span>
            <h2 className="section-title">
              Layanan <span className="text-primary">Terbaik</span>
              <br />
              untuk Kendaraan Anda
            </h2>
            <p className="section-description w-full md:w-3/4">
              Kami menyediakan layanan cuci motor, mobil, karpet, hingga
              berbagai jenis kendaraan lainnya. Dengan tenaga berpengalaman dan
              peralatan modern, kami pastikan setiap kendaraan tampil bersih,
              kinclong, dan nyaman digunakan kembali.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="grid grid-cols-12 gap-4">
              {layanan.map((item, index) => {
                return (
                  <div key={index} className="col-span-12 md:col-span-6">
                    <div className="p-3 lg:p-5 border-2 rounded-xl border-color h-full hover-up hover:border-primary hover:shadow-lg hover:shadow-primary/30 group">
                      <Image
                        src={`./images/icon/${item.icon}`}
                        alt={`Icon ${item.title} - Demangan Carwash`}
                        width={50}
                        height={50}
                        className="mb-2"
                      ></Image>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-all duration-100 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-secondary font-secondary text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayananSection;
