/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection, Complex128Array, Complex64Array, ComplexTypedArray, AccessorArrayLike } from '@stdlib/types/array';
import { ComplexLike } from '@stdlib/types/complex';
import { Slice } from '@stdlib/types/slice';

/**
* Assigns element values from a broadcasted input array to corresponding elements in an output array.
*
* ## Notes
*
* -   The input array must be broadcast compatible with the output array slice to which elements will be assigned (i.e., contain only one element or the same number of elements as in the slice).
* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
*
* @param x - input array
* @param y - output array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var s = new Slice( null, null, -2 );
* // returns <Slice>
*
* var out = sliceAssign( x, y, s, false );
* // returns <Float64Array>[ 0.0, 4.0, 0.0, 3.0, 0.0, 2.0, 0.0, 1.0 ]
*
* var bool = ( out === y );
* // returns true
*/
declare function sliceAssign( x: Collection<number> | AccessorArrayLike<number>, y: Float64Array, s: Slice, strict: boolean ): Float64Array;

/**
* Assigns element values from a broadcasted input array to corresponding elements in an output array.
*
* ## Notes
*
* -   The input array must be broadcast compatible with the output array slice to which elements will be assigned (i.e., contain only one element or the same number of elements as in the slice).
* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
*
* @param x - input array
* @param y - output array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var s = new Slice( null, null, -2 );
* // returns <Slice>
*
* var out = sliceAssign( x, y, s, false );
* // returns <Float32Array>[ 0.0, 4.0, 0.0, 3.0, 0.0, 2.0, 0.0, 1.0 ]
*
* var bool = ( out === y );
* // returns true
*/
declare function sliceAssign( x: Collection<number> | AccessorArrayLike<number>, y: Float32Array, s: Slice, strict: boolean ): Float32Array;

/**
* Assigns element values from a broadcasted input array to corresponding elements in an output array.
*
* ## Notes
*
* -   The input array must be broadcast compatible with the output array slice to which elements will be assigned (i.e., contain only one element or the same number of elements as in the slice).
* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
*
* @param x - input array
* @param y - output array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3, 4 ] );
* var y = new Int32Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] );
*
* var s = new Slice( null, null, -2 );
* // returns <Slice>
*
* var out = sliceAssign( x, y, s, false );
* // returns <Int32Array>[ 0, 4, 0, 3, 0, 2, 0, 1 ]
*
* var bool = ( out === y );
* // returns true
*/
declare function sliceAssign( x: Collection<number> | AccessorArrayLike<number>, y: Int32Array, s: Slice, strict: boolean ): Int32Array;

/**
* Assigns element values from a broadcasted input array to corresponding elements in an output array.
*
* ## Notes
*
* -   The input array must be broadcast compatible with the output array slice to which elements will be assigned (i.e., contain only one element or the same number of elements as in the slice).
* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
*
* @param x - input array
* @param y - output array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Int16Array = require( '@stdlib/array/int16' );
*
* var x = new Int16Array( [ 1, 2, 3, 4 ] );
* var y = new Int16Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] );
*
* var s = new Slice( null, null, -2 );
* // returns <Slice>
*
* var out = sliceAssign( x, y, s, false );
* // returns <Int16Array>[ 0, 4, 0, 3, 0, 2, 0, 1 ]
*
* var bool = ( out === y );
* // returns true
*/
declare function sliceAssign( x: Collection<number> | AccessorArrayLike<number>, y: Int16Array, s: Slice, strict: boolean ): Int16Array;

/**
* Assigns element values from a broadcasted input array to corresponding elements in an output array.
*
* ## Notes
*
* -   The input array must be broadcast compatible with the output array slice to which elements will be assigned (i.e., contain only one element or the same number of elements as in the slice).
* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
*
* @param x - input array
* @param y - output array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Int8Array = require( '@stdlib/array/int8' );
*
* var x = new Int8Array( [ 1, 2, 3, 4 ] );
* var y = new Int8Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] );
*
* var s = new Slice( null, null, -2 );
* // returns <Slice>
*
* var out = sliceAssign( x, y, s, false );
* // returns <Int8Array>[ 0, 4, 0, 3, 0, 2, 0, 1 ]
*
* var bool = ( out === y );
* // returns true
*/
declare function sliceAssign( x: Collection<number> | AccessorArrayLike<number>, y: Int8Array, s: Slice, strict: boolean ): Int8Array;

/**
* Assigns element values from a broadcasted input array to corresponding elements in an output array.
*
* ## Notes
*
* -   The input array must be broadcast compatible with the output array slice to which elements will be assigned (i.e., contain only one element or the same number of elements as in the slice).
* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
*
* @param x - input array
* @param y - output array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Uint32Array = require( '@stdlib/array/uint32' );
*
* var x = new Uint32Array( [ 1, 2, 3, 4 ] );
* var y = new Uint32Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] );
*
* var s = new Slice( null, null, -2 );
* // returns <Slice>
*
* var out = sliceAssign( x, y, s, false );
* // returns <Uint32Array>[ 0, 4, 0, 3, 0, 2, 0, 1 ]
*
* var bool = ( out === y );
* // returns true
*/
declare function sliceAssign( x: Collection<number> | AccessorArrayLike<number>, y: Uint32Array, s: Slice, strict: boolean ): Uint32Array;

/**
* Assigns element values from a broadcasted input array to corresponding elements in an output array.
*
* ## Notes
*
* -   The input array must be broadcast compatible with the output array slice to which elements will be assigned (i.e., contain only one element or the same number of elements as in the slice).
* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
*
* @param x - input array
* @param y - output array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Uint16Array = require( '@stdlib/array/uint16' );
*
* var x = new Uint16Array( [ 1, 2, 3, 4 ] );
* var y = new Uint16Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] );
*
* var s = new Slice( null, null, -2 );
* // returns <Slice>
*
* var out = sliceAssign( x, y, s, false );
* // returns <Uint16Array>[ 0, 4, 0, 3, 0, 2, 0, 1 ]
*
* var bool = ( out === y );
* // returns true
*/
declare function sliceAssign( x: Collection<number> | AccessorArrayLike<number>, y: Uint16Array, s: Slice, strict: boolean ): Uint16Array;

/**
* Assigns element values from a broadcasted input array to corresponding elements in an output array.
*
* ## Notes
*
* -   The input array must be broadcast compatible with the output array slice to which elements will be assigned (i.e., contain only one element or the same number of elements as in the slice).
* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
*
* @param x - input array
* @param y - output array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var x = new Uint8Array( [ 1, 2, 3, 4 ] );
* var y = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] );
*
* var s = new Slice( null, null, -2 );
* // returns <Slice>
*
* var out = sliceAssign( x, y, s, false );
* // returns <Uint8Array>[ 0, 4, 0, 3, 0, 2, 0, 1 ]
*
* var bool = ( out === y );
* // returns true
*/
declare function sliceAssign( x: Collection<number> | AccessorArrayLike<number>, y: Uint8Array, s: Slice, strict: boolean ): Uint8Array;

/**
* Assigns element values from a broadcasted input array to corresponding elements in an output array.
*
* ## Notes
*
* -   The input array must be broadcast compatible with the output array slice to which elements will be assigned (i.e., contain only one element or the same number of elements as in the slice).
* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
*
* @param x - input array
* @param y - output array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
*
* var x = new Uint8ClampedArray( [ 1, 2, 3, 4 ] );
* var y = new Uint8ClampedArray( [ 0, 0, 0, 0, 0, 0, 0, 0 ] );
*
* var s = new Slice( null, null, -2 );
* // returns <Slice>
*
* var out = sliceAssign( x, y, s, false );
* // returns <Uint8ClampedArray>[ 0, 4, 0, 3, 0, 2, 0, 1 ]
*
* var bool = ( out === y );
* // returns true
*/
declare function sliceAssign( x: Collection<number> | AccessorArrayLike<number>, y: Uint8ClampedArray, s: Slice, strict: boolean ): Uint8ClampedArray;

/**
* Assigns element values from a broadcasted input array to corresponding elements in an output array.
*
* ## Notes
*
* -   The input array must be broadcast compatible with the output array slice to which elements will be assigned (i.e., contain only one element or the same number of elements as in the slice).
* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
*
* @param x - input array
* @param y - output array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var s = new Slice( null, null, 2 );
* // returns <Slice>
*
* var out = sliceAssign( x, y, s, false );
* // returns <Complex128Array>[ 1.0, 2.0, 0.0, 0.0, 3.0, 4.0, 0.0, 0.0 ]
*
* var bool = ( out === y );
* // returns true
*/
declare function sliceAssign( x: ComplexTypedArray | AccessorArrayLike<ComplexLike>, y: Complex128Array, s: Slice, strict: boolean ): Complex128Array;

/**
* Assigns element values from a broadcasted input array to corresponding elements in an output array.
*
* ## Notes
*
* -   The input array must be broadcast compatible with the output array slice to which elements will be assigned (i.e., contain only one element or the same number of elements as in the slice).
* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
*
* @param x - input array
* @param y - output array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var s = new Slice( null, null, 2 );
* // returns <Slice>
*
* var out = sliceAssign( x, y, s, false );
* // returns <Complex64Array>[ 1.0, 2.0, 0.0, 0.0, 3.0, 4.0, 0.0, 0.0 ]
*
* var bool = ( out === y );
* // returns true
*/
declare function sliceAssign( x: ComplexTypedArray | AccessorArrayLike<ComplexLike>, y: Complex64Array, s: Slice, strict: boolean ): Complex64Array;

/**
* Assigns element values from a broadcasted input array to corresponding elements in an output array.
*
* ## Notes
*
* -   The input array must be broadcast compatible with the output array slice to which elements will be assigned (i.e., contain only one element or the same number of elements as in the slice).
* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
*
* @param x - input array
* @param y - output array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
*
* var x = [ 1, 2, 3, 4 ];
* var y = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
*
* var s = new Slice( null, null, 2 );
* // returns <Slice>
*
* var out = sliceAssign( x, y, s, false );
* // returns [ 1, 0, 2, 0, 3, 0, 4, 0 ]
*
* var bool = ( out === y );
* // returns true
*/
declare function sliceAssign<T = unknown, U = unknown>( x: Collection<T>, y: Array<U>, s: Slice, strict: boolean ): Array<T | U>;

/**
* Assigns element values from a broadcasted input array to corresponding elements in an output array.
*
* ## Notes
*
* -   The input array must be broadcast compatible with the output array slice to which elements will be assigned (i.e., contain only one element or the same number of elements as in the slice).
* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
*
* @param x - input array
* @param y - output array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var Slice = require( '@stdlib/slice/ctor' );
*
* var x = toAccessorArray( [ 1, 2, 3, 4 ] );
* var y = toAccessorArray( [ 0, 0, 0, 0, 0, 0, 0, 0 ] );
*
* var s = new Slice( null, null, 2 );
* // returns <Slice>
*
* var out = sliceAssign( x, y, s, false );
*
* var bool = ( out === y );
* // returns true
*/
declare function sliceAssign<T = unknown, U = unknown>( x: Collection<T> | AccessorArrayLike<T>, y: AccessorArrayLike<U>, s: Slice, strict: boolean ): AccessorArrayLike<T | U>;

/**
* Assigns element values from a broadcasted input array to corresponding elements in an output array.
*
* ## Notes
*
* -   The input array must be broadcast compatible with the output array slice to which elements will be assigned (i.e., contain only one element or the same number of elements as in the slice).
* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
*
* @param x - input array
* @param y - output array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
*
* var x = [ 1, 2, 3, 4 ];
* var y = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
*
* var s = new Slice( null, null, 2 );
* // returns <Slice>
*
* var out = sliceAssign( x, y, s, false );
* // returns [ 1, 0, 2, 0, 3, 0, 4, 0 ]
*
* var bool = ( out === y );
* // returns true
*/
declare function sliceAssign<T = unknown, U = unknown>( x: Collection<T>, y: Collection<U>, s: Slice, strict: boolean ): Collection<T | U>;


// EXPORTS //

export = sliceAssign;
