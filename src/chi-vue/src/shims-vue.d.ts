/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component
}

import mitt from 'mitt';
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
      emitter: mitt;
  }
}

declare module '*.json' {
  const value: { [key: string]: any };
  export default value;
}
