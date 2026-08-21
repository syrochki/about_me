<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <UFooter
    class="border-t border-default"
    :ui="{
      root: 'py-6',
      left: 'text-muted text-sm',
      right: 'flex items-center gap-1'
    }"
  >
    <template #left>
      <span>{{ footer.credits }}</span>
    </template>

    <template #right>
      <UButton
        v-for="(link, index) in footer.links || []"
        :key="index"
        v-bind="link"
        size="sm"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
