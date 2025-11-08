"use client";

import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Проект 1",
    subtitle: "Квартира в центре Петербурга",
    description: "Двухкомнатная квартира в историческом центре города. Скандинавский стиль с элементами классики.",
    coverImage: "https://images.unsplash.com/photo-1760072513376-67a46aab0fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMHN0YWdpbmd8ZW58MXx8fHwxNzYyMTg5NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1760072513376-67a46aab0fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMHN0YWdpbmd8ZW58MXx8fHwxNzYyMTg5NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1753791913941-efa7de4e1b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBsaXZpbmclMjByb29tJTIwYmVpZ2UlMjBzb2ZhfGVufDF8fHx8MTc2MjE4OTU4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1515877131530-5693bde51d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyMzMzMzM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ]
  },
  {
    id: 2,
    title: "Проект 2", 
    subtitle: "Загородный дом",
    description: "Просторный загородный дом в современном скандинавском стиле с акцентом на натуральные материалы.",
    coverImage: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjIxNzE1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjIxNzE1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1616418928117-4e6d19be2df1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc2MjMyNjg1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1685644201646-9e836c398c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaW5pbmclMjByb29tJTIwZGVzaWdufGVufDF8fHx8MTc2MjQwMzU4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    ]
  },
  {
    id: 3,
    title: "Проект 3",
    subtitle: "Лофт апартаменты",
    description: "Просторные лофт апартаменты с индустриальным стилем и высокими потолками.",
    coverImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2Z0JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyNDA4Mjk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2Z0JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyNDA4Mjk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2Z0JTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjI0MDgzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ]
  },
  {
    id: 4,
    title: "Проект 4",
    subtitle: "Минималистичная квартира",
    description: "Чистые линии, нейтральные цвета и функциональное пространство.",
    coverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXBhcnRtZW50fGVufDF8fHx8MTc2MjQwODMwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXBhcnRtZW50fGVufDF8fHx8MTc2MjQwODMwMXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbXxlbnwxfHx8fDE3NjI0MDgzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ]
  },
  {
    id: 5,
    title: "Проект 5",
    subtitle: "Пентхаус с панорамным видом",
    description: "Роскошный пентхаус с панорамными окнами и террасой.",
    coverImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjI0MDgzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjI0MDgzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ]
  },
  {
    id: 6,
    title: "Проект 6",
    subtitle: "Семейный дом",
    description: "Уютный семейный дом с продуманной планировкой.",
    coverImage: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBob3VzZSUyMGludGVyaW9yfGVufDF8fHx8MTc2MjQwODMwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1571624436279-b272aff752b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBob3VzZSUyMGludGVyaW9yfGVufDF8fHx8MTc2MjQwODMwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    ]
  }
  
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2); // Начинаем с 2 проектов
  const [imageLoaded, setImageLoaded] = useState(false);

  const openProject = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setImageLoaded(false);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setImageLoaded(false);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => {
        const newIndex = prev === selectedProject.gallery.length - 1 ? 0 : prev + 1;
        setImageLoaded(false);
        return newIndex;
      });
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => {
        const newIndex = prev === 0 ? selectedProject.gallery.length - 1 : prev - 1;
        setImageLoaded(false);
        return newIndex;
      });
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Загружаем по 2 проекта при каждом нажатии
  const loadMore = () => {
    setVisibleCount(prev => prev + 2);
  };

  // Закрытие модального окна по ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeProject();
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl text-foreground">
            Наши проекты
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Примеры преобразований пространства
          </p>
        </div>

        {/* Сетка проектов - ТЕКСТ ПОД ИЗОБРАЖЕНИЕМ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {visibleProjects.map((project) => (
            <div 
              key={project.id}
              className="group cursor-pointer"
              onClick={() => openProject(project)}
            >
              {/* Изображение */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-4">
                <div className="relative w-full h-full">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Текст под изображением */}
              <div className="space-y-2">
                <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка "Еще проекты" */}
        {hasMore && (
          <div className="text-center custom-margin">
            <button
              onClick={loadMore}
              className="
                inline-flex items-center justify-center
                bg-primary text-primary-foreground
                hover:bg-primary/90
                px-8 py-4
                rounded-full
                text-lg font-medium
                transition-all duration-300
                shadow-lg hover:shadow-xl
                transform hover:-translate-y-1
                border-2 border-primary/20
                min-w-[200px]
                mt-30
              "
            >
              Еще проекты
              <svg 
                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            {/* Индикатор загрузки */}
          </div>
        )}

        {/* Сообщение когда все проекты загружены */}


        {/* Модальное окно галереи - УПРОЩЕННАЯ ВЕРСИЯ БЕЗ МИНИАТЮР */}
        {selectedProject && (
          <div className="modal-overlay" onClick={closeProject}>
            <div className="modal-content-clean" onClick={(e) => e.stopPropagation()}>
              
              {/* Кнопка закрытия */}
              <button
                onClick={closeProject}
                className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Основное изображение */}
              <div className="gallery-image-wrapper-clean">
                <div className="gallery-image-content-clean">
                  <img
                    src={selectedProject.gallery[currentImageIndex]}
                    alt={`${selectedProject.title} - фото ${currentImageIndex + 1}`}
                    className={`gallery-image-clean ${imageLoaded ? 'image-loaded' : 'image-loading'}`}
                    onLoad={handleImageLoad}
                  />
                </div>

                {/* Кнопки навигации */}
                {selectedProject.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="gallery-nav-btn-clean prev"
                      aria-label="Предыдущее фото"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={nextImage}
                      className="gallery-nav-btn-clean next"
                      aria-label="Следующее фото"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Счетчик */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-medium">
                    {currentImageIndex + 1} / {selectedProject.gallery.length}
                  </span>
                </div>

                {/* Информация о проекте */}
                <div className="absolute top-4 left-4 bg-black/50 text-white p-4 rounded-2xl backdrop-blur-sm max-w-md">
                  <h3 className="text-xl font-bold mb-1">{selectedProject.title}</h3>
                  <p className="text-white/80 text-sm">{selectedProject.subtitle}</p>
                  <p className="text-white/70 text-xs mt-2">{selectedProject.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}