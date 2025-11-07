"use client";

import { Home, Eye, ImageOff, HeartCrack } from "lucide-react";

const benefits = [
  {
    icon: Home,
    title: "Эффект «пустой коробки",
    description: "Сложно влюбиться в голые стены. Люди не чувствуют уюта и не видят потенциала помещений."
  },
  {
    icon: Eye,
    title: "Синдром «чужой жизни»",
    description: "личные вещи, старые обои и специфический декор мешают новым людям представить себя в этом пространстве."
  },
  {
    icon: ImageOff,
    title: "Невыгодная подача",
    description: "не подчеркнутые преимущества (вид, свет, планировка) и акценты на недостатках. Квартира не «заигрывает» с покупателем."
  },
  {
    icon: HeartCrack,
    title: "Отсутствие эмоций",
    description: "недвижимость вызывает равнодушие, а не желание «хочу здесь жить!»."
  }
];

export function Benefits() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#d4e4f7]/20">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl text-[#2d2d2d]">
            Почему хоумстейджинг важен
          </h2>
          <p className="text-xl text-[#5a5a5a] max-w-2xl mx-auto">
            Без профессиональной подготовки недвижимость теряет в привлекательности и цене
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-[#d4e4f7]/50 hover:border-[#a8c9e8] transition-all duration-300 hover:shadow-xl hover:shadow-[#d4e4f7]/30"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4e4f7] to-[#f5ebe0] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-[#1e3a5f]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl text-[#2d2d2d]">
                      {benefit.title}
                    </h3>
                    <p className="text-[#5a5a5a] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
