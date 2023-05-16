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
import type { ExtensionPartyForPublic } from './ExtensionPartyForPublic';
import {
    ExtensionPartyForPublicFromJSON,
    ExtensionPartyForPublicFromJSONTyped,
    ExtensionPartyForPublicToJSON,
} from './ExtensionPartyForPublic';
import type { LockForPublicKeyholder } from './LockForPublicKeyholder';
import {
    LockForPublicKeyholderFromJSON,
    LockForPublicKeyholderFromJSONTyped,
    LockForPublicKeyholderToJSON,
} from './LockForPublicKeyholder';
import type { LockForPublicLastVerificationPicture } from './LockForPublicLastVerificationPicture';
import {
    LockForPublicLastVerificationPictureFromJSON,
    LockForPublicLastVerificationPictureFromJSONTyped,
    LockForPublicLastVerificationPictureToJSON,
} from './LockForPublicLastVerificationPicture';
import type { LockForPublicSharedLock } from './LockForPublicSharedLock';
import {
    LockForPublicSharedLockFromJSON,
    LockForPublicSharedLockFromJSONTyped,
    LockForPublicSharedLockToJSON,
} from './LockForPublicSharedLock';
import type { LockForPublicUser } from './LockForPublicUser';
import {
    LockForPublicUserFromJSON,
    LockForPublicUserFromJSONTyped,
    LockForPublicUserToJSON,
} from './LockForPublicUser';
import type { LockStatusEnum } from './LockStatusEnum';
import {
    LockStatusEnumFromJSON,
    LockStatusEnumFromJSONTyped,
    LockStatusEnumToJSON,
} from './LockStatusEnum';
import type { ReasonPreventingUnlocking } from './ReasonPreventingUnlocking';
import {
    ReasonPreventingUnlockingFromJSON,
    ReasonPreventingUnlockingFromJSONTyped,
    ReasonPreventingUnlockingToJSON,
} from './ReasonPreventingUnlocking';

/**
 * 
 * @export
 * @interface LockForPublic
 */
export interface LockForPublic {
    /**
     * 
     * @type {LockStatusEnum}
     * @memberof LockForPublic
     */
    status: LockStatusEnum;
    /**
     * The lock id
     * @type {string}
     * @memberof LockForPublic
     */
    id: string;
    /**
     * The end date
     * @type {Date}
     * @memberof LockForPublic
     */
    endDate: Date | null;
    /**
     * The lock title
     * @type {string}
     * @memberof LockForPublic
     */
    title: string;
    /**
     * The total duration, since the creation of the lock
     * @type {number}
     * @memberof LockForPublic
     */
    totalDuration: number;
    /**
     * 
     * @type {LockForPublicUser}
     * @memberof LockForPublic
     */
    user: LockForPublicUser;
    /**
     * 
     * @type {LockForPublicKeyholder}
     * @memberof LockForPublic
     */
    keyholder: LockForPublicKeyholder | null;
    /**
     * 
     * @type {LockForPublicSharedLock}
     * @memberof LockForPublic
     */
    sharedLock: LockForPublicSharedLock | null;
    /**
     * Whether the wearer is allowed to view the remaining time
     * @type {boolean}
     * @memberof LockForPublic
     */
    isAllowedToViewTime: boolean;
    /**
     * Whether the lock can be unlocked
     * @type {boolean}
     * @memberof LockForPublic
     */
    canBeUnlocked: boolean;
    /**
     * Whether the lock can be unlocked because the max limit date has been reached
     * @type {boolean}
     * @memberof LockForPublic
     */
    canBeUnlockedByMaxLimitDate: boolean;
    /**
     * Whether the lock is frozen
     * @type {boolean}
     * @memberof LockForPublic
     */
    isFrozen: boolean;
    /**
     * The user role
     * @type {string}
     * @memberof LockForPublic
     */
    role: LockForPublicRoleEnum;
    /**
     * The extensions
     * @type {Array<ExtensionPartyForPublic>}
     * @memberof LockForPublic
     */
    extensions: Array<ExtensionPartyForPublic>;
    /**
     * The combination
     * @type {string}
     * @memberof LockForPublic
     */
    combination: string;
    /**
     * Reasons preventing unlocking
     * @type {Array<ReasonPreventingUnlocking>}
     * @memberof LockForPublic
     */
    reasonsPreventingUnlocking: Array<ReasonPreventingUnlocking>;
    /**
     * Whether the extensions allow unlocking
     * @type {boolean}
     * @memberof LockForPublic
     */
    extensionsAllowUnlocking: boolean;
    /**
     * 
     * @type {LockForPublicLastVerificationPicture}
     * @memberof LockForPublic
     */
    lastVerificationPicture: LockForPublicLastVerificationPicture | null;
    /**
     * Created at
     * @type {Date}
     * @memberof LockForPublic
     */
    createdAt: Date;
    /**
     * Updated at
     * @type {Date}
     * @memberof LockForPublic
     */
    updatedAt: Date;
    /**
     * The start date
     * @type {Date}
     * @memberof LockForPublic
     */
    startDate: Date;
    /**
     * The minimum initial date configured at creation
     * @type {Date}
     * @memberof LockForPublic
     */
    minDate: Date;
    /**
     * The maximum initial date configured at creation
     * @type {Date}
     * @memberof LockForPublic
     */
    maxDate: Date;
    /**
     * The maximum date of the lock

After this date, the wearer can release themself
regardless of the timer or extension restrictions.
     * @type {Date}
     * @memberof LockForPublic
     */
    maxLimitDate: Date | null;
    /**
     * Whether the remaining time is displayed to the wearer
     * @type {boolean}
     * @memberof LockForPublic
     */
    displayRemainingTime: boolean;
    /**
     * Whether the lock is limited in duration
     * @type {boolean}
     * @memberof LockForPublic
     */
    limitLockTime: boolean;
    /**
     * Deleted at
     * @type {Date}
     * @memberof LockForPublic
     */
    deletedAt: Date | null;
    /**
     * Unlocked at
     * @type {Date}
     * @memberof LockForPublic
     */
    unlockedAt: Date | null;
    /**
     * Archived at
     * @type {Date}
     * @memberof LockForPublic
     */
    archivedAt: Date | null;
    /**
     * Frozen at
     * @type {Date}
     * @memberof LockForPublic
     */
    frozenAt: Date | null;
    /**
     * Keyholder archived at
     * @type {Date}
     * @memberof LockForPublic
     */
    keyholderArchivedAt: Date | null;
    /**
     * Whether the lock allows session offers
     * @type {boolean}
     * @memberof LockForPublic
     */
    allowSessionOffer: boolean;
    /**
     * Whether the lock is a test lock and counts in the user stats
     * @type {boolean}
     * @memberof LockForPublic
     */
    isTestLock: boolean;
    /**
     * The offer token
     * @type {string}
     * @memberof LockForPublic
     */
    offerToken: string;
    /**
     * True if the time information should be hidden from the history
     * @type {boolean}
     * @memberof LockForPublic
     */
    hideTimeLogs: boolean;
    /**
     * Whether the keyholder is trusted
     * @type {boolean}
     * @memberof LockForPublic
     */
    trusted: boolean;
}


/**
 * @export
 */
export const LockForPublicRoleEnum = {
    Keyholder: 'keyholder',
    Wearer: 'wearer',
    Visitor: 'visitor'
} as const;
export type LockForPublicRoleEnum = typeof LockForPublicRoleEnum[keyof typeof LockForPublicRoleEnum];


/**
 * Check if a given object implements the LockForPublic interface.
 */
export function instanceOfLockForPublic(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "endDate" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "totalDuration" in value;
    isInstance = isInstance && "user" in value;
    isInstance = isInstance && "keyholder" in value;
    isInstance = isInstance && "sharedLock" in value;
    isInstance = isInstance && "isAllowedToViewTime" in value;
    isInstance = isInstance && "canBeUnlocked" in value;
    isInstance = isInstance && "canBeUnlockedByMaxLimitDate" in value;
    isInstance = isInstance && "isFrozen" in value;
    isInstance = isInstance && "role" in value;
    isInstance = isInstance && "extensions" in value;
    isInstance = isInstance && "combination" in value;
    isInstance = isInstance && "reasonsPreventingUnlocking" in value;
    isInstance = isInstance && "extensionsAllowUnlocking" in value;
    isInstance = isInstance && "lastVerificationPicture" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "startDate" in value;
    isInstance = isInstance && "minDate" in value;
    isInstance = isInstance && "maxDate" in value;
    isInstance = isInstance && "maxLimitDate" in value;
    isInstance = isInstance && "displayRemainingTime" in value;
    isInstance = isInstance && "limitLockTime" in value;
    isInstance = isInstance && "deletedAt" in value;
    isInstance = isInstance && "unlockedAt" in value;
    isInstance = isInstance && "archivedAt" in value;
    isInstance = isInstance && "frozenAt" in value;
    isInstance = isInstance && "keyholderArchivedAt" in value;
    isInstance = isInstance && "allowSessionOffer" in value;
    isInstance = isInstance && "isTestLock" in value;
    isInstance = isInstance && "offerToken" in value;
    isInstance = isInstance && "hideTimeLogs" in value;
    isInstance = isInstance && "trusted" in value;

    return isInstance;
}

export function LockForPublicFromJSON(json: any): LockForPublic {
    return LockForPublicFromJSONTyped(json, false);
}

export function LockForPublicFromJSONTyped(json: any, ignoreDiscriminator: boolean): LockForPublic {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': LockStatusEnumFromJSON(json['status']),
        'id': json['_id'],
        'endDate': (json['endDate'] === null ? null : new Date(json['endDate'])),
        'title': json['title'],
        'totalDuration': json['totalDuration'],
        'user': LockForPublicUserFromJSON(json['user']),
        'keyholder': LockForPublicKeyholderFromJSON(json['keyholder']),
        'sharedLock': LockForPublicSharedLockFromJSON(json['sharedLock']),
        'isAllowedToViewTime': json['isAllowedToViewTime'],
        'canBeUnlocked': json['canBeUnlocked'],
        'canBeUnlockedByMaxLimitDate': json['canBeUnlockedByMaxLimitDate'],
        'isFrozen': json['isFrozen'],
        'role': json['role'],
        'extensions': ((json['extensions'] as Array<any>).map(ExtensionPartyForPublicFromJSON)),
        'combination': json['combination'],
        'reasonsPreventingUnlocking': ((json['reasonsPreventingUnlocking'] as Array<any>).map(ReasonPreventingUnlockingFromJSON)),
        'extensionsAllowUnlocking': json['extensionsAllowUnlocking'],
        'lastVerificationPicture': LockForPublicLastVerificationPictureFromJSON(json['lastVerificationPicture']),
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'startDate': (new Date(json['startDate'])),
        'minDate': (new Date(json['minDate'])),
        'maxDate': (new Date(json['maxDate'])),
        'maxLimitDate': (json['maxLimitDate'] === null ? null : new Date(json['maxLimitDate'])),
        'displayRemainingTime': json['displayRemainingTime'],
        'limitLockTime': json['limitLockTime'],
        'deletedAt': (json['deletedAt'] === null ? null : new Date(json['deletedAt'])),
        'unlockedAt': (json['unlockedAt'] === null ? null : new Date(json['unlockedAt'])),
        'archivedAt': (json['archivedAt'] === null ? null : new Date(json['archivedAt'])),
        'frozenAt': (json['frozenAt'] === null ? null : new Date(json['frozenAt'])),
        'keyholderArchivedAt': (json['keyholderArchivedAt'] === null ? null : new Date(json['keyholderArchivedAt'])),
        'allowSessionOffer': json['allowSessionOffer'],
        'isTestLock': json['isTestLock'],
        'offerToken': json['offerToken'],
        'hideTimeLogs': json['hideTimeLogs'],
        'trusted': json['trusted'],
    };
}

export function LockForPublicToJSON(value?: LockForPublic | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': LockStatusEnumToJSON(value.status),
        '_id': value.id,
        'endDate': (value.endDate === null ? null : value.endDate.toISOString()),
        'title': value.title,
        'totalDuration': value.totalDuration,
        'user': LockForPublicUserToJSON(value.user),
        'keyholder': LockForPublicKeyholderToJSON(value.keyholder),
        'sharedLock': LockForPublicSharedLockToJSON(value.sharedLock),
        'isAllowedToViewTime': value.isAllowedToViewTime,
        'canBeUnlocked': value.canBeUnlocked,
        'canBeUnlockedByMaxLimitDate': value.canBeUnlockedByMaxLimitDate,
        'isFrozen': value.isFrozen,
        'role': value.role,
        'extensions': ((value.extensions as Array<any>).map(ExtensionPartyForPublicToJSON)),
        'combination': value.combination,
        'reasonsPreventingUnlocking': ((value.reasonsPreventingUnlocking as Array<any>).map(ReasonPreventingUnlockingToJSON)),
        'extensionsAllowUnlocking': value.extensionsAllowUnlocking,
        'lastVerificationPicture': LockForPublicLastVerificationPictureToJSON(value.lastVerificationPicture),
        'createdAt': (value.createdAt.toISOString()),
        'updatedAt': (value.updatedAt.toISOString()),
        'startDate': (value.startDate.toISOString()),
        'minDate': (value.minDate.toISOString()),
        'maxDate': (value.maxDate.toISOString()),
        'maxLimitDate': (value.maxLimitDate === null ? null : value.maxLimitDate.toISOString()),
        'displayRemainingTime': value.displayRemainingTime,
        'limitLockTime': value.limitLockTime,
        'deletedAt': (value.deletedAt === null ? null : value.deletedAt.toISOString()),
        'unlockedAt': (value.unlockedAt === null ? null : value.unlockedAt.toISOString()),
        'archivedAt': (value.archivedAt === null ? null : value.archivedAt.toISOString()),
        'frozenAt': (value.frozenAt === null ? null : value.frozenAt.toISOString()),
        'keyholderArchivedAt': (value.keyholderArchivedAt === null ? null : value.keyholderArchivedAt.toISOString()),
        'allowSessionOffer': value.allowSessionOffer,
        'isTestLock': value.isTestLock,
        'offerToken': value.offerToken,
        'hideTimeLogs': value.hideTimeLogs,
        'trusted': value.trusted,
    };
}
