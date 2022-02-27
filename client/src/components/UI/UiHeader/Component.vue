<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiHeader',
  inheritAttrs: false,
});
</script>

<template>
  <q-header v-bind="$attrs">
    <slot />
  </q-header>
</template>
