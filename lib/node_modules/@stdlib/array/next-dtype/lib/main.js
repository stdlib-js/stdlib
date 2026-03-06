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
var NEXT_DTYPES = require( './next_dtypes.json' );


// FUNCTIONS //

/**
* Generates a table.
*
* @private
* @returns {Object} table
*/
function generateTable() {
	var dtypes;
	var ntypes;
	var out;
	var i;

	out = {};
	dtypes = objectKeys( NEXT_DTYPES );
	ntypes = dtypes.length;
	for ( i = 0; i < ntypes; i++ ) {
		out[ dtypes[i] ] = NEXT_DTYPES[ dtypes[i] ];
	}
	return out;
}


// MAIN //

/**
* Returns the next larger array data type of the same kind.
*
* @param {string} [dtype] - array data type
* @returns {(Object|string|integer|null)} next larger data type(s) or null
*
* @example
* var dt = nextDataType( 'float32' );
* // returns 'float64'
*/
function nextDataType( dtype ) {
	if ( arguments.length === 0 ) {
		return generateTable();
	}
	if ( hasOwnProp( NEXT_DTYPES, dtype ) ) {
		return NEXT_DTYPES[ dtype ];
	}
	return null;
}


// EXPORTS //

module.exports = nextDataType;
