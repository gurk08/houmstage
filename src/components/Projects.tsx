"use client";

import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

const projects = [
  {
    title: "Проект 1",
    subtitle: "Квартира в центре Петербурга",
    description: "Двухкомнатная квартира в историческом центре города. Скандинавский стиль с элементами классики.",
    coverImage: "https://images.unsplash.com/photo-1760072513376-67a46aab0fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMHN0YWdpbmd8ZW58MXx8fHwxNzYyMTg5NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gallery: [
      "https://images.unsplash.com/photo-1760072513376-67a46aab0fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMHN0YWdpbmd8ZW58MXx8fHwxNzYyMTg5NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1753791913941-efa7de4e1b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBsaXZpbmclMjByb29tJTIwYmVpZ2UlMjBzb2ZhfGVufDF8fHx8MTc2MjE4OTU4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1515877131530-5693bde51d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyMzMzMzM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1759691337823-5b348f5fd98d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmF0aHJvb20lMjBzdGFnaW5nfGVufDF8fHx8MTc2MjQwMzU4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    title: "Проект 2",
    subtitle: "Загородный дом",
    description: "Просторный загородный дом в современном скандинавском стиле с акцентом на натуральные материалы.",
    coverImage: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjIxNzE1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gallery: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjIxNzE1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1616418928117-4e6d19be2df1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc2MjMyNjg1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1685644201646-9e836c398c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaW5pbmclMjByb29tJTIwZGVzaWdufGVufDF8fHx8MTc2MjQwMzU4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1760237295557-ffc53ca601dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMG5hdHVyYWwlMjBsaWdodHxlbnwxfHx8fDE3NjIxNzA0Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenProject = (index: number) => {
    setSelectedProject(index);
    setCurrentImageIndex(0);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedProject !== null) {
      const gallery = projects[selectedProject].gallery;
      setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedProject !== null) {
      const gallery = projects[selectedProject].gallery;
      setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl text-[#2d2d2d]">
            Наши проекты
          </h2>
          <p className="text-xl text-[#5a5a5a] max-w-2xl mx-auto">
            Примеры преобразований пространства
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleOpenProject(index)}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#d4e4f7]/30 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="space-y-2">
                  <h3 className="text-3xl">
                    {project.title}
                  </h3>
                  <p className="text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.subtitle}
                  </p>
                </div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <div className="inline-flex items-center gap-2 text-sm">
                    Посмотреть галерею
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Gallery Dialog */}
        <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && handleCloseProject()}>
          <DialogContent className="max-w-6xl w-full h-[90vh] p-0 gap-0 bg-white/95 backdrop-blur-lg border-[#d4e4f7]">
            {selectedProject !== null && (
              <div className="flex flex-col h-full">
                {/* Header */}
                <DialogHeader className="px-8 py-6 border-b border-[#d4e4f7]/50">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <DialogTitle className="text-3xl text-[#2d2d2d]">
                        {projects[selectedProject].title}
                      </DialogTitle>
                      <DialogDescription className="text-lg text-[#5a5a5a]">
                        {projects[selectedProject].subtitle}
                      </DialogDescription>
                      <p className="text-[#5a5a5a] max-w-2xl">
                        {projects[selectedProject].description}
                      </p>
                    </div>
                  </div>
                </DialogHeader>

                {/* Gallery */}
                <div className="flex-1 relative bg-gradient-to-br from-[#d4e4f7]/10 to-[#f5ebe0]/10 flex items-center justify-center p-8">
                  {/* Main Image */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <ImageWithFallback
                      src={projects[selectedProject].gallery[currentImageIndex]}
                      alt={`${projects[selectedProject].title} - фото ${currentImageIndex + 1}`}
                      className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                    />
                  </div>

                  {/* Navigation Buttons */}
                  {projects[selectedProject].gallery.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrevImage();
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-[#d4e4f7] hover:bg-white hover:scale-110 transition-all shadow-lg flex items-center justify-center group"
                        aria-label="Предыдущее фото"
                      >
                        <ChevronLeft className="w-6 h-6 text-[#1e3a5f] group-hover:-translate-x-0.5 transition-transform" />
                      </button>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNextImage();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-[#d4e4f7] hover:bg-white hover:scale-110 transition-all shadow-lg flex items-center justify-center group"
                        aria-label="Следующее фото"
                      >
                        <ChevronRight className="w-6 h-6 text-[#1e3a5f] group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-[#d4e4f7] shadow-lg">
                    <span className="text-sm text-[#1e3a5f]">
                      {currentImageIndex + 1} / {projects[selectedProject].gallery.length}
                    </span>
                  </div>
                </div>

                {/* Thumbnail Strip */}
                <div className="px-8 py-6 border-t border-[#d4e4f7]/50 bg-white/80 backdrop-blur-sm">
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {projects[selectedProject].gallery.map((image, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                          idx === currentImageIndex
                            ? "border-[#1e3a5f] shadow-lg scale-105"
                            : "border-[#d4e4f7] hover:border-[#a8c9e8] opacity-60 hover:opacity-100"
                        }`}
                      >
                        <ImageWithFallback
                          src={image}
                          alt={`Миниатюра ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}