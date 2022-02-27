<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiLayout',
  inheritAttrs: false,
});
</script>

<template>
  <q-layout v-bind="$attrs">
    <slot />
  </q-layout>
</template>
