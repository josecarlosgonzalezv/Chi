import { Vue, Options } from 'vue-property-decorator';
import { defineAsyncComponent } from 'vue';

function Component(options: any) {
  if (options.components) {
    const updatedComponents: any = {};

    for (const [key, value] of Object.entries(options.components)) {
      if (typeof value === 'function') {
        if (typeof value.prototype === 'object') {
          updatedComponents[key] = value.prototype;
        } else {
          updatedComponents[key] = defineAsyncComponent(value as any);
        }
      } else {
        updatedComponents[key] = value;
      }
    }
    options.components = updatedComponents;
  }

  return Options(options);
}

export { Component, Vue };
