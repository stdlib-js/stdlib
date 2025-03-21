/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Enable Node.js global variables and scoping.
*
* @name node
* @memberof env
* @type {boolean}
* @default true
* @see [node]{@link https://eslint.org/docs/user-guide/configuring#specifying-environments}
*/
env[ 'node' ] = true;


// EXPORTS //

module.exports = env;
