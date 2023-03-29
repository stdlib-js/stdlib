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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { ndarray, typedndarray, float64ndarray, float32ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, complex128ndarray, complex64ndarray, DataType } from '@stdlib/types/ndarray';

/**
* Creates an uninitialized array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @returns output array
*
* @example
* var zeros = require( `@stdlib/ndarray/base/zeros` );
*
* var x = zeros( 'float64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'float64'
*
* var y = emptyLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'float64'
*/
declare function emptyLike( x: float64ndarray ): float64ndarray;

/**
* Creates an uninitialized array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @returns output array
*
* @example
* var zeros = require( `@stdlib/ndarray/base/zeros` );
*
* var x = zeros( 'float32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'float32'
*
* var y = emptyLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'float32'
*/
declare function emptyLike( x: float32ndarray ): float32ndarray;

/**
* Creates an uninitialized array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @returns output array
*
* @example
* var zeros = require( `@stdlib/ndarray/base/zeros` );
*
* var x = zeros( 'complex128', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'complex128'
*
* var y = emptyLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'complex128'
*/
declare function emptyLike( x: complex128ndarray ): complex128ndarray;

/**
* Creates an uninitialized array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @returns output array
*
* @example
* var zeros = require( `@stdlib/ndarray/base/zeros` );
*
* var x = zeros( 'complex64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'complex64'
*
* var y = emptyLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'complex64'
*/
declare function emptyLike( x: complex64ndarray ): complex64ndarray;

/**
* Creates an uninitialized array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @returns output array
*
* @example
* var zeros = require( `@stdlib/ndarray/base/zeros` );
*
* var x = zeros( 'int32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'int32'
*
* var y = emptyLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'int32'
*/
declare function emptyLike( x: int32ndarray ): int32ndarray;

/**
* Creates an uninitialized array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @returns output array
*
* @example
* var zeros = require( `@stdlib/ndarray/base/zeros` );
*
* var x = zeros( 'int16', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'int16'
*
* var y = emptyLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'int16'
*/
declare function emptyLike( x: int16ndarray ): int16ndarray;

/**
* Creates an uninitialized array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @returns output array
*
* @example
* var zeros = require( `@stdlib/ndarray/base/zeros` );
*
* var x = zeros( 'int8', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'int8'
*
* var y = emptyLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'int8'
*/
declare function emptyLike( x: int8ndarray ): int8ndarray;

/**
* Creates an uninitialized array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @returns output array
*
* @example
* var zeros = require( `@stdlib/ndarray/base/zeros` );
*
* var x = zeros( 'uint32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'uint32'
*
* var y = emptyLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'uint32'
*/
declare function emptyLike( x: uint32ndarray ): uint32ndarray;

/**
* Creates an uninitialized array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @returns output array
*
* @example
* var zeros = require( `@stdlib/ndarray/base/zeros` );
*
* var x = zeros( 'uint16', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'uint16'
*
* var y = emptyLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'uint16'
*/
declare function emptyLike( x: uint16ndarray ): uint16ndarray;

/**
* Creates an uninitialized array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @returns output array
*
* @example
* var zeros = require( `@stdlib/ndarray/base/zeros` );
*
* var x = zeros( 'uint8', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'uint8'
*
* var y = emptyLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'uint8'
*/
declare function emptyLike( x: uint8ndarray ): uint8ndarray;

/**
* Creates an uninitialized array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @returns output array
*
* @example
* var zeros = require( `@stdlib/ndarray/base/zeros` );
*
* var x = zeros( 'uint8c', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'uint8c'
*
* var y = emptyLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'uint8c'
*/
declare function emptyLike( x: uint8cndarray ): uint8cndarray;

/**
* Creates an uninitialized array having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @returns output array
*
* @example
* var zeros = require( `@stdlib/ndarray/base/zeros` );
*
* var x = zeros( 'generic', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 2, 2 ]
*
* var dt = x.dtype;
* // returns 'generic'
*
* var y = emptyLike( x );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* dt = y.dtype;
* // returns 'generic'
*/
declare function emptyLike( x: ndarray ): typedndarray<number>;


// EXPORTS //

export = emptyLike;
