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

import { typedndarray, float64ndarray, float32ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, complex128ndarray, complex64ndarray, boolndarray, genericndarray } from '@stdlib/types/ndarray';
import { ComplexLike } from '@stdlib/types/complex';

/**
* Returns a zero-dimensional ndarray containing a provided scalar value and having the same data type as a provided input ndarray.
*
* @param x - input array
* @param value - scalar value
* @returns zero-dimensional ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/base/zeros' );
*
* var x = zeros( 'float64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var y = scalar2ndarrayLike( x, 1.0 );
* // returns <ndarray>
*
* var sh = y.shape;
* // returns []
*
* var dt = y.dtype;
* // returns 'float64'
*
* var v = y.get();
* // returns 1.0
*/
declare function scalar2ndarrayLike( x: float64ndarray, value: number ): float64ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value and having the same data type as a provided input ndarray.
*
* @param x - input array
* @param value - scalar value
* @returns zero-dimensional ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/base/zeros' );
*
* var x = zeros( 'float32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var y = scalar2ndarrayLike( x, 1.0 );
* // returns <ndarray>
*
* var sh = y.shape;
* // returns []
*
* var dt = y.dtype;
* // returns 'float32'
*
* var v = y.get();
* // returns 1.0
*/
declare function scalar2ndarrayLike( x: float32ndarray, value: number ): float32ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value and having the same data type as a provided input ndarray.
*
* ## Notes
*
* -   If provided a number, the function returns a zero-dimensional ndarray containing a complex number whose real component equals the provided scalar value and whose imaginary component is zero.
*
* @param x - input array
* @param value - scalar value
* @returns zero-dimensional ndarray
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
* var zeros = require( '@stdlib/ndarray/base/zeros' );
*
* var x = zeros( 'complex128', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var v = new Complex128( 1.0, 2.0 );
*
* var y = scalar2ndarrayLike( x, v );
* // returns <ndarray>
*
* var sh = y.shape;
* // returns []
*
* var dt = y.dtype;
* // returns 'complex128'
*
* var v = y.get();
* // returns <Complex128>
*
* var re = real( v );
* // returns 1.0
*
* var im = imag( v );
* // returns 2.0
*/
declare function scalar2ndarrayLike( x: complex128ndarray, value: ComplexLike | number ): complex128ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value and having the same data type as a provided input ndarray.
*
* ## Notes
*
* -   If provided a number, the function returns a zero-dimensional ndarray containing a complex number whose real component equals the provided scalar value and whose imaginary component is zero.
*
* @param x - input array
* @param value - scalar value
* @returns zero-dimensional ndarray
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
* var zeros = require( '@stdlib/ndarray/base/zeros' );
*
* var x = zeros( 'complex64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var v = new Complex64( 1.0, 2.0 );
*
* var y = scalar2ndarrayLike( x, v );
* // returns <ndarray>
*
* var sh = y.shape;
* // returns []
*
* var dt = y.dtype;
* // returns 'complex64'
*
* var v = y.get();
* // returns <Complex64>
*
* var re = realf( v );
* // returns 1.0
*
* var im = imagf( v );
* // returns 2.0
*/
declare function scalar2ndarrayLike( x: complex64ndarray, value: ComplexLike | number ): complex64ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value and having the same data type as a provided input ndarray.
*
* @param x - input array
* @param value - scalar value
* @returns zero-dimensional ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/base/zeros' );
*
* var x = zeros( 'int32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var y = scalar2ndarrayLike( x, 1 );
* // returns <ndarray>
*
* var sh = y.shape;
* // returns []
*
* var dt = y.dtype;
* // returns 'int32'
*
* var v = y.get();
* // returns 1
*/
declare function scalar2ndarrayLike( x: int32ndarray, value: number ): int32ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value and having the same data type as a provided input ndarray.
*
* @param x - input array
* @param value - scalar value
* @returns zero-dimensional ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/base/zeros' );
*
* var x = zeros( 'int16', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var y = scalar2ndarrayLike( x, 1 );
* // returns <ndarray>
*
* var sh = y.shape;
* // returns []
*
* var dt = y.dtype;
* // returns 'int16'
*
* var v = y.get();
* // returns 1
*/
declare function scalar2ndarrayLike( x: int16ndarray, value: number ): int16ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value and having the same data type as a provided input ndarray.
*
* @param x - input array
* @param value - scalar value
* @returns zero-dimensional ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/base/zeros' );
*
* var x = zeros( 'int8', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var y = scalar2ndarrayLike( x, 1 );
* // returns <ndarray>
*
* var sh = y.shape;
* // returns []
*
* var dt = y.dtype;
* // returns 'int8'
*
* var v = y.get();
* // returns 1
*/
declare function scalar2ndarrayLike( x: int8ndarray, value: number ): int8ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value and having the same data type as a provided input ndarray.
*
* @param x - input array
* @param value - scalar value
* @returns zero-dimensional ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/base/zeros' );
*
* var x = zeros( 'uint32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var y = scalar2ndarrayLike( x, 1 );
* // returns <ndarray>
*
* var sh = y.shape;
* // returns []
*
* var dt = y.dtype;
* // returns 'uint32'
*
* var v = y.get();
* // returns 1
*/
declare function scalar2ndarrayLike( x: uint32ndarray, value: number ): uint32ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value and having the same data type as a provided input ndarray.
*
* @param x - input array
* @param value - scalar value
* @returns zero-dimensional ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/base/zeros' );
*
* var x = zeros( 'uint16', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var y = scalar2ndarrayLike( x, 1 );
* // returns <ndarray>
*
* var sh = y.shape;
* // returns []
*
* var dt = y.dtype;
* // returns 'uint16'
*
* var v = y.get();
* // returns 1
*/
declare function scalar2ndarrayLike( x: uint16ndarray, value: number ): uint16ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value and having the same data type as a provided input ndarray.
*
* @param x - input array
* @param value - scalar value
* @returns zero-dimensional ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/base/zeros' );
*
* var x = zeros( 'uint8', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var y = scalar2ndarrayLike( x, 1 );
* // returns <ndarray>
*
* var sh = y.shape;
* // returns []
*
* var dt = y.dtype;
* // returns 'uint8'
*
* var v = y.get();
* // returns 1
*/
declare function scalar2ndarrayLike( x: uint8ndarray, value: number ): uint8ndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value and having the same data type as a provided input ndarray.
*
* @param x - input array
* @param value - scalar value
* @returns zero-dimensional ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/base/zeros' );
*
* var x = zeros( 'uint8c', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var y = scalar2ndarrayLike( x, 1 );
* // returns <ndarray>
*
* var sh = y.shape;
* // returns []
*
* var dt = y.dtype;
* // returns 'uint8c'
*
* var v = y.get();
* // returns 1
*/
declare function scalar2ndarrayLike( x: uint8cndarray, value: number ): uint8cndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value and having the same data type as a provided input ndarray.
*
* @param x - input array
* @param value - scalar value
* @returns zero-dimensional ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/base/zeros' );
*
* var x = zeros( 'bool', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var y = scalar2ndarrayLike( x, true );
* // returns <ndarray>
*
* var sh = y.shape;
* // returns []
*
* var dt = y.dtype;
* // returns 'bool'
*
* var v = y.get();
* // returns true
*/
declare function scalar2ndarrayLike( x: boolndarray, value: boolean ): boolndarray;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value and having the same data type as a provided input ndarray.
*
* @param x - input array
* @param value - scalar value
* @returns zero-dimensional ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/base/zeros' );
*
* var x = zeros( 'generic', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var y = scalar2ndarrayLike( x, 1.0 );
* // returns <ndarray>
*
* var sh = y.shape;
* // returns []
*
* var dt = y.dtype;
* // returns 'generic'
*
* var v = y.get();
* // returns 1.0
*/
declare function scalar2ndarrayLike<T = unknown>( x: genericndarray<T>, value: T ): genericndarray<T>;

/**
* Returns a zero-dimensional ndarray containing a provided scalar value and having the same data type as a provided input ndarray.
*
* @param x - input array
* @param value - scalar value
* @returns zero-dimensional ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/base/zeros' );
*
* var x = zeros( 'float64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var y = scalar2ndarrayLike( x, 1.0 );
* // returns <ndarray>
*
* var sh = y.shape;
* // returns []
*
* var dt = y.dtype;
* // returns 'generic'
*
* var v = y.get();
* // returns 1.0
*/
declare function scalar2ndarrayLike<T = unknown>( x: typedndarray<T>, value: T ): typedndarray<T>;


// EXPORTS //

export = scalar2ndarrayLike;
