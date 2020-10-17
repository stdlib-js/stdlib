/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import { ArrayLike } from '@stdlib/types/array';

/**
* Strided array function.
*
* @param arrays - array containing strided input and output arrays
* @param shape - array containing a single element, the number of indexed elements
* @param strides - array containing the stride lengths for the strided input and output arrays
* @param data - strided array function data (e.g., a callback)
*
* @example
* function strided( arrays, shape, strides, fcn ) {
*     var sx;
*     var sy;
*     var ix;
*     var iy;
*     var N;
*     var x;
*     var y;
*     var i;
*
*     N = shape[ 0 ];
*     if ( N <= 0 ) {
*         return;
*     }
*     sx = strides[ 0 ];
*     if ( sx < 0 ) {
*         ix = (1-N) * sx;
*     } else {
*         ix = 0;
*     }
*     sy = strides[ 1 ];
*     if ( sy < 0 ) {
*         iy = (1-N) * sy;
*     } else {
*         iy = 0;
*     }
*     x = arrays[ 0 ];
*     y = arrays[ 1 ];
*     for ( i = 0; i < N; i++ ) {
*         y[ iy ] = fcn( x[ ix ] );
*         ix += sx;
*         iy += sy;
*     }
* }
*/
type StridedArrayFcn = ( arrays: Array<ArrayLike<any>>, shape: Array<number>, strides: Array<number>, data?: any ) => void; // tslint:disable-line:max-line-length

/**
* Strided array function using alternative indexing semantics.
*
* @param arrays - array containing strided input and output arrays
* @param shape - array containing a single element, the number of indexed elements
* @param strides - array containing the stride lengths for the strided input and output arrays
* @param offsets - array containing the starting indices (i.e., index offsets) for the strided input and output arrays
* @param data - strided array function data (e.g., a callback)
*
* @example
* function strided( arrays, shape, strides, offsets, fcn ) {
*     var sx;
*     var sy;
*     var ix;
*     var iy;
*     var N;
*     var x;
*     var y;
*     var i;
*
*     N = shape[ 0 ];
*     if ( N <= 0 ) {
*         return;
*     }
*     sx = strides[ 0 ];
*     sy = strides[ 1 ];
*     ix = offsets[ 0 ];
*     iy = offsets[ 1 ];
*     x = arrays[ 0 ];
*     y = arrays[ 1 ];
*     for ( i = 0; i < N; i++ ) {
*         y[ iy ] = fcn( x[ ix ] );
*         ix += sx;
*         iy += sy;
*     }
* }
*/
type StridedArrayFcnWithOffsets = ( arrays: Array<ArrayLike<any>>, shape: Array<number>, strides: Array<number>, offsets: Array<number>, data?: any ) => void; // tslint:disable-line:max-line-length

/**
* Interface describing a strided array function dispatcher.
*/
interface Dispatcher {
	/**
	* Invokes a strided array function based on the provided array data type(s).
	*
	* @param N - number of indexed elements
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @throws first argument must be an integer
	* @throws input array arguments must be array-like objects
	* @throws output array arguments must be array-like objects
	* @throws input array strides must be integers
	* @throws output array strides must be integers
	* @throws input array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws output array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns destination array
	*
	* @example
	* var nullary = require( `@stdlib/strided/base/nullary` );
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function value() {
	*     return 3.14;
	* }
	*
	* var types = [ 'float64' ];
	* var data = [ value ];
	*
	* var strided = dispatch( nullary, types, data, 3, 0, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( 5 );
	*
	* strided( x.length, x, 1 );
	* // x => <Float64Array>[ 3.14, 3.14, 3.14, 3.14, 3.14 ]
	*/
	( N: number, x: ArrayLike<any>, strideX: number ): ArrayLike<any> | void;

	/**
	* Invokes a strided array function based on the provided array data type(s) using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @param offsetX - starting index for `x`
	* @throws first argument must be an integer
	* @throws input array arguments must be array-like objects
	* @throws output array arguments must be array-like objects
	* @throws input array strides must be integers
	* @throws output array strides must be integers
	* @throws input array offsets must be nonnegative integers
	* @throws output array offsets must be nonnegative integers
	* @throws input array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws output array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns destination array
	*
	* @example
	* var nullary = require( `@stdlib/strided/base/nullary` ).ndarray;
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function value() {
	*     return 3.14;
	* }
	*
	* var types = [ 'float64' ];
	* var data = [ value ];
	*
	* var strided = dispatch( nullary, types, data, 4, 0, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( 5 );
	*
	* strided( x.length, x, 1, 0 );
	* // x => <Float64Array>[ 3.14, 3.14, 3.14, 3.14, 3.14 ]
	*/
	( N: number, x: ArrayLike<any>, strideX: number, offsetX: number ): ArrayLike<any> | void; // tslint:disable-line:max-line-length unified-signatures

	/**
	* Invokes a strided array function based on the provided array data types.
	*
	* @param N - number of indexed elements
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @param y - strided array
	* @param strideY - index increment for `y`
	* @throws first argument must be an integer
	* @throws input array arguments must be array-like objects
	* @throws output array arguments must be array-like objects
	* @throws input array strides must be integers
	* @throws output array strides must be integers
	* @throws input array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws output array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns destination array(s)
	*
	* @example
	* var unary = require( `@stdlib/strided/base/unary` );
	* var Float64Array = require( `@stdlib/array/float64` );
	* var abs = require( `@stdlib/math/base/special/abs` );
	*
	* var types = [ 'float64', 'float64' ];
	* var data = [ abs ];
	*
	* var strided = dispatch( unary, types, data, 5, 1, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( [ -1.0, -2.0, -3.0 ] );
	* var y = new Float64Array( x.length );
	*
	* strided( x.length, x, 1, y, 1 );
	* // y => <Float64Array>[ 1.0, 2.0, 3.0 ]
	*/
	( N: number, x: ArrayLike<any>, strideX: number, y: ArrayLike<any>, strideY: number ): ArrayLike<any> | void; // tslint:disable-line:max-line-length

	/**
	* Invokes a strided array function based on the provided array data types using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @param offsetX - starting index for `x`
	* @param y - strided array
	* @param strideY - index increment for `y`
	* @param offsetY - starting index for `y`
	* @throws first argument must be an integer
	* @throws input array arguments must be array-like objects
	* @throws output array arguments must be array-like objects
	* @throws input array strides must be integers
	* @throws output array strides must be integers
	* @throws input array offsets must be nonnegative integers
	* @throws output array offsets must be nonnegative integers
	* @throws input array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws output array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns destination array(s)
	*
	* @example
	* var unary = require( `@stdlib/strided/base/unary` ).ndarray;
	* var Float64Array = require( `@stdlib/array/float64` );
	* var abs = require( `@stdlib/math/base/special/abs` );
	*
	* var types = [ 'float64', 'float64' ];
	* var data = [ abs ];
	*
	* var strided = dispatch( unary, types, data, 7, 1, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( [ -1.0, -2.0, -3.0 ] );
	* var y = new Float64Array( x.length );
	*
	* strided( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 1.0, 2.0, 3.0 ]
	*/
	( N: number, x: ArrayLike<any>, strideX: number, offsetX: number, y: ArrayLike<any>, strideY: number, offsetY: number ): ArrayLike<any> | void; // tslint:disable-line:max-line-length

	/**
	* Invokes a strided array function based on the provided array data types.
	*
	* @param N - number of indexed elements
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @param y - strided array
	* @param strideY - index increment for `y`
	* @param z - strided array
	* @param strideZ - index increment for `z`
	* @throws first argument must be an integer
	* @throws input array arguments must be array-like objects
	* @throws output array arguments must be array-like objects
	* @throws input array strides must be integers
	* @throws output array strides must be integers
	* @throws input array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws output array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns destination array(s)
	*
	* @example
	* var ternary = require( `@stdlib/strided/base/ternary` );
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function add2( x, y ) {
	*     return x + y;
	* }
	*
	* var types = [ 'float64', 'float64', 'float64' ];
	* var data = [ add2 ];
	*
	* var strided = dispatch( ternary, types, data, 7, 2, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var z = new Float64Array( x.length );
	*
	* strided( x.length, x, 1, y, 1, z, 1 );
	* // z => <Float64Array>[ 2.0, 4.0, 6.0 ]
	*/
	( N: number, x: ArrayLike<any>, strideX: number, y: ArrayLike<any>, strideY: number, z: ArrayLike<any>, strideZ: number ): ArrayLike<any> | void; // tslint:disable-line:max-line-length

	/**
	* Invokes a strided array function based on the provided array data types using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @param offsetX - starting index for `x`
	* @param y - strided array
	* @param strideY - index increment for `y`
	* @param offsetY - starting index for `y`
	* @param z - strided array
	* @param strideZ - index increment for `z`
	* @param offsetZ - starting index for `z`
	* @throws first argument must be an integer
	* @throws input array arguments must be array-like objects
	* @throws output array arguments must be array-like objects
	* @throws input array strides must be integers
	* @throws output array strides must be integers
	* @throws input array offsets must be nonnegative integers
	* @throws output array offsets must be nonnegative integers
	* @throws input array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws output array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns destination array(s)
	*
	* @example
	* var ternary = require( `@stdlib/strided/base/ternary` ).ndarray;
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function add2( x, y ) {
	*     return x + y;
	* }
	*
	* var types = [ 'float64', 'float64', 'float64' ];
	* var data = [ add2 ];
	*
	* var strided = dispatch( ternary, types, data, 10, 2, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var z = new Float64Array( x.length );
	*
	* strided( x.length, x, 1, 0, y, 1, 0, z, 1, 0 );
	* // z => <Float64Array>[ 2.0, 4.0, 6.0 ]
	*/
	( N: number, x: ArrayLike<any>, strideX: number, offsetX: number, y: ArrayLike<any>, strideY: number, offsetY: number, z: ArrayLike<any>, strideZ: number, offsetZ: number ): ArrayLike<any> | void; // tslint:disable-line:max-line-length

	/**
	* Invokes a strided array function based on the provided array data types.
	*
	* @param N - number of indexed elements
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @param y - strided array
	* @param strideY - index increment for `y`
	* @param z - strided array
	* @param strideZ - index increment for `z`
	* @param w - strided array
	* @param strideW - index increment for `w`
	* @throws first argument must be an integer
	* @throws input array arguments must be array-like objects
	* @throws output array arguments must be array-like objects
	* @throws input array strides must be integers
	* @throws output array strides must be integers
	* @throws input array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws output array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns destination array(s)
	*
	* @example
	* var quaternary = require( `@stdlib/strided/base/quaternary` );
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function add3( x, y, z ) {
	*     return x + y + z;
	* }
	*
	* var types = [ 'float64', 'float64', 'float64', 'float64' ];
	* var data = [ add3 ];
	*
	* var strided = dispatch( quaternary, types, data, 9, 3, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var z = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var w = new Float64Array( x.length );
	*
	* strided( x.length, x, 1, y, 1, z, 1, w, 1 );
	* // w => <Float64Array>[ 3.0, 6.0, 9.0 ]
	*/
	( N: number, x: ArrayLike<any>, strideX: number, y: ArrayLike<any>, strideY: number, z: ArrayLike<any>, strideZ: number, w: ArrayLike<any>, strideW: number ): ArrayLike<any> | void; // tslint:disable-line:max-line-length

	/**
	* Invokes a strided array function based on the provided array data types using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @param offsetX - starting index for `x`
	* @param y - strided array
	* @param strideY - index increment for `y`
	* @param offsetY - starting index for `y`
	* @param z - strided array
	* @param strideZ - index increment for `z`
	* @param offsetZ - starting index for `z`
	* @param w - strided array
	* @param strideW - index increment for `w`
	* @param offsetW - starting index for `w`
	* @throws first argument must be an integer
	* @throws input array arguments must be array-like objects
	* @throws output array arguments must be array-like objects
	* @throws input array strides must be integers
	* @throws output array strides must be integers
	* @throws input array offsets must be nonnegative integers
	* @throws output array offsets must be nonnegative integers
	* @throws input array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws output array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns destination array(s)
	*
	* @example
	* var quaternary = require( `@stdlib/strided/base/quaternary` ).ndarray;
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function add3( x, y, z ) {
	*     return x + y + z;
	* }
	*
	* var types = [ 'float64', 'float64', 'float64', 'float64' ];
	* var data = [ add3 ];
	*
	* var strided = dispatch( quaternary, types, data, 13, 3, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var z = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var w = new Float64Array( x.length );
	*
	* strided( x.length, x, 1, 0, y, 1, 0, z, 1, 0, w, 1, 0 );
	* // w => <Float64Array>[ 3.0, 6.0, 9.0 ]
	*/
	( N: number, x: ArrayLike<any>, strideX: number, offsetX: number, y: ArrayLike<any>, strideY: number, offsetY: number, z: ArrayLike<any>, strideZ: number, offsetZ: number, w: ArrayLike<any>, strideW: number, offsetW: number ): ArrayLike<any> | void; // tslint:disable-line:max-line-length

	/**
	* Invokes a strided array function based on the provided array data types.
	*
	* @param N - number of indexed elements
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @param y - strided array
	* @param strideY - index increment for `y`
	* @param z - strided array
	* @param strideZ - index increment for `z`
	* @param w - strided array
	* @param strideW - index increment for `w`
	* @param args - array arguments (arrays, strides, and offsets)
	* @throws first argument must be an integer
	* @throws input array arguments must be array-like objects
	* @throws output array arguments must be array-like objects
	* @throws input array strides must be integers
	* @throws output array strides must be integers
	* @throws input array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws output array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns destination array(s)
	*
	* @example
	* var quinary = require( `@stdlib/strided/base/quinary` );
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function add4( x, y, z, w ) {
	*     return x + y + z + w;
	* }
	*
	* var types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	* var data = [ add4 ];
	*
	* var strided = dispatch( quinary, types, data, 11, 4, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var z = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var w = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var u = new Float64Array( x.length );
	*
	* strided( x.length, x, 1, y, 1, z, 1, w, 1, u, 1 );
	* // u => <Float64Array>[ 4.0, 8.0, 12.0 ]
	*/
	( N: number, x: ArrayLike<any>, strideX: number, y: ArrayLike<any>, strideY: number, z: ArrayLike<any>, strideZ: number, w: ArrayLike<any>, strideW: number, ...args: Array<ArrayLike<any> | number> ): ArrayLike<any> | void; // tslint:disable-line:max-line-length unified-signatures

	/**
	* Invokes a strided array function based on the provided array data types using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @param offsetX - starting index for `x`
	* @param y - strided array
	* @param strideY - index increment for `y`
	* @param offsetY - starting index for `y`
	* @param z - strided array
	* @param strideZ - index increment for `z`
	* @param offsetZ = starting index for `z`
	* @param w - strided array
	* @param strideW - index increment for `w`
	* @param offsetW - starting index for `w`
	* @param args - array arguments (arrays, strides, and offsets)
	* @throws first argument must be an integer
	* @throws input array arguments must be array-like objects
	* @throws output array arguments must be array-like objects
	* @throws input array strides must be integers
	* @throws output array strides must be integers
	* @throws input array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws output array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws unable to resolve a strided array function supporting the provided array argument data types
	* @returns destination array(s)
	*
	* @example
	* var quinary = require( `@stdlib/strided/base/quinary` ).ndarray;
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function add4( x, y, z, w ) {
	*     return x + y + z + w;
	* }
	*
	* var types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	* var data = [ add4 ];
	*
	* var strided = dispatch( quinary, types, data, 16, 4, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var z = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var w = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var u = new Float64Array( x.length );
	*
	* strided( x.length, x, 1, 0, y, 1, 0, z, 1, 0, w, 1, 0, u, 1, 0 );
	* // u => <Float64Array>[ 4.0, 8.0, 12.0 ]
	*/
	( N: number, x: ArrayLike<any>, strideX: number, offsetX: number, y: ArrayLike<any>, strideY: number, offsetY: number, z: ArrayLike<any>, strideZ: number, offsetZ: number, w: ArrayLike<any>, strideW: number, offsetW: number, ...args: Array<ArrayLike<any> | number> ): ArrayLike<any> | void; // tslint:disable-line:max-line-length unified-signatures
}

/**
* Returns a strided array function interface which performs multiple dispatch.
*
* @param fcns - list of strided array functions
* @param types - one-dimensional list of strided array argument data types
* @param data - strided array function data (e.g., callbacks)
* @param nargs - total number of strided array function interface arguments (including strides and offsets)
* @param nin - number of input strided arrays
* @param nout - number of output strided arrays
* @throws first argument must be either a function or an array of functions
* @throws second argument must be an array of strings
* @throws third argument must be an array-like object or `null`
* @throws third and first arguments must have the same number of elements
* @throws fourth argument must be a positive integer
* @throws fifth argument must be a nonnegative integer
* @throws sixth argument must be a nonnegative integer
* @throws fourth argument must be compatible with the specified number of input and output arrays
* @throws number of types must match the number of functions times the total number of array arguments for each function
* @throws interface must accept at least one strided input and/or output array
* @returns strided array function interface
*
* @example
* var unary = require( `@stdlib/strided/base/unary` );
* var abs = require( `@stdlib/math/base/special/abs` );
* var Float64Array = require( `@stdlib/array/float64` );
*
* var types = [
*     'float64', 'float64'
* ];
*
* var data = [
*     abs
* ];
*
* var strided = dispatch( unary, types, data, 5, 1, 1 );
*
* // ...
*
* var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* strided( x.length, x, 1, y, 1 );
* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/
declare function dispatch( fcns: StridedArrayFcn | ArrayLike<StridedArrayFcn>, types: ArrayLike<string>, data: ArrayLike<any> | null, nargs: number, nin: number, nout: number ): Dispatcher; // tslint:disable-line:max-line-length

/**
* Returns a strided array function interface which performs multiple dispatch and supports alternative indexing semantics.
*
* @param fcns - list of strided array functions
* @param types - one-dimensional list of strided array argument data types
* @param data - strided array function data (e.g., callbacks)
* @param nargs - total number of strided array function interface arguments (including strides and offsets)
* @param nin - number of input strided arrays
* @param nout - number of output strided arrays
* @throws first argument must be either a function or an array of functions
* @throws second argument must be an array of strings
* @throws third argument must be an array-like object or `null`
* @throws third and first arguments must have the same number of elements
* @throws fourth argument must be a positive integer
* @throws fifth argument must be a nonnegative integer
* @throws sixth argument must be a nonnegative integer
* @throws fourth argument must be compatible with the specified number of input and output arrays
* @throws number of types must match the number of functions times the total number of array arguments for each function
* @throws interface must accept at least one strided input and/or output array
* @returns strided array function interface
*
* @example
* var unary = require( `@stdlib/strided/base/unary` ).ndarray;
* var abs = require( `@stdlib/math/base/special/abs` );
* var Float64Array = require( `@stdlib/array/float64` );
*
* var types = [
*     'float64', 'float64'
* ];
*
* var data = [
*     abs
* ];
*
* var strided = dispatch( unary, types, data, 7, 1, 1 );
*
* // ...
*
* var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* strided( x.length, x, 1, 0, y, 1, 0 );
* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/
declare function dispatch( fcns: StridedArrayFcnWithOffsets | ArrayLike<StridedArrayFcnWithOffsets>, types: ArrayLike<string>, data: ArrayLike<any> | null, nargs: number, nin: number, nout: number ): Dispatcher; // tslint:disable-line:max-line-length unified-signatures


// EXPORTS //

export = dispatch;
