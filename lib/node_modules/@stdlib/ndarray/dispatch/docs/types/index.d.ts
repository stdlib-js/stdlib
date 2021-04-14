/*
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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { ndarray } from '@stdlib/types/ndarray';

/**
* ndarray function.
*
* @param arrays - array containing input and output ndarrays
* @param data - ndarray function data (e.g., a callback)
*
* @example
* var numel = require( `@stdlib/ndarray/base/numel` );
* var ind2sub = require( `@stdlib/ndarray/ind2sub` );
*
* function ndarrayFcn( arrays, fcn ) {
*     var xord;
*     var yord;
*     var opts;
*     var sub;
*     var sh;
*     var N;
*     var x;
*     var y;
*     var v;
*     var i;
*
*     x = arrays[ 0 ];
*     y = arrays[ 1 ];
*     sh = x.shape;
*     N = numel( sh );
*     if ( N <= 0 ) {
*         return;
*     }
*     xord = x.order;
*     yord = y.order;
*     opts = {};
*     opts.order = xord;
*     for ( i = 0; i < N; i++ ) {
*         // Convert a linear index to subscripts:
*         opts.order = xord;
*         sub = ind2sub( sh, i, opts );
*
*         // Retrieve an element from `x`:
*         v = x.get.apply( x, sub );
*
*         // Convert a linear index to subscripts:
*         opts.order = yord;
*         sub = ind2sub( sh, i, opts );
*
*         // Append the result of applying the callback:
*         sub.push( fcn( v ) );
*
*         // Assign the result to an element in `y`:
*         y.set.apply( y, sub );
*     }
* }
*/
type ndarrayFcn = ( arrays: Array<ndarray>, data?: any ) => void;

/**
* Interface describing an ndarray function dispatcher.
*/
interface Dispatcher {
	/**
	* Invokes an ndarray function based on the provided array data type(s).
	*
	* @param x - ndarray
	* @throws input array arguments must be ndarray-like objects
	* @throws output array arguments must be ndarray-like objects
	* @throws unable to resolve an ndarray function supporting the provided array argument data types
	* @returns destination array
	*
	* @example
	* var nullary = require( `@stdlib/ndarray/base/nullary` );
	* var Float64Array = require( `@stdlib/array/float64` );
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* function value() {
	*     return 3.14;
	* }
	*
	* var types = [ 'float64' ];
	* var data = [ value ];
	*
	* var fcn = dispatch( nullary, types, data, 1, 0, 1 );
	*
	* // ...
	*
	* var xbuf = new Float64Array( 5 );
	* var x = ndarray( 'float64', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
	*
	* fcn( x );
	* // xbuf => <Float64Array>[ 3.14, 3.14, 3.14, 3.14, 3.14 ]
	*/
	( x: ndarray ): ndarray | void;

	/**
	* Invokes an ndarray function based on the provided array data types.
	*
	* @param x - ndarray
	* @param y - ndarray
	* @throws input array arguments must be ndarray-like objects
	* @throws output array arguments must be ndarray-like objects
	* @throws unable to resolve an ndarray function supporting the provided array argument data types
	* @returns destination array(s)
	*
	* @example
	* var unary = require( `@stdlib/ndarray/base/unary` );
	* var Float64Array = require( `@stdlib/array/float64` );
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	* var abs = require( `@stdlib/math/base/special/abs` );
	*
	* var types = [ 'float64', 'float64' ];
	* var data = [ abs ];
	*
	* var fcn = dispatch( unary, types, data, 2, 1, 1 );
	*
	* // ...
	*
	* var xbuf = new Float64Array( [ -1.0, -2.0, -3.0 ] );
	* var ybuf = new Float64Array( xbuf.length );
	*
	* var x = ndarray( 'float64', xbuf, [ 3 ], [ 1 ], 0, 'row-major' );
	* var y = ndarray( 'float64', ybuf, [ 3 ], [ 1 ], 0, 'row-major' );
	*
	* fcn( x, y );
	* // ybuf => <Float64Array>[ 1.0, 2.0, 3.0 ]
	*/
	( x: ndarray, y: ndarray ): ndarray | void; // tslint:disable-line:unified-signatures

	/**
	* Invokes an ndarray function based on the provided array data types.
	*
	* @param x - ndarray
	* @param y - ndarray
	* @param z - ndarray
	* @throws input array arguments must be ndarray-like objects
	* @throws output array arguments must be ndarray-like objects
	* @throws unable to resolve an ndarray function supporting the provided array argument data types
	* @returns destination array(s)
	*
	* @example
	* var ternary = require( `@stdlib/ndarray/base/ternary` );
	* var Float64Array = require( `@stdlib/array/float64` );
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* function add2( x, y ) {
	*     return x + y;
	* }
	*
	* var types = [ 'float64', 'float64', 'float64' ];
	* var data = [ add2 ];
	*
	* var fcn = dispatch( ternary, types, data, 3, 2, 1 );
	*
	* // ...
	*
	* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var ybuf = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var zbuf = new Float64Array( xbuf.length );
	*
	* var x = ndarray( 'float64', xbuf, [ 3 ], [ 1 ], 0, 'row-major' );
	* var y = ndarray( 'float64', ybuf, [ 3 ], [ 1 ], 0, 'row-major' );
	* var z = ndarray( 'float64', zbuf, [ 3 ], [ 1 ], 0, 'row-major' );
	*
	* fcn( x, y, z );
	* // zbuf => <Float64Array>[ 2.0, 4.0, 6.0 ]
	*/
	( x: ndarray, y: ndarray, z: ndarray ): ndarray | void; // tslint:disable-line:unified-signatures

	/**
	* Invokes an ndarray function based on the provided array data types.
	*
	* @param x - ndarray
	* @param y - ndarray
	* @param z - ndarray
	* @param w - ndarray
	* @throws input array arguments must be ndarray-like objects
	* @throws output array arguments must be ndarray-like objects
	* @throws unable to resolve an ndarray function supporting the provided array argument data types
	* @returns destination array(s)
	*
	* @example
	* var quaternary = require( `@stdlib/ndarray/base/quaternary` );
	* var Float64Array = require( `@stdlib/array/float64` );
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* function add3( x, y, z ) {
	*     return x + y + z;
	* }
	*
	* var types = [ 'float64', 'float64', 'float64', 'float64' ];
	* var data = [ add3 ];
	*
	* var fcn = dispatch( quaternary, types, data, 4, 3, 1 );
	*
	* // ...
	*
	* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var ybuf = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var zbuf = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var wbuf = new Float64Array( xbuf.length );
	*
	* var x = ndarray( 'float64', xbuf, [ 3 ], [ 1 ], 0, 'row-major' );
	* var y = ndarray( 'float64', ybuf, [ 3 ], [ 1 ], 0, 'row-major' );
	* var z = ndarray( 'float64', zbuf, [ 3 ], [ 1 ], 0, 'row-major' );
	* var w = ndarray( 'float64', wbuf, [ 3 ], [ 1 ], 0, 'row-major' );
	*
	* fcn( x, y, z, w );
	* // wbuf => <Float64Array>[ 3.0, 6.0, 9.0 ]
	*/
	( x: ndarray, y: ndarray, z: ndarray, w: ndarray ): ndarray | void; // tslint:disable-line:unified-signatures

	/**
	* Invokes an ndarray function based on the provided array data types.
	*
	* @param x - ndarray
	* @param y - ndarray
	* @param z - ndarray
	* @param w - ndarray
	* @param args - ndarray arguments
	* @throws input array arguments must be ndarray-like objects
	* @throws output array arguments must be ndarray-like objects
	* @throws unable to resolve an ndarray function supporting the provided array argument data types
	* @returns destination array(s)
	*
	* @example
	* var quinary = require( `@stdlib/ndarray/base/quinary` );
	* var Float64Array = require( `@stdlib/array/float64` );
	* var ndarray = require( `@stdlib/ndarray/ctor` );
	*
	* function add4( x, y, z, w ) {
	*     return x + y + z + w;
	* }
	*
	* var types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	* var data = [ add4 ];
	*
	* var fcn = dispatch( quinary, types, data, 5, 4, 1 );
	*
	* // ...
	*
	* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var ybuf = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var zbuf = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var wbuf = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var ubuf = new Float64Array( xbuf.length );
	*
	* var x = ndarray( 'float64', xbuf, [ 3 ], [ 1 ], 0, 'row-major' );
	* var y = ndarray( 'float64', ybuf, [ 3 ], [ 1 ], 0, 'row-major' );
	* var z = ndarray( 'float64', zbuf, [ 3 ], [ 1 ], 0, 'row-major' );
	* var w = ndarray( 'float64', wbuf, [ 3 ], [ 1 ], 0, 'row-major' );
	* var u = ndarray( 'float64', ubuf, [ 3 ], [ 1 ], 0, 'row-major' );
	*
	* fcn( x, y, z, w, u );
	* // ubuf => <Float64Array>[ 4.0, 8.0, 12.0 ]
	*/
	( x: ndarray, y: ndarray, z: ndarray, w: ndarray, ...args: Array<ndarray> ): ndarray | void; // tslint:disable-line:max-line-length unified-signatures
}

/**
* Returns an ndarray function interface which performs multiple dispatch.
*
* @param fcns - list of ndarray functions
* @param types - one-dimensional list of ndarray argument data types
* @param data - ndarray function data (e.g., callbacks)
* @param nargs - total number of ndarray function interface arguments
* @param nin - number of input ndarrays
* @param nout - number of output ndarrays
* @throws first argument must be either a function or an array of functions
* @throws second argument must be an array of strings
* @throws third argument must be an array-like object or `null`
* @throws third and first arguments must have the same number of elements
* @throws fourth argument must be a positive integer
* @throws fifth argument must be a nonnegative integer
* @throws sixth argument must be a nonnegative integer
* @throws fourth argument must equal the specified number of input and output arrays
* @throws number of types must match the number of functions times the total number of array arguments for each function
* @throws interface must accept at least one input and/or output ndarray
* @returns ndarray function interface
*
* @example
* var unary = require( `@stdlib/ndarray/base/unary` );
* var abs = require( `@stdlib/math/base/special/abs` );
* var Float64Array = require( `@stdlib/array/float64` );
* var ndarray = require( `@stdlib/ndarray/ctor` );
*
* var types = [
*     'float64', 'float64'
* ];
*
* var data = [
*     abs
* ];
*
* var fcn = dispatch( unary, types, data, 2, 1, 1 );
*
* // ...
*
* var xbuf = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
* var ybuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var x = ndarray( 'float64', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
* var y = ndarray( 'float64', ybuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* fcn( x, y );
* // ybuf => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/
declare function dispatch( fcns: ndarrayFcn | ArrayLike<ndarrayFcn>, types: ArrayLike<string>, data: ArrayLike<any> | null, nargs: number, nin: number, nout: number ): Dispatcher; // tslint:disable-line:max-line-length


// EXPORTS //

export = dispatch;
