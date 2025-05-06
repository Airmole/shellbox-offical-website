<template>
  <n-config-provider :theme="theme">
    <n-message-provider>
      <index />
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts">
import { computed } from 'vue'
import {NMessageProvider, darkTheme, useOsTheme, NConfigProvider, lightTheme} from 'naive-ui'
import Index from "./components/Index.vue";
export default {
  components: {
    NMessageProvider,
    NConfigProvider,
    Index
  },
  setup() {
    const osThemeRef = useOsTheme()
    return {
      theme: computed(() => (osThemeRef.value === 'dark' ? darkTheme : lightTheme)),
      osTheme: osThemeRef
    }
  }
};
</script>

<style scoped>
</style>
