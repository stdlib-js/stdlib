'use strict';

/**
* ESLint default environments.
*
* @namespace env
*/
var env = {};

/**
* Enable Node.js global variables and scoping.
*
* @name node
* @memberof env
* @type {boolean}
* @default true
* @see [node]{@link http://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env.node = true;

/**
* Enable browser global variables.
*
* @name browser
* @memberof env
* @type {boolean}
* @default true
* @see [browser]{@link http://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env.browser = true;

/**
* Enable web worker global variables.
*
* @name worker
* @memberof env
* @type {boolean}
* @default true
* @see [worker]{@link http://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env.worker = true;

/**
* Disable Mocha global variables used for testing.
*
* @name mocha
* @memberof env
* @type {boolean}
* @default false
* @see [mocha]{@link http://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env.mocha = false;


// EXPORTS //

module.exports = env;
