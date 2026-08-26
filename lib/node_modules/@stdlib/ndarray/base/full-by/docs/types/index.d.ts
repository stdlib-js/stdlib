/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import { Shape, Order, typedndarray, float64ndarray, float32ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, boolndarray, complex128ndarray, complex64ndarray, genericndarray, DataType, Float64DataType, Float32DataType, Complex128DataType, Complex64DataType, Int32DataType, Int16DataType, Int8DataType, Uint32DataType, Uint16DataType, Uint8DataType, Uint8cDataType, BooleanDataType, GenericDataType } from '@stdlib/types/ndarray';
import { ComplexLike } from '@stdlib/types/complex';

/**
* Callback invoked for each ndarray element.
*
* @returns fill value
*/
type Nullary<U, ThisArg> = ( this: ThisArg ) => U;

/**
* Callback invoked for each ndarray element.
*
* @param indices - current array element indices
* @returns fill value
*/
type Unary<U, ThisArg> = ( this: ThisArg, indices: Array<number> ) => U;

/**
* Callback invoked for each ndarray element.
*
* @param indices - current array element indices
* @returns fill value
*/
type Callback<U, ThisArg> = Nullary<U, ThisArg> | Unary<U, ThisArg>;

/**
* Returns an ndarray filled according to a callback function and having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns output array
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* function clbk() {
*     return 10.0;
* }
*
* var arr = fullBy( 'float64', [ 2, 2 ], 'row-major', clbk );
* // returns <ndarray>[ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ]
*
* var dt = String( getDType( arr ) );
* // returns 'float64'
*/
declare function fullBy<ThisArg = unknown>( dtype: Float64DataType, shape: Shape, order: Order, clbk: Callback<number, ThisArg>, thisArg?: ThisArg ): float64ndarray;

/**
* Returns an ndarray filled according to a callback function and having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns output array
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* function clbk() {
*     return 10.0;
* }
*
* var arr = fullBy( 'float32', [ 2, 2 ], 'row-major', clbk );
* // returns <ndarray>[ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ]
*
* var dt = String( getDType( arr ) );
* // returns 'float32'
*/
declare function fullBy<ThisArg = unknown>( dtype: Float32DataType, shape: Shape, order: Order, clbk: Callback<number, ThisArg>, thisArg?: ThisArg ): float32ndarray;

/**
* Returns an ndarray filled according to a callback function and having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns output array
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* function clbk() {
*     return new Complex128( 3.0, 5.0 );
* }
*
* var arr = fullBy( 'complex128', [ 2, 2 ], 'row-major', clbk );
* // returns <ndarray>[ [ <Complex128>[ 3.0, 5.0 ], <Complex128>[ 3.0, 5.0 ] ], [ <Complex128>[ 3.0, 5.0 ], <Complex128>[ 3.0, 5.0 ] ] ]
*
* var dt = String( getDType( arr ) );
* // returns 'complex128'
*/
declare function fullBy<ThisArg = unknown>( dtype: Complex128DataType, shape: Shape, order: Order, clbk: Callback<number | ComplexLike, ThisArg>, thisArg?: ThisArg ): complex128ndarray;

/**
* Returns an ndarray filled according to a callback function and having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns output array
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* function clbk() {
*     return new Complex64( 3.0, 5.0 );
* }
*
* var arr = fullBy( 'complex64', [ 2, 2 ], 'row-major', clbk );
* // returns <ndarray>[ [ <Complex64>[ 3.0, 5.0 ], <Complex64>[ 3.0, 5.0 ] ], [ <Complex64>[ 3.0, 5.0 ], <Complex64>[ 3.0, 5.0 ] ] ]
*
* var dt = String( getDType( arr ) );
* // returns 'complex64'
*/
declare function fullBy<ThisArg = unknown>( dtype: Complex64DataType, shape: Shape, order: Order, clbk: Callback<number | ComplexLike, ThisArg>, thisArg?: ThisArg ): complex64ndarray;

/**
* Returns an ndarray filled according to a callback function and having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns output array
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* function clbk() {
*     return 10;
* }
*
* var arr = fullBy( 'int32', [ 2, 2 ], 'row-major', clbk );
* // returns <ndarray>[ [ 10, 10 ], [ 10, 10 ] ]
*
* var dt = String( getDType( arr ) );
* // returns 'int32'
*/
declare function fullBy<ThisArg = unknown>( dtype: Int32DataType, shape: Shape, order: Order, clbk: Callback<number, ThisArg>, thisArg?: ThisArg ): int32ndarray;

/**
* Returns an ndarray filled according to a callback function and having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns output array
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* function clbk() {
*     return 10;
* }
*
* var arr = fullBy( 'int16', [ 2, 2 ], 'row-major', clbk );
* // returns <ndarray>[ [ 10, 10 ], [ 10, 10 ] ]
*
* var dt = String( getDType( arr ) );
* // returns 'int16'
*/
declare function fullBy<ThisArg = unknown>( dtype: Int16DataType, shape: Shape, order: Order, clbk: Callback<number, ThisArg>, thisArg?: ThisArg ): int16ndarray;

/**
* Returns an ndarray filled according to a callback function and having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns output array
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* function clbk() {
*     return 10;
* }
*
* var arr = fullBy( 'int8', [ 2, 2 ], 'row-major', clbk );
* // returns <ndarray>[ [ 10, 10 ], [ 10, 10 ] ]
*
* var dt = String( getDType( arr ) );
* // returns 'int8'
*/
declare function fullBy<ThisArg = unknown>( dtype: Int8DataType, shape: Shape, order: Order, clbk: Callback<number, ThisArg>, thisArg?: ThisArg ): int8ndarray;

/**
* Returns an ndarray filled according to a callback function and having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns output array
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* function clbk() {
*     return 10;
* }
*
* var arr = fullBy( 'uint32', [ 2, 2 ], 'row-major', clbk );
* // returns <ndarray>[ [ 10, 10 ], [ 10, 10 ] ]
*
* var dt = String( getDType( arr ) );
* // returns 'uint32'
*/
declare function fullBy<ThisArg = unknown>( dtype: Uint32DataType, shape: Shape, order: Order, clbk: Callback<number, ThisArg>, thisArg?: ThisArg ): uint32ndarray;

/**
* Returns an ndarray filled according to a callback function and having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns output array
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* function clbk() {
*     return 10;
* }
*
* var arr = fullBy( 'uint16', [ 2, 2 ], 'row-major', clbk );
* // returns <ndarray>[ [ 10, 10 ], [ 10, 10 ] ]
*
* var dt = String( getDType( arr ) );
* // returns 'uint16'
*/
declare function fullBy<ThisArg = unknown>( dtype: Uint16DataType, shape: Shape, order: Order, clbk: Callback<number, ThisArg>, thisArg?: ThisArg ): uint16ndarray;

/**
* Returns an ndarray filled according to a callback function and having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns output array
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* function clbk() {
*     return 10;
* }
*
* var arr = fullBy( 'uint8', [ 2, 2 ], 'row-major', clbk );
* // returns <ndarray>[ [ 10, 10 ], [ 10, 10 ] ]
*
* var dt = String( getDType( arr ) );
* // returns 'uint8'
*/
declare function fullBy<ThisArg = unknown>( dtype: Uint8DataType, shape: Shape, order: Order, clbk: Callback<number, ThisArg>, thisArg?: ThisArg ): uint8ndarray;

/**
* Returns an ndarray filled according to a callback function and having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns output array
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* function clbk() {
*     return 10;
* }
*
* var arr = fullBy( 'uint8c', [ 2, 2 ], 'row-major', clbk );
* // returns <ndarray>[ [ 10, 10 ], [ 10, 10 ] ]
*
* var dt = String( getDType( arr ) );
* // returns 'uint8c'
*/
declare function fullBy<ThisArg = unknown>( dtype: Uint8cDataType, shape: Shape, order: Order, clbk: Callback<number, ThisArg>, thisArg?: ThisArg ): uint8cndarray;

/**
* Returns an ndarray filled according to a callback function and having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns output array
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* function clbk() {
*     return true;
* }
*
* var arr = fullBy( 'bool', [ 2, 2 ], 'row-major', clbk );
* // returns <ndarray>[ [ true, true ], [ true, true ] ]
*
* var dt = String( getDType( arr ) );
* // returns 'bool'
*/
declare function fullBy<ThisArg = unknown>( dtype: BooleanDataType, shape: Shape, order: Order, clbk: Callback<boolean, ThisArg>, thisArg?: ThisArg ): boolndarray;

/**
* Returns an ndarray filled according to a callback function and having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns output array
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* function clbk() {
*     return 10.0;
* }
*
* var arr = fullBy( 'generic', [ 2, 2 ], 'row-major', clbk );
* // returns <ndarray>[ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ]
*
* var dt = String( getDType( arr ) );
* // returns 'generic'
*/
declare function fullBy<T = unknown, ThisArg = unknown>( dtype: GenericDataType, shape: Shape, order: Order, clbk: Callback<T, ThisArg>, thisArg?: ThisArg ): genericndarray<T>;

/**
* Returns an ndarray filled according to a callback function and having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns output array
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* function clbk() {
*     return 10.0;
* }
*
* var arr = fullBy( 'float32', [ 2, 2 ], 'row-major', clbk );
* // returns <ndarray>[ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ]
*
* var dt = String( getDType( arr ) );
* // returns 'float32'
*/
declare function fullBy<T = unknown, ThisArg = unknown>( dtype: DataType, shape: Shape, order: Order, clbk: Callback<T, ThisArg>, thisArg?: ThisArg ): typedndarray<T>;


// EXPORTS //

export = fullBy;
