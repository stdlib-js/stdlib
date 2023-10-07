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

var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isCollection = require( '@stdlib/assert/is-collection' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns the shape of a provided ndarray.
*
* @param {ndarrayLike} x - input ndarray
* @throws {TypeError} must provide an ndarray
* @returns {NonNegativeIntegerArray} shape
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var out = shape( zeros( [ 3, 3, 3 ] ) );
* // returns [ 3, 3, 3 ]
*/
function shape( x ) {
	var out;
	var sh;
	var d;
	var i;

	// Note: we intentionally avoid rigorous ndarray checks to minimize performance impacts. This obviously means that non-ndarray-like objects can sneak through, but this is likely all right for the purposes of this function...
	if ( typeof x !== 'object' || x === null ) {
		throw new TypeError( format( 'invalid argument. Must provide an ndarray. Value: `%s`.', x ) );
	}
	sh = x.shape;
	if ( !isCollection( sh ) ) {
		throw new TypeError( format( 'invalid argument. Must provide an ndarray. Value: `%s`.', x ) );
	}
	// Copy the shape in order to avoid unintended mutation...
	out = [];
	for ( i = 0; i < sh.length; i++ ) {
		d = sh[ i ];
		if ( !isNonNegativeInteger( d ) ) {
			throw new TypeError( format( 'invalid argument. Must provide an ndarray. Value: `%s`.', x ) );
		}
		out.push( d );
	}
	return out;
}


// EXPORTS //

module.exports = shape;
