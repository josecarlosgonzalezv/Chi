import { Vue, Options } from 'vue-class-component';
import { defineAsyncComponent } from 'vue';

function Component(options?: any) {
  // vue 3
  if (options.components) {
    const updatedComponents: any = {};

    for (const [key, value] of Object.entries(options.components)) {
      if (typeof value === 'function') {
        if ((value as any).__vccOpts) {
          // support for tsx imports
          updatedComponents[key] = (value as any).__vccOpts;
        } else {
          // support for dynamic vue imports
          updatedComponents[key] = defineAsyncComponent(value as any);
        }
      } else {
        // support for static vue imports
        updatedComponents[key] = value;
      }
    }
    options.components = updatedComponents;
  }

  return Options(options);
}

export { Component, Vue };
