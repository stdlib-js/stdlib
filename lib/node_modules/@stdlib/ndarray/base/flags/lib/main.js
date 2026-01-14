/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var assign = require( '@stdlib/object/assign' );


// MAIN //

/**
* Returns the flags of a provided ndarray.
*
* @param {ndarrayLike} x - input ndarray
* @param {boolean} copy - boolean indicating whether to explicitly copy the value assigned to the input ndarray's `flags` property
* @returns {Object} flags
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var out = flags( zeros( [ 3, 3, 3 ] ), false );
* // returns {...}
*/
function flags( x, copy ) {
	var f = x.flags;
	if ( typeof f !== 'object' || f === null ) {
		return {};
	}
	if ( copy ) {
		return assign( {}, f );
	}
	return f;
}


// EXPORTS //

module.exports = flags;
