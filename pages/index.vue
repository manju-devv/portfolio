<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { motion } from "motion-v";

const imageFailed = ref<boolean>(false);
const activeTechIndex = ref<number>(0);
let techHighlightInterval: ReturnType<typeof setInterval> | undefined;

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Vue.js",
  "Nuxt",
  "Node.js",
  "Express",
  "MongoDB",
  "MSSQL",
  "Redis",
  "Keycloak",
  "Docker",
  "AWS",
  "Linux",
];

const services = [
  {
    number: "01",
    title: "Full Stack Development",
    icon: "⌘",
    description:
      "Custom web applications built from the ground up, combining responsive interfaces, robust backend systems and scalable databases.",
    tags: ["React", "Vue", "Nuxt", "Node.js"],
  },
  {
    number: "02",
    title: "AI Integration & Automation",
    icon: "✳",
    description:
      "Integrate AI capabilities into business applications, including intelligent chatbots, document processing, AI-powered workflows and API integrations.",
    tags: ["LLM APIs", "AI Integration", "Automation"],
  },
  {
    number: "03",
    title: "Backend & API Engineering",
    icon: "⌘",
    description:
      "Reliable backend architecture, REST APIs, authentication, authorization, database design and performance optimization.",
    tags: ["Node.js", "MongoDB", "MSSQL", "Redis"],
  },
  {
    number: "04",
    title: "Business Applications",
    icon: "▦",
    description:
      "Tailored CRM, admin dashboards, inventory systems, management portals and workflow-driven business applications.",
    tags: ["Dashboards", "CRM", "RBAC"],
  },
  {
    number: "05",
    title: "Cloud & DevOps",
    icon: "☁",
    description:
      "Containerization, cloud infrastructure, application hosting, CI/CD workflows and Linux-based deployments.",
    tags: ["Docker", "AWS", "Linux", "CI/CD"],
  },
  {
    number: "06",
    title: "Maintenance & Optimization",
    icon: "↗",
    description:
      "Bug fixing, performance improvements, security updates, feature enhancements and ongoing technical support.",
    tags: ["Testing", "Optimization", "Support"],
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "Understand your business, goals, users and requirements. Define the scope, features and development roadmap.",
  },
  {
    number: "02",
    title: "UI/UX & Architecture",
    description:
      "Design user experiences, plan application architecture, database structures and API contracts.",
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "Build responsive frontend interfaces, backend services, databases and third-party or AI integrations.",
  },
  {
    number: "04",
    title: "Testing & Quality",
    description:
      "Validate functionality, fix defects, test responsiveness and improve reliability and security.",
  },
  {
    number: "05",
    title: "Deployment & Launch",
    description:
      "Configure hosting, Docker, cloud infrastructure, environment variables and production deployment.",
  },
  {
    number: "06",
    title: "Maintenance & Growth",
    description:
      "Monitor the application, resolve issues, introduce new features and continuously improve performance.",
  },
];
const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.15,
    },
  },
};

const heroItem = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const heroImage = {
  hidden: {
    opacity: 0,
    x: 35,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const floatingCard = {
  hidden: {
    opacity: 0,
    y: 15,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.9,
      ease: "easeOut",
    },
  },
};
onMounted(() => {
  techHighlightInterval = setInterval(() => {
    activeTechIndex.value =
      (activeTechIndex.value + 1) % technologies.length;
  }, 4000);
});

onUnmounted(() => {
  if (techHighlightInterval) {
    clearInterval(techHighlightInterval);
  }
});
</script>

<template>
  <main>
    <!-- Navigation -->
    <AppNavbar />

    <!-- Hero -->

    <!-- Hero -->
    <section id="home" class="relative flex min-h-screen items-center overflow-hidden pt-20">
      <!-- Background glow -->
      <div
        class="pointer-events-none absolute -left-40 top-40 h-[450px] w-[450px] rounded-full bg-[#b5f36b]/[0.06] blur-[120px]" />

      <div
        class="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#b5f36b]/[0.07] blur-[130px]" />

      <div
        class="section-container relative flex flex-col items-center gap-14 py-20 lg:flex-row lg:justify-between lg:gap-10 lg:py-24">
        <!-- Left content -->
        <motion.div class="w-full lg:w-[55%]" :variants="heroContainer" initial="hidden" animate="visible">
          <!-- Availability -->
          <motion.div :variants="heroItem" class="mb-7 flex items-center gap-3">
            <span class="h-2.5 w-2.5 rounded-full bg-[#b5f36b] shadow-[0_0_15px_#b5f36b]" />

            <span class="text-xs font-medium tracking-[0.15em] text-[#b5f36b] sm:text-sm">
              OPEN TO FREELANCE OPPORTUNITIES
            </span>
          </motion.div>

          <!-- Role -->
          <motion.p :variants="heroItem" class="section-label mb-5">
            FULL STACK SOFTWARE ENGINEER
          </motion.p>

          <!-- Heading -->
          <motion.h1 :variants="heroItem"
            class="text-5xl font-semibold leading-[1.12] tracking-tight sm:text-6xl xl:text-7xl">
            Ideas into
            <span class="text-[#b5f36b]">intelligent</span>
            digital products.
          </motion.h1>

          <!-- Description -->
          <motion.p :variants="heroItem" class="mt-7 max-w-2xl text-base leading-8 text-[#929b94] md:text-lg">
            I help startups and businesses turn ideas into powerful digital
            products through custom web development, scalable backend
            engineering and AI-powered solutions.
          </motion.p>

          <motion.p :variants="heroItem" class="mt-3 text-sm leading-7 text-[#929b94]">
            From initial planning and design to development, deployment and
            ongoing support — I handle the complete development journey.
          </motion.p>

          <!-- Buttons -->
          <motion.div :variants="heroItem" class="mt-9 flex flex-wrap gap-4">
            <a href="#projects" class="primary-button">
              Explore my work ↗
            </a>

            <a href="#contact" class="outline-button">
              Let's build together
            </a>
            <a href="/files/manju_resume.pdf" download="manju_resume.pdf"
              class="outline-button inline-flex items-center gap-2">
              <span>Download Resume</span>
              <span>↓</span>
            </a>
          </motion.div>

          <!-- Experience -->
          <motion.div :variants="heroItem"
            class="mt-14 grid max-w-full grid-cols-2 gap-8 border-t border-[#252b27] pt-7">
            <div>
              <p class="text-xl sm:text-2xl md:text-3xl font-semibold">2+</p>
              <p class="mt-2 text-sm sm:text-md text-[#929b94]">
                Years of experience
              </p>
            </div>

            <div>
              <p class="text-xl sm:text-2xl md:text-3xl font-semibold">End-to-End</p>
              <p class="mt-2 text-sm sm:text-md text-[#929b94]">
                Product development
              </p>
            </div>
          </motion.div>
        </motion.div>

        <!-- Right visual -->
        <motion.div class="relative mx-auto w-full max-w-[360px] sm:max-w-[440px] lg:mx-0 lg:w-[42%]"
          :variants="heroImage" initial="hidden" animate="visible">
          <div class="absolute inset-5 rounded-[40px] bg-[#b5f36b]/10 blur-3xl" />

          <!-- Profile card -->
          <div
            class="relative overflow-hidden rounded-[28px] border border-[#303a31] bg-[#111512] p-3 shadow-2xl shadow-black/40">
            <div
              class="relative flex aspect-[4/4.5] items-center justify-center overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1c2920] via-[#101713] to-[#090b0a]">
              <div class="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#b5f36b]/20" />

              <div class="absolute -bottom-20 -left-10 h-64 w-64 rounded-full border border-[#b5f36b]/20" />

              <img v-if="!imageFailed" src="/images/profile.webp" alt="Manju, Full Stack Software Engineer"
                class="absolute inset-0 h-full w-full object-cover object-center" @error="imageFailed = true" />

              <!-- Fallback -->
              <div v-else class="relative z-10 px-6 text-center">
                <div
                  class="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-[#b5f36b]/50 bg-[#b5f36b]/10 text-5xl font-bold text-[#b5f36b]">
                  M.
                </div>

                <p class="text-3xl font-semibold">
                  Building the future.
                </p>

                <p class="mt-3 text-sm text-[#929b94]">
                  Code · AI · Innovation
                </p>
              </div>

              <!-- Current focus -->
              <div
                class="absolute bottom-3 left-3 right-3 rounded-lg border border-white/10 bg-[#090b0a]/85 p-2.5 backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-5 sm:rounded-xl sm:p-4">
                <div class="flex items-center justify-between gap-2">
                  <div class="min-w-0">
                    <p class="text-[10px] text-[#929b94] sm:text-xs">
                      CURRENT FOCUS
                    </p>

                    <p class="mt-1 text-xs font-semibold leading-5 sm:text-sm">
                      Building intelligent applications
                    </p>
                  </div>

                  <span class="shrink-0 text-xl text-[#b5f36b] sm:text-2xl">
                    ✳
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating technology card -->
          <motion.div :variants="floatingCard" initial="hidden" animate="visible"
            class="absolute left-2 top-8 max-w-[calc(100%-1rem)] rounded-lg border border-[#303a31] bg-[#111512]/95 p-2.5 shadow-xl backdrop-blur-lg sm:-left-10 sm:top-10 sm:rounded-xl sm:p-4">
            <p class="text-[10px] text-[#929b94] sm:text-xs">
              TECH STACK
            </p>

            <p class="mt-1 text-xs font-semibold text-[#b5f36b] sm:text-sm">
              MERN · Vue · Nuxt
            </p>
          </motion.div>

          <!-- Floating capability card -->
          <motion.div :variants="floatingCard" initial="hidden" animate="visible"
            class="absolute bottom-24 right-2 max-w-[calc(100%-1rem)] rounded-lg border border-[#303a31] bg-[#111512]/95 p-2.5 shadow-xl backdrop-blur-lg sm:-right-8 sm:bottom-28 sm:rounded-xl sm:p-4">
            <p class="text-[10px] text-[#929b94] sm:text-xs">
              CAPABILITIES
            </p>

            <p class="mt-1 text-xs font-semibold sm:text-sm">
              AI + Full Stack
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>



    <!-- Technology stack -->
    <section class="overflow-hidden border-y border-[#252b27] bg-[#111512] py-9">
      <div class="w-full max-w-full">

        <p class="mb-7 text-center text-xs uppercase tracking-[0.2em] text-[#929b94]">
          Technologies & tools I work with
        </p>

        <!-- Mobile: Infinite marquee -->
        <div class="overflow-hidden lg:hidden">
          <div class="tech-marquee-track flex w-max">

            <!-- First set -->
            <div class="flex shrink-0 items-center gap-8 pr-8">
              <span v-for="technology in technologies" :key="`first-${technology}`"
                class="whitespace-nowrap text-sm font-medium text-[#b9c0bb]">
                {{ technology }}
              </span>
            </div>

            <!-- Duplicate set for seamless looping -->
            <div class="flex shrink-0 items-center gap-8 pr-8" aria-hidden="true">
              <span v-for="technology in technologies" :key="`second-${technology}`"
                class="whitespace-nowrap text-sm font-medium text-[#b9c0bb]">
                {{ technology }}
              </span>
            </div>

          </div>
        </div>

        <!-- Desktop: Highlight one technology every 2 seconds -->
        <div class="hidden flex-wrap justify-center gap-x-8 gap-y-5 lg:flex">
          <span v-for="(technology, index) in technologies" :key="technology" :class="[
            'rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-500',
            activeTechIndex === index
              ? 'scale-105 border border-[#b5f36b]/30 bg-[#b5f36b]/10 text-[#b5f36b] shadow-[0_0_18px_rgba(181,243,107,0.12)]'
              : 'border border-transparent text-[#b9c0bb]'
          ]">
            {{ technology }}
          </span>
        </div>

      </div>
    </section>


    <!-- About -->
    <section id="about" class="section-container py-28">
      <motion.div :initial="{ opacity: 0, x: -45 }" :whileInView="{ opacity: 1, x: 0 }"
        :viewport="{ once: true, amount: 0.3 }" :transition="{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }">
        <p class="section-label mb-5">01 / ABOUT ME</p>

        <h2 class="max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
          Engineering ideas into
          <motion.span class="inline-block text-[#b5f36b]" :initial="{ opacity: 0, y: 18, filter: 'blur(8px)' }"
            :whileInView="{ opacity: 1, y: 0, filter: 'blur(0px)' }" :viewport="{ once: true }"
            :transition="{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }">
            meaningful digital experiences.
          </motion.span>
        </h2>
      </motion.div>

      <motion.div class="mt-9 grid gap-8 lg:grid-cols-2" :initial="'hidden'" :whileInView="'visible'"
        :viewport="{ once: true, amount: 0.3 }" :variants="{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.25
            }
          }
        }">
        <motion.p :variants="{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        }" class="leading-8 text-[#929b94]">
          I'm a Full Stack Software Engineer with 2 years of experience building
          web applications, backend services and database-driven systems. My
          experience spans frontend engineering, API development,
          authentication, database integration and application deployment.
        </motion.p>

        <motion.p :variants="{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        }" class="leading-8 text-[#929b94]">
          I enjoy understanding business problems, designing practical solutions
          and building software that is reliable, maintainable and ready to
          grow. I also explore AI integrations that make applications smarter
          and business workflows more efficient.
        </motion.p>
      </motion.div>
    </section>


    <!-- Services -->
    <section id="services" class="overflow-hidden border-y border-[#252b27] bg-[#111512] py-28">
      <div class="section-container">

        <!-- Section heading -->
        <motion.div :initial="{ opacity: 0, y: 35 }" :whileInView="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, amount: 0.3 }" :transition="{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
          }">
          <p class="section-label mb-5">
            02 / WHAT I OFFER
          </p>

          <h2 class="max-w-3xl text-4xl font-semibold md:text-5xl">
            Everything your product needs to
            <span class="text-[#b5f36b]">come to life.</span>
          </h2>

          <p class="mb-14 mt-6 max-w-2xl leading-8 text-[#929b94]">
            From a single feature to a complete software product, I provide
            development services designed around your business requirements.
          </p>
        </motion.div>

        <!-- Service cards -->
        <motion.div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3" :initial="'hidden'" :whileInView="'visible'"
          :viewport="{ once: true, amount: 0.1 }" :variants="{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12
              }
            }
          }">
          <motion.article v-for="service in services" :key="service.number" :variants="{
            hidden: {
              opacity: 0,
              y: 35,
              scale: 0.97
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1]
              }
            }
          }" :whileHover="{
            y: -7,
            borderColor: 'rgba(181,243,107,0.5)',
            transition: { duration: 0.25 }
          }" class="rounded-2xl border border-[#252b27] bg-[#090b0a] p-7 transition-colors duration-300">
            <div class="mb-8 flex items-center justify-between">
              <span class="text-3xl text-[#b5f36b]">
                {{ service.icon }}
              </span>

              <span class="text-sm text-[#6e7971]">
                {{ service.number }}
              </span>
            </div>

            <h3 class="mb-4 text-xl font-semibold">
              {{ service.title }}
            </h3>

            <p class="min-h-[112px] leading-7 text-[#929b94]">
              {{ service.description }}
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
              <span v-for="tag in service.tags" :key="tag"
                class="rounded-full border border-[#252b27] px-3 py-1.5 text-xs text-[#b9c0bb] transition-colors duration-300 hover:border-[#b5f36b]/40 hover:text-[#b5f36b]">
                {{ tag }}
              </span>
            </div>
          </motion.article>
        </motion.div>

      </div>
    </section>



    <!-- Process -->
    <section id="process" class="section-container py-28">
      <motion.div :initial="{ opacity: 0, y: -35 }" :whileInView="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, amount: 0.3 }" :transition="{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }">
        <p class="section-label mb-5">03 / HOW I WORK</p>

        <h2 class="max-w-3xl text-4xl font-semibold md:text-5xl">
          From first conversation to
          <span class="text-[#b5f36b]">production launch.</span>
        </h2>
      </motion.div>

      <motion.p class="mb-14 mt-6 max-w-2xl leading-8 text-[#929b94]" :initial="{ opacity: 0, x: -60 }"
        :whileInView="{ opacity: 1, x: 0 }" :viewport="{ once: true, amount: 0.3 }"
        :transition="{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }">
        A transparent development process that keeps every stage organized, from
        understanding your requirements to launching and maintaining your
        application.
      </motion.p>

      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute bottom-0 left-5 top-0 w-px bg-[#252b27] md:left-1/2 md:-translate-x-1/2"></div>

        <div class="space-y-6">
          <motion.div v-for="(step, index) in deliverySteps" :key="step.number"
            class="relative grid md:grid-cols-2 md:gap-12" :initial="{
              opacity: 0,
              x: index % 2 === 0 ? -90 : 90,
              rotate: index % 2 === 0 ? -2 : 2
            }" :whileInView="{
              opacity: 1,
              x: 0,
              rotate: 0
            }" :viewport="{ once: true, amount: 0.25 }" :transition="{
              duration: 0.8,
              delay: (index % 3) * 0.12,
              ease: [0.22, 1, 0.36, 1]
            }">
            <!-- Timeline dot -->
            <div
              class="absolute left-5 top-9 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#b5f36b] bg-[#090b0a] shadow-[0_0_12px_rgba(181,243,107,0.35)] md:left-1/2">
            </div>

            <!-- Card -->
            <article :class="[
              'ml-12 rounded-2xl border border-[#252b27] bg-[#111512] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#b5f36b]/50 md:ml-0',
              index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
            ]">
              <div class="mb-5 flex items-center justify-between">
                <span class="text-sm font-semibold tracking-wider text-[#b5f36b]">
                  STEP {{ step.number }}
                </span>

                <span class="text-3xl font-light text-[#343d36]">
                  {{ step.number }}
                </span>
              </div>

              <h3 class="mb-3 text-xl font-semibold">
                {{ step.title }}
              </h3>

              <p class="leading-7 text-[#929b94]">
                {{ step.description }}
              </p>
            </article>
          </motion.div>
        </div>
      </div>
    </section>


    <!-- Projects -->
    <ProjectSection />

    <!-- Contact -->
    <ContactSection />

    <!-- Footer -->
    <AppFooter />
  </main>
</template>

<style scoped>
.tech-marquee-track {
  animation: tech-marquee 28s linear infinite;
  will-change: transform;
}

@keyframes tech-marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

.tech-marquee-track:hover {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .tech-marquee-track {
    animation: none;
    transform: none;
  }
}
</style>