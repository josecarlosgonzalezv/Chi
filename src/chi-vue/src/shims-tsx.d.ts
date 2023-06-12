declare module 'vue' {
  interface ComponentCustomProps {
    message?: string;

    // DataTableTooltip
    msg?: string;
    header?: boolean;
    textWrap?: boolean;

    // DataTableBulkActions
    selectedRows?: number;
    uuid?: number | string;
  }
}

export {};
