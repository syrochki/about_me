<script setup lang="ts">
const { list } = useProjects();
const { data: featuredProjects } = await useAsyncData("projects", () => list());

useSeoMeta({
  title: "main",
  description: "Backend / Software Engineer focused on high-scale systems",
});
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20 space-y-24">
    <section class="space-y-6">
      <h1 class="text-4xl sm:text-5xl font-bold tracking-tight">
        Tim Zykov / <span class="text-sky-500">syrochki</span>
      </h1>
      <p class="text-xl text-muted">Rising Backend & Software Engineer</p>
      <p class="text-lg text-muted max-w-2xl">
        Building reliable, high-scale backend systems. Focused on distributed
        systems, async architectures and production-ready services.
      </p>

      <div class="flex flex-wrap gap-3 pt-2">
        <UButton to="/projects" size="lg"> View Projects </UButton>
        <UButton
          to="https://github.com/syrochki"
          target="_blank"
          variant="outline"
          size="lg"
          color="neutral"
        >
          GitHub
        </UButton>
      </div>
    </section>

    <section class="space-y-8">
      <div class="flex items-end justify-between">
        <h2 class="text-2xl font-semibold">Selected Projects</h2>
        <UButton to="/projects" variant="link" color="neutral">
          View all <UIcon name="i-mingcute-arrow-right-fill" />
        </UButton>
      </div>

      <div class="space-y-6">
        <NuxtLink
          v-for="project in featuredProjects"
          :key="project.title"
          :to="`/projects/${project.slug}`"
          class="block p-6 rounded-xl border border-muted hover:border-primary/50 transition-colors"
        >
          <h3 class="text-lg font-medium mb-2">
            {{ project.title }}
          </h3>
          <p class="text-muted mb-4">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="tech in project.stack"
              :key="tech"
              variant="subtle"
              color="neutral"
            >
              {{ tech }}
            </UBadge>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">About</h2>
      <p class="text-muted leading-relaxed">
        Results-driven Python Backend Developer focused on building robust,
        production-ready services. I specialize in REST APIs, relational
        databases, asynchronous task processing and clean architecture.
        Currently leveling up in system design, observability and high-scale
        distributed systems.
      </p>
      <UButton to="/about" variant="link" color="neutral" class="px-0">
        More about me
        <UIcon name="i-mingcute-arrow-right-fill" class="mt-0.5" />
      </UButton>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Get in touch</h2>
      <p class="text-muted">
        Open to interesting backend and infrastructure opportunities.
      </p>
      <div class="flex flex-wrap gap-3">
        <UButton to="mailto:timzyk.apps@gmail.com" variant="soft">
          Email
        </UButton>
        <UButton
          to="https://t.me/palaroid800"
          target="_blank"
          variant="soft"
          color="neutral"
        >
          Telegram
        </UButton>
        <UButton
          to="https://github.com/syrochki"
          target="_blank"
          variant="soft"
          color="neutral"
        >
          GitHub
        </UButton>
      </div>
    </section>
  </div>
</template>
