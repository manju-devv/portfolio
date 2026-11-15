<script setup lang="ts">
import { Motion } from "motion-v";
const footerLinks = [
    { number: "01", label: "Home", href: "#home" },
    { number: "02", label: "About", href: "#about" },
    { number: "03", label: "Services", href: "#services" },
    { number: "04", label: "Projects", href: "#projects" },
    { number: "05", label: "Contact", href: "#contact" },
];

const serviceLinks = [
    {
        number: "01",
        symbol: "</>",
        label: "Full Stack Development",
        description: "Modern web applications",
    },
    {
        number: "02",
        symbol: "AI",
        label: "AI Integration",
        description: "Intelligent digital solutions",
    },
    {
        number: "03",
        symbol: "{ }",
        label: "Backend & APIs",
        description: "Secure and scalable systems",
    },
    {
        number: "04",
        symbol: "↗",
        label: "Cloud & Deployment",
        description: "From code to production",
    },
];

const socialLinks = [
    {
        label: "GitHub",
        subtitle: "Explore my code",
        symbol: "GH",
        href: "https://github.com/manju-devv",
    },
    {
        label: "LinkedIn",
        subtitle: "Connect professionally",
        symbol: "in",
        href: "www.linkedin.com/in/manjunath-purum",
    },
];
</script>


<template>
    <footer class="relative overflow-hidden border-t border-[#252b27] bg-[#090b0a]">

        <!-- Animated background glow -->
        <Motion as="div"
            class="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#b5f36b]/[0.04] blur-[120px]"
            :initial="{ opacity: 0, scale: 0.5 }" :whileInView="{ opacity: 1, scale: 1.2 }" :viewport="{ once: true }"
            :transition="{ duration: 2, ease: 'easeOut' }" />

        <div class="section-container relative py-14 sm:py-16 md:py-20">

            <!-- CTA -->
            <Motion as="div"
                class="relative mb-14 overflow-hidden rounded-2xl border border-[#303a31] bg-gradient-to-br from-[#172019] via-[#101612] to-[#090b0a] p-6 sm:p-10 md:mb-20 md:p-14"
                :initial="{ opacity: 0, scale: 0.92, filter: 'blur(12px)' }"
                :whileInView="{ opacity: 1, scale: 1, filter: 'blur(0px)' }" :viewport="{ once: true, amount: 0.2 }"
                :transition="{ duration: 1, ease: [0.22, 1, 0.36, 1] }">
                <Motion as="div"
                    class="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#b5f36b]/10 blur-[90px]"
                    :initial="{ scale: 0.3, opacity: 0 }" :whileInView="{ scale: 1.3, opacity: 1 }"
                    :viewport="{ once: true }" :transition="{ duration: 1.5, delay: 0.3 }" />

                <div class="relative flex flex-col justify-between gap-8 md:flex-row md:items-end">

                    <div class="max-w-2xl">
                        <Motion as="p" class="section-label mb-5" :initial="{ opacity: 0, x: -25 }"
                            :whileInView="{ opacity: 1, x: 0 }" :viewport="{ once: true }"
                            :transition="{ duration: 0.6, delay: 0.3 }">
                            HAVE A PROJECT IN MIND?
                        </Motion>

                        <Motion as="h2" class="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl"
                            :initial="{ opacity: 0, y: 35 }" :whileInView="{ opacity: 1, y: 0 }"
                            :viewport="{ once: true }" :transition="{ duration: 0.8, delay: 0.4 }">
                            Let's turn your
                            <span class="text-[#b5f36b]">idea</span>
                            into something
                            <span class="text-[#b5f36b]">real.</span>
                        </Motion>

                        <Motion as="p" class="mt-5 max-w-lg text-sm leading-7 text-[#929b94] md:text-base"
                            :initial="{ opacity: 0, y: 20 }" :whileInView="{ opacity: 1, y: 0 }"
                            :viewport="{ once: true }" :transition="{ duration: 0.7, delay: 0.6 }">
                            From planning and development to AI integration and
                            deployment, let's build something that makes a difference.
                        </Motion>
                    </div>

                    <Motion as="a" href="#contact"
                        class="group flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#b5f36b] px-7 py-4 text-sm font-semibold text-[#090b0a] transition duration-300 hover:bg-[#c8ff82] sm:w-fit"
                        :initial="{ opacity: 0, scale: 0.6, rotate: -8 }"
                        :whileInView="{ opacity: 1, scale: 1, rotate: 0 }" :viewport="{ once: true }"
                        :transition="{ type: 'spring', stiffness: 130, damping: 12, delay: 0.7 }"
                        :whileHover="{ y: -5, scale: 1.04 }">
                        Start a project

                        <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M7 17 17 7M7 7h10v10" />
                        </svg>
                    </Motion>
                </div>
            </Motion>

            <!-- Footer main content -->
            <div class="grid grid-cols-1 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4 lg:gap-6">

                <!-- Brand -->
                <Motion as="div" class="col-span-2 mb-5 md:col-span-3 lg:col-span-3 lg:mb-0 xl:col-span-1"
                    :initial="{ opacity: 0, y: 35, rotate: -2 }" :whileInView="{ opacity: 1, y: 0, rotate: 0 }"
                    :viewport="{ once: true, amount: 0.2 }" :transition="{ duration: 0.8, delay: 0.1 }">
                    <a href="#home" class="inline-block text-3xl font-bold tracking-tight">
                        Manju<span class="text-[#b5f36b]">.</span>
                    </a>

                    <p class="mt-5 max-w-full text-sm leading-7 text-[#929b94]">
                        Full Stack Software Engineer building custom digital
                        products, scalable applications and intelligent solutions.
                        Turning business ideas into working software.
                    </p>

                    <div
                        class="mt-6 inline-flex items-center gap-2 rounded-full border border-[#303a31] bg-[#111512] px-3 py-2">
                        <Motion as="span" class="h-2 w-2 rounded-full bg-[#b5f36b] shadow-[0_0_10px_#b5f36b]"
                            :animate="{ opacity: [1, 0.35, 1], scale: [1, 1.25, 1] }"
                            :transition="{ duration: 2, repeat: Infinity, ease: 'easeInOut' }" />

                        <span class="text-[11px] font-medium text-[#b9c0bb] sm:text-xs">
                            Available for freelance
                        </span>
                    </div>

                    <p class="mt-6 text-xs text-[#626d64]">
                        Bengaluru, India · Working remotely
                    </p>
                </Motion>

                <!-- Explore card -->
                <Motion as="div"
                    class="col-span-2 rounded-2xl border border-[#252b27] bg-[#0e120f] p-4 transition duration-300 hover:border-[#b5f36b]/30 sm:p-5 md:col-span-1"
                    :initial="{ opacity: 0, y: 45, rotate: 3 }" :whileInView="{ opacity: 1, y: 0, rotate: 0 }"
                    :viewport="{ once: true, amount: 0.2 }" :transition="{ duration: 0.8, delay: 0.2 }"
                    :whileHover="{ y: -5 }">
                    <div class="mb-5 flex items-center justify-between gap-2">
                        <h3 class="text-sm font-semibold text-white">Explore</h3>
                        <span class="text-[10px] text-[#626d64]">01</span>
                    </div>

                    <ul class="space-y-1">
                        <li v-for="link in footerLinks" :key="link.number">
                            <a :href="link.href"
                                class="group flex items-center justify-between gap-1 rounded-lg px-2 py-2.5 transition hover:bg-[#b5f36b]/[0.05]">
                                <span class="flex min-w-0 items-center gap-2">
                                    <span class="text-xs text-[#626d64] transition group-hover:text-[#b5f36b]">
                                        {{ link.number }}
                                    </span>

                                    <span
                                        class="text-xs text-[#929b94] transition group-hover:text-[#b5f36b] sm:text-sm">
                                        {{ link.label }}
                                    </span>
                                </span>

                                <span
                                    class="text-xs text-[#626d64] opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                                    →
                                </span>
                            </a>
                        </li>
                    </ul>
                </Motion>

                <!-- Services card -->
                <Motion as="div"
                    class="col-span-2 rounded-2xl border border-[#252b27] bg-[#0e120f] p-4 transition duration-300 hover:border-[#b5f36b]/30 sm:p-5 lg:col-span-1"
                    :initial="{ opacity: 0, y: 45, rotate: -3 }" :whileInView="{ opacity: 1, y: 0, rotate: 0 }"
                    :viewport="{ once: true, amount: 0.2 }" :transition="{ duration: 0.8, delay: 0.35 }"
                    :whileHover="{ y: -5 }">
                    <div class="mb-5 flex items-center justify-between gap-2">
                        <h3 class="text-sm font-semibold text-white">What I do</h3>
                        <span class="text-[10px] text-[#626d64]">02</span>
                    </div>

                    <div class="space-y-2">
                        <a v-for="service in serviceLinks" :key="service.number" href="#services"
                            class="group flex items-start gap-3 rounded-xl border border-transparent p-2 transition duration-300 hover:border-[#303a31] hover:bg-[#151b16]">
                            <span
                                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#303a31] bg-[#151b16] text-[10px] font-semibold text-[#b5f36b] transition group-hover:border-[#b5f36b]/40 group-hover:bg-[#b5f36b]/10">
                                {{ service.symbol }}
                            </span>

                            <span class="min-w-0">
                                <span
                                    class="block text-[11px] font-medium leading-5 text-[#d8ddd8] transition group-hover:text-[#b5f36b] sm:text-xs">
                                    {{ service.label }}
                                </span>

                                <span class="mt-0.5 block text-[10px] leading-4 text-[#737e75]">
                                    {{ service.description }}
                                </span>
                            </span>
                        </a>
                    </div>
                </Motion>

                <!-- Connect card -->
                <Motion as="div"
                    class="rounded-2xl border border-[#252b27] bg-[#0e120f] p-5 transition duration-300 hover:border-[#b5f36b]/30 md:col-span-3 lg:col-span-1"
                    :initial="{ opacity: 0, y: 45, rotate: 3 }" :whileInView="{ opacity: 1, y: 0, rotate: 0 }"
                    :viewport="{ once: true, amount: 0.2 }" :transition="{ duration: 0.8, delay: 0.5 }"
                    :whileHover="{ y: -5 }">
                    <div class="mb-5 flex items-center justify-between">
                        <h3 class="text-sm font-semibold text-white">Let's connect</h3>
                        <span class="text-[10px] text-[#626d64]">03</span>
                    </div>

                    <p class="mb-5 text-xs leading-6 text-[#929b94]">
                        Have a project or just want to connect? Find me here.
                    </p>

                    <div class="grid grid-cols-2 gap-3 lg:grid-cols-1">
                        <a v-for="social in socialLinks" :key="social.label" :href="social.href" target="_blank"
                            rel="noopener noreferrer"
                            class="group flex items-center gap-3 rounded-xl border border-[#303a31] bg-[#111512] p-3 transition duration-300 hover:border-[#b5f36b]/50 hover:bg-[#172019]">
                            <span
                                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#202820] text-xs font-bold text-[#b5f36b]">
                                {{ social.symbol }}
                            </span>

                            <span class="min-w-0 flex-1">
                                <span
                                    class="block text-xs font-semibold text-[#e4e9e4] transition group-hover:text-[#b5f36b]">
                                    {{ social.label }}
                                </span>

                                <span class="mt-1 block text-[9px] text-[#737e75]">
                                    {{ social.subtitle }}
                                </span>
                            </span>

                            <span
                                class="text-sm text-[#737e75] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b5f36b]">
                                ↗
                            </span>
                        </a>
                    </div>

                    <a href="#contact"
                        class="mt-4 flex items-center justify-between rounded-xl bg-[#b5f36b]/[0.08] px-4 py-3 text-xs font-medium text-[#b5f36b] transition hover:bg-[#b5f36b]/15">
                        Discuss a project
                        <span>→</span>
                    </a>
                </Motion>
            </div>

            <!-- Bottom footer -->
            <Motion as="div"
                class="mt-8 flex flex-col justify-between gap-4 border-t border-[#252b27] pt-6 sm:mt-10 md:flex-row md:items-center"
                :initial="{ opacity: 0, y: 20 }" :whileInView="{ opacity: 1, y: 0 }" :viewport="{ once: true }"
                :transition="{ duration: 0.8, delay: 0.2 }">
                <p class="text-xs text-[#929b94]">
                    © {{ new Date().getFullYear() }} Manju. All rights reserved.
                </p>

                <p class="text-xs text-[#929b94]">
                    Designed & developed with
                    <span class="text-[#b5f36b]">♥</span>
                    using Nuxt 3.
                </p>

                <a href="#home"
                    class="group flex w-fit items-center gap-2 text-xs text-[#929b94] transition hover:text-[#b5f36b]">
                    Back to top
                    <span class="transition group-hover:-translate-y-1">↑</span>
                </a>
            </Motion>

        </div>
    </footer>
</template>
