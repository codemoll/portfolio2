import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        '.experience-heading',
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

      // Timeline spine animation
      gsap.fromTo(
        '.timeline-spine',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
          },
        }
      );

      // Experience cards animation
      gsap.fromTo(
        '.experience-card',
        { opacity: 0, x: (i) => (i % 2 === 0 ? -50 : 50) },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
          },
        }
      );

      // Timeline dots animation
      gsap.fromTo(
        '.timeline-dot',
        { scale: 0 },
        {
          scale: 1,
          duration: 0.5,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Neadtech Web Global Limited',
      location: 'Lagos, Nigeria',
      period: '2023 - Present',
      type: 'Full-time',
      description:
        'Leading development of custom SaaS and fintech platforms. Building automated WHMCS modules for hosting services and integrating payment gateways and API services.',
      achievements: [
        'Developed custom SaaS and fintech platforms serving 1000+ users',
        'Built automated WHMCS modules reducing billing processing time by 60%',
        'Integrated payment gateways processing $500K+ monthly transactions',
        'Designed and deployed secure hosting infrastructures',
        'Led a team of 4 developers in delivering enterprise solutions',
      ],
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2021 - 2023',
      type: 'Contract',
      description:
        'Built responsive websites and web applications for clients worldwide. Developed e-commerce and business platforms with third-party API integrations.',
      achievements: [
        'Delivered 30+ successful projects for clients across 5 countries',
        'Developed e-commerce platforms generating $2M+ in sales',
        'Integrated 20+ third-party APIs and payment systems',
        'Maintained 100% client satisfaction rate',
        'Provided server management and hosting setup services',
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />

      <div className="relative z-10 section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="experience-heading text-center mb-16 opacity-0">
            <p className="text-purple-400 font-medium mb-4">My Journey</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              A track record of delivering high-quality digital solutions and driving
              business growth through innovative technology.
            </p>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Timeline Spine */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-purple-500 to-purple-600 origin-top timeline-spine" />

            {/* Experience Cards */}
            <div className="space-y-12 lg:space-y-16">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-start gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-dark-900 z-10 timeline-dot shadow-glow" />

                  {/* Content Card */}
                  <div
                    className={`experience-card ml-12 lg:ml-0 lg:w-[calc(50%-3rem)] opacity-0`}
                  >
                    <div className="glass-card-hover p-6 lg:p-8 group">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-purple-600/20 text-purple-400 text-xs font-medium rounded-full">
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {exp.title}
                      </h3>

                      {/* Company */}
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 mb-6">{exp.description}</p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <p className="text-sm text-gray-500 font-medium mb-3">
                          Key Achievements:
                        </p>
                        {exp.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="flex items-start gap-2 text-sm text-gray-400"
                          >
                            <ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
