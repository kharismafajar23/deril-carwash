import GoogleMap from "@/components/UI/Maps/Maps";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";

const KontakSection = () => {
  return (
    <section id="kontak">
      <div className="container">
        <div className="text-center mb-12">
          <span className="section-subtitle">Butuh Info Lebih Lanjut</span>
          <h2 className="section-title">
            <span className="text-primary">Kontak</span> Kami
          </h2>
          <p className="section-description w-full lg:w-1/2 mx-auto">
            Mau cuci motor, mobil, atau karpet? Chat kami sekarang lewat
            WhatsApp atau telepon. Mudah, cepat, dan tanpa ribet.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <GoogleMap zoom={70}></GoogleMap>
          </div>
          <div className="col-span-12 md:col-span-6">
            {/* Alamat */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex w-15 h-15 bg-primary rounded-sm">
                <GrLocation className="text-white m-auto" size={32} />
              </div>
              <div className="w-2/3 md:w-3/4 lg:w-4/5">
                <p className="font-secondary text-secondary">Alamat</p>
                <p className="font-medium lg:w-1/2">
                  Demangan, Condongsari, Kec. Banyuurip, Kabupaten Purworejo,
                  Jawa Tengah 54171
                </p>
              </div>
            </div>

            {/* Whatsapp */}
            <div className="flex flex-row items-center gap-4">
              <div className="flex w-15 h-15 bg-primary rounded-sm">
                <FaWhatsapp className="text-white m-auto" size={32} />
              </div>
              <div>
                <p className="font-secondary text-secondary">Whatsapp</p>
                <Link
                  href="http://wa.me/6285799258195"
                  target="_blank"
                  className="font-medium lg:w-1/2"
                >
                  0857 9925 8195
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KontakSection;
