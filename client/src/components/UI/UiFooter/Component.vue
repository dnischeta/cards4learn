<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiFooter',
  inheritAttrs: false,
});
</script>

<template>
  <q-footer v-bind="$attrs">
    <slot />
  </q-footer>
</template>
