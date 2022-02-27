<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiPage',
  inheritAttrs: false,
});
</script>

<template>
  <q-page v-bind="$attrs">
    <slot />
  </q-page>
</template>
