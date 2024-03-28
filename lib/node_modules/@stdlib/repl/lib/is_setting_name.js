/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// MODULES //

var contains = require( '@stdlib/array/base/assert/contains' ).factory;
var SETTINGS_NAMES = require( './settings_names.js' );


// MAIN //

/**
* Returns a boolean indicating whether a provided value is a recognized settings name.
*
* @private
* @name isSettingName
* @type {Function}
* @param {*} value - input value
* @returns {boolean} boolean indicating whether a provided value is a recognized settings name
*
* @example
* var out = isSettingName( 'beep_boop_foo_bar' );
* // returns false
*/
var isSettingName = contains( SETTINGS_NAMES );


// EXPORTS //

module.exports = isSettingName;
