<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

defineProps<{
  links: NavigationMenuItem[];
}>();
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 flex justify-center pt-3 sm:pt-4 pointer-events-none"
  >
    <div class="pointer-events-auto">
      <UNavigationMenu
        :items="links"
        variant="link"
        color="neutral"
        class="bg-muted/80 backdrop-blur-md rounded-full px-2 sm:px-3 border border-default/50 shadow-sm"
        :ui="{
          link: 'px-2.5 py-1.5 text-sm',
          linkLeadingIcon: 'hidden',
        }"
      >
        <template #list-trailing>
          <div class="flex items-center gap-1 ml-1">
            <ThemeModeButton />
          </div>
        </template>
      </UNavigationMenu>
    </div>
  </header>
</template>
