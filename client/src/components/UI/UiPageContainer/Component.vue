<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiPageContainer',
});
</script>

<template>
  <q-page-container>
    <slot />
  </q-page-container>
</template>
