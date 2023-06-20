import { findComponent } from '@/utils/utils';
import { DATA_TABLE_CLASSES } from '@/constants/classes';
import SearchInput from '../../components/search-input/SearchInput';
import DataTableFilters from '@/components/data-table-filters/DataTableFilters';
import DataTableColumns from '@/components/column-customization/ColumnCustomization';
import DataTable from '../data-table/DataTable';
import { DATA_TABLE_EVENTS, SEARCH_INPUT_EVENTS } from '@/constants/events';
import DataTableViews from '../data-table-views/DataTableViews';
import { Component, Vue } from '@/build/vue-wrapper';

@Component({})
export default class DataTableToolbar extends Vue {
  name = 'DataTableToolbar';

  _searchComponent?: SearchInput;
  _filters?: DataTableFilters;
  _columns?: DataTableColumns;
  _views?: DataTableViews;

  mounted() {
    const dataTableComponent = findComponent(this, 'DataTable');

    if (dataTableComponent) {
      (dataTableComponent as DataTable)._toolbarComponent = this;
    }

    if (this._searchComponent) {
      // TODO: Put again
      // this._searchComponent.emitter.on(SEARCH_INPUT_EVENTS.SEARCH, (ev: Event) => {
      //   this.$emit(DATA_TABLE_EVENTS.TOOLBAR.SEARCH, ev);
      // });
    }

    if (this._filters) {
      // TODO: Put again
      // this._filters.emitter.on(DATA_TABLE_EVENTS.FILTERS_CHANGE, (ev: Event) => {
      //   this.$emit(DATA_TABLE_EVENTS.TOOLBAR.FILTERS_CHANGE, ev);
      // });
    }

    if (this._columns) {
      // TODO: Put again
      // this._columns.emitter.on(DATA_TABLE_EVENTS.COLUMNS_CHANGE, (ev: Event) => {
      //   this.$emit(DATA_TABLE_EVENTS.TOOLBAR.COLUMNS_CHANGE, ev);
      // });
      // this._columns.emitter.on(DATA_TABLE_EVENTS.COLUMNS_RESET, (ev: Event) => {
      //   this.$emit(DATA_TABLE_EVENTS.TOOLBAR.COLUMNS_CHANGE, ev);
      // });
    }

    if (this._views) {
      // TODO: Put again
      // this._views.emitter.on(DATA_TABLE_EVENTS.VIEWS_CHANGE, (ev: Event) => {
      //   this.$emit(DATA_TABLE_EVENTS.TOOLBAR.VIEWS_CHANGE, ev);
      // });
    }
  }

  render() {
    const slots = {
      start: this.$slots.start ? this.$slots.start({}) : null,
      end: this.$slots.end ? this.$slots.end({}) : null,
    };

    return (
      <div class={`${DATA_TABLE_CLASSES.TOOLBAR}`}>
        <div class={`${DATA_TABLE_CLASSES.TOOLBAR}__header`}>
          <div class={`${DATA_TABLE_CLASSES.TOOLBAR}__start`}>{slots.start}</div>
          <div class={`${DATA_TABLE_CLASSES.TOOLBAR}__end`}>{slots.end}</div>
        </div>
      </div>
    );
  }
}
