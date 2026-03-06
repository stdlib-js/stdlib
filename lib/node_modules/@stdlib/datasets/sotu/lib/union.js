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


// MAIN //

/**
* Returns the union.
*
* @private
* @param {...Array} arr - input arrays
* @returns {Array} union
*/
function union() {
	var cache;
	var arr;
	var i;
	var j;
	cache = {};
	for ( i = 0; i < arguments.length; i++ ) {
		arr = arguments[ i ];
		for ( j = 0; j < arr.length; j++ ) {
			if ( !hasOwnProp( cache, arr[ j ] ) ) {
				cache[ arr[ j ] ] = true;
			}
		}
	}
	return objectKeys( cache );
}


// EXPORTS //

module.exports = union;
