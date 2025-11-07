import { Phone, Search, FileCheck, Sparkles, Camera } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Бесплатная консультация",
    description: "Обсуждаем ваши задачи и особенности объекта"
  },
  {
    icon: Search,
    title: "Аудит объекта",
    description: "Анализируем пространство и разрабатываем стратегию"
  },
  {
    icon: FileCheck,
    title: "Договор",
    description: "Фиксируем условия и сроки работы"
  },
  {
    icon: Sparkles,
    title: "Реализация проекта",
    description: "Преобразуем пространство под ключ"
  },
  {
    icon: Camera,
    title: "Фотосъемка и результат",
    description: "Профессиональные фото для успешных продаж"
  }
];

export function ProcessTimeline() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl lg:text-5xl text-[#2d2d2d]">
            Как мы работаем
          </h2>
          <p className="text-xl text-[#5a5a5a] max-w-2xl mx-auto">
            Прозрачный процесс от первого звонка до готового результата
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[#d4e4f7] via-[#a8c9e8] to-[#d4e4f7]"></div>
            
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative flex flex-col items-center text-center">
                    {/* Icon Circle */}
                    <div className="relative z-10 w-40 h-40 rounded-full bg-gradient-to-br from-white to-[#d4e4f7]/30 border-4 border-white shadow-xl shadow-[#d4e4f7]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#d4e4f7] to-[#f5ebe0] flex items-center justify-center">
                        <Icon className="w-10 h-10 text-[#1e3a5f]" strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3 px-2">
                      <div className="inline-block px-4 py-1 rounded-full bg-[#d4e4f7]/30 text-sm text-[#1e3a5f]">
                        Шаг {index + 1}
                      </div>
                      <h3 className="text-xl text-[#2d2d2d]">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#5a5a5a]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#d4e4f7] to-[#f5ebe0] flex items-center justify-center shadow-lg shadow-[#d4e4f7]/30">
                    <Icon className="w-10 h-10 text-[#1e3a5f]" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex-1 space-y-2 pt-2">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#d4e4f7]/30 text-sm text-[#1e3a5f]">
                    Шаг {index + 1}
                  </div>
                  <h3 className="text-xl text-[#2d2d2d]">
                    {step.title}
                  </h3>
                  <p className="text-[#5a5a5a]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
