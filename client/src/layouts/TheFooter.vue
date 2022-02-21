<script lang="ts">
import { QFooter } from 'quasar';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheFooter',
  components: {
    QFooter,
  },
});
</script>

<template>
  <q-footer elevated class="bg-grey-8 text-white">
    <h1>FOOOTER</h1>
  </q-footer>
</template>
