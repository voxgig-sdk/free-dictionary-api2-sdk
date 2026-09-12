import { FreeDictionaryApi2EntityBase } from '../FreeDictionaryApi2EntityBase';
import type { FreeDictionaryApi2SDK } from '../FreeDictionaryApi2SDK';
import type { Control } from '../types';
import type { Language, LanguageLoadMatch } from '../FreeDictionaryApi2Types';
declare class LanguageEntity extends FreeDictionaryApi2EntityBase<Language> {
    constructor(client: FreeDictionaryApi2SDK, entopts: any);
    make(this: LanguageEntity): LanguageEntity;
    load(this: any, reqmatch?: LanguageLoadMatch, ctrl?: Control): Promise<LanguageEntity>;
}
export { LanguageEntity };
