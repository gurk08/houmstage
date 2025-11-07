"use client";
import { Phone, Send, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#f5ebe0]/40 to-white py-16">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl text-[#2d2d2d]">
              Хоумстейджинг
            </h3>
            <p className="text-[#5a5a5a] max-w-sm">
              Профессиональная подготовка недвижимости к продаже в Санкт-Петербурге и онлайн
            </p>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h4 className="text-xl text-[#2d2d2d]">
              Контакты
            </h4>
            <div className="space-y-3">
              <a 
                href="tel:+79999999999" 
                className="flex items-center gap-3 text-[#5a5a5a] hover:text-[#1e3a5f] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#d4e4f7]/50 flex items-center justify-center group-hover:bg-[#a8c9e8]/50 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+7 (999) 999-99-99</span>
              </a>
              
              <a 
                href="https://t.me/username" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#5a5a5a] hover:text-[#1e3a5f] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#d4e4f7]/50 flex items-center justify-center group-hover:bg-[#a8c9e8]/50 transition-colors">
                  <Send className="w-5 h-5" />
                </div>
                <span>@homestaging_spb</span>
              </a>
              
              <a 
                href="https://instagram.com/username" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#5a5a5a] hover:text-[#1e3a5f] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#d4e4f7]/50 flex items-center justify-center group-hover:bg-[#a8c9e8]/50 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <span>@homestaging_spb</span>
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h4 className="text-xl text-[#2d2d2d]">
              График работы
            </h4>
            <div className="space-y-2 text-[#5a5a5a]">
              <p>Пн - Пт: 10:00 - 19:00</p>
              <p>Сб: 11:00 - 16:00</p>
              <p>Вс: по договоренности</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#d4e4f7]/50 text-center text-sm text-[#5a5a5a]">
          <p>© {new Date().getFullYear()} Хоумстейджинг в Петербурге. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
