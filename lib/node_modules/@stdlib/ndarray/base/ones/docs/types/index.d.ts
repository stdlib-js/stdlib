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

import { Shape, Order, typedndarray, float64ndarray, float32ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, genericndarray, complex128ndarray, complex64ndarray, NumericAndGenericDataType, Float64DataType, Float32DataType, Complex128DataType, Complex64DataType, Int32DataType, Int16DataType, Int8DataType, Uint32DataType, Uint16DataType, Uint8DataType, Uint8cDataType, GenericDataType } from '@stdlib/types/ndarray';

/**
* Creates a ones-filled array having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns ones-filled array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = ones( 'float64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 1.0, 1.0 ], [ 1.0, 1.0 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'float64'
*/
declare function ones( dtype: Float64DataType, shape: Shape, order: Order ): float64ndarray;

/**
* Creates a ones-filled array having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns ones-filled array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = ones( 'float32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 1.0, 1.0 ], [ 1.0, 1.0 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'float32'
*/
declare function ones( dtype: Float32DataType, shape: Shape, order: Order ): float32ndarray;

/**
* Creates a ones-filled array having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns ones-filled array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = ones( 'complex128', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'complex128'
*/
declare function ones( dtype: Complex128DataType, shape: Shape, order: Order ): complex128ndarray;

/**
* Creates a ones-filled array having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns ones-filled array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = ones( 'complex64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'complex64'
*/
declare function ones( dtype: Complex64DataType, shape: Shape, order: Order ): complex64ndarray;

/**
* Creates a ones-filled array having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns ones-filled array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = ones( 'int32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 1, 1 ], [ 1, 1 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'int32'
*/
declare function ones( dtype: Int32DataType, shape: Shape, order: Order ): int32ndarray;

/**
* Creates a ones-filled array having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns ones-filled array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = ones( 'int16', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 1, 1 ], [ 1, 1 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'int16'
*/
declare function ones( dtype: Int16DataType, shape: Shape, order: Order ): int16ndarray;

/**
* Creates a ones-filled array having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns ones-filled array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = ones( 'int8', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 1, 1 ], [ 1, 1 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'int8'
*/
declare function ones( dtype: Int8DataType, shape: Shape, order: Order ): int8ndarray;

/**
* Creates a ones-filled array having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns ones-filled array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = ones( 'uint32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 1, 1 ], [ 1, 1 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'uint32'
*/
declare function ones( dtype: Uint32DataType, shape: Shape, order: Order ): uint32ndarray;

/**
* Creates a ones-filled array having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns ones-filled array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = ones( 'uint16', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 1, 1 ], [ 1, 1 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'uint16'
*/
declare function ones( dtype: Uint16DataType, shape: Shape, order: Order ): uint16ndarray;

/**
* Creates a ones-filled array having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns ones-filled array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = ones( 'uint8', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 1, 1 ], [ 1, 1 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'uint8'
*/
declare function ones( dtype: Uint8DataType, shape: Shape, order: Order ): uint8ndarray;

/**
* Creates a ones-filled array having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns ones-filled array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = ones( 'uint8c', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 1, 1 ], [ 1, 1 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'uint8c'
*/
declare function ones( dtype: Uint8cDataType, shape: Shape, order: Order ): uint8cndarray;

/**
* Creates a ones-filled array having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns ones-filled array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = ones( 'generic', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 1.0, 1.0 ], [ 1.0, 1.0 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'generic'
*/
declare function ones( dtype: GenericDataType, shape: Shape, order: Order ): genericndarray<number>;

/**
* Creates a ones-filled array having a specified shape and data type.
*
* @param dtype - underlying data type
* @param shape - array shape
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns ones-filled array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = ones( 'float64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 1.0, 1.0 ], [ 1.0, 1.0 ] ]
*
* var sh = getShape( arr );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( arr ) );
* // returns 'float64'
*/
declare function ones( dtype: NumericAndGenericDataType, shape: Shape, order: Order ): typedndarray<number>;


// EXPORTS //

export = ones;
