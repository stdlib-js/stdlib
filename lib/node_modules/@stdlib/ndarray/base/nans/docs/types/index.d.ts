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

import { Shape, Order, typedndarray, genericndarray, float64ndarray, float32ndarray, complex128ndarray, complex64ndarray, FloatingPointAndGenericDataType, GenericDataType, Float64DataType, Float32DataType, Complex128DataType, Complex64DataType } from '@stdlib/types/ndarray';

/**
* Creates a NaN-filled array having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns NaN-filled array
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = nans( 'float64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ NaN, NaN ], [ NaN, NaN ] ]
*
* var dt = String( getDType( arr ) );
* // returns 'float64'
*/
declare function nans( dtype: Float64DataType, shape: Shape, order: Order ): float64ndarray;

/**
* Creates a NaN-filled array having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns NaN-filled array
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = nans( 'float32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ NaN, NaN ], [ NaN, NaN ] ]
*
* var dt = String( getDType( arr ) );
* // returns 'float32'
*/
declare function nans( dtype: Float32DataType, shape: Shape, order: Order ): float32ndarray;

/**
* Creates a NaN-filled array having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns NaN-filled array
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = nans( 'complex128', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var dt = String( getDType( arr ) );
* // returns 'complex128'
*/
declare function nans( dtype: Complex128DataType, shape: Shape, order: Order ): complex128ndarray;

/**
* Creates a NaN-filled array having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns NaN-filled array
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = nans( 'complex64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var dt = String( getDType( arr ) );
* // returns 'complex64'
*/
declare function nans( dtype: Complex64DataType, shape: Shape, order: Order ): complex64ndarray;

/**
* Creates a NaN-filled array having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns NaN-filled array
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = nans( 'generic', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ NaN, NaN ], [ NaN, NaN ] ]
*
* var dt = String( getDType( arr ) );
* // returns 'generic'
*/
declare function nans( dtype: GenericDataType, shape: Shape, order: Order ): genericndarray<number>;

/**
* Creates a NaN-filled array having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns NaN-filled array
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = nans( 'float64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ NaN, NaN ], [ NaN, NaN ] ]
*
* var dt = String( getDType( arr ) );
* // returns 'float64'
*/
declare function nans( dtype: FloatingPointAndGenericDataType, shape: Shape, order: Order ): typedndarray<number>;


// EXPORTS //

export = nans;
