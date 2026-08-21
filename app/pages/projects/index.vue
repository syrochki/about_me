<script setup lang="ts">
const { list } = useProjects();
const { data: projects } = await useAsyncData("projects", () => list());

useSeoMeta({
  title: "projects",
  description: "Projects I worked on",
});
</script>
<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-20">
    <h1 class="text-3xl sm:text-4xl font-bold tracking-tight pb-8">
      /projects
    </h1>
    <p class="text-muted text-lg tracking-tight max-w-2xl pb-10">
      Projects I worked on
    </p>
    <div class="space-y-6">
      <NuxtLink
        v-for="project in projects"
        :key="project.slug"
        :to="`/projects/${project.slug}`"
        class="block group rounded-xl border border-default bg-elevated p-6 transition-colors hover:border-primary/40"
      >
        <div class="flex items-start justify-between gap-4 mb-3">
          <h2
            class="text-xl font-semibold group-hover:text-primary transition-colors"
          >
            {{ project.title }}
          </h2>
          <span class="text-sm text-muted shrink-0">
            {{ project.year }}
          </span>
        </div>

        <p class="text-muted mb-5 leading-relaxed">
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
  </div>
</template>
