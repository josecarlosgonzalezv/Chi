import { h } from "@stencil/core";
import { RADIO_CLASSES } from "../../constants/classes";
import { addMutationObserver } from "../../utils/mutationObserver";
import { v4 as uuid4 } from "uuid";
export class RadioButton {
    constructor() {
        this.label = undefined;
        this.name = undefined;
        this.checked = undefined;
        this.disabled = undefined;
        this.state = undefined;
    }
    connectedCallback() {
        this.id = this.el.getAttribute('id');
        addMutationObserver.call(this);
    }
    componentWillLoad() {
        this.id = `${uuid4()}`;
        this.labelId = `radio-label-${this.id}`;
    }
    blur() {
        this.hasFocus = false;
        this._emitBlur(this.hasFocus);
    }
    change(ev) {
        this.checked = ev.target.checked;
        this._emitChange(this.checked);
    }
    focus() {
        this.hasFocus = true;
        this._emitFocus(this.hasFocus);
    }
    _emitBlur(hasFocus) {
        this.chiBlur.emit(hasFocus);
    }
    _emitChange(checked) {
        this.chiChange.emit(checked);
    }
    _emitFocus(hasFocus) {
        this.chiFocus.emit(hasFocus);
    }
    render() {
        const stateClass = this.state ? `-${this.state}` : '';
        return (h("div", { key: 'fbcea6edff455f3461742ecb2c199cd29e5dc881', class: RADIO_CLASSES.RADIO }, h("input", { key: 'a028f739db625deb77d7b3dac9a2c21402c1c4b4', class: `
            ${RADIO_CLASSES.INPUT}
            ${stateClass}
          `, id: this.id, checked: this.checked, disabled: this.disabled, name: this.name, "aria-checked": this.checked, "aria-labelledby": this.labelId, onBlur: () => this.blur(), onChange: (ev) => this.change(ev), onFocus: () => this.focus(), type: "radio" }), h("label", { key: '7c408988740e1031ce1a40ce21da9fefa79d9dc4', id: this.labelId, class: RADIO_CLASSES.LABEL, htmlFor: this.id }, this.label)));
    }
    static get is() { return "chi-radio-button"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To provide radiobutton label as a string"
                },
                "attribute": "label",
                "reflect": false
            },
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To render the radiobutton input with a respective name attribute"
                },
                "attribute": "name",
                "reflect": false
            },
            "checked": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To render the radiobutton in checked state"
                },
                "attribute": "checked",
                "reflect": true
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To disable the radiobutton"
                },
                "attribute": "disabled",
                "reflect": false
            },
            "state": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ChiStates",
                    "resolved": "\"danger\" | \"success\" | \"warning\"",
                    "references": {
                        "ChiStates": {
                            "location": "import",
                            "path": "../../constants/states",
                            "id": "src/constants/states.ts::ChiStates"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "To indicate the state"
                },
                "attribute": "state",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "chiBlur",
                "name": "chiBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when the radio-button has lost the focus"
                },
                "complexType": {
                    "original": "string | boolean",
                    "resolved": "boolean | string",
                    "references": {}
                }
            }, {
                "method": "chiChange",
                "name": "chiChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when the user selects or deselects the radio-button"
                },
                "complexType": {
                    "original": "string | boolean",
                    "resolved": "boolean | string",
                    "references": {}
                }
            }, {
                "method": "chiFocus",
                "name": "chiFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when the radio-button has the focus"
                },
                "complexType": {
                    "original": "string | boolean",
                    "resolved": "boolean | string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}