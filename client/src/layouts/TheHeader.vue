<script lang="ts">
import { QHeader } from 'quasar';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheHeader',
  components: {
    QHeader,
  },
});
</script>

<template>
  <q-header elevated class="bg-primary text-white">
    <h1>HEADER</h1>
  </q-header>
</template>
