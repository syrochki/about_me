<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const links: NavigationMenuItem[] = [
  { label: "main", to: "/" },
  { label: "projects", to: "/projects" },
  { label: "about", to: "/about" },
];
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader :links="links" />

    <UMain class="flex-1 pt-20">
      <slot />
    </UMain>

    <AppFooter />
  </div>
</template>
