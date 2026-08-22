<script setup lang="ts">
useSeoMeta({
  title: "about",
  description: "About me",
});

const contacts = [
  {
    label: "Telegram",
    value: "@syrochkidev",
    to: "https://t.me/syrochkidev",
    target: "_blank",
    icon: "i-simple-icons-telegram",
  },
  {
    label: "GitHub",
    value: "github.com/syrochki",
    to: "https://github.com/syrochki",
    target: "_blank",
    icon: "i-simple-icons-github",
  },
  {
    label: "Email",
    value: "timzyk.apps@gmail.com",
    to: "mailto:timzyk.apps@gmail.com",
    icon: "i-lucide-mail",
  },
];
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-20">
    <h1 class="text-3xl sm:text-4xl font-bold tracking-tight mb-8">/about</h1>

    <div class="space-y-6 text-muted leading-relaxed mb-14">
      <p class="text-lg text-default">
        I'm a Rising Backend & Software Engineer focused on building reliable,
        production-ready services.
      </p>

      <p>
        I specialize in Python backend development with FastAPI and Django,
        asynchronous architectures, relational databases and clean service
        design. I care about code quality, testability and systems that are easy
        to operate in production.
      </p>

      <p>
        Currently I'm deepening my skills in system design, observability,
        distributed systems and high-scale backend infrastructure — with the
        goal of working on ambitious products at companies like xAI and Tesla.
      </p>
    </div>

    <section class="mb-14">
      <h2 class="text-xl font-semibold mb-4">My socials & email</h2>
      <div class="flex gap-4 flex-wrap">
        <a
          v-for="item in contacts"
          :key="item.label"
          :href="item.to"
          :target="item.target"
          rel="noopener noreferrer"
          class="flex items-center gap-4"
        >
          <div
            class="flex size-11 items-center justify-center rounded-lg bg-muted shrink-0"
          >
            <UIcon :name="item.icon" class="size-5 text-primary" />
          </div>
        </a>
      </div>
    </section>

    <section class="mb-14">
      <h2 class="text-xl font-semibold mb-4">What I focus on</h2>

      <ul class="space-y-3 text-muted">
        <li class="flex gap-3">
          <span class="text-primary text-sm pt-0.5">$</span>
          <span
            >Designing clean backend architectures (API / Service /
            Repository)</span
          >
        </li>
        <li class="flex gap-3">
          <span class="text-primary text-sm pt-0.5">$</span>
          <span>Building asynchronous and event-driven systems</span>
        </li>
        <li class="flex gap-3">
          <span class="text-primary text-sm pt-0.5">$</span>
          <span>Working with PostgreSQL, Redis and message brokers</span>
        </li>
        <li class="flex gap-3">
          <span class="text-primary text-sm pt-0.5">$</span>
          <span
            >Writing testable code with strong typing and CI-friendly
            workflows</span
          >
        </li>
        <li class="flex gap-3">
          <span class="text-primary text-sm pt-0.5">$</span>
          <span
            >Improving reliability through observability and good operational
            practices</span
          >
        </li>
      </ul>
    </section>

    <section class="mb-14">
      <h2 class="text-xl font-semibold mb-6">Experience</h2>

      <div class="space-y-8">
        <div class="relative pl-6 border-l border-default">
          <div
            class="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-primary"
          />
          <div class="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <h3 class="font-medium">Python Backend Developer</h3>
            <span class="text-sm text-muted"> Present </span>
          </div>
          <p class="text-muted mb-3">
            Building production backend services with a focus on reliability and
            clean architecture.
          </p>
          <ul class="space-y-2 text-sm text-muted">
            <li>
              • Developed asynchronous APIs with FastAPI, PostgreSQL and NATS
            </li>
            <li>• Designed database schemas, migrations and service layers</li>
            <li>
              • Implemented background task processing and inter-service
              communication
            </li>
            <li>
              • Wrote tests and followed strong typing / linting practices
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mb-14">
      <h2 class="text-xl font-semibold mb-4">Skills</h2>

      <div class="space-y-4">
        <div>
          <p class="text-sm text-muted mb-2">Languages</p>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="item in ['Python', 'TypeScript', 'SQL', 'Go (learning)']"
              :key="item"
              variant="subtle"
              color="neutral"
            >
              {{ item }}
            </UBadge>
          </div>
        </div>

        <div>
          <p class="text-sm text-muted mb-2">Backend</p>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="item in [
                'FastAPI',
                'Django',
                'Flask',
                'NATS',
                'RabbitMQ',
                'Celery',
                'TaskIQ',
              ]"
              :key="item"
              variant="subtle"
              color="neutral"
            >
              {{ item }}
            </UBadge>
          </div>
        </div>

        <div>
          <p class="text-sm text-muted mb-2">Data & Infrastructure</p>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="item in [
                'PostgreSQL',
                'Redis',
                'Docker',
                'Nginx',
                'Linux',
                'Git',
              ]"
              :key="item"
              variant="subtle"
              color="neutral"
            >
              {{ item }}
            </UBadge>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
