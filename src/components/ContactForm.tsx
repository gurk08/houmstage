"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Send } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success("Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", contact: "", message: "" });
  };

  return (
    <section id="contact-form" className="py-24 bg-gradient-to-br from-[#d4e4f7]/40 via-white to-[#f5ebe0]/30">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl text-[#2d2d2d]">
                Получить консультацию
              </h2>
              <p className="text-xl text-[#5a5a5a]">
                Оставьте заявку, и я свяжусь с вами в удобное время для обсуждения вашего проекта
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#2d2d2d]">
                  Ваше имя
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white/80 backdrop-blur-sm border-[#d4e4f7] rounded-2xl px-6 py-6 focus:border-[#a8c9e8] focus:ring-[#a8c9e8]"
                  placeholder="Как к вам обращаться?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact" className="text-[#2d2d2d]">
                  Телефон или Telegram
                </Label>
                <Input
                  id="contact"
                  type="text"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  required
                  className="bg-white/80 backdrop-blur-sm border-[#d4e4f7] rounded-2xl px-6 py-6 focus:border-[#a8c9e8] focus:ring-[#a8c9e8]"
                  placeholder="+7 (___) ___-__-__ или @username"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#2d2d2d]">
                  Сообщение
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="bg-white/80 backdrop-blur-sm border-[#d4e4f7] rounded-2xl px-6 py-4 resize-none focus:border-[#a8c9e8] focus:ring-[#a8c9e8]"
                  placeholder="Расскажите о вашем объекте или задаче..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#1e3a5f] hover:bg-[#1e3a5f]/90 text-white px-8 py-6 rounded-2xl shadow-xl shadow-[#1e3a5f]/20 group"
              >
                <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Получить консультацию
              </Button>
            </form>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#d4e4f7]/40">
              <ImageWithFallback
                src="images/ksenia.webp"
                alt="Modern Interior"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
