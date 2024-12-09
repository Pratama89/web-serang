import SectionHeaders from "./SectionHeader";

export default function Contact() {
  return (
    <section className="text-center my-16 pt-24 px-4 sm:px-6 lg:px-8" id="contact">
      <SectionHeaders subHeader="KONTAK KAMI" mainHeader="" />
      <div className="mt-16 lg:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18870.1540435797!2d106.24859046752003!3d-6.135912600325453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41f5155a2ee657%3A0x2862c37fbe141189!2sMutiara%20elastis%20new!5e0!3m2!1sen!2sus!4v1732334957662!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <div className="max-w-full mx-auto rounded-lg overflow-hidden">
              <div className="px-4 sm:px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Detail Alamat</h3>
                <p className="mt-1 text-gray-600">
                  Jl. Keserangan - Pengampelan No. 88, Kp. Nambo RT 06 / 03, Ds.
                  Keserangan, Kec. Ciruas - Kab. Serang, Banten, Indonesia
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 sm:px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Jam Kerja</h3>
                <p className="mt-1 text-gray-600">Senin - Jumat: 07.30 - 17.00</p>
                <p className="mt-1 text-gray-600">Sabtu: 07.30 - 16.00</p>
                <p className="mt-1 text-gray-600">Minggu: Tutup</p>
              </div>
              <div className="border-t border-gray-200 px-4 sm:px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Kontak Pemasaran</h3>
                <p className="mt-1 text-gray-600">Email: admin@mutiara-elasticindo.co.id</p>
                <p className="mt-1 text-gray-600">
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/6289673791935"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +62 896-7379-1935
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
