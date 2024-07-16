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

import { ComplexLike, Complex64, Complex128 } from '@stdlib/types/complex';
import { DataType, Complex128Array, Complex64Array, BooleanArray } from '@stdlib/types/array';

/**
* Returns a single-element array containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - output array data type
* @returns output array
*
* @example
* var x = scalar2array( 1.0, 'float64' );
* // returns <Float64Array>[ 1.0 ]
*/
declare function scalar2array( value: number, dtype: 'float64' ): Float64Array; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Returns a single-element array containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - output array data type
* @returns output array
*
* @example
* var x = scalar2array( 1.0, 'float32' );
* // returns <Float32Array>[ 1.0 ]
*/
declare function scalar2array( value: number, dtype: 'float32' ): Float32Array;

/**
* Returns a single-element array containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - output array data type
* @returns output array
*
* @example
* var x = scalar2array( true, 'bool' );
* // returns <BooleanArray>
*/
declare function scalar2array( value: any, dtype: 'bool' ): BooleanArray;

/**
* Returns a single-element array containing a provided scalar value.
*
* ## Notes
*
* -   If provided a number, the function returns a complex number array containing a complex number whose real component equals the provided scalar value and whose imaginary component is zero.
*
* @param value - scalar value
* @param dtype - output array data type
* @returns output array
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var v = new Complex128( 1.0, 2.0 );
*
* var x = scalar2array( v, 'complex128' );
* // returns <Complex128Array>[ 1.0, 2.0 ]
*/
declare function scalar2array( value: number | ComplexLike, dtype: 'complex128' ): Complex128Array;

/**
* Returns a single-element array containing a provided scalar value.
*
* ## Notes
*
* -   If provided a number, the function returns a complex number array containing a complex number whose real component equals the provided scalar value and whose imaginary component is zero.
*
* @param value - scalar value
* @param dtype - output array data type
* @returns output array
*
* @example
* var Complex64 = require( '@stdlib/complex/float64/ctor' );
*
* var v = new Complex64( 1.0, 2.0 );
*
* var x = scalar2array( v, 'complex64' );
* // returns <Complex64Array>[ 1.0, 2.0 ]
*/
declare function scalar2array( value: number | ComplexLike, dtype: 'complex64' ): Complex64Array;

/**
* Returns a single-element array containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - output array data type
* @returns output array
*
* @example
* var x = scalar2array( 1, int32 };
* // returns <Int32Array>[ 1 ]
*/
declare function scalar2array( value: number, dtype: 'int32' ): Int32Array;

/**
* Returns a single-element array containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - output array data type
* @returns output array
*
* @example
* var x = scalar2array( 1, int16 };
* // returns <Int16Array>[ 1 ]
*/
declare function scalar2array( value: number, dtype: 'int16' ): Int16Array;

/**
* Returns a single-element array containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - output array data type
* @returns output array
*
* @example
* var x = scalar2array( 1, int8'  }
* // returns <Int8Array>[ 1 ]
*/
declare function scalar2array( value: number, dtype: 'int8' ): Int8Array;

/**
* Returns a single-element array containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - output array data type
* @returns output array
*
* @example
* var x = scalar2array( 1, uint32' );
* // returns <Uint32Array>[ 1 ]
*/
declare function scalar2array( value: number, dtype: 'uint32' ): Uint32Array;

/**
* Returns a single-element array containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - output array data type
* @returns output array
*
* @example
* var x = scalar2array( 1, uint16' );
* // returns <Uint16Array>[ 1 ]
*/
declare function scalar2array( value: number, dtype: 'uint16' ): Uint16Array;

/**
* Returns a single-element array containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - output array data type
* @returns output array
*
* @example
* var x = scalar2array( 1, uint8 };
* // returns <Uint8Array>[ 1 ]
*/
declare function scalar2array( value: number, dtype: 'uint8' ): Uint8Array;

/**
* Returns a single-element array containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - output array data type
* @returns output array
*
* @example
* var x = scalar2array( 1, uint8c' );
* // returns <Uint8ClampedArray>[]
*/
declare function scalar2array( value: number, dtype: 'uint8c' ): Uint8ClampedArray;

/**
* Returns a single-element array containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - output array data type
* @returns output array
*
* @example
* var x = scalar2array( 1.0, generic' );
* // returns [ 1.0 ]
*/
declare function scalar2array<T = unknown>( value: T, dtype: 'generic' ): Array<T>;

/**
* Returns a single-element array containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - output array data type
* @returns output array
*
* @example
* var x = scalar2array( 1.0 );
* // returns <Float64Array>[ 1.0 ]
*/
declare function scalar2array( value: number ): Float64Array;

/**
* Returns a single-element array containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - output array data type
* @returns output array
*
* @example
* var x = scalar2array( true );
* // returns <BooleanArray>
*/
declare function scalar2array( value: boolean ): BooleanArray;

/**
* Returns a single-element array containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - output array data type
* @returns output array
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var z = new Complex64( 3.0, 4.0 );
*
* var x = scalar2array( z );
* // returns <Complex64Array>[ 3.0, 4.0 ]
*/
declare function scalar2array( value: Complex64 ): Complex64Array;

/**
* Returns a single-element array containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - output array data type
* @returns output array
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var z = new Complex128( 3.0, 4.0 );
*
* var x = scalar2array( z );
* // returns <Complex128Array>[ 3.0, 4.0 ]
*/
declare function scalar2array( value: Complex128 | ComplexLike ): Complex128Array;

/**
* Returns a single-element array containing a provided scalar value.
*
* ## Notes
*
* -   If a `dtype` argument is not provided and `value`
*
*     -   is a number, the default data type is the default real-valued floating-point data type.
*     -   is a boolean, the default data type is the default boolean data type.
*     -   is a complex number object of a known complex data type, the data type is the same as the provided value.
*     -   is a complex number object of an unknown complex data type, the default data type is the default complex-valued floating-point data type.
*     -   is any other value type, the default data type is `'generic'`.
*
* @param value - scalar value
* @param dtype - output array data type
* @returns output array
*
* @example
* var x = scalar2array( 1.0, generic' );
* // returns [ 1.0 ]
*/
declare function scalar2array<T = unknown>( value: T, dtype?: DataType ): Array<T>;


// EXPORTS //

export = scalar2array;
