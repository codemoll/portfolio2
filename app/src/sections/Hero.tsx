import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-greeting',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          '.hero-name',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.4'
        )
        .fromTo(
          '.hero-title',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          '.hero-description',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
          '-=0.4'
        )
        .fromTo(
          '.hero-social',
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.6, stagger: 0.1 },
          '-=0.3'
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.9, rotateY: -15 },
          { opacity: 1, scale: 1, rotateY: 0, duration: 1.2 },
          '-=1'
        );

      // Floating animation for image
      gsap.to(imageRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, heroRef);

    // Particle animation
    const canvas = particlesRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
          });
        }

        let animationId: number;
        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          particles.forEach((particle, i) => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(124, 58, 237, 0.5)';
            ctx.fill();

            // Draw connections
            particles.slice(i + 1).forEach((other) => {
              const dx = particle.x - other.x;
              const dy = particle.y - other.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 150) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(other.x, other.y);
                ctx.strokeStyle = `rgba(124, 58, 237, ${0.2 * (1 - distance / 150)})`;
                ctx.stroke();
              }
            });
          });

          animationId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
          cancelAnimationFrame(animationId);
          window.removeEventListener('resize', handleResize);
        };
      }
    }

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Particle Canvas */}
      <canvas
        ref={particlesRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.6 }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 w-full section-padding py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div ref={textRef} className="order-2 lg:order-1">
              <p className="hero-greeting text-purple-400 font-medium mb-4 opacity-0">
                Hello, I'm
              </p>
              <h1 className="hero-name text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 opacity-0">
                Olamilekan
                <span className="block text-gradient">Ademola</span>
              </h1>
              <h2 className="hero-title text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium mb-6 opacity-0">
                Full Stack Developer
              </h2>
              <p className="hero-description text-gray-400 text-base lg:text-lg max-w-xl mb-8 opacity-0">
                I craft scalable digital solutions with precision and creativity.
                Specializing in SaaS platforms, fintech systems, and automation tools.
                Founder of Neadtech Web Global Limited.
              </p>

              {/* CTA Buttons */}
              <div className="hero-cta flex flex-wrap gap-4 mb-10 opacity-0">
                <button
                  onClick={() => scrollToSection('#projects')}
                  className="btn-primary flex items-center gap-2"
                >
                  View My Work
                  <ArrowDown size={18} />
                </button>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="btn-outline"
                >
                  Get In Touch
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-purple-600 hover:border-purple-600 transition-all duration-300 opacity-0"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/olamilekan-ademola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-purple-600 hover:border-purple-600 transition-all duration-300 opacity-0"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:olamilekan.ademola.2016@gmail.com"
                  className="hero-social p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-purple-600 hover:border-purple-600 transition-all duration-300 opacity-0"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div
                ref={imageRef}
                className="relative opacity-0"
                style={{ perspective: '1000px' }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-purple-600/30 rounded-3xl blur-3xl transform scale-110" />

                {/* Image Container */}
                <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem] rounded-3xl overflow-hidden border border-white/10">
                  <img
                    src="/images/hero-portrait.jpg"
                    alt="Olamilekan Ademola"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-4 glass-card px-4 py-3 animate-float">
                  <p className="text-sm text-gray-400">Experience</p>
                  <p className="text-2xl font-bold text-white">5+ Years</p>
                </div>

                {/* Floating Badge 2 */}
                <div
                  className="absolute -top-4 -right-4 glass-card px-4 py-3 animate-float"
                  style={{ animationDelay: '1s' }}
                >
                  <p className="text-sm text-gray-400">Projects</p>
                  <p className="text-2xl font-bold text-white">50+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-purple-500 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
