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
* ESLint JavaScript language options.
*
* @namespace features
*/
var features = {};

/**
* Do not allow return statements in the global scope.
*
* @name globalReturn
* @memberof features
* @type {boolean}
* @default false
* @see [globalReturn]{@link https://eslint.org/docs/user-guide/configuring#specifying-parser-options}
*/
features.globalReturn = false;

/**
* Disable implied global strict mode.
*
* @name impliedStrict
* @memberof features
* @type {boolean}
* @default false
* @see [impliedStrict]{@link https://eslint.org/docs/user-guide/configuring#specifying-parser-options}
*/
features.impliedStrict = false;

/**
* Do not enable JSX.
*
* @name jsx
* @memberof features
* @type {boolean}
* @default false
* @see [jsx]{@link https://eslint.org/docs/user-guide/configuring#specifying-parser-options}
*/
features.jsx = false;


// EXPORTS //

module.exports = features;
