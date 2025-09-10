import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrLocation } from "react-icons/gr";
import { HiOutlineChat } from "react-icons/hi";

const TentangKamiSection = () => {
  return (
    <section className="section-bg">
      <div className="container">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-6">
            <Image
              src={"/images/tentang-kami-img.png"}
              alt="Cucian mobil dan motor Deril Carwash"
              width={500}
              height={500}
              className="rounded-lg w-full lg:w-3/4 h-60 md:h-85 object-cover"
            ></Image>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <span className="section-subtitle">Tentang Kami</span>
            <h2 className="section-title">
              Kebersihan & Kepuasan
              <br />
              Anda, <span className="text-primary">Prioritas</span> Kami
            </h2>
            <p className="section-description w-full lg:w-3/4">
              Hadir sejak tahun 2018. Dengan pengalaman lebih dari 7 tahun, kami
              bukan sekadar mencuci, kami memberikan perawatan terbaik untuk
              kendaraan Anda. Dari motor, mobil, karpet, hingga kendaraan besar.
              Semua kami tangani dengan teliti agar selalu kinclong dan siap
              menemani aktivitas Anda.
            </p>
            <div className="flex flex-row gap-2 lg:gap-4 mt-5">
              <Link
                href="#"
                className="btn btn-primary text-sm flex items-center gap-2 hover-up"
              >
                <HiOutlineChat size={20} />
                Hubungi Sekarang
              </Link>
              <Link
                href="#"
                className="btn btn-secondary text-sm flex items-center gap-2 hover-up"
              >
                <GrLocation size={20} />
                Lihat Lokasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangKamiSection;
