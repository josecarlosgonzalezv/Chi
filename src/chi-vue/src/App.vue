<template>
  <div class="-p--4">
    <h1>Chi Vue 3</h1>
    <!-- <DataTableClientView /> -->

    <CheckboxView />
    <!-- <SearchInputView />
    <DrawerView />
    <ExpansionPanelView />
    <PaginationView />
    <TooltipView /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/build/vue-wrapper';
import { Inject } from 'vue-property-decorator';
import { Emitter } from 'mitt';
import CheckboxView from './views/CheckboxView.vue';
import DrawerView from './views/DrawerView.vue';
import ExpansionPanelView from './views/ExpansionPanelView.vue';
import SearchInputView from './views/SearchInputView.vue';
import PaginationView from './views/PaginationView.vue';
import TooltipView from './views/TooltipView.vue';
import DataTableClientView from './views/DataTable/ClientSide/DataTableClientView.vue';

@Component({
  components: {
    CheckboxView,
    SearchInputView,
    DrawerView,
    ExpansionPanelView,
    PaginationView,
    TooltipView,
    DataTableClientView,
  },
})
export default class App extends Vue {
  @Inject({
    from: 'emitter',
    default: undefined,
  })
  readonly emitter!: Emitter<{
    'checkbox-msg': string,
    content: string,
  }>;

  created() {
    console.log(`created emitter listener for checkbox-msg`);
    this.emitter.on('checkbox-msg', e => console.log(`[on]:`, e));
  }
}
</script>
