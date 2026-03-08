import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Rocket, Users, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        '.about-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Content animation
      gsap.fromTo(
        '.about-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );

      // Stats counter animation
      const statElements = statsRef.current?.querySelectorAll('.stat-number');
      statElements?.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target') || '0');
        gsap.fromTo(
          stat,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
            },
          }
        );
      });

      // Stat cards animation
      gsap.fromTo(
        '.stat-card',
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Code2, value: 50, suffix: '+', label: 'Projects Completed' },
    { icon: Rocket, value: 5, suffix: '+', label: 'Years Experience' },
    { icon: Users, value: 30, suffix: '+', label: 'Happy Clients' },
    { icon: Award, value: 100, suffix: '%', label: 'Client Satisfaction' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/10 to-transparent" />

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="about-heading text-center mb-16 opacity-0">
            <p className="text-purple-400 font-medium mb-4">Get To Know Me</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            {/* Image */}
            <div className="about-content relative opacity-0">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-purple-500/30 rounded-3xl" />
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-purple-600/20 rounded-3xl" />

                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden border border-white/10">
                  <img
                    src="/images/hero-portrait.jpg"
                    alt="Olamilekan Ademola"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="about-content opacity-0">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Results-Driven Full-Stack Developer & Tech Entrepreneur
              </h3>

              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  I'm a passionate Full-Stack Web Developer with strong experience in building
                  scalable SaaS platforms, fintech systems, hosting infrastructures, and
                  automation tools. As the Founder of{' '}
                  <span className="text-purple-400 font-medium">
                    Neadtech Web Global Limited
                  </span>
                  , I've helped businesses transform their digital presence.
                </p>
                <p>
                  My expertise spans across Laravel, WHMCS module development, API integrations,
                  and secure server deployment. I'm dedicated to developing high-performance
                  digital solutions that solve real-world business problems.
                </p>
                <p>
                  I'm passionate about staying at the forefront of technology and continuously
                  learning new skills to deliver cutting-edge solutions. Open to remote and
                  contract opportunities worldwide.
                </p>
              </div>

              {/* Quick Info */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="glass-card p-4">
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="text-white font-medium">Lagos, Nigeria</p>
                </div>
                <div className="glass-card p-4">
                  <p className="text-sm text-gray-500 mb-1">Availability</p>
                  <p className="text-white font-medium">Open to Remote Work</p>
                </div>
                <div className="glass-card p-4">
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="text-white font-medium text-sm">
                    olamilekan.ademola.2016@gmail.com
                  </p>
                </div>
                <div className="glass-card p-4">
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <p className="text-white font-medium">+234 813 797 3649</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card glass-card-hover p-6 lg:p-8 text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-xl mb-4 group-hover:bg-purple-600/30 transition-colors">
                  <stat.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  <span className="stat-number" data-target={stat.value}>
                    0
                  </span>
                  <span className="text-purple-500">{stat.suffix}</span>
                </div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
