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
var isEmptyCollection = require( '@stdlib/assert/is-empty-collection' );
var isIntegerArray = require( '@stdlib/assert/is-integer-array' ).primitives;
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var resolveStr = require( '@stdlib/ndarray/base/dtype-resolve-str' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getShape = require( '@stdlib/ndarray/shape' );
var contains = require( '@stdlib/array/base/assert/contains' );
var join = require( '@stdlib/array/base/join' );
var format = require( '@stdlib/string/format' );
var DTYPES = require( './dtypes.js' );
var defaults = require( './defaults.js' );
var base = require( './base.js' );


// MAIN //

/**
* Fills an ndarray with linearly spaced numeric elements which increment by 1 starting from zero along one or more ndarray dimensions.
*
* @param {ndarrayLike} x - input ndarray
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims=[-1]] - list of dimensions over which to perform operation
* @throws {TypeError} first argument must be an ndarray-like object having at least one dimension
* @throws {TypeError} first argument must have a supported data type
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
* @returns {ndarray} input ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 3 ] );
* // returns <ndarray>[ [ 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0 ] ]
*
* var out = assign( x );
* // returns <ndarray>[ [ 0.0, 1.0, 2.0 ], [ 0.0, 1.0, 2.0 ] ]
*
* var bool = ( out === x );
* // returns true
*/
function assign( x ) {
	var options;
	var opts;
	var sh;
	var dt;

	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
	}
	sh = getShape( x );
	if ( sh.length < 1 ) {
		throw new TypeError( 'invalid argument. First argument must be an ndarray having at least one dimension.' );
	}
	dt = resolveStr( getDType( x ) );
	if ( !contains( DTYPES.odtypes, dt ) ) {
		throw new TypeError( format( 'invalid argument. First argument must have one of the following data types: "%s". Data type: `%s`.', join( DTYPES.odtypes, '", "' ), dt ) );
	}
	options = defaults();

	if ( arguments.length > 1 ) {
		opts = arguments[ 1 ];
		if ( !isPlainObject( opts ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', opts ) );
		}
		if ( hasOwnProp( opts, 'dims' ) ) {
			if ( !isIntegerArray( opts.dims ) && !isEmptyCollection( opts.dims ) ) { // eslint-disable-line max-len
				throw new TypeError( format( 'invalid option. `%s` option must be an array of integers. Option: `%s`.', 'dims', opts.dims ) );
			}
			options.dims = opts.dims;
		}
	}
	// Perform operation:
	return base( x, options );
}


// EXPORTS //

module.exports = assign;
