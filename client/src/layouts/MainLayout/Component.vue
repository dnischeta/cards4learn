<script lang="ts">
import { defineComponent } from 'vue';

import { UiLayout } from '@/components/UI/UiLayout';
import { UiPage } from '@/components/UI/UiPage';
import { UiPageContainer } from '@/components/UI/UiPageContainer';
import { TheFooter } from '@/layouts/TheFooter';
import { TheHeader } from '@/layouts/TheHeader';

export default defineComponent({
  name: 'MainLayout',
  components: {
    UiLayout,
    UiPageContainer,
    UiPage,
    TheHeader,
    TheFooter,
  },
});
</script>

<template>
  <UiLayout class="layout" view="hHh lpr fFf">
    <TheHeader />
    <UiPageContainer>
      <UiPage padding>
        <div class="container">
          <router-view />
        </div>
      </UiPage>
    </UiPageContainer>
    <TheFooter />
  </UiLayout>
</template>
