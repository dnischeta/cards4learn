<script lang="ts">
import { defineComponent } from 'vue';

import UiHeader from '@/components/UI/UiHeader';
import RouteNames from '@/router/routeNames';

export default defineComponent({
  name: 'TheHeader',
  components: {
    UiHeader,
  },
  setup() {
    return {
      RouteNames,
    };
  },
});
</script>

<template>
  <UiHeader class="the-header" elevated>
    <div class="container">
      <div class="the-header__wrapper">
        <router-link
          class="the-header__logo"
          :to="{ name: RouteNames.HomePage }"
          >Logo</router-link
        >
        <nav class="the-header__nav">
          <ul class="the-header__list">
            <li class="the-header__list-item">
              <router-link
                class="the-header__nav-link"
                :to="{ name: RouteNames.LoginPage }"
                >Login</router-link
              >
            </li>
            <li class="the-header__list-item">
              <router-link
                class="the-header__nav-link"
                :to="{ name: RouteNames.RegistrationPage }"
                >Registration</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </UiHeader>
</template>

<style scoped>
.the-header__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
}

.the-header__logo {
  display: inline-block;
  font-weight: 700;
  font-size: 20px;
  opacity: 1;
}

.the-header__list {
  display: flex;
}

.the-header__list-item:not(:last-child) {
  margin-right: 10px;
}
</style>
