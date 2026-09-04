import {
  FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp, FaLinkedinIn, FaXTwitter,} from "react-icons/fa6";
export default function Footer() {
  return (
    <footer id="contacto" className="mt-auto border-t border-[#DED3CB] bg-[#F7F3EE] px-6 py-14 text-[#2B2528] transition-colors dark:border-[#3B3236] dark:bg-[#171416] dark:text-[#F7F3EE] md:px-24">
      <div className="mx-auto grid max-w-6xl gap-10 text-left md:grid-cols-4">
        <div>
          <h2 className="text-xl font-semibold tracking-[0.18em]">ELARA</h2>

          <p className="mt-4 text-sm leading-6 text-[#6E6266] dark:text-[#B9ADB1]">
            Belleza, cuidado y bienestar en un espacio pensado para ti.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Visítanos</h3>
          <p className="mt-4 text-sm leading-6 text-[#6E6266] dark:text-[#B9ADB1]">
            Av. Nueva Providencia 1234
            <br />
            Providencia, Santiago
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Contacto</h3>
          <p className="mt-4 text-sm leading-6 text-[#6E6266] dark:text-[#B9ADB1]">
            +56 9 5555 5555
            <br />
            contacto@elara.cl
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Horarios</h3>
          <p className="mt-4 text-sm leading-6 text-[#6E6266] dark:text-[#B9ADB1]">
            Lun — Vie: 09:00 — 19:00
            <br />
            Sábado: 10:00 — 18:00
          </p>
        </div>
      </div>

      {/* ICONOS RRSS */}
      <div className="mt-12 mb-8 flex flex-wrap justify-center gap-4">
        <a
          href="#"
          aria-label="Instagram"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DDD0C8] text-[#6E6266] transition hover:border-[#B76E79] hover:bg-[#B76E79] hover:text-white dark:border-[#3B3236] dark:text-[#B9ADB1]"
        >
          <FaInstagram size={24} />
        </a>

        <a
          href="#"
          aria-label="TikTok"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DDD0C8] text-[#6E6266] transition hover:border-[#B76E79] hover:bg-[#B76E79] hover:text-white dark:border-[#3B3236] dark:text-[#B9ADB1]"
        >
          <FaTiktok size={24} />
        </a>

        <a
          href="#"
          aria-label="Facebook"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DDD0C8] text-[#6E6266] transition hover:border-[#B76E79] hover:bg-[#B76E79] hover:text-white dark:border-[#3B3236] dark:text-[#B9ADB1]"
        >
          <FaFacebookF size={24} />
        </a>

        <a
          href="#"
          aria-label="WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DDD0C8] text-[#6E6266] transition hover:border-[#B76E79] hover:bg-[#B76E79] hover:text-white dark:border-[#3B3236] dark:text-[#B9ADB1]"
        >
          <FaWhatsapp size={24} />
        </a>

        <a
          href="#"
          aria-label="X"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DDD0C8] text-[#6E6266] transition hover:border-[#B76E79] hover:bg-[#B76E79] hover:text-white dark:border-[#3B3236] dark:text-[#B9ADB1]"
        >
          <FaXTwitter size={24} />
        </a>

        <a
          href="#"
          aria-label="LinkedIn"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DDD0C8] text-[#6E6266] transition hover:border-[#B76E79] hover:bg-[#B76E79] hover:text-white dark:border-[#3B3236] dark:text-[#B9ADB1]"
        >
          <FaLinkedinIn size={24} />
        </a>
      </div>

      <p className="text-xs uppercase tracking-widest text-[#6E6266] dark:text-[#B9ADB1]">
        © 2026 ELARA — Todos los derechos reservados
      </p>
    </footer>
  );
}
