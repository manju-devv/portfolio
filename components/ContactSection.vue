<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
import { Motion } from "motion-v";

interface ContactForm {
    name: string;
    email: string;
    service: string;
    message: string;
}

interface FormErrors {
    name: string;
    email: string;
    service: string;
    message: string;
}

const form = ref<ContactForm>({
    name: "",
    email: "",
    service: "",
    message: "",
});

const errors = reactive<FormErrors>({
    name: "",
    email: "",
    service: "",
    message: "",
});

const submitted = ref(false);

const services = [
    "Full Stack Development",
    "AI Integration",
    "Backend & API Development",
    "Business Application",
    "Cloud & Deployment",
    "Maintenance & Support",
    "Other",
];

// Dropdown state
const serviceDropdownOpen = ref(false);
const serviceDropdownRef = ref<HTMLElement | null>(null);

// Validation functions
const validateName = () => {
    const name = form.value.name.trim();

    if (!name) {
        errors.name = "Please enter your name.";
    } else if (name.length < 2) {
        errors.name = "Name must contain at least 2 characters.";
    } else {
        errors.name = "";
    }
};

const validateEmail = () => {
    const email = form.value.email.trim();

    if (!email) {
        errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "Please enter a valid email address.";
    } else {
        errors.email = "";
    }
};

const validateService = () => {
    if (!form.value.service.trim()) {
        errors.service = "Please select a service.";
    } else {
        errors.service = "";
    }
};

const validateMessage = () => {
    const message = form.value.message.trim();

    if (!message) {
        errors.message = "Please describe your project.";
    } else if (message.length < 10) {
        errors.message = "Project details must contain at least 10 characters.";
    } else {
        errors.message = "";
    }
};

// Validate all fields
const validateForm = (): boolean => {
    validateName();
    validateEmail();
    validateService();
    validateMessage();

    return Object.values(errors).every((error) => !error);
};

// Revalidate fields when the user corrects them
const handleNameInput = () => {
    if (submitted.value) validateName();
};

const handleEmailInput = () => {
    if (submitted.value) validateEmail();
};

const handleMessageInput = () => {
    if (submitted.value) validateMessage();
};

// Dropdown functions
const toggleServiceDropdown = () => {
    serviceDropdownOpen.value = !serviceDropdownOpen.value;
};

const selectService = (service: string) => {
    form.value.service = service;
    errors.service = "";
    serviceDropdownOpen.value = false;
};

const closeServiceDropdown = () => {
    serviceDropdownOpen.value = false;
};

// Close dropdown when clicking outside
const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target;

    if (
        target instanceof Node &&
        !serviceDropdownRef.value?.contains(target)
    ) {
        closeServiceDropdown();
    }
};

onMounted(() => {
    document.addEventListener("click", handleOutsideClick);
});

onBeforeUnmount(() => {
    document.removeEventListener("click", handleOutsideClick);
});

// Submit enquiry
const submitEnquiry = () => {
    submitted.value = true;

    const isValid = validateForm();

    if (!isValid) {
        return;
    }

    const subject = encodeURIComponent(
        `Project Enquiry from ${form.value.name.trim()}`,
    );

    const body = encodeURIComponent(
        `Hello Manju,

Name: ${form.value.name.trim()}
Email: ${form.value.email.trim()}
Service: ${form.value.service}

Project Details:
${form.value.message.trim()}`,
    );

    window.location.href =
        `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;
};
</script>

<template>
    <section id="contact" class="border-t border-[#252b27] bg-[#090b0a] py-20 md:py-28">
        <div class="section-container">

            <!-- Heading -->
            <Motion as="div" class="mb-14" :initial="{ opacity: 0, y: -30, filter: 'blur(6px)' }"
                :whileInView="{ opacity: 1, y: 0, filter: 'blur(0px)' }" :viewport="{ once: true, amount: 0.3 }"
                :transition="{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }">
                <p class="section-label mb-5">05 / LET'S CONNECT</p>

                <h2 class="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
                    Have a project in mind?
                    <span class="text-[#b5f36b]">Let's build it.</span>
                </h2>

                <p class="mt-6 max-w-2xl text-sm leading-7 text-[#929b94] md:text-base">
                    Have an idea, a business challenge or a development requirement?
                    Share your thoughts and let's explore how we can turn them into a
                    working product.
                </p>
            </Motion>

            <div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

                <!-- Contact information -->
                <Motion as="div" :initial="{ opacity: 0, x: -55 }" :whileInView="{ opacity: 1, x: 0 }"
                    :viewport="{ once: true, amount: 0.2 }"
                    :transition="{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }">
                    <div class="rounded-2xl border border-[#252b27] bg-[#111512] p-7">

                        <div class="mb-8 flex items-center gap-3">
                            <span class="h-2.5 w-2.5 rounded-full bg-[#b5f36b] shadow-[0_0_12px_#b5f36b]" />

                            <span class="text-sm text-[#b5f36b]">
                                Available for new opportunities
                            </span>
                        </div>

                        <h3 class="text-xl font-semibold">
                            Let's discuss your next project.
                        </h3>

                        <p class="mt-3 text-sm leading-7 text-[#929b94]">
                            Whether it's a startup MVP, an existing application or an
                            AI-powered solution, I'm happy to discuss your requirements.
                        </p>

                        <div class="mt-9 space-y-7">

                            <div>
                                <p class="mb-2 text-xs uppercase tracking-wider text-[#929b94]">
                                    Email
                                </p>

                                <a href="mailto:manjunathpurum@gmail.com"
                                    class="text-sm font-medium transition hover:text-[#b5f36b]">
                                    click to connect ↗
                                </a>
                            </div>

                            <div>
                                <p class="mb-2 text-xs uppercase tracking-wider text-[#929b94]">
                                    WhatsApp
                                </p>

                                <a href="https://wa.me/919666702088" target="_blank" rel="noopener noreferrer"
                                    class="text-sm font-medium transition hover:text-[#b5f36b]">
                                    Let's chat on WhatsApp ↗
                                </a>
                            </div>

                            <div>
                                <p class="mb-2 text-xs uppercase tracking-wider text-[#929b94]">
                                    LinkedIn
                                </p>

                                <a href="www.linkedin.com/in/manjunath-purum" target="_blank"
                                    rel="noopener noreferrer"
                                    class="text-sm font-medium transition hover:text-[#b5f36b]">
                                    Connect professionally ↗
                                </a>
                            </div>

                            <div>
                                <p class="mb-2 text-xs uppercase tracking-wider text-[#929b94]">
                                    Location
                                </p>

                                <p class="text-sm text-[#b9c0bb]">
                                    Bengaluru, India · Available remotely
                                </p>
                            </div>

                        </div>
                    </div>

                    <div class="mt-5 rounded-2xl border border-[#252b27] p-6">
                        <p class="text-sm font-semibold">
                            My development approach
                        </p>

                        <p class="mt-3 text-sm leading-7 text-[#929b94]">
                            Clear communication, practical solutions, clean code and
                            reliable delivery from planning to deployment.
                        </p>
                    </div>
                </Motion>

                <!-- Enquiry form -->
                <Motion as="div" class="rounded-2xl border border-[#252b27] bg-[#111512] p-6 sm:p-8"
                    :initial="{ opacity: 0, x: 55, scale: 0.97 }" :whileInView="{ opacity: 1, x: 0, scale: 1 }"
                    :viewport="{ once: true, amount: 0.2 }"
                    :transition="{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }">

                    <h3 class="text-xl font-semibold">
                        Tell me about your project
                    </h3>

                    <p class="mt-2 text-sm text-[#929b94]">
                        Share a few details and let's get started.
                    </p>

                    <form class="mt-8 space-y-6" novalidate @submit.prevent="submitEnquiry">

                        <!-- Name and Email -->
                        <div class="grid gap-5 sm:grid-cols-2">

                            <!-- Name -->
                            <div>
                                <label for="contact-name" class="mb-2 block text-sm text-[#b9c0bb]">
                                    Your name
                                </label>

                                <input id="contact-name" v-model="form.name" type="text" placeholder="John Doe"
                                    autocomplete="name" :aria-invalid="!!errors.name" aria-describedby="name-error"
                                    @input="handleNameInput"
                                    class="w-full rounded-lg border bg-[#090b0a] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#626b64] focus:border-[#b5f36b]"
                                    :class="errors.name
                                        ? 'border-red-500'
                                        : 'border-[#303a31]'
                                        " />

                                <p v-if="errors.name" id="name-error" class="mt-2 text-xs text-red-400" role="alert">
                                    {{ errors.name }}
                                </p>
                            </div>

                            <!-- Email -->
                            <div>
                                <label for="contact-email" class="mb-2 block text-sm text-[#b9c0bb]">
                                    Email address
                                </label>

                                <input id="contact-email" v-model="form.email" type="email"
                                    placeholder="john@example.com" autocomplete="email" :aria-invalid="!!errors.email"
                                    aria-describedby="email-error" @input="handleEmailInput"
                                    class="w-full rounded-lg border bg-[#090b0a] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#626b64] focus:border-[#b5f36b]"
                                    :class="errors.email
                                        ? 'border-red-500'
                                        : 'border-[#303a31]'
                                        " />

                                <p v-if="errors.email" id="email-error" class="mt-2 text-xs text-red-400" role="alert">
                                    {{ errors.email }}
                                </p>
                            </div>

                        </div>

                        <!-- Custom Service Dropdown -->
                        <div ref="serviceDropdownRef" class="relative">

                            <label id="contact-service-label" class="mb-2 block text-sm text-[#b9c0bb]">
                                What do you need?
                            </label>

                            <!-- Dropdown Trigger -->
                            <button type="button" aria-labelledby="contact-service-label" aria-haspopup="listbox"
                                :aria-expanded="serviceDropdownOpen" :aria-invalid="!!errors.service"
                                aria-describedby="service-error" @click="toggleServiceDropdown"
                                @keydown.esc="closeServiceDropdown"
                                class="flex w-full items-center justify-between rounded-lg border bg-[#090b0a] px-4 py-3 text-left text-sm outline-none transition-all duration-200 hover:border-[#52614f] focus:border-[#b5f36b] focus:ring-2 focus:ring-[#b5f36b]/10"
                                :class="[
                                    form.service ? 'text-[#f4f7f4]' : 'text-[#929b94]',
                                    errors.service ? 'border-red-500' : 'border-[#303a31]'
                                ]">
                                <span>
                                    {{ form.service || "Select a service" }}
                                </span>

                                <svg class="h-4 w-4 shrink-0 text-[#b5f36b] transition-transform duration-200"
                                    :class="{ 'rotate-180': serviceDropdownOpen }" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>

                            <!-- Dropdown Options -->
                            <Transition enter-active-class="transition duration-200 ease-out"
                                enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0"
                                leave-active-class="transition duration-150 ease-in"
                                leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
                                <div v-if="serviceDropdownOpen" role="listbox" aria-labelledby="contact-service-label"
                                    class="absolute left-0 top-full z-50 mt-2 max-h-64 w-full overflow-y-auto rounded-xl border border-[#303a31] bg-[#111512] p-2 shadow-2xl shadow-black/40">
                                    <button v-for="service in services" :key="service" type="button" role="option"
                                        :aria-selected="form.service === service" @click="selectService(service)"
                                        class="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm transition-all duration-150"
                                        :class="form.service === service
                                            ? 'bg-[#b5f36b]/10 text-[#b5f36b]'
                                            : 'text-[#b9c0bb] hover:bg-[#b5f36b]/10 hover:text-[#b5f36b]'
                                            ">
                                        <span>{{ service }}</span>

                                        <svg v-if="form.service === service" class="h-4 w-4 text-[#b5f36b]"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                            stroke-linejoin="round" aria-hidden="true">
                                            <path d="m5 12 4 4L19 6" />
                                        </svg>
                                    </button>
                                </div>
                            </Transition>

                            <!-- Service Error -->
                            <p v-if="errors.service" id="service-error" class="mt-2 text-xs text-red-400" role="alert">
                                {{ errors.service }}
                            </p>

                        </div>

                        <!-- Project Details -->
                        <div>
                            <label for="contact-message" class="mb-2 block text-sm text-[#b9c0bb]">
                                Project details
                            </label>

                            <textarea id="contact-message" v-model="form.message" rows="5"
                                placeholder="Tell me about your idea, requirements or project..."
                                :aria-invalid="!!errors.message" aria-describedby="message-error"
                                @input="handleMessageInput"
                                class="w-full resize-y rounded-lg border bg-[#090b0a] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#626b64] focus:border-[#b5f36b]"
                                :class="errors.message
                                    ? 'border-red-500'
                                    : 'border-[#303a31]'
                                    " />

                            <p v-if="errors.message" id="message-error" class="mt-2 text-xs text-red-400" role="alert">
                                {{ errors.message }}
                            </p>
                        </div>

                        <!-- Submit -->
                        <button type="submit"
                            class="primary-button w-full transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(181,243,107,0.12)] active:scale-[0.99]">
                            Send project enquiry ↗
                        </button>

                        <p class="text-center text-xs leading-5 text-[#929b94]">
                            Your email application will open with the enquiry details
                            prepared for you to send.
                        </p>

                    </form>
                </Motion>

            </div>
        </div>
    </section>
</template>
