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
var SAFE_CASTS = require( './safe_casts.json' );


// VARIABLES //

var TABLE;


// FUNCTIONS //

/**
* Generates a full table of safe casts for each ndarray data type.
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
	dtypes = objectKeys( SAFE_CASTS );
	ntypes = dtypes.length;
	for ( i = 0; i < ntypes; i++ ) {
		dt1 = dtypes[ i ];
		o = SAFE_CASTS[ dt1 ];
		tmp = {};
		for ( j = 0; j < ntypes; j++ ) {
			dt2 = dtypes[ j ];
			tmp[ dt2 ] = o[ dt2 ];
		}
		out[ dt1 ] = tmp;
	}
	return out;
}

/**
* Generates a table of safe casts for each ndarray data type.
*
* @private
* @returns {Object} table
*/
function generateTable() {
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
	dtypes = objectKeys( SAFE_CASTS );
	ntypes = dtypes.length;
	for ( i = 0; i < ntypes; i++ ) {
		dt1 = dtypes[ i ];
		o = SAFE_CASTS[ dt1 ];
		tmp = [];
		for ( j = 0; j < ntypes; j++ ) {
			dt2 = dtypes[ j ];
			if ( o[ dt2 ] === 1 ) {
				tmp.push( dt2 );
			}
		}
		out[ dt1 ] = tmp;
	}
	return out;
}


// MAIN //

/**
* Returns a list of ndarray data types to which a provided ndarray data type can be safely cast.
*
* @param {string} [dtype] - ndarray data type
* @returns {(Object|StringArray|null)} list of ndarray data types or null
*
* @example
* var list = safeCasts( 'float32' );
* // returns [...]
*/
function safeCasts( dtype ) {
	if ( arguments.length === 0 ) {
		return generateFullTable();
	}
	if ( TABLE === void 0 ) {
		// Lazily generate table...
		TABLE = generateTable();
	}
	if ( hasOwnProp( TABLE, dtype ) ) {
		return TABLE[ dtype ].slice();
	}
	return null;
}


// EXPORTS //

module.exports = safeCasts;
