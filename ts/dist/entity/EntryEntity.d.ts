import { FreeDictionaryApi2EntityBase } from '../FreeDictionaryApi2EntityBase';
import type { FreeDictionaryApi2SDK } from '../FreeDictionaryApi2SDK';
import type { Control } from '../types';
import type { Entry, EntryLoadMatch } from '../FreeDictionaryApi2Types';
declare class EntryEntity extends FreeDictionaryApi2EntityBase<Entry> {
    constructor(client: FreeDictionaryApi2SDK, entopts: any);
    make(this: EntryEntity): EntryEntity;
    load(this: any, reqmatch?: EntryLoadMatch, ctrl?: Control): Promise<EntryEntity>;
}
export { EntryEntity };
