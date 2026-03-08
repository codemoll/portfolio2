import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code2,
  Database,
  Server,
  Cloud,
  Layers,
  Cpu,
  Shield,
  Zap,
  Globe,
  Settings,
  Terminal,
  GitBranch,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        '.skills-heading',
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

      // Category cards animation
      gsap.fromTo(
        '.skill-category',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 80%',
          },
        }
      );

      // Skill items stagger animation
      gsap.fromTo(
        '.skill-item',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 70%',
          },
        }
      );

      // Orbit rotation animation
      gsap.to('.orbit-ring-1', {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: 'none',
      });

      gsap.to('.orbit-ring-2', {
        rotation: -360,
        duration: 40,
        repeat: -1,
        ease: 'none',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-blue-500 to-blue-700',
      skills: [
        { name: 'PHP', icon: Code2 },
        { name: 'Laravel', icon: Layers },
        { name: 'MySQL', icon: Database },
        { name: 'REST API', icon: Globe },
      ],
    },
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'from-purple-500 to-purple-700',
      skills: [
        { name: 'HTML5', icon: Code2 },
        { name: 'CSS3', icon: Layers },
        { name: 'JavaScript', icon: Terminal },
        { name: 'React', icon: Zap },
      ],
    },
    {
      title: 'Systems & Infrastructure',
      icon: Cloud,
      color: 'from-green-500 to-green-700',
      skills: [
        { name: 'Linux Admin', icon: Terminal },
        { name: 'cPanel/WHMCS', icon: Settings },
        { name: 'Cloud Hosting', icon: Cloud },
        { name: 'Server Security', icon: Shield },
      ],
    },
    {
      title: 'Specializations',
      icon: Cpu,
      color: 'from-orange-500 to-orange-700',
      skills: [
        { name: 'Fintech Systems', icon: Database },
        { name: 'SaaS Architecture', icon: Layers },
        { name: 'Payment Gateways', icon: Globe },
        { name: 'WHMCS Modules', icon: Settings },
      ],
    },
  ];

  const orbitSkills = [
    { name: 'Git', icon: GitBranch, angle: 0 },
    { name: 'Docker', icon: Layers, angle: 45 },
    { name: 'AWS', icon: Cloud, angle: 90 },
    { name: 'CI/CD', icon: Zap, angle: 135 },
    { name: 'Nginx', icon: Server, angle: 180 },
    { name: 'Redis', icon: Database, angle: 225 },
    { name: 'API', icon: Globe, angle: 270 },
    { name: 'Security', icon: Shield, angle: 315 },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="skills-heading text-center mb-16 opacity-0">
            <p className="text-purple-400 font-medium mb-4">My Expertise</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life and build scalable,
              high-performance digital solutions.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="skills-grid grid md:grid-cols-2 gap-6 lg:gap-8 mb-20">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="skill-category glass-card-hover p-6 lg:p-8 group"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="skill-item flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group/item"
                    >
                      <skill.icon className="w-5 h-5 text-purple-400 group-hover/item:text-purple-300 transition-colors" />
                      <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Orbital Skills Visualization */}
          <div className="relative flex justify-center items-center py-12">
            <div ref={orbitRef} className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center shadow-glow-lg">
                  <Code2 className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                </div>
              </div>

              {/* Orbit Ring 1 */}
              <div className="orbit-ring-1 absolute inset-0 border-2 border-dashed border-purple-500/30 rounded-full" />

              {/* Orbit Ring 2 */}
              <div
                className="orbit-ring-2 absolute inset-8 lg:inset-12 border-2 border-dashed border-purple-500/20 rounded-full"
                style={{ animationDirection: 'reverse' }}
              />

              {/* Orbit Skills */}
              {orbitSkills.map((skill, index) => {
                const radius = 140;
                const angleRad = (skill.angle * Math.PI) / 180;
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;

                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div className="flex flex-col items-center gap-2 group">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-dark-800 border border-purple-500/30 rounded-full flex items-center justify-center hover:bg-purple-600 hover:border-purple-600 transition-all duration-300 hover:scale-110 cursor-pointer shadow-lg">
                        <skill.icon className="w-5 h-5 lg:w-6 lg:h-6 text-purple-400 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
