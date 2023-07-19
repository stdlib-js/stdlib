/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var enum2state = require( './enum2state.json' );


// FUNCTIONS //

/**
* Returns a table mapping state names to enumeration constants.
*
* @private
* @returns {Object} mapping table
*/
function table() {
	var out;
	var i;

	out = {};
	for ( i = 0; i < enum2state.length; i++ ) {
		out[ enum2state[ i ] ] = i;
	}
	return out;
}


// MAIN //

/**
* Table mapping state names to enumeration constants.
*
* @private
* @name state2enum
* @type {Object}
*/
var state2enum = table(); // eslint-disable-line vars-on-top


// EXPORTS //

module.exports = state2enum;
