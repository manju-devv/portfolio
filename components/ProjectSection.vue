<script setup lang="ts">
import { Motion } from "motion-v";
const projects = [
    {
        number: "01",
        name: "TodoNest — Task Management App",
        category: "FULL-STACK DEVELOPMENT",
        description:
            "A full-stack task management application featuring email/password and Google authentication, JWT-based protected routes, task CRUD operations, Redis caching, and AWS S3 profile photo uploads. Deployed with a production frontend and backend.",
        technologies: [
            "React",
            "Vite",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Redis",
            "AWS S3",
            "JWT",
        ],
        github: "https://github.com/manju-devv/task-api-deployment-learn",
        demo: "https://www.todonest.duckdns.org",
        type: "Full Stack",
        symbol: "TN",
    },
    {
        number: "02",
        name: "MERN Food App",
        category: "FULL-STACK DEVELOPMENT",
        description:
            "A full-stack food ordering application built with the MERN stack, featuring food browsing, cart management, order placement, and an admin interface for managing food items and orders.",
        technologies: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
        ],
        github: "https://github.com/manju-devv/MERN-food-app",
        demo: "https://mern-food-app-frontend-l50r.onrender.com/",
        type: "Full Stack",
        symbol: "🍔",
    },
];
</script>


<template>
    <section id="projects" class="border-y border-[#252b27] bg-[#111512] py-20">
        <div class="section-container">

            <!-- Heading -->
            <div class="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <Motion as="div" :initial="{ opacity: 0, scale: 0.94, transformOrigin: 'left center' }"
                    :whileInView="{ opacity: 1, scale: 1 }" :viewport="{ once: true, amount: 0.3 }"
                    :transition="{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }">
                    <p class="section-label mb-4">04 / SELECTED WORK</p>

                    <h2 class="text-3xl font-semibold md:text-4xl">
                        Projects built with
                        <span class="text-[#b5f36b]">purpose.</span>
                    </h2>

                    <p class="mt-4 max-w-xl text-sm leading-7 text-[#929b94]">
                        A showcase of applications, engineering experiments and
                        technical projects.
                    </p>
                </Motion>

                <Motion as="a" href="https://github.com/manju-devv" target="_blank" rel="noopener noreferrer"
                    class="outline-button w-fit !px-5 !py-2.5" :initial="{ opacity: 0, rotate: 8, scale: 0.8 }"
                    :whileInView="{ opacity: 1, rotate: 0, scale: 1 }" :viewport="{ once: true }"
                    :transition="{ duration: 0.7, delay: 0.3 }">
                    View GitHub ↗
                </Motion>
            </div>

            <!-- Project cards -->
            <div class="grid gap-5 lg:grid-cols-2">
                <Motion as="article" v-for="(project, index) in projects" :key="project.number"
                    class="group overflow-hidden rounded-xl border border-[#252b27] bg-[#090b0a]" :initial="{
                        opacity: 0,
                        rotateX: 14,
                        scale: 0.92,
                        y: 25
                    }" :whileInView="{
                        opacity: 1,
                        rotateX: 0,
                        scale: 1,
                        y: 0
                    }" :viewport="{ once: true, amount: 0.2 }" :transition="{
                        duration: 0.9,
                        delay: index * 0.2,
                        ease: [0.22, 1, 0.36, 1]
                    }" :whileHover="{
                        y: -8,
                        transition: { duration: 0.3 }
                    }" style="transform-style: preserve-3d; perspective: 1000px;">
                    <!-- Compact preview -->
                    <div
                        class="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-[#1b2920] via-[#101713] to-[#090b0a] sm:h-64">
                        <Motion as="div" class="absolute h-36 w-36 rounded-full border border-[#b5f36b]/10"
                            :initial="{ scale: 0.4, opacity: 0 }" :whileInView="{ scale: 1, opacity: 1 }"
                            :viewport="{ once: true }" :transition="{ duration: 1, delay: 0.3 + index * 0.2 }" />

                        <Motion as="div" class="absolute h-28 w-28 rounded-full border border-[#b5f36b]/20"
                            :initial="{ scale: 0.3, rotate: -90, opacity: 0 }"
                            :whileInView="{ scale: 1, rotate: 0, opacity: 1 }" :viewport="{ once: true }"
                            :transition="{ duration: 1, delay: 0.45 + index * 0.2 }" />

                        <Motion as="span"
                            class="relative text-5xl font-bold tracking-tight text-[#b5f36b]/80 transition-colors duration-300 group-hover:text-[#b5f36b]"
                            :initial="{ scale: 0, rotate: -25, opacity: 0 }"
                            :whileInView="{ scale: 1, rotate: 0, opacity: 1 }" :viewport="{ once: true }" :transition="{
                                type: 'spring',
                                stiffness: 140,
                                damping: 12,
                                delay: 0.4 + index * 0.2
                            }">
                            {{ project.symbol }}
                        </Motion>

                        <span
                            class="absolute right-4 top-4 rounded-full border border-[#b5f36b]/20 bg-[#090b0a]/70 px-3 py-1.5 text-xs text-[#b5f36b]">
                            {{ project.type }}
                        </span>

                        <span class="absolute bottom-4 left-4 text-[10px] tracking-[0.16em] text-[#929b94]">
                            {{ project.category }}
                        </span>
                    </div>

                    <!-- Project details -->
                    <div class="p-5 sm:p-6">
                        <div class="mb-4 flex items-center justify-between">
                            <span class="text-xs font-medium text-[#b5f36b]">
                                PROJECT {{ project.number }}
                            </span>

                            <Motion as="span" class="h-2 w-2 rounded-full bg-[#b5f36b] shadow-[0_0_10px_#b5f36b]"
                                :initial="{ scale: 0 }" :whileInView="{ scale: 1 }" :viewport="{ once: true }"
                                :transition="{ type: 'spring', delay: 0.7 + index * 0.2 }" />
                        </div>

                        <h3 class="text-lg font-semibold sm:text-xl">
                            {{ project.name }}
                        </h3>

                        <p class="mt-3 text-sm leading-6 text-[#929b94]">
                            {{ project.description }}
                        </p>

                        <!-- Technology tags -->
                        <div class="mt-5 flex flex-wrap gap-2">
                            <Motion as="span" v-for="(technology, tagIndex) in project.technologies" :key="technology"
                                class="rounded-full border border-[#252b27] px-3 py-1 text-[11px] text-[#b9c0bb] transition-colors hover:border-[#b5f36b]/50 hover:text-[#b5f36b]"
                                :initial="{ opacity: 0, scale: 0.7 }" :whileInView="{ opacity: 1, scale: 1 }"
                                :viewport="{ once: true }" :transition="{
                                    duration: 0.4,
                                    delay: 0.6 + tagIndex * 0.08 + index * 0.2
                                }">
                                {{ technology }}
                            </Motion>
                        </div>

                        <!-- Project links -->
                        <div class="mt-6 flex flex-wrap items-center gap-5 border-t border-[#252b27] pt-5">
                            <a :href="project.github" target="_blank" rel="noopener noreferrer"
                                class="text-xs font-medium text-white transition hover:text-[#b5f36b]">
                                GitHub Repository ↗
                            </a>

                            <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer"
                                class="text-xs font-medium text-[#b5f36b] transition hover:text-white">
                                Live Demo ↗
                            </a>
                        </div>
                    </div>
                </Motion>
            </div>

            <Motion as="div" class="mt-8 text-center" :initial="{ opacity: 0, scale: 0.9 }"
                :whileInView="{ opacity: 1, scale: 1 }" :viewport="{ once: true }"
                :transition="{ duration: 0.6, delay: 0.3 }">
                <a href="https://github.com/manju-devv" target="_blank" rel="noopener noreferrer"
                    class="text-sm text-[#929b94] transition hover:text-[#b5f36b]">
                    Explore more on GitHub ↗
                </a>
            </Motion>

        </div>
    </section>
</template>
