/* tslint:disable */
/* eslint-disable */
/**
 * Chaster
 * Chaster Public API  API documentation: [https://docs.chaster.app/api-introduction](https://docs.chaster.app/api-introduction) 
 *
 * The version of the OpenAPI document: 0.12.54
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Region
 * @export
 * @interface CurrentUserForProfileSettingsRegion
 */
export interface CurrentUserForProfileSettingsRegion {
    /**
     * 
     * @type {string}
     * @memberof CurrentUserForProfileSettingsRegion
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUserForProfileSettingsRegion
     */
    shortCode?: string;
}

/**
 * Check if a given object implements the CurrentUserForProfileSettingsRegion interface.
 */
export function instanceOfCurrentUserForProfileSettingsRegion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function CurrentUserForProfileSettingsRegionFromJSON(json: any): CurrentUserForProfileSettingsRegion {
    return CurrentUserForProfileSettingsRegionFromJSONTyped(json, false);
}

export function CurrentUserForProfileSettingsRegionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrentUserForProfileSettingsRegion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'shortCode': !exists(json, 'shortCode') ? undefined : json['shortCode'],
    };
}

export function CurrentUserForProfileSettingsRegionToJSON(value?: CurrentUserForProfileSettingsRegion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'shortCode': value.shortCode,
    };
}
