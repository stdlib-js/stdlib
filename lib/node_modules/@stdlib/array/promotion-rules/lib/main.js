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

// MODULES //

var objectKeys = require( '@stdlib/utils/keys' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var PROMOTION_RULES = require( './promotion_rules.json' );


// FUNCTIONS //

/**
* Generates a full table of promotion rules.
*
* @private
* @returns {Object} table
*/
function generateFullTable() {
	var dtypes;
	var ntypes;
	var out;
	var tmp;
	var dt1;
	var dt2;
	var o;
	var j;
	var i;

	out = {};
	dtypes = objectKeys( PROMOTION_RULES );
	ntypes = dtypes.length;
	for ( i = 0; i < ntypes; i++ ) {
		dt1 = dtypes[ i ];
		o = PROMOTION_RULES[ dt1 ];
		tmp = {};
		for ( j = 0; j < ntypes; j++ ) {
			dt2 = dtypes[ j ];
			tmp[ dt2 ] = o[ dt2 ];
		}
		out[ dt1 ] = tmp;
	}
	return out;
}


// MAIN //

/**
* Returns the array data type with the smallest size and closest "kind" to which array data types can be safely cast.
*
* @param {string} [dtype1] - array data type
* @param {string} [dtype2] - array data type
* @returns {(Object|integer|string|null)} promotion rule(s) or null
*
* @example
* var table = promotionRules();
* // returns {...}
*
* @example
* var dt = promotionRules( 'float32', 'uint32' );
* // returns 'float64'
*
* @example
* var dt = promotionRules( 'float32', 'foo' );
* // returns null
*/
function promotionRules( dtype1, dtype2 ) {
	var o;
	if ( arguments.length === 0 ) {
		return generateFullTable();
	}
	if ( hasOwnProp( PROMOTION_RULES, dtype1 ) ) {
		o = PROMOTION_RULES[ dtype1 ];
		if ( hasOwnProp( o, dtype2 ) ) {
			return o[ dtype2 ];
		}
	}
	return null;
}


// EXPORTS //

module.exports = promotionRules;
