import { EntryEntity } from './entity/EntryEntity';
import { LanguageEntity } from './entity/LanguageEntity';
export type * from './FreeDictionaryApi2Types';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { FreeDictionaryApi2EntityBase } from './FreeDictionaryApi2EntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class FreeDictionaryApi2SDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Entry(entopts?: Record<string, any>): EntryEntity;
    Language(entopts?: Record<string, any>): LanguageEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): FreeDictionaryApi2SDK;
    tester(testopts?: any, sdkopts?: any): FreeDictionaryApi2SDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof FreeDictionaryApi2SDK;
export { stdutil, config, BaseFeature, FreeDictionaryApi2EntityBase, FreeDictionaryApi2SDK, SDK, };
