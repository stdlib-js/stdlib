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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isNonNegativeIntegerArray = require( '@stdlib/assert/is-nonnegative-integer-array' ).primitives;
var isEmptyCollection = require( '@stdlib/assert/is-empty-collection' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );
var isComplexLike = require( '@stdlib/assert/is-complex-like' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isObject = require( '@stdlib/assert/is-object' );
var isCollection = require( '@stdlib/assert/is-collection' );
var isDataType = require( '@stdlib/ndarray/base/assert/is-data-type' );
var isOutputDataTypePolicy = require( '@stdlib/ndarray/base/assert/is-output-data-type-policy' );
var isReadOnly = require( '@stdlib/ndarray/base/assert/is-read-only' );
var isOrder = require( '@stdlib/ndarray/base/assert/is-order' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var contains = require( '@stdlib/array/base/assert/contains' );
var filledBy = require( '@stdlib/array/base/filled-by' );
var everyBy = require( '@stdlib/array/base/every-by' );
var join = require( '@stdlib/array/base/join' );
var nullaryStrided = require( '@stdlib/strided/base/nullary' );
var unary = require( '@stdlib/ndarray/base/unary' );
var broadcast = require( '@stdlib/ndarray/base/maybe-broadcast-array' );
var broadcastScalar = require( '@stdlib/ndarray/base/broadcast-scalar' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var unaryOutputDataType = require( '@stdlib/ndarray/base/unary-output-dtype' );
var numel = require( '@stdlib/ndarray/base/numel' );
var buffer = require( '@stdlib/ndarray/base/buffer' );
var getShape = require( '@stdlib/ndarray/shape' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getOrder = require( '@stdlib/ndarray/order' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var defaults = require( '@stdlib/ndarray/defaults' );
var isAccessorArray = require( '@stdlib/array/base/assert/is-accessor-array' );
var accessorSetter = require( '@stdlib/array/base/accessor-setter' );
var setter = require( '@stdlib/array/base/setter' );
var format = require( '@stdlib/string/format' );
var validate = require( './validate.js' );


// MAIN //

/**
* Constructor for creating ndarrays filled with pseudorandom values drawn from a unary PRNG.
*
* @constructor
* @param {Function} prng - unary pseudorandom value generator
* @param {StringArray} idtypes - list of supported input data types
* @param {StringArray} odtypes - list of supported output data types
* @param {Object} policies - policies
* @param {string} policies.output - output data type policy
* @param {Object} [options] - function options
* @param {string} [options.order] - default memory layout
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be an array of supported data types
* @throws {TypeError} third argument must be an array of supported data types
* @throws {TypeError} fourth argument must be an object having supported policies
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Random} instance
*
* @example
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var exponential = require( '@stdlib/random/base/exponential' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = dtypes( 'real_floating_point_and_generic' );
*
* var policies = {
*     'output': 'real_floating_point_and_generic'
* };
* var options = {
*     'order': 'row-major'
* };
*
* var rand = new Random( exponential, idt, odt, policies, options );
*
* var v = rand.generate( [ 2, 2 ], 2.0 );
* // returns <ndarray>
*
* @example
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var ndzeros = require( '@stdlib/ndarray/zeros' );
* var exponential = require( '@stdlib/random/base/exponential' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = dtypes( 'real_floating_point_and_generic' );
*
* var policies = {
*     'output': 'real_floating_point_and_generic'
* };
* var options = {
*     'order': 'row-major'
* };
*
* var rand = new Random( exponential, idt, odt, policies, options );
*
* var out = ndzeros( [ 2, 2 ] );
* var v = rand.assign( 2.0, out );
* // returns <ndarray>
*
* var bool = ( v === out );
* // returns true
*/
function Random( prng, idtypes, odtypes, policies, options ) {
	var opts;
	if ( !( this instanceof Random ) ) {
		if ( arguments.length < 5 ) {
			return new Random( prng, idtypes, odtypes, policies );
		}
		return new Random( prng, idtypes, odtypes, policies, options );
	}
	if ( !isFunction( prng ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', prng ) );
	}
	if (
		!isCollection( idtypes ) ||
		idtypes.length < 1 ||
		!everyBy( idtypes, isDataType )
	) {
		throw new TypeError( format( 'invalid argument. Second argument must be an array of data types. Value: `%s`.', idtypes ) );
	}
	if (
		!isCollection( odtypes ) ||
		odtypes.length < 1 ||
		!everyBy( odtypes, isDataType )
	) {
		throw new TypeError( format( 'invalid argument. Third argument must be an array of data types. Value: `%s`.', odtypes ) );
	}
	if ( !isObject( policies ) ) {
		throw new TypeError( format( 'invalid argument. Fourth argument must be an object. Value: `%s`.', policies ) );
	}
	if ( !isOutputDataTypePolicy( policies.output ) ) {
		throw new TypeError( format( 'invalid argument. Fourth argument must be an object having a supported output data type policy. Value: `%s`.', policies.output ) );
	}
	opts = {
		'order': defaults.get( 'order' )
	};
	if ( arguments.length > 4 ) {
		if ( !isPlainObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		if ( hasOwnProp( options, 'order' ) ) {
			opts.order = options.order;
			if ( !isOrder( opts.order ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a valid memory layout. Option: `%s`.', 'order', opts.order ) );
			}
		}
	}
	this._prng = prng;
	this._idtypes = idtypes;
	this._odtypes = odtypes;
	this._policies = {
		'output': policies.output
	};
	this._opts = opts;
	return this;
}

/**
* Returns an ndarray filled with pseudorandom values drawn from a unary PRNG.
*
* @name generate
* @memberof Random.prototype
* @type {Function}
* @param {NonNegativeIntegerArray} shape - output shape
* @param {(ndarrayLike|*)} param1 - PRNG parameter
* @param {Options} [options] - function options
* @param {string} [options.dtype] - output ndarray data type
* @param {string} [options.order] - memory layout (either row-major or column-major)
* @param {string} [options.mode] - specifies how to handle indices which exceed ndarray dimensions
* @param {StringArray} [options.submode] - specifies how to handle subscripts which exceed ndarray dimensions on a per dimension basis
* @param {boolean} [options.readonly] - boolean indicating whether an ndarray should be read-only
* @throws {TypeError} first argument must be a valid shape
* @throws {TypeError} must provide valid PRNG parameters
* @throws {TypeError} PRNG parameters and the desired shape must be broadcast compatible
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var exponential = require( '@stdlib/random/base/exponential' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = dtypes( 'real_floating_point_and_generic' );
*
* var policies = {
*     'output': 'real_floating_point_and_generic'
* };
* var options = {
*     'order': 'row-major'
* };
*
* var rand = new Random( exponential, idt, odt, policies, options );
*
* var v = rand.generate( [ 2, 2 ], 2.0 );
* // returns <ndarray>
*/
setReadOnly( Random.prototype, 'generate', function generate( shape, param1, options ) {
	var prng;
	var opts;
	var buf;
	var err;
	var len;
	var ord;
	var FLG;
	var out;
	var set;
	var dt;
	var st;
	var sh;
	var p1;

	if ( !isNonNegativeIntegerArray( shape ) && !isEmptyCollection( shape ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object containing nonnegative integers. Value: `%s`.', shape ) );
	}
	opts = {};
	if ( arguments.length > 2 ) {
		err = validate( opts, this._odtypes, options );
		if ( err ) {
			throw err;
		}
	}
	// Check whether we've been provided a scalar PRNG parameter...
	if ( isNumber( param1 ) ) {
		p1 = param1;
		dt = 'float64';
		FLG = true;
	} else if ( isComplexLike( param1 ) ) {
		p1 = param1;
		if ( p1.byteLength === 8 ) {
			dt = 'complex64';
		} else {
			dt = 'complex128';
		}
		FLG = true;
	} else if ( isndarrayLike( param1 ) ) {
		dt = getDType( param1 );
		sh = getShape( param1 );

		// Check whether the PRNG parameter is a zero-dimensional array...
		if ( sh.length === 0 ) {
			p1 = param1.get();
			FLG = true;
		} else {
			// Broadcast the PRNG parameter to the desired shape:
			p1 = broadcast( param1, shape ); // delegate to `broadcast` to ensure broadcast compatibility
			FLG = false;
		}
	} else {
		p1 = param1;
		dt = 'generic';
		FLG = true;
	}
	if ( !contains( this._idtypes, dt ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must have one of the following data types: "%s". Data type: `%s`.', join( this._idtypes, '", "' ), dt ) );
	}
	prng = this._prng;
	dt = opts.dtype || unaryOutputDataType( dt, this._policies.output );
	if ( opts.order ) {
		ord = opts.order;
	} else if ( FLG ) {
		ord = this._opts.order;
	} else {
		ord = getOrder( p1 );
	}
	// Handles special cases involving (1) zero-dimensional output ndarrays and (2) shapes having at least one dimension of size zero...
	len = numel( shape );
	if ( len === 0 ) {
		// Check for a zero-dimensional shape...
		if ( shape.length === 0 ) {
			// If the output array is a zero-dimensional ndarray, we generate a single random variate...
			buf = buffer( dt, 1 );
			if ( isAccessorArray( buf ) ) {
				set = accessorSetter( dt );
			} else {
				set = setter( dt );
			}
			set( buf, 0, prng( p1 ) );
			st = [ 0 ];
		} else {
			// If the output array has one or more dimensions of size zero, we avoid allocating any memory, and instead return an empty ndarray...
			buf = buffer( dt, len );
			st = shape2strides( shape, ord );
		}
		return new ndarray( dt, buf, shape, st, 0, ord, opts );
	}
	// If provided a scalar PRNG parameter, we can simply fill a linear buffer with pseudorandom values (as all pseudorandom values are drawn from the same PRNG) and then wrap as an ndarray...
	if ( FLG ) {
		if ( dt === 'generic' ) {
			buf = filledBy( len, wrapper );
		} else {
			buf = buffer( dt, len );
			nullaryStrided( [ buf ], [ len ], [ 1 ], wrapper );
		}
		st = shape2strides( shape, ord );
		return new ndarray( dt, buf, shape, st, 0, ord, opts );
	}
	// We've been provided an ndarray, so we need to perform element-wise iteration...

	// Allocate a data buffer:
	buf = buffer( dt, len );

	// Initialize the output array:
	st = shape2strides( shape, ord );
	out = new ndarray( dt, buf, shape, st, 0, ord, opts );

	// Fill the output array with pseudorandom values:
	unary( [ p1, out ], prng );

	return out;

	/**
	* Applies parameters to a pseudorandom number generator function.
	*
	* @private
	* @returns {(number|ComplexLike)} pseudorandom number
	*/
	function wrapper() {
		return prng( p1 );
	}
});

/**
* Fills an ndarray with pseudorandom values drawn from a unary PRNG.
*
* @name assign
* @memberof Random.prototype
* @type {Function}
* @param {(ndarrayLike|*)} param1 - PRNG parameter
* @param {ndarrayLike} out - output ndarray
* @throws {TypeError} second argument must be an ndarray
* @throws {TypeError} must provide valid PRNG parameters
* @throws {TypeError} PRNG parameters and the output ndarray must be broadcast compatible
* @throws {Error} cannot write to a read-only ndarray
* @returns {ndarray} output ndarray
*
* @example
* var dtypes = require( '@stdlib/ndarray/dtypes' );
* var ndzeros = require( '@stdlib/ndarray/zeros' );
* var exponential = require( '@stdlib/random/base/exponential' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = dtypes( 'real_floating_point_and_generic' );
*
* var policies = {
*     'output': 'real_floating_point_and_generic'
* };
* var options = {
*     'order': 'row-major'
* };
*
* var rand = new Random( exponential, idt, odt, policies, options );
*
* var out = ndzeros( [ 2, 2 ] );
* var v = rand.assign( 2.0, out );
* // returns <ndarray>
*
* var bool = ( v === out );
* // returns true
*/
setReadOnly( Random.prototype, 'assign', function assign( param1, out ) {
	var pdt;
	var odt;
	var p1;
	if ( !isndarrayLike( out ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an ndarray-like object. Value: `%s`.', out ) );
	}
	if ( isReadOnly( out ) ) {
		throw new Error( 'invalid argument. The output ndarray must be writable. Cannot write to a read-only ndarray.' );
	}
	// Check whether we've been provided a scalar PRNG parameter...
	if ( isNumber( param1 ) ) {
		// Wrap the scalar in a broadcasted ndarray:
		pdt = 'float64';
		p1 = broadcastScalar( param1, pdt, getShape( out ), getOrder( out ) );
	} else if ( isComplexLike( param1 ) ) {
		if ( param1.byteLength === 8 ) {
			pdt = 'complex64';
		} else {
			pdt = 'complex128';
		}
		// Wrap the scalar in a broadcasted ndarray:
		p1 = broadcastScalar( param1, pdt, getShape( out ), getOrder( out ) );
	} else if ( isndarrayLike( param1 ) ) {
		// Broadcast the PRNG parameter to the desired shape:
		pdt = getDType( param1 );
		p1 = broadcast( param1, getShape( out ) ); // delegate to `broadcast` to ensure broadcast compatibility
	} else {
		// Wrap the scalar in a broadcasted ndarray:
		pdt = 'generic';
		p1 = broadcastScalar( param1, pdt, getShape( out ), getOrder( out ) );
	}
	if ( !contains( this._idtypes, pdt ) ) {
		throw new TypeError( format( 'invalid argument. First argument must have one of the following data types: "%s". Data type: `%s`.', join( this._idtypes, '", "' ), pdt ) );
	}
	odt = getDType( out );
	if ( !contains( this._odtypes, odt ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must have one of the following data types: "%s". Data type: `%s`.', join( this._odtypes, '", "' ), odt ) );
	}
	// Fill the output array with pseudorandom values:
	unary( [ p1, out ], this._prng );

	return out;
});


// EXPORTS //

module.exports = Random;
