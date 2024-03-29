import { ExtensionConfigForPublicModeEnum, ExtensionForPublicAvailableModesEnum } from "chaster-api";

declare class ExtensionDefinition{

    /**
     * Baseclass to derive a chaster extension for the extension API.
     * 
     * Documentation - https://docs.chaster.app/api/extensions-api/getting-started
     * @param definition The extension properties
     */
    constructor(definition: ExtensionDefinition);

    /**
     * You can choose to enable or disable your extension to the public. If the extension is disabled, new people will no longer be able to create locks containing your extension, nor will they be able to load shared locks with your extension enabled. Old locks with your extension enabled will still be active.
     * @type {boolean}
     */
    public isEnabled: boolean;
    /**
     * The slug is the unique identifier of your extension, and must be filled in at the time of creation. Once created, it cannot be modified. The slug of an extension always starts with `api-`, and must only contain alphanumeric characters, and dashes.
     * @type {string}
     */
    public slug: string; 
    /**
     * This is the name of the extension, which will be displayed to other users in the list of extensions, and in the description of locks.
     * @type {string}
     */
    public displayName: string; 
    /**
     * This is the subtitle of the extension, it is a short sentence explaining the concept of your extension, and will be displayed in the list of extensions.
     * @type {string}
     */
    public subtitle: string;
    /**
     * This is the description of your extension, it is a paragraph explaining how your extension works, and what its purpose is.
     * @type {string}
     */ 
    public summary: string;
    /**
     * The icon you choose must be one of the regular icons available on FontAwesome 5, which you can find list [here](https://fontawesome.com/icons?d=gallery&p=1&s=regular). The icon will be displayed in the list of extensions.
     * @type {string}
     */
    public icon: string;
    /**
     * An extension can offer different modes, depending on the way it works and the actions to be performed. An action is a user interaction, for example in Chaster extensions, spinning the wheel of fortune, assigning a task, or checking in. The frequency of the actions can be defined and limited according to the mode chosen by the user among the modes offered by the extension.
     * - Non-cumulative: For extensions where the user can perform actions at a certain frequency, the non-cumulative mode can be selected. When the action is performed, the user will have to wait for the time specified in `regularity` before being able to perform the action again.
     * - Cumulative: The number of possible actions to perform is cumulative from the beginning of the lock, according to the time set in `regularity`.
     * - Unlimited: The user can perform the action in an unlimited way.
     * 
     * For extensions that do not require user action (random events, penalties), the default mode is Unlimited.
     * @type {ExtensionConfigForPublicModeEnum[]}
     */
    public availableModes?:ExtensionConfigForPublicModeEnum[];
    /**
     * The default regularity displayed in the configuration, if the user chooses the cumulative or non-cumulative mode. If you enable only Unlimited mode, you don't need to fill this parameter.
     * @type {number}
     */
    public defaultRegularity?:number;
    /**
     * If this option is enabled, once the lock is created the user will have to wait the time configured in `regularity` before he can perform his first action. By default, the option is disabled, and the user can perform the action immediately after creating the lock.
     * @type {boolean}
     */
    public enableStartTimeout?: boolean;
    /**
     * A JSON object representing the default configuration of a session.
     * @type {object}
     */
    public defaultConfig?: Object;
    /**
     * A Handlebars template displaying the configuration description.
     * 
     * Chaster displays a text on each lock page describing the configuration of the extension. The Handlebars template takes as input the configuration object of your extension, and should return as output the configuration description, in textual form.
     * @type {string}
     */
    public configurationDescription?:null;
}

export interface ExtensionDefinitionConstructor{
    isEnabled?: boolean,
    slug: string,
    displayName: string,
    subtitle: string,
    summary: string,
    icon: string,
    availableModes?:ExtensionForPublicAvailableModesEnum[],
    defaultRegularity?:number,
    enableStartTimeout?: boolean,
    defaultConfig?: Object,
    configurationDescription?:null,
}

export = ExtensionDefinition;