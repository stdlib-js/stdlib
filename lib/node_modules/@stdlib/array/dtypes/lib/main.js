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

var replace = require( '@stdlib/string/base/replace' );
var DTYPES = require( './dtypes.json' );


// VARIABLES //

var RE_SUFFIX = /_and_generic$/;


// MAIN //

/**
* Returns a list of array data types.
*
* @param {string} [kind] - data type kind
* @returns {StringArray} list of array data types
*
* @example
* var list = dtypes();
* // e.g., returns [ 'float32', 'float64', ... ]
*
* @example
* var list = dtypes( 'floating_point' );
* // returns [...]
*/
function dtypes() {
	var kind;
	var out;
	var FLG;
	if ( arguments.length === 0 ) {
		return DTYPES.all.slice();
	}
	FLG = false;
	kind = arguments[ 0 ];
	if ( RE_SUFFIX.test( kind ) ) {
		kind = replace( kind, RE_SUFFIX, '' );
		if ( kind !== 'all' ) {
			FLG = true;
		}
	}
	out = DTYPES[ kind ];
	out = ( out ) ? out.slice() : [];
	if ( FLG && out.length > 0 ) {
		out.push( 'generic' );
	}
	return out;
}


// EXPORTS //

module.exports = dtypes;
