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

var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isDataType = require( '@stdlib/ndarray/base/assert/is-data-type' );
var resolveStr = require( '@stdlib/ndarray/base/dtype-resolve-str' );
var contains = require( '@stdlib/array/base/assert/contains' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var zeros = require( '@stdlib/ndarray/zeros' );
var join = require( '@stdlib/array/base/join' );
var format = require( '@stdlib/string/format' );
var DTYPES = require( './dtypes.js' ).odtypes;
var defaults = require( './defaults.js' );
var base = require( './base.js' );


// MAIN //

/**
* Returns an initialized one-dimensional workspace ndarray for computing a real-valued discrete Fourier transform.
*
* @param {PositiveInteger} n - sequence length
* @param {Options} [options] - function options
* @param {string} [options.dtype="float64"] - workspace data type
* @throws {TypeError} first argument must be a positive integer
* @throws {TypeError} options argument must be an object
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var ws = rffti( 4 );
* // returns <ndarray>
*
* var dt = String( getDType( ws ) );
* // returns 'float64'
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var ws = rffti( 4, { 'dtype': 'float32' } );
* // returns <ndarray>
*
* var dt = String( getDType( ws ) );
* // returns 'float32'
*/
function rffti( n ) {
	var options;
	var opts;
	var dt;
	var ws;

	if ( !isPositiveInteger( n ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a positive integer. Value: `%s`.', n ) );
	}
	options = defaults();

	if ( arguments.length > 1 ) {
		opts = arguments[ 1 ];
		if ( !isPlainObject( opts ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', opts ) );
		}
		if ( hasOwnProp( opts, 'dtype' ) ) {
			dt = resolveStr( opts.dtype );
			if ( !isDataType( opts.dtype ) || !contains( DTYPES, dt ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be one of the following: "%s". Option: `%s`.', 'dtype', join( DTYPES, '", "' ), opts.dtype ) );
			}
			options.dtype = dt;
		}
	}
	// Create the workspace ndarray:
	ws = zeros( [ ( 2*n ) + 34 ], {
		'dtype': options.dtype
	});

	// Initialize the workspace:
	base( ws, scalar2ndarray( n, {
		'dtype': 'int32'
	}));

	return ws;
}


// EXPORTS //

module.exports = rffti;
