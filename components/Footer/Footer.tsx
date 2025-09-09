import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TbBrandWhatsapp } from "react-icons/tb";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="main-footer py-10 md:py-12 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-12 space-y-8">
            <div className="col-span-12 lg:col-span-6">
              <h3 className="font-bold text-white">
                Cuci Hemat, Hasil Maksimal
              </h3>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <h3 className="text-white text-xl font-bold mb-3">Layanan</h3>
              <ul>
                <li className="mb-1.5">
                  <Link href="#" className="font-secondary">
                    Cuci Motor
                  </Link>
                </li>
                <li className="mb-1.5">
                  <Link href="#" className="font-secondary">
                    Cuci Mobil
                  </Link>
                </li>
                <li className="mb-1.5">
                  <Link href="#" className="font-secondary">
                    Cuci Karpet
                  </Link>
                </li>
                <li>
                  <Link href="#" className="font-secondary">
                    Cuci Lainnya
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <h3 className="text-white text-xl font-bold mb-3">Kontak</h3>
              <ul>
                <li className="mb-1.5">
                  <Link href="#" className="flex flex-row gap-2">
                    <div className="w-6 h-6">
                      <TbBrandWhatsapp size={20} />
                    </div>
                    <p className="font-secondary">0857 9925 8195</p>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex flex-row gap-2">
                    <div className="w-6 h-6">
                      <FaLocationDot size={20} />
                    </div>
                    <p className="font-secondary">
                      Demangan, Condongsari, Kec. Banyuurip, Kabupaten
                      Purworejo, Jawa Tengah 54171
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer py-3 md:py-4 lg:py-6 border-t-1 border-t-[#505050]">
        <div className="text-center">
          <p className="font-secondary text-sm">
            @ <span>{currentYear}</span> Deril Carwash - All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
