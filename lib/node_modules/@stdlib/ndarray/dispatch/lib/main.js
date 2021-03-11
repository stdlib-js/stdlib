/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isFunctionArray = require( '@stdlib/assert/is-function-array' );
var isFunction = require( '@stdlib/assert/is-function' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isCollection = require( '@stdlib/assert/is-collection' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var indexOfTypes = require( './index_of_types.js' );


// MAIN //

/**
* Returns an ndarray function interface which performs multiple dispatch.
*
* @param {(FunctionArray|Function)} fcns - list of ndarray functions
* @param {StringArray} types - one-dimensional list of ndarray argument data types
* @param {(Collection|null)} data - ndarray function data (e.g., callbacks)
* @param {PositiveInteger} nargs - total number of ndarray function interface arguments
* @param {NonNegativeInteger} nin - number of input ndarrays
* @param {NonNegativeInteger} nout - number of output ndarrays
* @throws {TypeError} first argument must be either a function or an array of functions
* @throws {TypeError} second argument must be an array of strings
* @throws {TypeError} third argument must be an array-like object or `null`
* @throws {Error} third and first arguments must have the same number of elements
* @throws {TypeError} fourth argument must be a positive integer
* @throws {TypeError} fifth argument must be a nonnegative integer
* @throws {TypeError} sixth argument must be a nonnegative integer
* @throws {Error} fourth argument must equal the specified number of input and output arrays
* @throws {Error} number of types must match the number of functions times the total number of array arguments for each function
* @throws {Error} interface must accept at least one input and/or output ndarray
* @returns {Function} ndarray function interface
*
* @example
* var unary = require( '@stdlib/ndarray/base/unary' );
* var abs = require( '@stdlib/math/base/special/abs' );
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var types = [
*     'float64', 'float64'
* ];
*
* var data = [
*     abs
* ];
*
* var absolute = dispatch( unary, types, data, 2, 1, 1 );
*
* // ...
*
* var xbuf = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
* var ybuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var x = ndarray( 'float64', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
* var y = ndarray( 'float64', ybuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* absolute( x, y );
* // ybuf => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/
function dispatch( fcns, types, data, nargs, nin, nout ) {
	var narrays;
	var nfcns;
	var fcn;

	if ( isFunction( fcns ) ) {
		fcn = fcns;
	} else if ( !isFunctionArray( fcns ) ) {
		throw new TypeError( 'invalid argument. First argument must be either a function or an array of functions. Value: `' + fcns + '`.' );
	}
	if ( !isStringArray( types ) ) {
		throw new TypeError( 'invalid argument. Second argument must be an array of strings. Value: `' + types + '`.' );
	}
	if ( !isCollection( data ) && data !== null ) {
		throw new TypeError( 'invalid argument. Third argument must be an array-like object or `null`. Value: `' + data + '`.' );
	}
	if ( !isPositiveInteger( nargs ) ) {
		throw new TypeError( 'invalid argument. Fourth argument must be a positive integer. Value: `' + nargs + '`.' );
	}
	if ( !isNonNegativeInteger( nin ) ) {
		throw new TypeError( 'invalid argument. Fifth argument must be a nonnegative integer. Value: `' + nin + '`.' );
	}
	if ( !isNonNegativeInteger( nout ) ) {
		throw new TypeError( 'invalid argument. Sixth argument must be a nonnegative integer. Value: `' + nout + '`.' );
	}
	narrays = nin + nout;
	if ( narrays === 0 ) {
		throw new Error( 'invalid arguments. Interface must accept at least one input and/or output ndarray. Based on the provided arguments, `nin+nout` equals `0`.' );
	}
	if ( nargs !== narrays ) {
		throw new Error( 'invalid arguments. Fourth argument does not equal the number of input and output ndarrays.' );
	}
	if ( fcn ) {
		nfcns = types.length / narrays;
		if ( !isInteger( nfcns ) ) {
			throw new Error( 'invalid argument. Unexpected number of types. A type must be specified for each input and output ndarray for each provided ndarray function.' );
		}
	} else {
		nfcns = fcns.length;
		if ( types.length !== nfcns*narrays ) {
			throw new Error( 'invalid argument. Unexpected number of types. A type must be specified for each input and output ndarray for each provided ndarray function.' );
		}
	}
	if ( data && data.length !== nfcns ) {
		throw new Error( 'invalid argument. The third argument must have the same number of elements as the first argument.' );
	}
	return dispatcher;

	/**
	* ndarray function interface which performs multiple dispatch.
	*
	* @private
	* @param {ndarrayLike} x - ndarray
	* @param {...ndarrayLike} args - ndarray arguments
	* @throws {Error} insufficient arguments
	* @throws {Error} too many arguments
	* @throws {TypeError} input array arguments must be ndarray-like objects
	* @throws {TypeError} output array arguments must be ndarray-like objects
	* @throws {TypeError} unable to resolve an ndarray function supporting the provided ndarray argument data types
	* @returns {(ndarrayLike|Array<ndarrayLike>|void)} destination array(s)
	*/
	function dispatcher() {
		var arrays;
		var dtypes;
		var argc;
		var idx;
		var v;
		var f;
		var i;

		argc = arguments.length;
		if ( argc !== nargs ) {
			if ( argc < nargs ) {
				throw new Error( 'invalid invocation. Insufficient arguments.' );
			}
			throw new Error( 'invalid invocation. Too many arguments.' );
		}
		arrays = [];
		dtypes = [];
		for ( i = 0; i < nargs; i++ ) {
			v = arguments[ i ];
			if ( !isndarrayLike( v ) ) {
				if ( i < nin ) {
					throw new TypeError( 'invalid argument. Input array argument must be an ndarray-like object.' );
				} else {
					throw new TypeError( 'invalid argument. Output array argument must be an ndarray-like object.' );
				}
			}
			arrays.push( v );
			dtypes.push( v.dtype );
		}
		// Resolve the ndarray function satisfying the input array types:
		idx = indexOfTypes( nfcns, narrays, types, narrays, 1, 0, dtypes, 1, 0 ); // eslint-disable-line max-len

		// Check whether we were able to successfully resolve an ndarray function:
		if ( idx < 0 ) {
			throw new TypeError( 'invalid arguments. Unable to resolve an ndarray function supporting the provided array argument data types.' );
		}
		// Retrieve the ndarray function:
		if ( fcn ) {
			f = fcn;
		} else {
			f = fcns[ idx ];
		}
		// Evaluate the ndarray function:
		if ( data ) {
			f( arrays, data[ idx ] );
		} else {
			f( arrays );
		}
		if ( nout === 1 ) {
			return arrays[ narrays-1 ];
		}
		if ( nout === 0 ) {
			return;
		}
		return arrays.slice( nin );
	}
}


// EXPORTS //

module.exports = dispatch;
