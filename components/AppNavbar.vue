<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { motion, AnimatePresence } from "motion-v";

const mobileMenuOpen = ref(false);
const activeSection = ref("home");

let sectionObserver: IntersectionObserver | null = null;

const navigation = [
    { number: "01", label: "Home", href: "#home" },
    { number: "02", label: "About", href: "#about" },
    { number: "03", label: "Services", href: "#services" },
    { number: "04", label: "Process", href: "#process" },
    { number: "05", label: "Projects", href: "#projects" },
    { number: "06", label: "Contact", href: "#contact" },
];

const closeMenu = () => {
    mobileMenuOpen.value = false;
};

const updateActiveSection = () => {
    const marker = window.innerHeight * 0.32;

    // Highlight Contact when the user reaches the bottom.
    if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
    ) {
        activeSection.value = "contact";
        return;
    }

    let currentSection = "home";

    for (const item of navigation) {
        const sectionId = item.href.slice(1);
        const section = document.getElementById(sectionId);

        if (section && section.getBoundingClientRect().top <= marker) {
            currentSection = sectionId;
        }
    }

    activeSection.value = currentSection;
};

onMounted(() => {
    updateActiveSection();

    sectionObserver = new IntersectionObserver(
        () => {
            updateActiveSection();
        },
        {
            rootMargin: "-80px 0px -65% 0px",
            threshold: 0,
        },
    );

    navigation.forEach((item) => {
        const section = document.getElementById(item.href.slice(1));

        if (section) {
            sectionObserver?.observe(section);
        }
    });

    window.addEventListener("scroll", updateActiveSection, {
        passive: true,
    });
});

onUnmounted(() => {
    sectionObserver?.disconnect();
    sectionObserver = null;

    window.removeEventListener("scroll", updateActiveSection);
});

const menuVariants = {
    hidden: {
        opacity: 0,
        y: -15,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.055,
        },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
        },
    },
};
</script>

<template>
    <header class="fixed inset-x-0 top-0 z-50 border-b border-[#252b27]/80 bg-[#090b0a]/95 backdrop-blur-md">
        <!-- Navbar -->
        <nav class="section-container relative flex h-20 items-center justify-between">
            <!-- Logo -->
            <a href="#home" @click="closeMenu" aria-label="Home">
                <img src="/images/logo.png" alt="developer logo" class="h-[3.5rem] w-[3.5rem] object-contain" />
            </a>

            <!-- Desktop navigation -->
            <div class="hidden items-center gap-7 lg:flex">
                <a v-for="item in navigation" :key="item.label" :href="item.href" :class="[
                    'relative py-2 text-sm transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#b5f36b] after:transition-all after:duration-300',
                    activeSection === item.href.slice(1)
                        ? 'text-[#b5f36b] after:w-full'
                        : 'text-[#929b94] after:w-0 hover:text-[#b5f36b] hover:after:w-full',
                ]">
                    {{ item.label }}
                </a>
            </div>

            <!-- Header actions -->
            <div class="flex items-center gap-3">
                <a href="/files/manju_resume.pdf" download="manju-resume.pdf"
                    class="hidden rounded-full border border-[#303a31] px-4 py-2.5 text-sm font-medium text-[#b9c0bb] transition duration-300 hover:border-[#b5f36b]/50 hover:bg-[#b5f36b]/10 hover:text-[#b5f36b] sm:inline-flex items-center gap-2">
                    Resume <span>↓</span>
                </a>
                <a href="#contact" class="primary-button !px-5 !py-2.5" @click="closeMenu">
                    Let's talk ↗
                </a>

                <!-- Mobile toggle -->
                <button type="button"
                    class="mobile-menu-toggle flex h-10 w-10 items-center justify-center rounded-xl border border-[#303a31] text-white transition duration-300 hover:border-[#b5f36b]/50 hover:bg-[#b5f36b]/10 lg:hidden"
                    :aria-expanded="mobileMenuOpen" aria-controls="mobile-navigation"
                    :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'" @click="mobileMenuOpen = !mobileMenuOpen">
                    <motion.svg :animate="{ rotate: mobileMenuOpen ? 90 : 0 }" :transition="{ duration: 0.2 }"
                        class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                        stroke-linecap="round">
                        <path v-if="!mobileMenuOpen" d="M4 7h16M4 12h16M4 17h16" />
                        <path v-else d="m6 6 12 12M18 6 6 18" />
                    </motion.svg>
                </button>
            </div>
        </nav>

        <!-- Full-width floating mobile menu -->
        <AnimatePresence>
            <motion.div v-if="mobileMenuOpen" id="mobile-navigation" key="mobile-navigation" :variants="menuVariants"
                initial="hidden" animate="visible" exit="exit"
                class="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-5rem)] w-full overflow-y-auto border-b border-[#303a31] bg-[#090b0a]/[0.98] shadow-2xl shadow-black/60 backdrop-blur-2xl lg:hidden">
                <div class="section-container py-6 sm:py-8">

                    <!-- Menu heading -->
                    <!-- <div class="mb-6 flex items-center justify-between">
                        <div>
                            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#929b94]">
                                Navigation
                            </p>

                            <p class="mt-2 text-sm text-[#626d64]">
                                Explore my portfolio
                            </p>
                        </div>

                        <span
                            class="rounded-full border border-[#303a31] bg-[#111713] px-3 py-1.5 text-xs text-[#b5f36b]">
                            06 Sections
                        </span>
                    </div> -->

                    <!-- Navigation grid -->
                    <div class="grid md:grid-cols-2 gap-3 sm:gap-4">
                        <motion.a v-for="item in navigation" :key="item.label" :href="item.href"
                            :variants="itemVariants" :whileHover="{
                                backgroundColor: 'rgba(181,243,107,0.07)',
                                borderColor: 'rgba(181,243,107,0.5)',
                            }" :whileTap="{ scale: 0.97 }"
                            class="group flex  flex-col justify-between rounded-xl border border-[#252b27] bg-[#111713] p-4 transition-colors sm:min-h-[105px] sm:p-5"
                            :class="activeSection === item.href.slice(1)
                                ? 'border-[#b5f36b]/50 bg-[#b5f36b]/[0.08]'
                                : 'border-[#252b27] bg-[#111713]'
                                " @click="closeMenu">
                            <span
                                class="flex items-center w-full gap-[0.5rem] text-[10px] font-medium tracking-widest text-[#b5f36b]">
                                {{ item.number }}
                                <span
                                    class="flex flex-1 items-center justify-between gap-2 text-sm font-medium text-[#dce2dc] transition-colors group-hover:text-[#b5f36b] sm:text-base"
                                    :class="activeSection === item.href.slice(1)
                                        ? 'text-[#b5f36b]'
                                        : 'text-[#dce2dc] group-hover:text-[#b5f36b]'
                                        ">
                                    {{ item.label }}
                                    <span
                                        class="text-sm text-[#626d64] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b5f36b]">
                                        ↗
                                    </span>
                                </span>
                            </span>
                        </motion.a>
                    </div>

                    <!-- Contact CTA -->
                    <div class="mt-6 border-t border-[#252b27] pt-6">
                        <p class="mb-4 text-xs text-[#929b94]">
                            Have a project in mind?
                        </p>

                        <a href="#contact"
                            class="flex items-center justify-between rounded-xl bg-[#b5f36b] px-5 py-4 text-sm font-semibold text-[#090b0a] transition hover:bg-[#c8ff82]"
                            @click="closeMenu">
                            Let's build something together

                            <span>↗</span>
                        </a>
                    </div>

                    <!-- Availability -->
                    <div class="mt-5 flex items-center justify-center gap-2">
                        <span class="h-2 w-2 rounded-full bg-[#b5f36b] shadow-[0_0_10px_#b5f36b]" />

                        <span class="text-xs text-[#929b94]">
                            Available for freelance projects
                        </span>
                    </div>

                </div>
            </motion.div>
        </AnimatePresence>
    </header>
</template>
<style scoped>
    .mobile-menu-toggle,
.mobile-menu-toggle:focus,
.mobile-menu-toggle:focus-visible,
.mobile-menu-toggle:active,
.mobile-menu-toggle :deep(*),
.mobile-menu-toggle :deep(*:focus),
.mobile-menu-toggle :deep(*:focus-visible) {
    outline: none !important;
    box-shadow: none !important;
    -webkit-tap-highlight-color: transparent;
}
</style>