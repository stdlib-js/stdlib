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

var defaults = require( './main.js' );


// VARIABLES //

var DEFAULTS = defaults();
var HASH = {
	'dtypes.default': DEFAULTS.dtypes.default,
	'dtypes.numeric': DEFAULTS.dtypes.numeric,
	'dtypes.real': DEFAULTS.dtypes.real,
	'dtypes.floating_point': DEFAULTS.dtypes.floating_point,
	'dtypes.real_floating_point': DEFAULTS.dtypes.real_floating_point,
	'dtypes.complex_floating_point': DEFAULTS.dtypes.complex_floating_point,
	'dtypes.integer': DEFAULTS.dtypes.integer,
	'dtypes.signed_integer': DEFAULTS.dtypes.signed_integer,
	'dtypes.unsigned_integer': DEFAULTS.dtypes.unsigned_integer,
	'dtypes.boolean': DEFAULTS.dtypes.boolean,
	'order': DEFAULTS.order,
	'casting': DEFAULTS.casting,
	'index_mode': DEFAULTS.index_mode
};


// MAIN //

/**
* Returns a default ndarray setting.
*
* @param {string} name - setting name
* @returns {*} default setting or null
*
* @example
* var v = get( 'dtypes.default' );
* // returns <string>
*/
function get( name ) {
	var v = HASH[ name ];
	return ( v === void 0 ) ? null : v;
}


// EXPORTS //

module.exports = get;
