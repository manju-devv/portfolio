<script setup lang="ts">
import { motion } from "motion-v";

const props = defineProps<{
    error: {
        statusCode: number;
        statusMessage?: string;
        message?: string;
    };
}>();

const isNotFound = computed(() => props.error.statusCode === 404);

useSeoMeta({
    title: "Page Not Found | Freelance Software Developer",
    robots: "noindex, nofollow",
});
</script>

<template>
    <main
        class="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090b0a] px-6 pb-20 text-white">
        <div
            class="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b5f36b]/[0.06] blur-[120px]" />
        <div class="pointer-events-none absolute inset-0 opacity-[0.04]" style="background-image: linear-gradient(#929b94 1px, transparent 1px), linear-gradient(90deg, #929b94 1px, transparent 1px); background-size: 45px 45px;" />
        <motion.div :initial="{ opacity: 0, y: 30 }" :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.7, ease: 'easeOut' }" class="relative z-10 mx-auto w-full max-w-2xl text-center">
            <!-- Brand symbol -->
            <a href="/" aria-label="Go to homepage" class="inline-flex items-center justify-center">
                <img src="/images/logo.png" alt="Brand logo" class="h-12 w-12 object-contain" />
            </a>

            <!-- Error number -->
            <div class="relative mb-6">
                <h1
                    class="select-none text-[clamp(8rem,25vw,15rem)] font-black leading-none tracking-[-0.09em] text-[#b5f36b]">
                    {{ isNotFound ? "404" : error.statusCode }}
                </h1>

                <span
                    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-[#b5f36b]/20 bg-[#111512]/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#b5f36b]">
                    Error {{ error.statusCode }}
                </span>
            </div>

            <!-- Content -->
            <h2 class="text-2xl font-bold tracking-tight sm:text-4xl">
                {{ isNotFound ? "Lost in the digital space?" : "Something went wrong" }}
            </h2>

            <p class="mx-auto mt-5 max-w-md text-sm leading-7 text-[#929b94] sm:text-base">
                {{
                    isNotFound
                        ? "Looks like this page took a different route. The page you're looking for doesn't exist or may have been moved."
                : "An unexpected error occurred. Let's get you back to where you need to be."
                }}
            </p>

            <!-- Actions -->
            <div class="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href="/"
                    class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#b5f36b] px-7 py-3.5 text-sm font-bold text-[#090b0a] transition duration-300 hover:-translate-y-1 hover:bg-[#c8ff82]">
                    <span>←</span>
                    Back to homepage
                </a>

                <button type="button"
                    class="rounded-xl border border-[#303a31] px-7 py-3.5 text-sm font-semibold text-[#dce2dc] transition duration-300 hover:border-[#b5f36b]/50 hover:text-[#b5f36b]"
                    @click="clearError({ redirect: '/' })">
                    Try again
                </button>
            </div>

            <!-- Footer -->
            <div class="mt-20 border-t border-[#252b27] pt-6">
                <p class="text-xs text-[#626d64]">
                    SYSTEM STATUS:
                    <span class="text-[#b5f36b]">OPERATIONAL</span>
                </p>
                <p class="mt-3 text-xs text-[#626d64]">
                    © {{ new Date().getFullYear() }} · Built with purpose.
                </p>
            </div>
        </motion.div>
    </main>
</template>
