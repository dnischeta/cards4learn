<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiPageContainer',
  inheritAttrs: false,
});
</script>

<template>
  <q-page-container v-bind="$attrs">
    <slot />
  </q-page-container>
</template>
