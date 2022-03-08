<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiHeader',
});
</script>

<template>
  <q-header>
    <slot />
  </q-header>
</template>
