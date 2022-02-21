<script lang="ts">
import { QLayout, QPageContainer, QPage } from 'quasar';
import { defineComponent } from 'vue';

import TheFooter from './TheFooter.vue';
import TheHeader from './TheHeader.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    QLayout,
    QPageContainer,
    QPage,
    TheHeader,
    TheFooter,
  },
});
</script>

<template>
  <q-layout view="hHh lpr fff">
    <the-header />
    <q-page-container>
      <q-page>
        <h1>PRIVET</h1>
        <p>fsdfsf</p>
      </q-page>
    </q-page-container>
    <the-footer />
  </q-layout>
</template>
