/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
import { ndarray, float64ndarray, float32ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, complex128ndarray, complex64ndarray, DataType, Shape, Order } from '@stdlib/types/ndarray';

/**
* Broadcasts a scalar value to an ndarray having a specified shape.
*
* @param value - scalar value
* @param dtype - array data type
* @param shape - array shape
* @param order - array order
* @returns ndarray
*
* @example
* var x = broadcastScalar( 1.0, 'float64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'float64'
*
* var v = x.get( 0, 1 );
* // returns 1.0
*/
declare function broadcastScalar( value: number, dtype: 'float64', shape: Shape, order: Order ): float64ndarray;

/**
* Broadcasts a scalar value to an ndarray having a specified shape.
*
* @param value - scalar value
* @param dtype - array data type
* @param shape - array shape
* @param order - array order
* @returns ndarray
*
* @example
* var x = broadcastScalar( 1.0, 'float32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'float32'
*
* var v = x.get( 0, 1 );
* // returns 1.0
*/
declare function broadcastScalar( value: number, dtype: 'float32', shape: Shape, order: Order ): float32ndarray;

/**
* Broadcasts a scalar value to an ndarray having a specified shape.
*
* ## Notes
*
* -   If provided a number, the function returns an ndarray containing a complex number whose real component equals the provided scalar value and whose imaginary component is zero.
*
* @param value - scalar value
* @param dtype - array data type
* @param shape - array shape
* @param order - array order
* @returns ndarray
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
*
* var v = new Complex128( 1.0, 2.0 );
*
* var x = broadcastScalar( v, 'complex128', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'complex128'
*
* var v = x.get( 0, 1 );
* // returns <Complex128>
*
* var re = real( v );
* // returns 1.0
*
* var im = imag( v );
* // returns 2.0
*/
declare function broadcastScalar( value: number | ComplexLike, dtype: 'complex128', shape: Shape, order: Order ): complex128ndarray;

/**
* Broadcasts a scalar value to an ndarray having a specified shape.
*
* ## Notes
*
* -   If provided a number, the function returns an ndarray containing a complex number whose real component equals the provided scalar value and whose imaginary component is zero.
*
* @param value - scalar value
* @param dtype - array data type
* @param shape - array shape
* @param order - array order
* @returns ndarray
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/realf' );
* var imagf = require( '@stdlib/complex/imagf' );
*
* var v = new Complex64( 1.0, 2.0 );
*
* var x = broadcastScalar( v, 'complex64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'complex64'
*
* var v = x.get( 0, 1 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns 1.0
*
* var im = imagf( v );
* // returns 2.0
*/
declare function broadcastScalar( value: number | ComplexLike, dtype: 'complex64', shape: Shape, order: Order ): complex64ndarray;

/**
* Broadcasts a scalar value to an ndarray having a specified shape.
*
* @param value - scalar value
* @param dtype - array data type
* @param shape - array shape
* @param order - array order
* @returns ndarray
*
* @example
* var x = broadcastScalar( 1, 'int32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'int32'
*
* var v = x.get( 0, 1 );
* // returns 1
*/
declare function broadcastScalar( value: number, dtype: 'int32', shape: Shape, order: Order ): int32ndarray;

/**
* Broadcasts a scalar value to an ndarray having a specified shape.
*
* @param value - scalar value
* @param dtype - array data type
* @param shape - array shape
* @param order - array order
* @returns ndarray
*
* @example
* var x = broadcastScalar( 1, 'int16', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'int16'
*
* var v = x.get( 0, 1 );
* // returns 1
*/
declare function broadcastScalar( value: number, dtype: 'int16', shape: Shape, order: Order ): int16ndarray;

/**
* Broadcasts a scalar value to an ndarray having a specified shape.
*
* @param value - scalar value
* @param dtype - array data type
* @param shape - array shape
* @param order - array order
* @returns ndarray
*
* @example
* var x = broadcastScalar( 1, 'int8', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'int8'
*
* var v = x.get( 0, 1 );
* // returns 1
*/
declare function broadcastScalar( value: number, dtype: 'int8', shape: Shape, order: Order ): int8ndarray;

/**
* Broadcasts a scalar value to an ndarray having a specified shape.
*
* @param value - scalar value
* @param dtype - array data type
* @param shape - array shape
* @param order - array order
* @returns ndarray
*
* @example
* var x = broadcastScalar( 1, 'uint32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'uint32'
*
* var v = x.get( 0, 1 );
* // returns 1
*/
declare function broadcastScalar( value: number, dtype: 'uint32', shape: Shape, order: Order ): uint32ndarray;

/**
* Broadcasts a scalar value to an ndarray having a specified shape.
*
* @param value - scalar value
* @param dtype - array data type
* @param shape - array shape
* @param order - array order
* @returns ndarray
*
* @example
* var x = broadcastScalar( 1, 'uint16', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'uint16'
*
* var v = x.get( 0, 1 );
* // returns 1
*/
declare function broadcastScalar( value: number, dtype: 'uint16', shape: Shape, order: Order ): uint16ndarray;

/**
* Broadcasts a scalar value to an ndarray having a specified shape.
*
* @param value - scalar value
* @param dtype - array data type
* @param shape - array shape
* @param order - array order
* @returns ndarray
*
* @example
* var x = broadcastScalar( 1, 'uint8', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'uint8'
*
* var v = x.get( 0, 1 );
* // returns 1
*/
declare function broadcastScalar( value: number, dtype: 'uint8', shape: Shape, order: Order ): uint8ndarray;

/**
* Broadcasts a scalar value to an ndarray having a specified shape.
*
* @param value - scalar value
* @param dtype - array data type
* @param shape - array shape
* @param order - array order
* @returns ndarray
*
* @example
* var x = broadcastScalar( 1, 'uint8c', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'uint8c'
*
* var v = x.get( 0, 1 );
* // returns 1
*/
declare function broadcastScalar( value: number, dtype: 'uint8c', shape: Shape, order: Order ): uint8cndarray;

/**
* Broadcasts a scalar value to an ndarray having a specified shape.
*
* @param value - scalar value
* @param dtype - array data type
* @param shape - array shape
* @param order - array order
* @returns ndarray
*
* @example
* var x = broadcastScalar( 1.0, 'generic', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'generic'
*
* var v = x.get( 0, 1 );
* // returns 1.0
*/
declare function broadcastScalar( value: any, dtype: DataType, shape: Shape, order: Order ): ndarray;


// EXPORTS //

export = broadcastScalar;
