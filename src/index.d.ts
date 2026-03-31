declare const caseConverter: {
    _normalize(text: string, options: Partial<{ removePunctuations: boolean, splitCamelCase: boolean }>): string;
    
    toUpperCase(text: string): string;
    
    toLowerCase(text: string): string;
    
    toTitleCase(text: string): string;
    
    toSentenceCase(text: string): string;
    
    toSnakeCase(text: string): string;
    
    toCamelCase(text: string): string;
    
    toPascalCase(text: string): string;
    
    toKebabCase(text: string): string;
    
    slugify(text: string): string;
};

export default caseConverter;