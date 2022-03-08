<script lang="ts">
import { defineComponent } from 'vue';

import { MainLayout } from './layouts/MainLayout';

export default defineComponent({
  name: 'App',
  components: {
    MainLayout,
  },
});
</script>

<template>
  <MainLayout />
</template>
