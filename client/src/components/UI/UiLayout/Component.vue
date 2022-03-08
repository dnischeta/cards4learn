<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiLayout',
});
</script>

<template>
  <q-layout>
    <slot />
  </q-layout>
</template>
