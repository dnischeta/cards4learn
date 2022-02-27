<script lang="ts">
import { defineComponent } from 'vue';

import UiFooter from '@/components/UI/UiFooter';
import { getYear } from '@/helpers/date';

export default defineComponent({
  name: 'TheFooter',
  components: {
    UiFooter,
  },
  setup() {
    return {
      getYear,
    };
  },
});
</script>

<template>
  <UiFooter class="the-footer" elevated>
    <div class="container">
      <div class="the-footer__wrapper">
        <span class="the-footer__footnote">{{ getYear() }}</span>
      </div>
    </div>
  </UiFooter>
</template>

<style scoped>
.the-footer__wrapper {
  display: flex;
  justify-content: center;
  padding: 10px 0;
}

.the-footer__footnote {
  font-weight: 200;
}
</style>
