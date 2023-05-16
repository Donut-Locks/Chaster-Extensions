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
 * 
 * @export
 * @interface LockCreatedRepDto
 */
export interface LockCreatedRepDto {
    /**
     * The created lock id
     * @type {string}
     * @memberof LockCreatedRepDto
     */
    lockId: string;
}

/**
 * Check if a given object implements the LockCreatedRepDto interface.
 */
export function instanceOfLockCreatedRepDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "lockId" in value;

    return isInstance;
}

export function LockCreatedRepDtoFromJSON(json: any): LockCreatedRepDto {
    return LockCreatedRepDtoFromJSONTyped(json, false);
}

export function LockCreatedRepDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LockCreatedRepDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lockId': json['lockId'],
    };
}

export function LockCreatedRepDtoToJSON(value?: LockCreatedRepDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lockId': value.lockId,
    };
}
