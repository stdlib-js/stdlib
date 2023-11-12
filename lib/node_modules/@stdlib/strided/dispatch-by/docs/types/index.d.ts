/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

/* eslint-disable max-lines */

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ArrayLike, Collection } from '@stdlib/types/array';

/**
* Returns the accessed value.
*
* @returns accessed value
*/
type NullaryCallback<T> = ( this: T ) => any;

/**
* Returns the accessed value.
*
* @param values - array element value
* @returns accessed value
*/
type UnaryCallback<T> = ( this: T, values: any ) => any;

/**
* Returns the accessed value.
*
* @param values - array element value
* @param idx - iteration index
* @returns accessed value
*/
type BinaryCallback<T> = ( this: T, values: any, idx: number ) => any;

/**
* Returns the accessed value.
*
* @param values - array element value
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @returns accessed value
*/
type TernaryCallback<T> = ( this: T, values: any, idx: number, indices: Array<number> ) => any;

/**
* Returns the accessed value.
*
* @param values - array element value
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @param arrays - input and output arrays
* @returns accessed value
*/
type QuaternaryCallback<T> = ( this: T, values: any, idx: number, indices: Array<number>, arrays: Array<Collection> ) => any;

/**
* Returns the accessed value.
*
* @param values - array element value
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @param arrays - input and output arrays
* @returns accessed value
*/
type Callback<T> = NullaryCallback<T> | UnaryCallback<T> | BinaryCallback<T> | TernaryCallback<T> | QuaternaryCallback<T>;

/**
* Strided array function.
*
* @param arrays - array containing strided input and output arrays
* @param shape - array containing a single element, the number of indexed elements
* @param strides - array containing the stride lengths for the strided input and output arrays
* @param clbk - callback function
* @param thisArg - execution context
*
* @example
* function strided( arrays, shape, strides, clbk, thisArg ) {
*     var sx;
*     var sy;
*     var ix;
*     var iy;
*     var N;
*     var x;
*     var y;
*     var v;
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
*         v = clbk.call( thisArg, x[ ix ], i, [ ix, iy ], [ x, y ] );
*         if ( v !== void 0 ) {
*             y[ iy ] = v * 2.0;
*         }
*         ix += sx;
*         iy += sy;
*     }
* }
*/
type StridedArrayFcnNoData<T> = ( arrays: Array<Collection>, shape: Array<number>, strides: Array<number>, clbk: Callback<T>, thisArg?: ThisParameterType<Callback<T>> ) => void;

/**
* Strided array function.
*
* @param arrays - array containing strided input and output arrays
* @param shape - array containing a single element, the number of indexed elements
* @param strides - array containing the stride lengths for the strided input and output arrays
* @param data - strided array function data (e.g., a callback)
* @param clbk - callback function
* @param thisArg - execution context
*
* @example
* function strided( arrays, shape, strides, fcn, clbk, thisArg ) {
*     var sx;
*     var sy;
*     var ix;
*     var iy;
*     var N;
*     var x;
*     var y;
*     var v;
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
*         v = clbk.call( thisArg, x[ ix ], i, [ ix, iy ], [ x, y ] );
*         if ( v !== void 0 ) {
*             y[ iy ] = fcn( v );
*         }
*         ix += sx;
*         iy += sy;
*     }
* }
*/
type StridedArrayFcnWithData<T> = ( arrays: Array<Collection>, shape: Array<number>, strides: Array<number>, data: any, clbk: Callback<T>, thisArg?: ThisParameterType<Callback<T>> ) => void;

/**
* Strided array function.
*
* @param arrays - array containing strided input and output arrays
* @param shape - array containing a single element, the number of indexed elements
* @param strides - array containing the stride lengths for the strided input and output arrays
* @param data - strided array function data (e.g., a callback)
* @param clbk - callback function
* @param thisArg - execution context
*/
type StridedArrayFcn<T> = StridedArrayFcnNoData<T> | StridedArrayFcnWithData<T>;

/**
* Strided array function using alternative indexing semantics.
*
* @param arrays - array containing strided input and output arrays
* @param shape - array containing a single element, the number of indexed elements
* @param strides - array containing the stride lengths for the strided input and output arrays
* @param offsets - array containing the starting indices (i.e., index offsets) for the strided input and output arrays
* @param clbk - callback function
* @param thisArg - execution context
*
* @example
* function strided( arrays, shape, strides, offsets, clbk, thisArg ) {
*     var sx;
*     var sy;
*     var ix;
*     var iy;
*     var N;
*     var x;
*     var y;
*     var v;
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
*         v = clbk.call( thisArg, x[ ix ], i, [ ix, iy ], [ x, y ] );
*         if ( v !== void 0 ) {
*             y[ iy ] = v * 2.0;
*         }
*         ix += sx;
*         iy += sy;
*     }
* }
*/
type StridedArrayFcnWithOffsetsNoData<T> = ( arrays: Array<Collection>, shape: Array<number>, strides: Array<number>, offsets: Array<number>, clbk: Callback<T>, thisArg?: ThisParameterType<Callback<T>> ) => void;

/**
* Strided array function using alternative indexing semantics.
*
* @param arrays - array containing strided input and output arrays
* @param shape - array containing a single element, the number of indexed elements
* @param strides - array containing the stride lengths for the strided input and output arrays
* @param offsets - array containing the starting indices (i.e., index offsets) for the strided input and output arrays
* @param data - strided array function data (e.g., a callback)
* @param clbk - callback function
* @param thisArg - execution context
*
* @example
* function strided( arrays, shape, strides, offsets, fcn, clbk, thisArg ) {
*     var sx;
*     var sy;
*     var ix;
*     var iy;
*     var N;
*     var x;
*     var y;
*     var v;
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
*         v = clbk.call( thisArg, x[ ix ], i, [ ix, iy ], [ x, y ] );
*         if ( v !== void 0 ) {
*             y[ iy ] = fcn( v );
*         }
*         ix += sx;
*         iy += sy;
*     }
* }
*/
type StridedArrayFcnWithOffsetsData<T> = ( arrays: Array<Collection>, shape: Array<number>, strides: Array<number>, offsets: Array<number>, data: any, clbk: Callback<T>, thisArg?: ThisParameterType<Callback<T>> ) => void;

/**
* Strided array function.
*
* @param arrays - array containing strided input and output arrays
* @param shape - array containing a single element, the number of indexed elements
* @param strides - array containing the stride lengths for the strided input and output arrays
* @param offsets - array containing the starting indices (i.e., index offsets) for the strided input and output arrays
* @param data - strided array function data (e.g., a callback)
* @param clbk - callback function
* @param thisArg - execution context
*/
type StridedArrayFcnWithOffsets<T> = StridedArrayFcnWithOffsetsNoData<T> | StridedArrayFcnWithOffsetsData<T>;

/**
* Interface describing a strided array function dispatcher.
*/
interface Dispatcher {
	/**
	* Invokes a strided array function based on the provided array data type(s).
	*
	* @param N - number of indexed elements
	* @param dtypeX - data type for `x`
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @param clbk - callback function
	* @param thisArg - execution context
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
	* var nullary = require( `@stdlib/strided/base/nullary-by` );
	* var Float64Array = require( `@stdlib/array/float64` );
	* var noop = require( `@stdlib/utils/noop` );
	*
	* function value() {
	*     return 3.14;
	* }
	*
	* var types = [ 'float64' ];
	* var data = [ value ];
	*
	* var strided = dispatchBy( nullary, types, data, 5, 0, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( 5 );
	*
	* strided( x.length, 'float64', x, 1, noop );
	* // x => <Float64Array>[ 3.14, 3.14, 3.14, 3.14, 3.14 ]
	*/
	<T>( N: number, dtypeX: any, x: Collection, strideX: number, clbk: Callback<T>, thisArg?: ThisParameterType<Callback<T>> ): ArrayLike<any> | void;

	/**
	* Invokes a strided array function based on the provided array data type(s) using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param dtypeX - data type for `x`
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @param offsetX - starting index for `x`
	* @param clbk - callback function
	* @param thisArg - execution context
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
	* var nullary = require( `@stdlib/strided/base/nullary-by` ).ndarray;
	* var Float64Array = require( `@stdlib/array/float64` );
	* var identity = require( `@stdlib/utils/noop` );
	*
	* function value() {
	*     return 3.14;
	* }
	*
	* var types = [ 'float64' ];
	* var data = [ value ];
	*
	* var strided = dispatchBy( nullary, types, data, 6, 0, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( 5 );
	*
	* strided( x.length, 'float64', x, 1, 0, noop );
	* // x => <Float64Array>[ 3.14, 3.14, 3.14, 3.14, 3.14 ]
	*/
	<T>( N: number, dtypeX: any, x: Collection, strideX: number, offsetX: number, clbk: Callback<T>, thisArg?: ThisParameterType<Callback<T>> ): ArrayLike<any> | void; // eslint-disable-line @typescript-eslint/unified-signatures

	/**
	* Invokes a strided array function based on the provided array data types.
	*
	* @param N - number of indexed elements
	* @param dtypeX - data type for `x`
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @param dtypeY - data type for `y`
	* @param y - strided array
	* @param strideY - index increment for `y`
	* @param clbk - callback function
	* @param thisArg - execution context
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
	* var unary = require( `@stdlib/strided/base/unary-by` );
	* var Float64Array = require( `@stdlib/array/float64` );
	* var abs = require( `@stdlib/math/base/special/abs` );
	* var identity = require( `@stdlib/math/base/special/identity` );
	*
	* var types = [ 'float64', 'float64' ];
	* var data = [ abs ];
	*
	* var strided = dispatchBy( unary, types, data, 8, 1, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( [ -1.0, -2.0, -3.0 ] );
	* var y = new Float64Array( x.length );
	*
	* strided( x.length, 'float64', x, 1, 'float64', y, 1, identity );
	* // y => <Float64Array>[ 1.0, 2.0, 3.0 ]
	*/
	<T>( N: number, dtypeX: any, x: Collection, strideX: number, dtypeY: any, y: Collection, strideY: number, clbk: Callback<T>, thisArg?: ThisParameterType<Callback<T>> ): ArrayLike<any> | void;

	/**
	* Invokes a strided array function based on the provided array data types using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param dtypeX - data type for `x`
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @param offsetX - starting index for `x`
	* @param dtypeY - data type for `y`
	* @param y - strided array
	* @param strideY - index increment for `y`
	* @param offsetY - starting index for `y`
	* @param clbk - callback function
	* @param thisArg - execution context
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
	* var unary = require( `@stdlib/strided/base/unary-by` ).ndarray;
	* var Float64Array = require( `@stdlib/array/float64` );
	* var abs = require( `@stdlib/math/base/special/abs` );
	* var identity = require( `@stdlib/math/base/special/identity` );
	*
	* var types = [ 'float64', 'float64' ];
	* var data = [ abs ];
	*
	* var strided = dispatchBy( unary, types, data, 10, 1, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( [ -1.0, -2.0, -3.0 ] );
	* var y = new Float64Array( x.length );
	*
	* strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, identity );
	* // y => <Float64Array>[ 1.0, 2.0, 3.0 ]
	*/
	<T>( N: number, dtypeX: any, x: Collection, strideX: number, offsetX: number, dtypeY: any, y: Collection, strideY: number, offsetY: number, clbk: Callback<T>, thisArg?: ThisParameterType<Callback<T>> ): ArrayLike<any> | void;

	/**
	* Invokes a strided array function based on the provided array data types.
	*
	* @param N - number of indexed elements
	* @param dtypeX - data type for `x`
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @param dtypeY - data type for `y`
	* @param y - strided array
	* @param strideY - index increment for `y`
	* @param dtypeZ - data type for `z`
	* @param z - strided array
	* @param strideZ - index increment for `z`
	* @param clbk - callback function
	* @param thisArg - execution context
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
	* var binary = require( `@stdlib/strided/base/binary-by` );
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function add2( x, y ) {
	*     return x + y;
	* }
	*
	* function identity( values ) {
	*     return values;
	* }
	*
	* var types = [ 'float64', 'float64', 'float64' ];
	* var data = [ add2 ];
	*
	* var strided = dispatchBy( binary, types, data, 11, 2, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var z = new Float64Array( x.length );
	*
	* strided( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity );
	* // z => <Float64Array>[ 2.0, 4.0, 6.0 ]
	*/
	<T>( N: number, dtypeX: any, x: Collection, strideX: number, dtypeY: any, y: Collection, strideY: number, dtypeZ: any, z: Collection, strideZ: number, clbk: Callback<T>, thisArg?: ThisParameterType<Callback<T>> ): ArrayLike<any> | void;

	/**
	* Invokes a strided array function based on the provided array data types using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param dtypeX - data type for `x`
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @param offsetX - starting index for `x`
	* @param dtypeY - data type for `y`
	* @param y - strided array
	* @param strideY - index increment for `y`
	* @param offsetY - starting index for `y`
	* @param dtypeZ - data type for `z`
	* @param z - strided array
	* @param strideZ - index increment for `z`
	* @param offsetZ - starting index for `z`
	* @param clbk - callback function
	* @param thisArg - execution context
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
	* var binary = require( `@stdlib/strided/base/binary-by` ).ndarray;
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function add2( x, y ) {
	*     return x + y;
	* }
	*
	* function identity( values ) {
	*     return values;
	* }
	*
	* var types = [ 'float64', 'float64', 'float64' ];
	* var data = [ add2 ];
	*
	* var strided = dispatchBy( binary, types, data, 14, 2, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var z = new Float64Array( x.length );
	*
	* strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity );
	* // z => <Float64Array>[ 2.0, 4.0, 6.0 ]
	*/
	<T>( N: number, dtypeX: any, x: Collection, strideX: number, offsetX: number, dtypeY: any, y: Collection, strideY: number, offsetY: number, dtypeZ: any, z: Collection, strideZ: number, offsetZ: number, clbk: Callback<T>, thisArg?: ThisParameterType<Callback<T>> ): ArrayLike<any> | void;

	/**
	* Invokes a strided array function based on the provided array data types.
	*
	* @param N - number of indexed elements
	* @param dtypeX - data type for `x`
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @param dtypeY - data type for `y`
	* @param y - strided array
	* @param strideY - index increment for `y`
	* @param dtypeZ - data type for `z`
	* @param z - strided array
	* @param strideZ - index increment for `z`
	* @param dtypeW - data type for `w`
	* @param w - strided array
	* @param strideW - index increment for `w`
	* @param clbk - callback function
	* @param thisArg - execution context
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
	* var ternary = require( `@stdlib/strided/base/ternary-by` );
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function add3( x, y, z ) {
	*     return x + y + z;
	* }
	*
	* function identity( values ) {
	*     return values;
	* }
	*
	* var types = [ 'float64', 'float64', 'float64', 'float64' ];
	* var data = [ add3 ];
	*
	* var strided = dispatchBy( ternary, types, data, 14, 3, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var z = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var w = new Float64Array( x.length );
	*
	* strided( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity );
	* // w => <Float64Array>[ 3.0, 6.0, 9.0 ]
	*/
	<T>( N: number, dtypeX: any, x: Collection, strideX: number, dtypeY: any, y: Collection, strideY: number, dtypeZ: any, z: Collection, strideZ: number, dtypeW: any, w: Collection, strideW: number, clbk: Callback<T>, thisArg?: ThisParameterType<Callback<T>> ): ArrayLike<any> | void;

	/**
	* Invokes a strided array function based on the provided array data types using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param dtypeX - data type for `x`
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @param offsetX - starting index for `x`
	* @param dtypeY - data type for `y`
	* @param y - strided array
	* @param strideY - index increment for `y`
	* @param offsetY - starting index for `y`
	* @param dtypeZ - data type for `z`
	* @param z - strided array
	* @param strideZ - index increment for `z`
	* @param offsetZ - starting index for `z`
	* @param dtypeW - data type for `w`
	* @param w - strided array
	* @param strideW - index increment for `w`
	* @param offsetW - starting index for `w`
	* @param clbk - callback function
	* @param thisArg - execution context
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
	* var ternary = require( `@stdlib/strided/base/ternary-by` ).ndarray;
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function add3( x, y, z ) {
	*     return x + y + z;
	* }
	*
	* function identity( values ) {
	*     return values;
	* }
	*
	* var types = [ 'float64', 'float64', 'float64', 'float64' ];
	* var data = [ add3 ];
	*
	* var strided = dispatchBy( ternary, types, data, 18, 3, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var z = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var w = new Float64Array( x.length );
	*
	* strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity );
	* // w => <Float64Array>[ 3.0, 6.0, 9.0 ]
	*/
	<T>( N: number, dtypeX: any, x: Collection, strideX: number, offsetX: number, dtypeY: any, y: Collection, strideY: number, offsetY: number, dtypeZ: any, z: Collection, strideZ: number, offsetZ: number, dtypeW: any, w: Collection, strideW: number, offsetW: number, clbk: Callback<T>, thisArg?: ThisParameterType<Callback<T>> ): ArrayLike<any> | void;

	/**
	* Invokes a strided array function based on the provided array data types.
	*
	* @param N - number of indexed elements
	* @param dtypeX - data type for `x`
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @param dtypeY - data type for `y`
	* @param y - strided array
	* @param strideY - index increment for `y`
	* @param dtypeZ - data type for `z`
	* @param z - strided array
	* @param strideZ - index increment for `z`
	* @param dtypeW - data type for `w`
	* @param w - strided array
	* @param strideW - index increment for `w`
	* @param dtypeU - data type for `u`
	* @param u - strided array
	* @param strideU - index increment for `u`
	* @param clbk - callback function
	* @param thisArg - execution context
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
	* var quinary = require( `@stdlib/strided/base/quinary-by` );
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function add5( x, y, z, w, u ) {
	*     return x + y + z + w + u;
	* }
	*
	* function identity( values ) {
	*     return values;
	* }
	*
	* var types = [ 'float64', 'float64', 'float64', 'float64', 'float64', 'float64' ];
	* var data = [ add5 ];
	*
	* var strided = dispatchBy( quinary, types, data, 20, 5, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var z = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var w = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var u = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var v = new Float64Array( x.length );
	*
	* strided( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, 'float64', v, 1, identity );
	* // v => <Float64Array>[ 4.0, 8.0, 12.0 ]
	*/
	<T>( N: number, dtypeX: any, x: Collection, strideX: number, dtypeY: any, y: Collection, strideY: number, dtypeZ: any, z: Collection, strideZ: number, dtypeW: any, w: Collection, strideW: number, dtypeU: any, u: Collection, strideU: number, clbk: Callback<T>, thisArg?: ThisParameterType<Callback<T>> ): ArrayLike<any> | void; // eslint-disable-line @typescript-eslint/unified-signatures

	/**
	* Invokes a strided array function based on the provided array data types using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param dtypeX - data type for `x`
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @param offsetX - starting index for `x`
	* @param dtypeY - data type for `y`
	* @param y - strided array
	* @param strideY - index increment for `y`
	* @param offsetY - starting index for `y`
	* @param dtypeZ - data type for `z`
	* @param z - strided array
	* @param strideZ - index increment for `z`
	* @param offsetZ = starting index for `z`
	* @param dtypeW - data type for `w`
	* @param w - strided array
	* @param strideW - index increment for `w`
	* @param offsetW - starting index for `w`
	* @param dtypeU - data type for `u`
	* @param u - strided array
	* @param strideU - index increment for `u`
	* @param offsetU - starting index for `u`
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
	* var quinary = require( `@stdlib/strided/base/quinary-by` ).ndarray;
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function add5( x, y, z, w, u ) {
	*     return x + y + z + w + u;
	* }
	*
	* function identity( values ) {
	*     return values;
	* }
	*
	* var types = [ 'float64', 'float64', 'float64', 'float64', 'float64', 'float64' ];
	* var data = [ add4 ];
	*
	* var strided = dispatchBy( quinary, types, data, 26, 5, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var z = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var w = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var u = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var v = new Float64Array( x.length );
	*
	* strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, 'float64', v, 1, 0, identity );
	* // v => <Float64Array>[ 4.0, 8.0, 12.0 ]
	*/
	<T>( N: number, dtypeX: any, x: Collection, strideX: number, offsetX: number, dtypeY: any, y: Collection, strideY: number, offsetY: number, dtypeZ: any, z: Collection, strideZ: number, offsetZ: number, dtypeW: any, w: Collection, strideW: number, offsetW: number, dtypeU: any, u: Collection, strideU: number, offsetU: number, clbk: Callback<T>, thisArg?: ThisParameterType<Callback<T>> ): ArrayLike<any> | void; // eslint-disable-line @typescript-eslint/unified-signatures

	/**
	* Invokes a strided array function based on the provided array data types.
	*
	* @param N - number of indexed elements
	* @param dtypeX - data type for `x`
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @param dtypeY - data type for `y`
	* @param y - strided array
	* @param strideY - index increment for `y`
	* @param dtypeZ - data type for `z`
	* @param z - strided array
	* @param strideZ - index increment for `z`
	* @param dtypeW - data type for `w`
	* @param w - strided array
	* @param strideW - index increment for `w`
	* @param dtypeU - data type for `u`
	* @param u - strided array
	* @param strideU - index increment for `u`
	* @param args - array arguments (arrays, dtypes, strides, callback, and execution context)
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
	* var quinary = require( `@stdlib/strided/base/quinary-by` );
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function add5( x, y, z, w, u ) {
	*     return x + y + z + w + u;
	* }
	*
	* function identity( values ) {
	*     return values;
	* }
	*
	* var types = [ 'float64', 'float64', 'float64', 'float64', 'float64', 'float64' ];
	* var data = [ add4 ];
	*
	* var strided = dispatchBy( quinary, types, data, 20, 5, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var z = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var w = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var u = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var v = new Float64Array( x.length );
	*
	* strided( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, 'float64', v, 1, identity );
	* // v => <Float64Array>[ 4.0, 8.0, 12.0 ]
	*/
	( N: number, dtypeX: any, x: Collection, strideX: number, dtypeY: any, y: Collection, strideY: number, dtypeZ: any, z: Collection, strideZ: number, dtypeW: any, w: Collection, strideW: number, dtypeU: any, u: Collection, strideU: number, ...args: Array<any> ): ArrayLike<any> | void; // eslint-disable-line @typescript-eslint/unified-signatures

	/**
	* Invokes a strided array function based on the provided array data types using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param dtypeX - data type for `x`
	* @param x - strided array
	* @param strideX - index increment for `x`
	* @param offsetX - starting index for `x`
	* @param dtypeY - data type for `y`
	* @param y - strided array
	* @param strideY - index increment for `y`
	* @param offsetY - starting index for `y`
	* @param dtypeZ - data type for `z`
	* @param z - strided array
	* @param strideZ - index increment for `z`
	* @param offsetZ = starting index for `z`
	* @param dtypeW - data type for `w`
	* @param w - strided array
	* @param strideW - index increment for `w`
	* @param offsetW - starting index for `w`
	* @param dtypeU - data type for `u`
	* @param u - strided array
	* @param strideU - index increment for `u`
	* @param offsetU - starting index for `u`
	* @param args - array arguments (arrays, dtypes, strides, offsets, callback, and execution context)
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
	* var quinary = require( `@stdlib/strided/base/quinary-by` ).ndarray;
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function add5( x, y, z, w, u ) {
	*     return x + y + z + w + u;
	* }
	*
	* function identity( values ) {
	*     return values;
	* }
	*
	* var types = [ 'float64', 'float64', 'float64', 'float64', 'float64', 'float64' ];
	* var data = [ add4 ];
	*
	* var strided = dispatchBy( quinary, types, data, 26, 5, 1 );
	*
	* // ...
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var z = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var w = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var u = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var v = new Float64Array( x.length );
	*
	* strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, 'float64', v, 1, 0, identity );
	* // v => <Float64Array>[ 4.0, 8.0, 12.0 ]
	*/
	( N: number, dtypeX: any, x: Collection, strideX: number, offsetX: number, dtypeY: any, y: Collection, strideY: number, offsetY: number, dtypeZ: any, z: Collection, strideZ: number, offsetZ: number, dtypeW: any, w: Collection, strideW: number, offsetW: number, dtypeU: any, u: Collection, strideU: number, offsetU: number, ...args: Array<any> ): ArrayLike<any> | void; // eslint-disable-line @typescript-eslint/unified-signatures
}

/**
* Returns a strided array function interface which accepts a callback function and performs multiple dispatch.
*
* @param fcns - list of strided array functions
* @param types - one-dimensional list of strided array argument data types
* @param data - strided array function data (e.g., callbacks)
* @param nargs - total number of strided array function interface arguments (including data types, strides, and callback function)
* @param nin - number of input strided arrays
* @param nout - number of output strided arrays
* @throws first argument must be either a function or an array of functions
* @throws second argument must be an an array-like object
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
* var unary = require( `@stdlib/strided/base/unary-by` );
* var abs = require( `@stdlib/math/base/special/abs` );
* var identity = require( `@stdlib/math/base/special/identity` );
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
* var strided = dispatchBy( unary, types, data, 8, 1, 1 );
*
* // ...
*
* var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* strided( x.length, 'float64', x, 1, 'float64', y, 1, identity );
* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/
declare function dispatchBy<T = unknown>( fcns: StridedArrayFcn<T> | ArrayLike<StridedArrayFcn<T>>, types: ArrayLike<any>, data: ArrayLike<any> | null, nargs: number, nin: number, nout: number ): Dispatcher;

/**
* Returns a strided array function interface which accepts a callback function and performs multiple dispatch while supporting alternative indexing semantics.
*
* @param fcns - list of strided array functions
* @param types - one-dimensional list of strided array argument data types
* @param data - strided array function data (e.g., callbacks)
* @param nargs - total number of strided array function interface arguments (including data types, strides, offsets, and callback function)
* @param nin - number of input strided arrays
* @param nout - number of output strided arrays
* @throws first argument must be either a function or an array of functions
* @throws second argument must be an array-like object
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
* var unary = require( `@stdlib/strided/base/unary-by` ).ndarray;
* var abs = require( `@stdlib/math/base/special/abs` );
* var identity = require( `@stdlib/math/base/special/identity` );
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
* var strided = dispatchBy( unary, types, data, 10, 1, 1 );
*
* // ...
*
* var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, identity );
* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/
declare function dispatchBy<T = unknown>( fcns: StridedArrayFcnWithOffsets<T> | ArrayLike<StridedArrayFcnWithOffsets<T>>, types: ArrayLike<any>, data: ArrayLike<any> | null, nargs: number, nin: number, nout: number ): Dispatcher; // eslint-disable-line @typescript-eslint/unified-signatures


// EXPORTS //

export = dispatchBy;
