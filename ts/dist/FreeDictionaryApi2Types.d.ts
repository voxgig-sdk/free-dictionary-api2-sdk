export interface Entry {
    id?: string;
}
export interface EntryLoadMatch {
    language: string;
    word: string;
    pretty?: boolean;
    translation?: boolean;
}
export interface Language {
}
export interface LanguageLoadMatch {
    pretty?: boolean;
}
