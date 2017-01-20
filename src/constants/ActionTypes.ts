function keyMirror<T>(data: T): { [K in keyof T]: K; } {
	const newData = {} as { [K in keyof T]: K; };
	for (const constant in data) {
		if (data.hasOwnProperty(constant)) {
			newData[constant] = constant;
		}
	}
	return newData;
}

export type RECEIVE_DATA_TABLES = 'RECEIVE_DATA_TABLES';
export const RECEIVE_DATA_TABLES = 'RECEIVE_DATA_TABLES';

export type SET_SECTION = 'SET_SECTION';
export const SET_SECTION = 'SET_SECTION';
export type SET_TAB = 'SET_TAB';
export const SET_TAB = 'SET_TAB';

export type REQUEST_LOGIN = 'REQUEST_LOGIN';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export type RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export type REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
export type RECEIVE_LOGOUT = 'RECEIVE_LOGOUT';
export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT';
export type REQUEST_REGISTRATION = 'REQUEST_REGISTRATION';
export const REQUEST_REGISTRATION = 'REQUEST_REGISTRATION';
export type RECEIVE_REGISTRATION = 'RECEIVE_REGISTRATION';
export const RECEIVE_REGISTRATION = 'RECEIVE_REGISTRATION';
export type REQUEST_NEW_USERNAME = 'REQUEST_NEW_USERNAME';
export const REQUEST_NEW_USERNAME = 'REQUEST_NEW_USERNAME';
export type RECEIVE_NEW_USERNAME = 'RECEIVE_NEW_USERNAME';
export const RECEIVE_NEW_USERNAME = 'RECEIVE_NEW_USERNAME';
export type REQUEST_USER_DELETION = 'REQUEST_USER_DELETION';
export const REQUEST_USER_DELETION = 'REQUEST_USER_DELETION';
export type RECEIVE_USER_DELETION = 'RECEIVE_USER_DELETION';
export const RECEIVE_USER_DELETION = 'RECEIVE_USER_DELETION';

export type SET_HEROLIST_VISIBILITY_FILTER = 'SET_HEROLIST_VISIBILITY_FILTER';
export const SET_HEROLIST_VISIBILITY_FILTER = 'SET_HEROLIST_VISIBILITY_FILTER';
export type SET_HEROLIST_SORT_ORDER = 'SET_HEROLIST_SORT_ORDER';
export const SET_HEROLIST_SORT_ORDER = 'SET_HEROLIST_SORT_ORDER';
export type REQUEST_HEROLIST = 'REQUEST_HEROLIST';
export const REQUEST_HEROLIST = 'REQUEST_HEROLIST';
export type RECEIVE_HEROLIST = 'RECEIVE_HEROLIST';
export const RECEIVE_HEROLIST = 'RECEIVE_HEROLIST';
export type CREATE_HERO = 'CREATE_HERO';
export const CREATE_HERO = 'CREATE_HERO';

export type REQUEST_HERO_DATA = 'REQUEST_HERO_DATA';
export const REQUEST_HERO_DATA = 'REQUEST_HERO_DATA';
export type RECEIVE_HERO_DATA = 'RECEIVE_HERO_DATA';
export const RECEIVE_HERO_DATA = 'RECEIVE_HERO_DATA';

export type REQUEST_HERO_AVATAR = 'REQUEST_HERO_AVATAR';
export const REQUEST_HERO_AVATAR = 'REQUEST_HERO_AVATAR';
export type RECEIVE_HERO_AVATAR = 'RECEIVE_HERO_AVATAR';
export const RECEIVE_HERO_AVATAR = 'RECEIVE_HERO_AVATAR';
export type SET_HERO_AVATAR = 'SET_HERO_AVATAR';
export const SET_HERO_AVATAR = 'SET_HERO_AVATAR';

export type SELECT_RACE = 'SELECT_RACE';
export const SELECT_RACE = 'SELECT_RACE';
export type SET_RACES_SORT_ORDER = 'SET_RACES_SORT_ORDER';
export const SET_RACES_SORT_ORDER = 'SET_RACES_SORT_ORDER';
export type SWITCH_RACE_VALUE_VISIBILITY = 'SWITCH_RACE_VALUE_VISIBILITY';
export const SWITCH_RACE_VALUE_VISIBILITY = 'SWITCH_RACE_VALUE_VISIBILITY';

export type SELECT_CULTURE = 'SELECT_CULTURE';
export const SELECT_CULTURE = 'SELECT_CULTURE';
export type SET_CULTURES_SORT_ORDER = 'SET_CULTURES_SORT_ORDER';
export const SET_CULTURES_SORT_ORDER = 'SET_CULTURES_SORT_ORDER';
export type SET_CULTURES_VISIBILITY_FILTER = 'SET_CULTURES_VISIBILITY_FILTER';
export const SET_CULTURES_VISIBILITY_FILTER = 'SET_CULTURES_VISIBILITY_FILTER';
export type SWITCH_CULTURE_VALUE_VISIBILITY = 'SWITCH_CULTURE_VALUE_VISIBILITY';
export const SWITCH_CULTURE_VALUE_VISIBILITY = 'SWITCH_CULTURE_VALUE_VISIBILITY';

export type SELECT_PROFESSION = 'SELECT_PROFESSION';
export const SELECT_PROFESSION = 'SELECT_PROFESSION';
export type SET_PROFESSIONS_SORT_ORDER = 'SET_PROFESSIONS_SORT_ORDER';
export const SET_PROFESSIONS_SORT_ORDER = 'SET_PROFESSIONS_SORT_ORDER';
export type SET_PROFESSIONS_VISIBILITY_FILTER = 'SET_PROFESSIONS_VISIBILITY_FILTER';
export const SET_PROFESSIONS_VISIBILITY_FILTER = 'SET_PROFESSIONS_VISIBILITY_FILTER';
export type ASSIGN_RCP_OPTIONS = 'ASSIGN_RCP_OPTIONS';
export const ASSIGN_RCP_OPTIONS = 'ASSIGN_RCP_OPTIONS';

export type SELECT_PROFESSION_VARIANT = 'SELECT_PROFESSION_VARIANT';
export const SELECT_PROFESSION_VARIANT = 'SELECT_PROFESSION_VARIANT';

export type SET_HERO_NAME = 'SET_HERO_NAME';
export const SET_HERO_NAME = 'SET_HERO_NAME';
export type SET_FAMILY = 'SET_FAMILY';
export const SET_FAMILY = 'SET_FAMILY';
export type SET_PLACEOFBIRTH = 'SET_PLACEOFBIRTH';
export const SET_PLACEOFBIRTH = 'SET_PLACEOFBIRTH';
export type SET_DATEOFBIRTH = 'SET_DATEOFBIRTH';
export const SET_DATEOFBIRTH = 'SET_DATEOFBIRTH';
export type SET_AGE = 'SET_AGE';
export const SET_AGE = 'SET_AGE';
export type SET_HAIRCOLOR = 'SET_HAIRCOLOR';
export const SET_HAIRCOLOR = 'SET_HAIRCOLOR';
export type SET_EYECOLOR = 'SET_EYECOLOR';
export const SET_EYECOLOR = 'SET_EYECOLOR';
export type SET_SIZE = 'SET_SIZE';
export const SET_SIZE = 'SET_SIZE';
export type SET_WEIGHT = 'SET_WEIGHT';
export const SET_WEIGHT = 'SET_WEIGHT';
export type SET_TITLE = 'SET_TITLE';
export const SET_TITLE = 'SET_TITLE';
export type SET_SOCIALSTATUS = 'SET_SOCIALSTATUS';
export const SET_SOCIALSTATUS = 'SET_SOCIALSTATUS';
export type SET_CHARACTERISTICS = 'SET_CHARACTERISTICS';
export const SET_CHARACTERISTICS = 'SET_CHARACTERISTICS';
export type SET_OTHERINFO = 'SET_OTHERINFO';
export const SET_OTHERINFO = 'SET_OTHERINFO';

export type ADD_ADVENTURE_POINTS = 'ADD_ADVENTURE_POINTS';
export const ADD_ADVENTURE_POINTS = 'ADD_ADVENTURE_POINTS';
export type END_HERO_CREATION = 'END_HERO_CREATION';
export const END_HERO_CREATION = 'END_HERO_CREATION';

export type ADD_ATTRIBUTE_POINT = 'ADD_ATTRIBUTE_POINT';
export const ADD_ATTRIBUTE_POINT = 'ADD_ATTRIBUTE_POINT';
export type REMOVE_ATTRIBUTE_POINT = 'REMOVE_ATTRIBUTE_POINT';
export const REMOVE_ATTRIBUTE_POINT = 'REMOVE_ATTRIBUTE_POINT';

export type ADD_LIFE_POINT = 'ADD_LIFE_POINT';
export const ADD_LIFE_POINT = 'ADD_LIFE_POINT';
export type ADD_ARCANE_ENERGY_POINT = 'ADD_ARCANE_ENERGY_POINT';
export const ADD_ARCANE_ENERGY_POINT = 'ADD_ARCANE_ENERGY_POINT';
export type ADD_KARMA_POINT = 'ADD_KARMA_POINT';
export const ADD_KARMA_POINT = 'ADD_KARMA_POINT';

export type ACTIVATE_DISADV = 'ACTIVATE_DISADV';
export const ACTIVATE_DISADV = 'ACTIVATE_DISADV';
export type DEACTIVATE_DISADV = 'DEACTIVATE_DISADV';
export const DEACTIVATE_DISADV = 'DEACTIVATE_DISADV';
export type SET_DISADV_TIER = 'SET_DISADV_TIER';
export const SET_DISADV_TIER = 'SET_DISADV_TIER';
export type SWITCH_DISADV_RATING_VISIBILITY = 'SWITCH_DISADV_RATING_VISIBILITY';
export const SWITCH_DISADV_RATING_VISIBILITY = 'SWITCH_DISADV_RATING_VISIBILITY';

export type ADD_TALENT_POINT = 'ADD_TALENT_POINT';
export const ADD_TALENT_POINT = 'ADD_TALENT_POINT';
export type REMOVE_TALENT_POINT = 'REMOVE_TALENT_POINT';
export const REMOVE_TALENT_POINT = 'REMOVE_TALENT_POINT';
export type SET_TALENTS_SORT_ORDER = 'SET_TALENTS_SORT_ORDER';
export const SET_TALENTS_SORT_ORDER = 'SET_TALENTS_SORT_ORDER';
export type SWITCH_TALENT_RATING_VISIBILITY = 'SWITCH_TALENT_RATING_VISIBILITY';
export const SWITCH_TALENT_RATING_VISIBILITY = 'SWITCH_TALENT_RATING_VISIBILITY';

export type ADD_COMBATTECHNIQUE_POINT = 'ADD_COMBATTECHNIQUE_POINT';
export const ADD_COMBATTECHNIQUE_POINT = 'ADD_COMBATTECHNIQUE_POINT';
export type REMOVE_COMBATTECHNIQUE_POINT = 'REMOVE_COMBATTECHNIQUE_POINT';
export const REMOVE_COMBATTECHNIQUE_POINT = 'REMOVE_COMBATTECHNIQUE_POINT';
export type SET_COMBATTECHNIQUES_SORT_ORDER = 'SET_COMBATTECHNIQUES_SORT_ORDER';
export const SET_COMBATTECHNIQUES_SORT_ORDER = 'SET_COMBATTECHNIQUES_SORT_ORDER';

export type ACTIVATE_SPELL = 'ACTIVATE_SPELL';
export const ACTIVATE_SPELL = 'ACTIVATE_SPELL';
export type DEACTIVATE_SPELL = 'DEACTIVATE_SPELL';
export const DEACTIVATE_SPELL = 'DEACTIVATE_SPELL';
export type ADD_SPELL_POINT = 'ADD_SPELL_POINT';
export const ADD_SPELL_POINT = 'ADD_SPELL_POINT';
export type REMOVE_SPELL_POINT = 'REMOVE_SPELL_POINT';
export const REMOVE_SPELL_POINT = 'REMOVE_SPELL_POINT';
export type SET_SPELLS_SORT_ORDER = 'SET_SPELLS_SORT_ORDER';
export const SET_SPELLS_SORT_ORDER = 'SET_SPELLS_SORT_ORDER';

export type ACTIVATE_LITURGY = 'ACTIVATE_LITURGY';
export const ACTIVATE_LITURGY = 'ACTIVATE_LITURGY';
export type DEACTIVATE_LITURGY = 'DEACTIVATE_LITURGY';
export const DEACTIVATE_LITURGY = 'DEACTIVATE_LITURGY';
export type ADD_LITURGY_POINT = 'ADD_LITURGY_POINT';
export const ADD_LITURGY_POINT = 'ADD_LITURGY_POINT';
export type REMOVE_LITURGY_POINT = 'REMOVE_LITURGY_POINT';
export const REMOVE_LITURGY_POINT = 'REMOVE_LITURGY_POINT';
export type SET_LITURGIES_SORT_ORDER = 'SET_LITURGIES_SORT_ORDER';
export const SET_LITURGIES_SORT_ORDER = 'SET_LITURGIES_SORT_ORDER';

export type ACTIVATE_SPECIALABILITY = 'ACTIVATE_SPECIALABILITY';
export const ACTIVATE_SPECIALABILITY = 'ACTIVATE_SPECIALABILITY';
export type DEACTIVATE_SPECIALABILITY = 'DEACTIVATE_SPECIALABILITY';
export const DEACTIVATE_SPECIALABILITY = 'DEACTIVATE_SPECIALABILITY';
export type SET_SPECIALABILITY_TIER = 'SET_SPECIALABILITY_TIER';
export const SET_SPECIALABILITY_TIER = 'SET_SPECIALABILITY_TIER';
export type SET_SPECIALABILITIES_SORT_ORDER = 'SET_SPECIALABILITIES_SORT_ORDER';
export const SET_SPECIALABILITIES_SORT_ORDER = 'SET_SPECIALABILITIES_SORT_ORDER';

export type ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export type REMOVE_ITEM = 'REMOVE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export type SET_ITEM = 'SET_ITEM';
export const SET_ITEM = 'SET_ITEM';
export type SET_ITEMS_SORT_ORDER = 'SET_ITEMS_SORT_ORDER';
export const SET_ITEMS_SORT_ORDER = 'SET_ITEMS_SORT_ORDER';

export default keyMirror({

	// ServerActions
	RECEIVE_RAW_LISTS: null,

	// WaitStore
	WAIT_START: null,
	WAIT_END: null,

	// TabStore
	SHOW_TAB_SECTION: null,
	SHOW_TAB: null,

	// AuthStore
	RECEIVE_ACCOUNT: null,
	UPDATE_USERNAME: null,
	LOGOUT_SUCCESS: null,
	CLEAR_ACCOUNT: null,
	ACCOUNTNAME_CHANGE_SUCCESS: null,
	PASSWORD_CHANGE_SUCCESS: null,

	// Registration
	REGISTRATION_SUCCESS: null,

	// PaneStore
	HEROES_SHOW: null,
	HEROES_HIDE: null,
	COLLAPSE_HEROES: null,

	// HerolistStore
	RECEIVE_RAW_HEROLIST: null,
	SEARCH_HEROLIST: null,
	FILTER_HEROLIST: null,
	SORT_HEROLIST: null,
	CHANGE_HEROLIST_VIEW: null,
	CREATE_NEW_HERO: null,
	RECEIVE_HERO: null,

	// ProfileStore
	UPDATE_HERO_NAME: null,
	UPDATE_HERO_AVATAR: null,
	UPDATE_FAMILY: null,
	UPDATE_PLACEOFBIRTH: null,
	UPDATE_DATEOFBIRTH: null,
	UPDATE_AGE: null,
	UPDATE_HAIRCOLOR: null,
	UPDATE_EYECOLOR: null,
	UPDATE_SIZE: null,
	UPDATE_WEIGHT: null,
	UPDATE_TITLE: null,
	UPDATE_SOCIALSTATUS: null,
	UPDATE_CHARACTERISTICS: null,
	UPDATE_OTHERINFO: null,
	REROLL_HAIRCOLOR: null,
	REROLL_EYECOLOR: null,
	REROLL_SIZE: null,
	REROLL_WEIGHT: null,

	UNLOAD_HERO: null,
	CLEAR_HERO: null,
	SAVE_HERO_SUCCESS: null,

	// PhaseStore
	FINALIZE_CHARACTER_CREATION: null,

	// APStore
	ADD_ADVENTURE_POINTS: null,

	// RaceStore
	SELECT_RACE: null,
	FILTER_RACES: null,
	SORT_RACES: null,
	CHANGE_RACE_VALUE_VISIBILITY: null,

	// CultureStore
	SELECT_CULTURE: null,
	FILTER_CULTURES: null,
	SORT_CULTURES: null,
	CHANGE_CULTURE_VALUE_VISIBILITY: null,
	CHANGE_CULTURE_VIEW: null,
	CHANGE_CULTURE_PACKAGE: null,
	CHANGE_CULTURE_LITERACY: null,

	// ProfessionStore
	SELECT_PROFESSION: null,
	FILTER_PROFESSIONS: null,
	SORT_PROFESSIONS: null,
	CHANGE_PROFESSION_VIEW: null,
	ASSIGN_RCP_ENTRIES: null,

	// ProfessionVariantStore
	SELECT_PROFESSION_VARIANT: null,

	// AttributeStore
	ADD_ATTRIBUTE_POINT: null,
	REMOVE_ATTRIBUTE_POINT: null,
	ADD_MAX_ENERGY_POINT: null,

	// DisAdvStore
	FILTER_DISADV: null,
	CHANGE_DISADV_RATING: null,
	ACTIVATE_DISADV: null,
	DEACTIVATE_DISADV: null,
	UPDATE_DISADV_TIER: null,

	// TalentsStore
	FILTER_TALENTS: null,
	SORT_TALENTS: null,
	CHANGE_TALENT_RATING: null,
	ADD_TALENT_POINT: null,
	REMOVE_TALENT_POINT: null,

	// CombatTechniquesStore
	FILTER_COMBATTECHNIQUES: null,
	SORT_COMBATTECHNIQUES: null,
	ADD_COMBATTECHNIQUE_POINT: null,
	REMOVE_COMBATTECHNIQUE_POINT: null,

	// SpellsStore
	FILTER_SPELLS: null,
	SORT_SPELLS: null,
	UPDATE_SPELL_VIEW: null,
	ACTIVATE_SPELL: null,
	DEACTIVATE_SPELL: null,
	ADD_SPELL_POINT: null,
	REMOVE_SPELL_POINT: null,

	// LiturgiesStore
	FILTER_LITURGIES: null,
	SORT_LITURGIES: null,
	UPDATE_LITURGY_VIEW: null,
	ACTIVATE_LITURGY: null,
	DEACTIVATE_LITURGY: null,
	ADD_LITURGY_POINT: null,
	REMOVE_LITURGY_POINT: null,

	// SpecialAbilitiesStore
	FILTER_SPECIALABILITIES: null,
	SORT_SPECIALABILITIES: null,
	UPDATE_SPECIALABILITY_VIEW: null,
	ACTIVATE_SPECIALABILITY: null,
	DEACTIVATE_SPECIALABILITY: null,
	UPDATE_SPECIALABILITY_TIER: null,

	// InventoryStore
	FILTER_ITEMS: null,
	SORT_ITEMS: null,
	ADD_ITEM: null,
	SAVE_ITEM: null,
	REMOVE_ITEM: null,

	// GroupsStore
	SHOW_MASTER_REQUESTED_LIST: null,
	HIDE_MASTER_REQUESTED_LIST: null,

	// InGameStore
	LOAD_RAW_INGAME_DATA: null,
	INGAME_PREVIOUS_PHASE: null,
	INGAME_NEXT_PHASE: null,
	UPDATE_INGAME_CAST: null,
	CANCEL_INGAME_CAST: null,
	INGAME_USE_ENDURANCE: null,
	INGAME_USE_ACTION: null,
	INGAME_USE_FREE_ACTION: null,
	INGAME_ACTIVATE_FIGHTER: null,
	INGAME_DEACTIVATE_FIGHTER: null,
	INGAME_EDIT_START: null,
	INGAME_EDIT_UPDATE_VALUE: null,
	INGAME_EDIT_UPDATE_CAST_VALUE: null,
	INGAME_EDIT_UPDATE_DUPLICATE_VALUE: null,
	INGAME_EDIT_END: null,
	INGAME_ADD_FIGHTER: null,
	INGAME_DUPLICATE_FIGHTER: null,
	INGAME_REMOVE_FIGHTER: null,
	INGAME_RESET_PHASES: null,
	INGAME_RESET_HEALTH: null,
	INGAME_RESET_ALL: null,
	INGAME_UPDATE_ONLINE_LINK: null,
	INGAME_SAVE: null,
	INGAME_SWITCH_OPTION: null
});
