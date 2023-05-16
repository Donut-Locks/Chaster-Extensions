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

/**
 * @type PartnerConfigurationChildEventsPayload
 * 
 * @export
 */
export type PartnerConfigurationChildEventsPayload = PartnerConfigurationChildCapabilitiesEvent;

export function PartnerConfigurationChildEventsPayloadFromJSON(json: any): PartnerConfigurationChildEventsPayload {
    return PartnerConfigurationChildEventsPayloadFromJSONTyped(json, false);
}

export function PartnerConfigurationChildEventsPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerConfigurationChildEventsPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...PartnerConfigurationChildCapabilitiesEventFromJSONTyped(json, true) };
}

export function PartnerConfigurationChildEventsPayloadToJSON(value?: PartnerConfigurationChildEventsPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfPartnerConfigurationChildCapabilitiesEvent(value)) {
        return PartnerConfigurationChildCapabilitiesEventToJSON(value as PartnerConfigurationChildCapabilitiesEvent);
    }

    return {};
}
