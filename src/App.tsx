/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Home, RefreshCcw, Quote, BookOpen, Heart, ShieldCheck } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { slides, Slide } from './data/slides';

const Icons: Record<string, any> = {
  title: Home,
  content: BookOpen,
  split: Heart,
  quote: Quote,
};

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(s => s + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(s => s - 1);
    }
  };

  const reset = () => {
    setDirection(-1);
    setCurrentSlide(0);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') reset();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-background text-[#1A1A1A] font-sans selection:bg-accent/20 selection:text-accent overflow-hidden relative flex flex-col items-center justify-center">
      {/* Immersive Background Orbs - Light Premium */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#E5DACE] rounded-full blur-[160px] opacity-[0.5] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#D7E3E5] rounded-full blur-[140px] opacity-[0.4] pointer-events-none" />
      
      {/* 16:9 Frame Container */}
      <div className="relative w-full aspect-video max-w-[1920px] flex flex-col">
        {/* Top Navigation */}
        <nav className="relative z-50 flex justify-between items-center px-12 py-10">
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={reset}>
            <div className="w-12 h-12 border border-black/5 rounded-full flex items-center justify-center group-hover:border-accent transition-colors duration-500 bg-white/50 backdrop-blur-sm">
              <span className="text-accent text-2xl font-serif">Σ</span>
            </div>
            <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-black/40 group-hover:text-black transition-colors">Etika va Baxt</span>
          </div>
          <div className="hidden md:flex space-x-10 text-[10px] uppercase tracking-[0.3em] text-black/20 font-bold">
            <span className={currentSlide < 2 ? 'text-black' : ''}>01. Kirish</span>
            <span className={currentSlide >= 2 && currentSlide < 5 ? 'text-black' : ''}>02. Nazariyalar</span>
            <span className={currentSlide >= 5 && currentSlide < 8 ? 'text-black' : ''}>03. Prinsiplar</span>
            <span className={currentSlide >= 8 ? 'text-black' : ''}>04. Xulosa</span>
          </div>
        </nav>

        {/* Subtle UI Decorations */}
        <div className="absolute top-1/2 right-12 transform -translate-y-1/2 flex flex-col space-y-6 opacity-10 pointer-events-none hidden lg:flex">
          <div className="w-[1px] h-32 bg-black" />
          <div className="w-[1px] h-8 bg-black" />
        </div>

        {/* Main Content Area */}
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-24 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={{
              initial: (d: number) => ({
                x: d > 0 ? 60 : -60,
                opacity: 0,
                filter: "blur(10px)",
                scale: 0.98,
              }),
              active: {
                x: 0,
                opacity: 1,
                filter: "blur(0px)",
                scale: 1,
              },
              exit: (d: number) => ({
                x: d > 0 ? -60 : 60,
                opacity: 0,
                filter: "blur(10px)",
                scale: 0.98,
              }),
            }}
            initial="initial"
            animate="active"
            exit="exit"
            transition={{ type: "spring", damping: 30, stiffness: 150 }}
            className="w-full"
          >
            {renderSlide(slide)}
          </motion.div>
        </AnimatePresence>
        </main>

        {/* Bottom Progress / Footer */}
        <footer className="relative z-50 px-12 py-12 flex items-end justify-between">
          <div className="flex flex-col space-y-8">
            <div className="flex space-x-2">
              {slides.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-[2px] transition-all duration-700 rounded-full ${
                    idx === currentSlide ? 'w-16 bg-accent' : 'w-4 bg-black/5'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-[9px] uppercase tracking-[0.5em] text-black/30 font-bold">Inson intilishlarining oliy maqsadi sifatida baxt</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-12">
            <div className="text-right hidden sm:block">
              <span className="block text-[10px] text-black/20 uppercase tracking-[0.3em] mb-2 font-bold">Classification</span>
              <span className="text-sm font-serif italic text-accent capitalize">{slide.type} viewpoint</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center text-black/20 hover:text-accent hover:border-accent disabled:opacity-0 transition-all cursor-pointer bg-white/40 backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="w-16 h-16 rounded-full bg-white border border-black/5 flex items-center justify-center text-black/40 shadow-xl shadow-black/[0.03] hover:text-white hover:bg-accent hover:border-accent transition-all cursor-pointer group"
              >
                <ChevronRight className="w-7 h-7 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function renderSlide(slide: Slide) {
  const imageUrl = slide.imagePrompt 
    ? `https://image.pollinations.ai/prompt/${encodeURIComponent(slide.imagePrompt)}?width=1024&height=1024&nologo=true`
    : null;

  switch (slide.type) {
    case 'title':
      return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center h-full">
          <div className="lg:col-span-12 flex flex-col items-center justify-center text-center">
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-serif italic text-3xl mb-4"
            >
              Asosiy Kategoriya
            </motion.span>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[70px] md:text-[180px] font-serif leading-[0.8] tracking-tighter mb-12 uppercase text-[#121212]"
            >
              {slide.title.includes(':') ? slide.title.split(':')[0] : slide.title}<span className="text-accent">.</span>
            </motion.h1>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-[2px] w-48 bg-accent mb-12"
            />
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl text-black/40 max-w-2xl leading-relaxed font-light font-serif italic"
            >
              {slide.content}
            </motion.p>
          </div>
        </div>
      );
    case 'quote':
      return (
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20 px-4">
          <div className="flex-1 relative order-2 lg:order-1">
             <Quote className="absolute top-[-50px] left-[-30px] w-32 h-32 text-accent/5 -z-10" />
             <motion.div
               initial={{ y: 30, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="text-4xl md:text-6xl font-serif italic font-light leading-tight text-black/80 mb-12"
             >
               <ReactMarkdown>{slide.content}</ReactMarkdown>
             </motion.div>
             <div className="flex items-center gap-8">
               <div className="h-[2px] w-24 bg-accent" />
               <span className="text-xs uppercase tracking-[0.4em] font-black text-black/20">{slide.title}</span>
             </div>
          </div>
          {imageUrl && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full lg:w-[500px] aspect-[4/5] order-1 lg:order-2 shrink-0 bg-white p-4 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-1000"
            >
              <img 
                src={imageUrl} 
                className="w-full h-full object-cover grayscale brightness-110"
                alt="Philosophy"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          )}
        </div>
      );
    case 'split':
      return (
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-32 items-center h-full auto-rows-fr">
          <div className="lg:col-span-5 space-y-10 flex flex-col justify-center">
            <span className="text-accent font-serif italic text-2xl tracking-wide">Nazariy Yondashuv</span>
            <h2 className="text-6xl md:text-8xl font-serif font-light leading-[0.9] tracking-tighter text-[#121212]">
              {slide.title}
            </h2>
            <div className="h-1 w-32 bg-accent/30" />
            {imageUrl && (
               <div className="aspect-video w-full rounded-[2rem] overflow-hidden border border-black/[0.03] shadow-2xl">
                 <img src={imageUrl} className="w-full h-full object-cover brightness-105" alt="Theory" referrerPolicy="no-referrer" />
               </div>
            )}
          </div>
          <div className="lg:col-span-7 bg-white p-12 md:p-20 rounded-[3rem] shadow-xl shadow-black/[0.02] border border-black/5 flex flex-col justify-center min-h-[400px]">
             <div className="text-xl md:text-2xl text-black/60 leading-relaxed font-light prose-stone">
               <ReactMarkdown>{slide.content}</ReactMarkdown>
             </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 items-center min-h-[60vh]">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="lg:col-span-5 space-y-8 flex flex-col justify-center"
          >
            <h2 className="text-6xl md:text-8xl font-serif font-light tracking-tighter leading-none text-[#121212]">
              {slide.title}
            </h2>
            <div className="h-0.5 w-16 bg-accent" />
            {imageUrl && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-square w-full rounded-[3rem] overflow-hidden border border-black/[0.05] shadow-2xl"
              >
                <img src={imageUrl} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[8s] brightness-105" alt="Context" referrerPolicy="no-referrer" />
              </motion.div>
            )}
          </motion.div>
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7 space-y-12 flex flex-col justify-center"
          >
            <div className="text-2xl md:text-3xl text-black/50 leading-relaxed font-light prose-stone selection:bg-accent/10">
              <ReactMarkdown>{slide.content}</ReactMarkdown>
            </div>
            {slide.id === 9 && (
              <div className="p-10 bg-accent/[0.03] border border-accent/10 rounded-[2rem] mt-4 shadow-sm">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-black block mb-4">Introspection</span>
                 <p className="text-lg italic text-black/60 font-serif">Siz uchun haqiqiy qadriyat nimada?</p>
              </div>
            )}
          </motion.div>
        </div>
      );
  }
}
