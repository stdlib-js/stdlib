/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* ESLint default environments.
*
* @namespace env
*/
var env = {};

/**
* Enable browser global variables.
*
* @name browser
* @memberof env
* @type {boolean}
* @default true
* @see [browser]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'browser' ] = true;

/**
* Enable Node.js global variables and scoping.
*
* @name node
* @memberof env
* @type {boolean}
* @default true
* @see [node]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'node' ] = true;

/**
* Enable CommonJS global variables and scoping.
*
* @name commonjs
* @memberof env
* @type {boolean}
* @default true
* @see [commonjs]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'commonjs' ] = true;

/**
* Enable shared Browser and Node.js global variables and scoping.
*
* @name shared-node-browser
* @memberof env
* @type {boolean}
* @default true
* @see [shared-node-browser]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'shared-node-browser' ] = true;

/**
* Enable ES6 features.
*
* @name es6
* @memberof env
* @type {boolean}
* @default true
* @see [es6]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'es6' ] = true;

/**
* Enable web worker global variables.
*
* @name worker
* @memberof env
* @type {boolean}
* @default true
* @see [worker]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'worker' ] = true;

/**
* Disable AMD global variables used for testing.
*
* @name amd
* @memberof env
* @type {boolean}
* @default false
* @see [amd]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'amd' ] = false;

/**
* Disable Mocha global variables used for testing.
*
* @name mocha
* @memberof env
* @type {boolean}
* @default false
* @see [mocha]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'mocha' ] = false;

/**
* Disable Jasmine global variables used for testing.
*
* @name jasmine
* @memberof env
* @type {boolean}
* @default false
* @see [jasmine]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'jasmine' ] = false;

/**
* Disable Jest global variables used for testing.
*
* @name jest
* @memberof env
* @type {boolean}
* @default false
* @see [jest]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'jest' ] = false;

/**
* Disable PhantomJS global variables used for testing.
*
* @name phantomjs
* @memberof env
* @type {boolean}
* @default false
* @see [phantomjs]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'phantomjs' ] = false;

/**
* Disable Protractor global variables used for testing.
*
* @name protractor
* @memberof env
* @type {boolean}
* @default false
* @see [protractor]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'protractor' ] = false;

/**
* Disable QUnit global variables used for testing.
*
* @name qunit
* @memberof env
* @type {boolean}
* @default false
* @see [qunit]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'qunit' ] = false;

/**
* Disable jQuery global variables used for testing.
*
* @name jquery
* @memberof env
* @type {boolean}
* @default false
* @see [jquery]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'jquery' ] = false;

/**
* Disable PrototypeJS global variables used for testing.
*
* @name prototypejs
* @memberof env
* @type {boolean}
* @default false
* @see [prototypejs]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'prototypejs' ] = false;

/**
* Disable ShellJS global variables used for testing.
*
* @name shelljs
* @memberof env
* @type {boolean}
* @default false
* @see [shelljs]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'shelljs' ] = false;

/**
* Disable Meteor global variables used for testing.
*
* @name meteor
* @memberof env
* @type {boolean}
* @default false
* @see [meteor]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'meteor' ] = false;

/**
* Disable MongoDB global variables used for testing.
*
* @name mongo
* @memberof env
* @type {boolean}
* @default false
* @see [mongo]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'mongo' ] = false;

/**
* Disable AppleScript global variables used for testing.
*
* @name applescript
* @memberof env
* @type {boolean}
* @default false
* @see [applescript]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'applescript' ] = false;

/**
* Disable Nashorn global variables used for testing.
*
* @name nashorn
* @memberof env
* @type {boolean}
* @default false
* @see [nashorn]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'nashorn' ] = false;

/**
* Disable Service Worker global variables used for testing.
*
* @name serviceworker
* @memberof env
* @type {boolean}
* @default false
* @see [serviceworker]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'serviceworker' ] = false;

/**
* Disable Atom test global variables used for testing.
*
* @name atomtest
* @memberof env
* @type {boolean}
* @default false
* @see [atomtest]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'atomtest' ] = false;

/**
* Disable Ember test global variables used for testing.
*
* @name embertest
* @memberof env
* @type {boolean}
* @default false
* @see [embertest]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'embertest' ] = false;

/**
* Disable WebExtensions global variables used for testing.
*
* @name webextensions
* @memberof env
* @type {boolean}
* @default false
* @see [webextensions]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'webextensions' ] = false;

/**
* Disable GreaseMonkey global variables used for testing.
*
* @name greasemonkey
* @memberof env
* @type {boolean}
* @default false
* @see [greasemonkey]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'greasemonkey' ] = false;


// EXPORTS //

module.exports = env;
