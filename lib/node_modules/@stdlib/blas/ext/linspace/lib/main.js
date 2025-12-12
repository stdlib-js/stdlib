/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var isNonNegativeIntegerArray = require( '@stdlib/assert/is-nonnegative-integer-array' ).primitives;
var isEmptyCollection = require( '@stdlib/assert/is-empty-collection' );
var isIntegerArray = require( '@stdlib/assert/is-integer-array' ).primitives;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isComplexLike = require( '@stdlib/assert/is-complex-like' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isOrder = require( '@stdlib/ndarray/base/assert/is-order' );
var isDataType = require( '@stdlib/ndarray/base/assert/is-data-type' );
var nonCoreShape = require( '@stdlib/ndarray/base/complement-shape' );
var getDType = require( '@stdlib/ndarray/base/dtype' );
var empty = require( '@stdlib/ndarray/empty' );
var contains = require( '@stdlib/array/base/assert/contains' );
var join = require( '@stdlib/array/base/join' );
var format = require( '@stdlib/string/format' );
var DTYPES = require( './dtypes.js' );
var ENUMS = require( './type_enums.js' );
var resolveDataTypes = require( './resolve_data_types.js' );
var resolveOrder = require( './resolve_order.js' );
var normalizeArguments = require( './normalize_arguments.js' );
var defaults = require( './defaults.js' );
var base = require( './base.js' );


// MAIN //

/**
* Returns a new ndarray filled with linearly spaced values over a specified interval along one or more ndarray dimensions.
*
* @param {(NonNegativeInteger|NonNegativeIntegerArray)} shape - array shape
* @param {(number|ndarrayLike)} start - start of interval
* @param {(number|ndarrayLike)} stop - end of interval
* @param {(boolean|ndarrayLike)} [endpoint=true] - specifies whether to include the end of the interval when writing values to the output ndarray
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims=[-1]] - list of dimensions over which to perform operation
* @param {*} [options.dtype] - output ndarray data type
* @param {string} [options.order] - ndarray order
* @param {string} [options.mode="throw"] - specifies how to handle indices which exceed ndarray dimensions
* @param {StringArray} [options.submode=["throw"]] - specifies how to handle subscripts which exceed ndarray dimensions on a per dimension basis
* @throws {TypeError} first argument must be either a nonnegative integer or an array of nonnegative integers
* @throws {TypeError} second argument must be either a number, complex number, or an ndarray-like object
* @throws {TypeError} third argument must be either a number, complex number, or an ndarray-like object
* @throws {TypeError} fourth argument must be either a boolean or an ndarray-like object
* @throws {TypeError} options argument must be an object
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var out = linspace( [ 2, 4 ], 0.0, 3.0 );
* // returns <ndarray>
*
* var arr = ndarray2array( out );
* // returns [ [ 0.0, 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0, 3.0 ] ]
*/
function linspace( shape, start, stop ) {
	var endpoint;
	var options;
	var dtypes;
	var nargs;
	var types;
	var opts;
	var args;
	var ncsh;
	var out;
	var sh;
	var dt;
	var o;

	if ( isNonNegativeInteger( shape ) ) {
		sh = [ shape ];
	} else if ( isNonNegativeIntegerArray( shape ) ) {
		sh = shape; // Note: empty shape (i.e., a shape for a zero-dimensional ndarray) is not allowed
	} else {
		throw new TypeError( format( 'invalid argument. First argument must be a nonnegative integer or an array of nonnegative integers. Value: `%s`.', shape ) );
	}
	types = [ 0, 0, 0 ]; // [ start, stop, endpoint ]
	if ( isNumber( start ) ) {
		types[ 0 ] = ENUMS.NUMBER;
	} else if ( isComplexLike( start ) ) {
		types[ 0 ] = ENUMS.COMPLEX;
	} else if ( isndarrayLike( start ) ) {
		types[ 0 ] = ENUMS.NDARRAY;
		dt = String( getDType( start ) );
		if ( !contains( DTYPES.idtypes0, dt ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must have one of the following data types: "%s". Data type: `%s`.', join( DTYPES.idtypes0, '", "' ), dt ) );
		}
	} else {
		throw new TypeError( format( 'invalid argument. Second argument must be either a number, complex number, or an ndarray. Value: `%s`.', start ) );
	}
	if ( isNumber( stop ) ) {
		types[ 1 ] = ENUMS.NUMBER;
	} else if ( isComplexLike( stop ) ) {
		types[ 1 ] = ENUMS.COMPLEX;
	} else if ( isndarrayLike( stop ) ) {
		types[ 1 ] = ENUMS.NDARRAY;
		dt = String( getDType( stop ) );
		if ( !contains( DTYPES.idtypes1, dt ) ) {
			throw new TypeError( format( 'invalid argument. Third argument must have one of the following data types: "%s". Data type: `%s`.', join( DTYPES.idtypes1, '", "' ), dt ) );
		}
	} else {
		throw new TypeError( format( 'invalid argument. Third argument must be either a number, complex number, or an ndarray. Value: `%s`.', stop ) );
	}
	nargs = arguments.length;
	o = arguments[ 3 ];

	options = defaults();

	// Case: linspace( shape, start, stop )
	if ( nargs < 4 ) {
		endpoint = true;
		types[ 2 ] = ENUMS.BOOLEAN;
	}
	// Case: linspace( shape, start, stop, ??? )
	else if ( nargs === 4 ) {
		// Case: linspace( shape, start, stop, endpoint_boolean )
		if ( isBoolean( o ) ) {
			endpoint = o;
			types[ 2 ] = ENUMS.BOOLEAN;
		}
		// Case: linspace( shape, start, stop, endpoint_ndarray )
		else if ( isndarrayLike( o ) ) {
			endpoint = o;
			dt = String( getDType( endpoint ) );
			if ( !contains( DTYPES.idtypes2, dt ) ) {
				throw new TypeError( format( 'invalid argument. Fourth argument must have one of the following data types: "%s". Data type: `%s`.', join( DTYPES.idtypes2, '", "' ), dt ) );
			}
			types[ 2 ] = ENUMS.NDARRAY;
		}
		// Case: linspace( shape, start, stop, options )
		else {
			endpoint = true;
			types[ 2 ] = ENUMS.BOOLEAN;
			opts = o;
			if ( !isPlainObject( opts ) ) {
				throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', opts ) );
			}
		}
	}
	// Case: linspace( shape, start, stop, endpoint, options )
	else if ( nargs >= 5 ) {
		endpoint = o;
		if ( isBoolean( endpoint ) ) {
			types[ 2 ] = ENUMS.BOOLEAN;
		} else if ( isndarrayLike( endpoint ) ) {
			types[ 2 ] = ENUMS.NDARRAY;
			dt = String( getDType( endpoint ) );
			if ( !contains( DTYPES.idtypes2, dt ) ) {
				throw new TypeError( format( 'invalid argument. Fourth argument must have one of the following data types: "%s". Data type: `%s`.', join( DTYPES.idtypes2, '", "' ), dt ) );
			}
		} else {
			throw new TypeError( format( 'invalid argument. Fourth argument must be either a boolean or an ndarray. Value: `%s`.', endpoint ) );
		}
		opts = arguments[ 4 ];
		if ( !isPlainObject( opts ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', opts ) );
		}
	}
	// Resolve options...
	if ( opts ) {
		if ( hasOwnProp( opts, 'dtype' ) ) {
			if ( !isDataType( opts.dtype ) || !contains( DTYPES.odtypes, String( opts.dtype ) ) ) { // eslint-disable-line max-len
				throw new TypeError( format( 'invalid option. `%s` option must be one of the following: "%s". Option: `%s`.', 'dtype', join( DTYPES.odtypes, '", "' ), opts.dtype ) );
			}
			options.dtype = opts.dtype;
		}
		if ( hasOwnProp( opts, 'order' ) ) {
			if ( !isOrder( opts.order ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a supported order. Option: `%s`.', 'order', opts.order ) );
			}
			options.order = opts.order;
		}
		if ( hasOwnProp( opts, 'mode' ) ) {
			// Defer to `empty` to validate below...
			options.mode = opts.mode;
		}
		if ( hasOwnProp( opts, 'submode' ) ) {
			// Defer to `empty` to validate below...
			options.submode = opts.submode;
		}
		if ( hasOwnProp( opts, 'dims' ) ) {
			if ( !isIntegerArray( opts.dims ) && !isEmptyCollection( opts.dims ) ) { // eslint-disable-line max-len
				throw new TypeError( format( 'invalid option. `%s` option must be an array of integers. Option: `%s`.', 'dims', opts.dims ) );
			}
			options.dims = opts.dims;
		}
	}
	args = [ start, stop, endpoint ];

	// Resolve argument data types:
	dtypes = resolveDataTypes( args.slice( 0, 2 ), types );
	options.dtype = options.dtype || dtypes[ 3 ];
	dtypes[ 3 ] = options.dtype;

	// Resolve the output array order:
	options.order = options.order || resolveOrder( args, types );

	// Resolve the complement of the operation dimensions:
	ncsh = nonCoreShape( sh, options.dims );

	// Normalize provided arguments to ndarrays:
	args = normalizeArguments( args, types, dtypes, ncsh, options.order );

	// Create an output ndarray:
	out = empty( sh, options );

	// Perform operation:
	return base( out, args[ 0 ], args[ 1 ], args[ 2 ], options );
}


// EXPORTS //

module.exports = linspace;
