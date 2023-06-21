import { Emit, Inject, Prop, Watch } from 'vue-property-decorator';
import { CHECKBOX_CLASSES, SR_ONLY } from '@/constants/classes';
import { GENERIC_EVENTS } from '@/constants/events';
import { CheckboxState } from '@/constants/types';
import { Component, Vue } from '@/build/vue-wrapper';
import { Emitter } from 'mitt';

@Component({})
export default class Checkbox extends Vue {
  @Prop({ required: true }) id!: string;
  @Prop() label?: string;
  @Prop() name?: string;
  @Prop() selected!: CheckboxState;
  @Prop() disabled?: boolean;

  @Inject({
    from: 'emitter',
    default: undefined,
  })
  readonly emitter!: Emitter<{
    'checkbox-msg': string,
    content: string,
  }>;

  state: CheckboxState = false;

  @Watch('selected')
  dataState(newValue: CheckboxState, oldValue: CheckboxState): void {
    if (newValue !== oldValue) {
      this.state = newValue;
      this._updateCheckboxState();
    }
  }

  @Emit(GENERIC_EVENTS.CHANGE)
  _emitChange(ev: Event) {
    console.log(`emitting checkbox-msg...`)
    this.emitter.emit('checkbox-msg', 'emtting the event from checkbox');
    return ev;
  }

  _updateCheckboxState(): void {
    const checkbox = this.$refs.checkbox as HTMLInputElement;

    if (this.state === 'indeterminate') {
      checkbox.indeterminate = true;
    } else {
      checkbox.indeterminate = false;
    }
  }

  beforeMount(): void {
    this.state = this.selected;
  }

  mounted(): void {
    this._updateCheckboxState();
  }

  render(): JSX.Element {
    return (
      <div class={CHECKBOX_CLASSES.CHECKBOX} key={this.id}>
        <input
          class={`${CHECKBOX_CLASSES.INPUT} ${this.state === 'indeterminate' && CHECKBOX_CLASSES.INDETERMINATE}`}
          v-model={this.state}
          disabled={this.disabled}
          id={this.id}
          name={this.name}
          onChange={(ev: Event) => this._emitChange(ev)}
          ref="checkbox"
          type="checkbox"
        />
        <label class={CHECKBOX_CLASSES.LABEL} for={this.id}>
          {this.label}
          <div class={SR_ONLY}>
            Select {this.label || this.name} {this.id}
          </div>
        </label>
      </div>
    );
  }
}
