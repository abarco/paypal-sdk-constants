import { COUNTRY } from './locale';
import { CURRENCY, INTENT, COMMIT, VAULT } from './order';
import { COMPONENTS, DEBUG } from './params';

export var DEFAULT_COUNTRY = COUNTRY.US;
export var DEFAULT_CURRENCY = CURRENCY.USD;
export var DEFAULT_INTENT = INTENT.CAPTURE;
export var DEFAULT_COMMIT = COMMIT.TRUE;
export var DEFAULT_SALE_COMMIT = COMMIT.TRUE;
export var DEFAULT_NONSALE_COMMIT = COMMIT.FALSE;
export var DEFAULT_VAULT = VAULT.FALSE;
export var DEFAULT_COMPONENTS = COMPONENTS.BUTTONS;
export var DEFAULT_DEBUG = DEBUG.FALSE;