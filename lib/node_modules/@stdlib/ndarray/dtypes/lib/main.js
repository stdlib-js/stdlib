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

var DTYPES = require( './dtypes.json' );


// MAIN //

/**
* Returns a list of ndarray data types.
*
* @param {string} [kind] - data type kind
* @returns {StringArray} list of ndarray data types
*
* @example
* var list = dtypes();
* // returns [...]
*
* @example
* var list = dtypes( 'floating_point' );
* // returns [...]
*/
function dtypes() {
	var out;
	if ( arguments.length === 0 ) {
		return DTYPES.all.slice();
	}
	out = DTYPES[ arguments[ 0 ] ];
	return ( out ) ? out.slice() : [];
}


// EXPORTS //

module.exports = dtypes;
