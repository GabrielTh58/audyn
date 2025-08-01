"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IconStar, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Amanda Lopes",
    role: "Cliente verificada",
    quote:
      "A qualidade dos produtos me surpreendeu! O atendimento também foi impecável. Voltarei a comprar com certeza.",
    avatar: "https://i.pravatar.cc/?u=4",
    rating: 5,
  },
  {
    name: "Lucas Martins",
    role: "Comprador frequente",
    quote:
      "Entrega super rápida e tudo muito bem embalado. Já comprei fones e caixas de som, sempre excelente!",
    avatar: "https://i.pravatar.cc/?u=2",
    rating: 5,
  },
  {
    name: "Renata Dias",
    role: "Cliente satisfeita",
    quote:
      "O site é fácil de navegar e os preços são justos. Tive dúvidas e o suporte me ajudou muito!",
    avatar: "https://i.pravatar.cc/?u=6",
    rating: 5,
  },
  {
    name: "Diego Alves",
    role: "Cliente novo",
    quote: "Comprei pela primeira vez e fiquei muito satisfeito! Voltarei mais vezes.",
    avatar: "https://i.pravatar.cc/?u=8",
    rating: 5,
  },
  {
    name: "Juliana Castro",
    role: "Compradora assídua",
    quote: "Produtos de ótima qualidade, entrega no prazo e ótimo atendimento.",
    avatar: "https://i.pravatar.cc/?u=12",
    rating: 5,
  },
  {
    name: "Marcos Silva",
    role: "Cliente fiel",
    quote: "Recomendo para todos! Excelente experiência de compra e produto de primeira.",
    avatar: "https://i.pravatar.cc/?u=15",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="container my-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-900 capitalize">
        O que dizem nossos clientes
      </h2>

      <div className="flex flex-col gap-4">
        <div className="flex gap-1 self-end"><SwiperNavigationButton direction="prev">
          <IconChevronLeft size={24} />
        </SwiperNavigationButton>

        <SwiperNavigationButton direction="next">
          <IconChevronRight size={24} />
        </SwiperNavigationButton>

        </div>
        
        
        <div>
          <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <TestimonialCard testimonial={t} />
            </SwiperSlide>
          ))}
        </Swiper>
          <div className="custom-swiper-pagination mt-8 flex justify-center gap-2"></div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article
      className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-md hover:shadow-lg 
        transition-shadow h-60 flex flex-col"
      role="group"
      aria-label={`Depoimento de ${testimonial.name}`}
    >
      <header className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.avatar}
          alt={`Foto de perfil de ${testimonial.name}`}
          className="w-14 h-14 rounded-full object-cover border border-zinc-300"
          loading="lazy"
        />
        <div>
          <p className="font-semibold text-zinc-900">{testimonial.name}</p>
          <p className="text-sm text-zinc-500">{testimonial.role}</p>
        </div>
      </header>

      <div className="flex gap-1 mb-4 text-orange-400" aria-label={`${testimonial.rating} estrelas`}>
        {Array.from({ length: testimonial.rating }).map((_, idx) => (
          <IconStar key={idx} size={20} fill="currentColor" aria-hidden="true" />
        ))}
      </div>

      <blockquote className="text-zinc-700 italic leading-relaxed overflow-hidden text-ellipsis">
        “{testimonial.quote}”
      </blockquote>
    </article>
  )
}

interface SwiperNavigationButtonProps {
  direction: "next" | "prev";
  children: React.ReactNode;
  className?: string;
}

function SwiperNavigationButton({ direction,  children,  className, }: SwiperNavigationButtonProps) {
  const baseClass =
    `p-2 rounded-full bg-black/80 text-white  shadow-md hover:bg-zinc-500  transition cursor-pointer`

  const positionClass = direction === "next" ? "right-0" : "left-0";

  return (
    <button
      aria-label={direction === "next" ? "Próximo slide" : "Slide anterior"} 
      className={`${baseClass} ${positionClass} ${className ?? ""} custom-swiper-${direction}`}
    >
      {children}
    </button>
  )
}