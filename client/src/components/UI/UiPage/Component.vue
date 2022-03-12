<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiPage',
});
</script>

<template>
  <q-page>
    <slot />
  </q-page>
</template>
