<template>
  <div id="app">
    <div class="-p--4">
      <h1>Chi Vue 3</h1>

      <CheckboxView />
      <SearchInputView />
      <DrawerView />
      <ExpansionPanelView />
      <PaginationView />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import CheckboxView from './views/CheckboxView.vue';
import DrawerView from './views/DrawerView.vue';
import ExpansionPanelView from './views/ExpansionPanelView.vue';
import SearchInputView from './views/SearchInputView.vue';
import PaginationView from './views/PaginationView.vue';
// TODO: Remove after full migration in Vue 3
import { configureCompat } from '@vue/compat';

configureCompat({ RENDER_FUNCTION: false });

@Component({
  components: {
    CheckboxView,
    SearchInputView,
    DrawerView,
    ExpansionPanelView,
    PaginationView,
  },
})
export default class App extends Vue {}
</script>
