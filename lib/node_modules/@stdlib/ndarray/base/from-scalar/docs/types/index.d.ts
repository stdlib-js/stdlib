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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ComplexLike } from '@stdlib/types/complex';
import { genericndarray, float64ndarray, float32ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, complex128ndarray, complex64ndarray, boolndarray, Float64DataType, Float32DataType, Complex128DataType, Complex64DataType, Int32DataType, Int16DataType, Int8DataType, Uint32DataType, Uint16DataType, Uint8DataType, Uint8cDataType, BooleanDataType, DataType, Order } from '@stdlib/types/ndarray';

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - array data type
* @param order - memory layout (row-major or column-major)
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var x = scalar2ndarray( 1.0, 'float64', 'row-major' );
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns []
*
* var dt = String( getDType( x ) );
* // returns 'float64'
*
* var v = x.get();
* // returns 1.0
*/
declare function scalar2ndarray( value: number, dtype: Float64DataType, order: Order ): float64ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - array data type
* @param order - memory layout (row-major or column-major)
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var x = scalar2ndarray( 1.0, 'float32', 'row-major' );
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns []
*
* var dt = String( getDType( x ) );
* // returns 'float32'
*
* var v = x.get();
* // returns 1.0
*/
declare function scalar2ndarray( value: number, dtype: Float32DataType, order: Order ): float32ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* ## Notes
*
* -   If provided a number, the function returns a zero-dimensional ndarray containing a complex number whose real component equals the provided scalar value and whose imaginary component is zero.
*
* @param value - scalar value
* @param dtype - array data type
* @param order - memory layout (row-major or column-major)
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var v = new Complex128( 1.0, 2.0 );
*
* var x = scalar2ndarray( v, 'complex128', 'row-major' );
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns []
*
* var dt = String( getDType( x ) );
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
declare function scalar2ndarray( value: number | ComplexLike, dtype: Complex128DataType, order: Order ): complex128ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* ## Notes
*
* -   If provided a number, the function returns a zero-dimensional ndarray containing a complex number whose real component equals the provided scalar value and whose imaginary component is zero.
*
* @param value - scalar value
* @param dtype - array data type
* @param order - memory layout (row-major or column-major)
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var v = new Complex64( 1.0, 2.0 );
*
* var x = scalar2ndarray( v, 'complex64', 'row-major' );
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns []
*
* var dt = String( getDType( x ) );
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
declare function scalar2ndarray( value: number | ComplexLike, dtype: Complex64DataType, order: Order ): complex64ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - array data type
* @param order - memory layout (row-major or column-major)
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var x = scalar2ndarray( 1, 'int32', 'row-major' );
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns []
*
* var dt = String( getDType( x ) );
* // returns 'int32'
*
* var v = x.get();
* // returns 1
*/
declare function scalar2ndarray( value: number, dtype: Int32DataType, order: Order ): int32ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - array data type
* @param order - memory layout (row-major or column-major)
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var x = scalar2ndarray( 1, 'int16', 'row-major' );
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns []
*
* var dt = String( getDType( x ) );
* // returns 'int16'
*
* var v = x.get();
* // returns 1
*/
declare function scalar2ndarray( value: number, dtype: Int16DataType, order: Order ): int16ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - array data type
* @param order - memory layout (row-major or column-major)
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var x = scalar2ndarray( 1, 'int8', 'row-major' );
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns []
*
* var dt = String( getDType( x ) );
* // returns 'int8'
*
* var v = x.get();
* // returns 1
*/
declare function scalar2ndarray( value: number, dtype: Int8DataType, order: Order ): int8ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - array data type
* @param order - memory layout (row-major or column-major)
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var x = scalar2ndarray( 1, 'uint32', 'row-major' );
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns []
*
* var dt = String( getDType( x ) );
* // returns 'uint32'
*
* var v = x.get();
* // returns 1
*/
declare function scalar2ndarray( value: number, dtype: Uint32DataType, order: Order ): uint32ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - array data type
* @param order - memory layout (row-major or column-major)
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var x = scalar2ndarray( 1, 'uint16', 'row-major' );
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns []
*
* var dt = String( getDType( x ) );
* // returns 'uint16'
*
* var v = x.get();
* // returns 1
*/
declare function scalar2ndarray( value: number, dtype: Uint16DataType, order: Order ): uint16ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - array data type
* @param order - memory layout (row-major or column-major)
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var x = scalar2ndarray( 1, 'uint8', 'row-major' );
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns []
*
* var dt = String( getDType( x ) );
* // returns 'uint8'
*
* var v = x.get();
* // returns 1
*/
declare function scalar2ndarray( value: number, dtype: Uint8DataType, order: Order ): uint8ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - array data type
* @param order - memory layout (row-major or column-major)
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var x = scalar2ndarray( 1, 'uint8c', 'row-major' );
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns []
*
* var dt = String( getDType( x ) );
* // returns 'uint8c'
*
* var v = x.get();
* // returns 1
*/
declare function scalar2ndarray( value: number, dtype: Uint8cDataType, order: Order ): uint8cndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - array data type
* @param order - memory layout (row-major or column-major)
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var x = scalar2ndarray( true, 'bool', 'row-major' );
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns []
*
* var dt = String( getDType( x ) );
* // returns 'bool'
*
* var v = x.get();
* // returns true
*/
declare function scalar2ndarray( value: boolean, dtype: BooleanDataType, order: Order ): boolndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param value - scalar value
* @param dtype - array data type
* @param order - memory layout (row-major or column-major)
* @returns zero-dimensional ndarray
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var x = scalar2ndarray( 1.0, 'generic', 'row-major' );
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns []
*
* var dt = String( getDType( x ) );
* // returns 'generic'
*
* var v = x.get();
* // returns 1.0
*/
declare function scalar2ndarray<T = unknown>( value: T, dtype: DataType, order: Order ): genericndarray<T>;


// EXPORTS //

export = scalar2ndarray;
