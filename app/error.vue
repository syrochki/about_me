<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

useHead({
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  title: "Page not found",
  description: "This page couldn't be found... GG",
});
</script>
