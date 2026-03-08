import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        '.projects-heading',
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

      // Project cards animation
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: carouselRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'Palmigo Fintech Platform',
      category: 'Fintech',
      image: '/images/project-palmigo.jpg',
      description:
        'A comprehensive fintech platform featuring virtual cards, user transactions, and wallet systems. Built with secure payment processing APIs and real-time transaction tracking.',
      technologies: ['Laravel', 'React', 'MySQL', 'Stripe API', 'Node.js'],
      features: [
        'Virtual card generation and management',
        'Real-time transaction processing',
        'Multi-currency wallet system',
        'Secure payment gateway integration',
        'User authentication and KYC',
      ],
      liveUrl: '#',
      githubUrl: '#',
      stats: { users: '2.5K', transactions: '$1M+' },
    },
    {
      title: 'WHMCS Automation Module',
      category: 'Hosting Automation',
      image: '/images/project-whmcs.jpg',
      description:
        'Custom WHMCS module with automated reseller billing logic, tier pricing, account counting, and annual invoice generation for hosting providers.',
      technologies: ['PHP', 'WHMCS', 'MySQL', 'cPanel API', 'Stripe'],
      features: [
        'Automated tier pricing system',
        'Account counting and management',
        'Annual invoice generation',
        'Reseller billing automation',
        'Integration with cPanel/WHM',
      ],
      liveUrl: '#',
      githubUrl: '#',
      stats: { users: '500+', efficiency: '60%' },
    },
    {
      title: 'ItanHub Yoruba Stories',
      category: 'Content Platform',
      image: '/images/project-itanhub.jpg',
      description:
        'A cultural content management system for Yoruba stories with categorization, monetization features, and an immersive reading experience.',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'AWS S3', 'Paystack'],
      features: [
        'Story categorization and tagging',
        'Monetization with subscriptions',
        'Audio narration support',
        'User-generated content',
        'Cultural preservation features',
      ],
      liveUrl: '#',
      githubUrl: '#',
      stats: { stories: '1K+', readers: '5K+' },
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-purple-900/10 to-dark-900" />

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="projects-heading text-center mb-16 opacity-0">
            <p className="text-purple-400 font-medium mb-4">My Portfolio</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Showcasing some of my best work in fintech, automation, and content
              management systems.
            </p>
          </div>

          {/* Projects Grid */}
          <div ref={carouselRef} className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card glass-card-hover overflow-hidden group opacity-0"
              >
                {/* Image */}
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-lg font-bold text-white">{value}</p>
                        <p className="text-xs text-gray-400 capitalize">{key}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-md">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Features Preview */}
                  <div className="space-y-1 mb-6">
                    {project.features.slice(0, 3).map((feature, featIndex) => (
                      <div
                        key={featIndex}
                        className="flex items-center gap-2 text-xs text-gray-500"
                      >
                        <Layers className="w-3 h-3 text-purple-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-purple-500/50 text-white font-medium rounded-full hover:bg-purple-500/10 hover:border-purple-500 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
