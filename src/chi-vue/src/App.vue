<template>
  <div id="app">
    <div class="-p--4">
      <h1>Chi Vue 3</h1>

      <CheckboxView />
      <SearchInputView />
      <DrawerView />
      <ExpansionPanelView />
      <PaginationView />
      <TooltipView />
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
import TooltipView from './views/TooltipView.vue';

@Component({
  components: {
    CheckboxView,
    SearchInputView,
    DrawerView,
    ExpansionPanelView,
    PaginationView,
    TooltipView,
  },
})
export default class App extends Vue {}
</script>
