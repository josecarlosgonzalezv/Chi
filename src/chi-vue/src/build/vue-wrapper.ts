import { Vue, Options } from 'vue-class-component';
import { defineAsyncComponent } from 'vue';

function Component(options: any) {
  const optionsDecorator = Options;

  if (options.components) {
    const updatedComponents: any = {};

    for (const [key, value] of Object.entries(options.components)) {
      if (typeof value === 'function') {
        updatedComponents[key] = defineAsyncComponent(value as any);
      } else {
        updatedComponents[key] = value;
      }
    }
    options.components = updatedComponents;
  }

  return optionsDecorator(options);
}

export { Component, Vue };
