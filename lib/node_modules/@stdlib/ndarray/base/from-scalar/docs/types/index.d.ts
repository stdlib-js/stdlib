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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { ComplexLike } from '@stdlib/types/object';
import { ndarray, float64ndarray, float32ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, complex128ndarray, complex64ndarray, DataType } from '@stdlib/types/ndarray';

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - array data type
* @returns zero-dimensional ndarray
*
* @example
* var x = scalar2ndarray( 1.0, 'float64' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'float64'
*
* var v = x.get();
* // returns 1.0
*/
declare function scalar2ndarray( value: number, dtype: 'float64' ): float64ndarray; // tslint:disable-line:max-line-length

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - array data type
* @returns zero-dimensional ndarray
*
* @example
* var x = scalar2ndarray( 1.0, 'float32' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'float32'
*
* var v = x.get();
* // returns 1.0
*/
declare function scalar2ndarray( value: number, dtype: 'float32' ): float32ndarray; // tslint:disable-line:max-line-length

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* ## Notes
*
* -   If provided a number, the function returns a zero-dimensional ndarray containing a complex number whose real component equals the provided scalar value and whose imaginary component is zero.
*
* @param value - scalar value
* @param dtype - array data type
* @returns zero-dimensional ndarray
*
* @example
* var Complex128 = require( `@stdlib/complex/float64` );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
*
* var v = new Complex128( 1.0, 2.0 );
*
* var x = scalar2ndarray( v, 'complex128' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'complex128'
*
* var v = x.get();
* // returns <Complex128>
*
* var re = real( v );
* // returns 1.0
*
* var im = imag( v );
* // returns 2.0
*/
declare function scalar2ndarray( value: number | ComplexLike, dtype: 'complex128' ): complex128ndarray; // tslint:disable-line:max-line-length

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* ## Notes
*
* -   If provided a number, the function returns a zero-dimensional ndarray containing a complex number whose real component equals the provided scalar value and whose imaginary component is zero.
*
* @param value - scalar value
* @param dtype - array data type
* @returns zero-dimensional ndarray
*
* @example
* var Complex64 = require( `@stdlib/complex/float64` );
* var realf = require( '@stdlib/complex/realf' );
* var imagf = require( '@stdlib/complex/imagf' );
*
* var v = new Complex64( 1.0, 2.0 );
*
* var x = scalar2ndarray( v, 'complex64' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'complex64'
*
* var v = x.get();
* // returns <Complex64>
*
* var re = realf( v );
* // returns 1.0
*
* var im = imagf( v );
* // returns 2.0
*/
declare function scalar2ndarray( value: number | ComplexLike, dtype: 'complex64' ): complex64ndarray; // tslint:disable-line:max-line-length

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - array data type
* @returns zero-dimensional ndarray
*
* @example
* var x = scalar2ndarray( 1, 'int32' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'int32'
*
* var v = x.get();
* // returns 1
*/
declare function scalar2ndarray( value: number, dtype: 'int32' ): int32ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - array data type
* @returns zero-dimensional ndarray
*
* @example
* var x = scalar2ndarray( 1, 'int16' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'int16'
*
* var v = x.get();
* // returns 1
*/
declare function scalar2ndarray( value: number, dtype: 'int16' ): int16ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - array data type
* @returns zero-dimensional ndarray
*
* @example
* var x = scalar2ndarray( 1, 'int8' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'int8'
*
* var v = x.get();
* // returns 1
*/
declare function scalar2ndarray( value: number, dtype: 'int8' ): int8ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - array data type
* @returns zero-dimensional ndarray
*
* @example
* var x = scalar2ndarray( 1, 'uint32' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'uint32'
*
* var v = x.get();
* // returns 1
*/
declare function scalar2ndarray( value: number, dtype: 'uint32' ): uint32ndarray; // tslint:disable-line:max-line-length

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - array data type
* @returns zero-dimensional ndarray
*
* @example
* var x = scalar2ndarray( 1, 'uint16' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'uint16'
*
* var v = x.get();
* // returns 1
*/
declare function scalar2ndarray( value: number, dtype: 'uint16' ): uint16ndarray; // tslint:disable-line:max-line-length

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - array data type
* @returns zero-dimensional ndarray
*
* @example
* var x = scalar2ndarray( 1, 'uint8' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'uint8'
*
* var v = x.get();
* // returns 1
*/
declare function scalar2ndarray( value: number, dtype: 'uint8' ): uint8ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - array data type
* @returns zero-dimensional ndarray
*
* @example
* var x = scalar2ndarray( 1, 'uint8c' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'uint8c'
*
* var v = x.get();
* // returns 1
*/
declare function scalar2ndarray( value: number, dtype: 'uint8c' ): uint8cndarray; // tslint:disable-line:max-line-length

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - array data type
* @returns zero-dimensional ndarray
*
* @example
* var x = scalar2ndarray( 1.0, 'generic' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'generic'
*
* var v = x.get();
* // returns 1.0
*/
declare function scalar2ndarray( value: any, dtype: DataType ): ndarray;


// EXPORTS //

export = scalar2ndarray;
