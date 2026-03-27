import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const projectData = [
  {
    id: "project-1",
    title: "SENO — Freelance Web Studio",
    description: "A real, revenue-generating freelance web studio I built. It targets small businesses that need fast, mobile-first websites to generate inquiries.",
    href: "https://seno-sand.vercel.app/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "project-2",
    title: "NOIDLE — Community Platform",
    description: "A Discord server landing page for a tech community (78+ members). Built with a bold cyberpunk identity and custom animated counters.",
    href: "https://noidle.vercel.app",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "project-3",
    title: "Sweet Layers — Cake Shop",
    description: "A beautifully designed landing page with warm aesthetics, showcasing product listings and a fully responsive design optimized for mobile.",
    href: "https://github.com/sa50tyam11/Cake-Shop",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1080&q=80",
  },
  {
    id: "project-4",
    title: "Face & Eye Detector",
    description: "A real-time face and eye detection system built in C++ using OpenCV's Haar Cascade classifiers, demonstrating strong systems programming.",
    href: "https://github.com/sa50tyam11/face-eye-detection-opencv",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee57d5?auto=format&fit=crop&w=1080&q=80",
  },
];

export function ProjectsGallery() {
  const [carouselApi, setCarouselApi] = useState();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => carouselApi.off("select", updateSelection);
  }, [carouselApi]);

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-purple-400">
              Projects that actually shipped.
            </h2>
            <p className="max-w-xl text-gray-400">
              A collection of live platforms, landing pages, and computer vision systems I've built.
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button size="icon" variant="outline" onClick={() => carouselApi?.scrollPrev()} disabled={!canScrollPrev}>
              <ArrowLeft className="size-5" />
            </Button>
            <Button size="icon" variant="outline" onClick={() => carouselApi?.scrollNext()} disabled={!canScrollNext}>
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel setApi={setCarouselApi} opts={{ align: "start", loop: false }}>
          <CarouselContent className="ml-0 md:ml-[calc((100vw-1536px)/2+2rem)] lg:ml-[calc((100vw-1024px)/2+2rem)] xl:ml-[calc((100vw-1280px)/2+2rem)]">
            {projectData.map((item) => (
              <CarouselItem key={item.id} className="max-w-[85vw] sm:max-w-[400px] md:max-w-[450px] pl-4 md:pl-6">
                <a href={item.href} target="_blank" rel="noreferrer" className="group block rounded-2xl border border-gray-800 bg-gray-900/50 overflow-hidden transition-all hover:border-purple-500/50">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img src={item.image} alt={item.title} className="absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="mb-2 text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="mb-4 line-clamp-2 text-sm text-gray-400">
                        {item.description}
                      </p>
                      <div className="flex items-center text-sm font-semibold text-white">
                        View Project <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}