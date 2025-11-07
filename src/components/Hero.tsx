"use client";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/images/flat.webp"
          alt="Staged Scandinavian Living Room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 py-16 lg:py-0">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl tracking-tight text-[#2d2d2d]">
                Хоумстейджинг<br />в Петербурге<br />и онлайн
              </h1>
              <p className="text-xl lg:text-2xl text-[#5a5a5a] max-w-xl">
                Хоумстейджинг, который продает вашу недвижимость, а не просто украшает ее
              </p>
            </div>

            <div className="prose prose-lg text-[#5a5a5a] max-w-xl">
              <p>
              Меня зовут Ксения - я дипломированный хоумстейджер, превращаю пустую или захламленную квартиру в пространство, 
              где покупатели или арендаторы видят свое счастливое будущее. 
              </p>
              Это не дизайн, это маркетинг для вашей недвижимости!
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToForm}
                className="bg-[#1e3a5f] hover:bg-[#1e3a5f]/90 text-white px-8 py-6 rounded-2xl shadow-lg shadow-[#1e3a5f]/20"
              >
                Оставить заявку
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  const processSection = document.getElementById('process');
                  processSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f]/5 px-8 py-6 rounded-2xl"
              >
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
