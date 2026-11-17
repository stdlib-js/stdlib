/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isvectorLike = require( '@stdlib/assert/is-vector-like' );
var resolveStr = require( '@stdlib/ndarray/base/dtype-resolve-str' );
var getDType = require( '@stdlib/ndarray/dtype' );
var contains = require( '@stdlib/array/base/assert/contains' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var join = require( '@stdlib/array/base/join' );
var format = require( '@stdlib/string/format' );
var DTYPES = require( './dtypes.js' ).odtypes;
var base = require( './base.js' );


// MAIN //

/**
* Initializes a one-dimensional workspace ndarray for computing a real-valued discrete Fourier transform.
*
* @param {ndarrayLike} workspace - workspace ndarray
* @param {PositiveInteger} n - sequence length
* @throws {TypeError} first argument must be a one-dimensional ndarray-like object
* @throws {TypeError} first argument must have a supported data type
* @throws {TypeError} second argument must be a positive integer
* @returns {ndarray} input ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var ws = zeros( [ 42 ], { 'dtype': 'float64' } );
*
* var out = assign( ws, 4 );
* // returns <ndarray>
*
* var bool = ( out === ws );
* // returns true
*/
function assign( workspace, n ) {
	var dt;

	if ( !isvectorLike( workspace ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a one-dimensional ndarray. Value: `%s`.', workspace ) );
	}
	dt = resolveStr( getDType( workspace ) );
	if ( !contains( DTYPES, dt ) ) {
		throw new TypeError( format( 'invalid argument. First argument must have one of the following data types: "%s". Data type: `%s`.', join( DTYPES, '", "' ), dt ) );
	}
	if ( !isPositiveInteger( n ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a positive integer. Value: `%s`.', n ) );
	}

	// Initialize the workspace:
	base( workspace, scalar2ndarray( n, {
		'dtype': 'int32'
	}));

	return workspace;
}


// EXPORTS //

module.exports = assign;
