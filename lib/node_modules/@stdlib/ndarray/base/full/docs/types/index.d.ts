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
* Returns an ndarray filled with a specified value and having a specified shape and data type.
*
* @param value - fill value
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = full( 10.0, 'float64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'float64'
*/
declare function full( value: number, dtype: Float64DataType, shape: Shape, order: Order ): float64ndarray;

/**
* Returns an ndarray filled with a specified value and having a specified shape and data type.
*
* @param value - fill value
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = full( 10.0, 'float32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'float32'
*/
declare function full( value: number, dtype: Float32DataType, shape: Shape, order: Order ): float32ndarray;

/**
* Returns an ndarray filled with a specified value and having a specified shape and data type.
*
* @param value - fill value
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = full( 10.0, 'complex128', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'complex128'
*/
declare function full( value: number | ComplexLike, dtype: Complex128DataType, shape: Shape, order: Order ): complex128ndarray;

/**
* Returns an ndarray filled with a specified value and having a specified shape and data type.
*
* @param value - fill value
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var arr = full( new Complex64( 3.0, 5.0 ), 'complex64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'complex64'
*/
declare function full( value: number | ComplexLike, dtype: Complex64DataType, shape: Shape, order: Order ): complex64ndarray;

/**
* Returns an ndarray filled with a specified value and having a specified shape and data type.
*
* @param value - fill value
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = full( 10, 'int32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 10, 10 ], [ 10, 10 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'int32'
*/
declare function full( value: number, dtype: Int32DataType, shape: Shape, order: Order ): int32ndarray;

/**
* Returns an ndarray filled with a specified value and having a specified shape and data type.
*
* @param value - fill value
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = full( 10, 'int16', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 10, 10 ], [ 10, 10 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'int16'
*/
declare function full( value: number, dtype: Int16DataType, shape: Shape, order: Order ): int16ndarray;

/**
* Returns an ndarray filled with a specified value and having a specified shape and data type.
*
* @param value - fill value
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = full( 10, 'int8', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 10, 10 ], [ 10, 10 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'int8'
*/
declare function full( value: number, dtype: Int8DataType, shape: Shape, order: Order ): int8ndarray;

/**
* Returns an ndarray filled with a specified value and having a specified shape and data type.
*
* @param value - fill value
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = full( 10, 'uint32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 10, 10 ], [ 10, 10 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'uint32'
*/
declare function full( value: number, dtype: Uint32DataType, shape: Shape, order: Order ): uint32ndarray;

/**
* Returns an ndarray filled with a specified value and having a specified shape and data type.
*
* @param value - fill value
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = full( 10, 'uint16', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 10, 10 ], [ 10, 10 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'uint16'
*/
declare function full( value: number, dtype: Uint16DataType, shape: Shape, order: Order ): uint16ndarray;

/**
* Returns an ndarray filled with a specified value and having a specified shape and data type.
*
* @param value - fill value
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = full( 10, 'uint8', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 10, 10 ], [ 10, 10 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'uint8'
*/
declare function full( value: number, dtype: Uint8DataType, shape: Shape, order: Order ): uint8ndarray;

/**
* Returns an ndarray filled with a specified value and having a specified shape and data type.
*
* @param value - fill value
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = full( 10, 'uint8c', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 10, 10 ], [ 10, 10 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'uint8c'
*/
declare function full( value: number, dtype: Uint8cDataType, shape: Shape, order: Order ): uint8cndarray;

/**
* Returns an ndarray filled with a specified value and having a specified shape and data type.
*
* @param value - fill value
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = full( true, 'bool', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ true, true ], [ true, true ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'bool'
*/
declare function full( value: boolean, dtype: BooleanDataType, shape: Shape, order: Order ): boolndarray;

/**
* Returns an ndarray filled with a specified value and having a specified shape and data type.
*
* @param value - fill value
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = full( 10.0, 'generic', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'generic'
*/
declare function full<T = unknown>( value: T, dtype: GenericDataType, shape: Shape, order: Order ): genericndarray<T>;

/**
* Returns an ndarray filled with a specified value and having a specified shape and data type.
*
* @param value - fill value
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = full( 10.0, 'float32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'float32'
*/
declare function full<T = unknown>( value: T, dtype: DataType, shape: Shape, order: Order ): typedndarray<T>;


// EXPORTS //

export = full;
