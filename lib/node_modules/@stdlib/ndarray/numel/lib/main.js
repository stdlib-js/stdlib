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
* Returns the number of elements in an ndarray.
*
* @param {ndarrayLike} x - input ndarray
* @throws {TypeError} must provide an ndarray
* @returns {NonNegativeInteger} number of elements
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var n = numel( zeros( [ 3, 3, 3 ] ) );
* // returns 27
*/
function numel( x ) {
	var ndims;
	var sh;
	var n;
	var d;
	var i;

	// Note: we intentionally avoid rigorous ndarray checks to minimize performance impacts. This obviously means that non-ndarray-like objects (e.g., vanilla arrays) can sneak through, but this is likely all right for the purposes of this function...
	if ( typeof x !== 'object' || x === null ) {
		throw new TypeError( format( 'invalid argument. Must provide an ndarray. Value: `%s`.', x ) );
	}
	n = x.length;
	if ( isNonNegativeInteger( n ) ) {
		return n;
	}
	sh = x.shape;
	if ( !isCollection( sh ) ) {
		throw new TypeError( format( 'invalid argument. Must provide an ndarray. Value: `%s`.', x ) );
	}
	ndims = sh.length;
	if ( ndims === 0 ) {
		// Note: for minimal "ndarray-like objects", this will erroneously return zero when `x` is a zero-dimensional ndarray. This is part of the rationale for having a `length` property on actual ndarrays. As we don't can't know whether a provided ndarray-like is actually zero-dimensional without knowing/inspecting implementation details, we return zero here...
		return 0;
	}
	n = 1;
	for ( i = 0; i < ndims; i++ ) {
		d = sh[ i ];
		if ( !isNonNegativeInteger( d ) ) {
			throw new TypeError( format( 'invalid argument. Must provide an ndarray. Value: `%s`.', x ) );
		}
		n *= d;
	}
	return n;
}


// EXPORTS //

module.exports = numel;
