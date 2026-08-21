<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

const { bySlug } = useProjects();
const { data } = await useAsyncData(`project-${slug}`, () => bySlug(slug));

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Project not found",
  });
}

const project = computed(() => data.value!.project);
const document = computed(() => data.value!.document);

useSeoMeta({
  title: project.value.title,
  description: project.value.description,
});
</script>

<template>
  <div v-if="project" class="max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-20">
    <div class="mb-8">
      <UButton to="/projects" variant="ghost" color="neutral">
        <UIcon name="i-mingcute-arrow-left-fill" class="mt-0.5" />
        /projects
      </UButton>
    </div>

    <div class="mb-10 space-y-4">
      <div class="flex flex-wrap items-center gap-3 text-sm text-muted">
        <span>{{ project.year }}</span>
        <span>·</span>
        <span>{{ project.role }}</span>
      </div>

      <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">
        {{ project.title }}
      </h1>

      <p class="text-lg text-muted leading-relaxed">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-3 pt-2">
        <UButton
          v-if="project.github"
          :to="project.github"
          target="_blank"
          color="primary"
          icon="i-simple-icons-github"
        >
          GitHub
        </UButton>
        <UButton
          v-if="project.demo"
          :to="project.demo"
          target="_blank"
          variant="outline"
          color="neutral"
          icon="i-lucide-external-link"
        >
          Live Demo
        </UButton>
      </div>
    </div>

    <section class="mb-12">
      <h2 class="text-sm font-medium text-muted mb-3">Tech stack</h2>
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
    </section>

    <section class="mb-12">
      <h2 class="text-xl font-semibold mb-4">What I did</h2>
      <ul class="space-y-3">
        <li
          v-for="item in project.highlights"
          :key="item"
          class="flex gap-3 text-muted"
        >
          <span class="text-primary text-sm pt-0.5">$</span>
          <span>{{ item }}</span>
        </li>
      </ul>
    </section>

    <section class="mb-12 project-content">
      <ContentRenderer v-if="document" :value="document" />
      <!-- если body приходит строкой из API позже — рендери markdown отдельно -->
    </section>
  </div>
</template>
