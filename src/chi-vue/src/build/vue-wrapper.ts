import { Vue, Options } from 'vue-property-decorator';
import { defineAsyncComponent } from 'vue';

function Component(options?: any) {
  if (options.components) {
    const updatedComponents: any = {};

    for (const [key, value] of Object.entries(options.components)) {
      if (typeof value === "function") {
        if (typeof value.prototype === "object") {
          // support for tsx imports
          updatedComponents[key] = value.prototype;
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
