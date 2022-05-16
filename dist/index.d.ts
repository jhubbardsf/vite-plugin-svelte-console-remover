declare const removeConsole: (name: string) => {
    name: string;
    apply: string;
    transform(_source: string, id: string): string | null | undefined;
};

export { removeConsole as default };
