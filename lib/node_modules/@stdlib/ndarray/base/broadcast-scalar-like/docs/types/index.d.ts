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

import { typedndarray, genericndarray, complexndarray } from '@stdlib/types/ndarray';
import { ComplexLike } from '@stdlib/types/complex';

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* ## Notes
*
* -   If provided a number, the function returns an ndarray containing a complex number whose real component equals the provided scalar value and whose imaginary component is zero.
*
* @param x - input array
* @param value - scalar value
* @returns output ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/base/zeros' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var x = zeros( 'complex128', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ <Complex128>[ 0.0, 0.0 ], <Complex128>[ 0.0, 0.0 ] ], [ <Complex128>[ 0.0, 0.0 ], <Complex128>[ 0.0, 0.0 ] ] ]
*
* var y = broadcastScalarLike( x, 1.0 );
* // returns <ndarray>[ [ <Complex128>[ 1.0, 0.0 ], <Complex128>[ 1.0, 0.0 ] ], [ <Complex128>[ 1.0, 0.0 ], <Complex128>[ 1.0, 0.0 ] ] ]
*
* var dt = String( getDType( y ) );
* // returns 'complex128'
*/
declare function broadcastScalarLike<T extends complexndarray = complexndarray>( x: T, value: ComplexLike | number ): T;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @param value - scalar value
* @returns output ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/base/zeros' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var x = zeros( 'generic', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]
*
* var y = broadcastScalarLike( x, 1.0 );
* // returns <ndarray>[ [ 1.0, 1.0 ], [ 1.0, 1.0 ] ]
*
* var dt = String( getDType( y ) );
* // returns 'generic'
*/
declare function broadcastScalarLike<T = unknown>( x: genericndarray<T>, value: T ): genericndarray<T>;

/**
* Broadcasts a scalar value to an ndarray having the same shape and data type as a provided input ndarray.
*
* @param x - input array
* @param value - scalar value
* @returns output ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/base/zeros' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var x = zeros( 'float64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ]
*
* var y = broadcastScalarLike( x, 1.0 );
* // returns <ndarray>[ [ 1.0, 1.0 ], [ 1.0, 1.0 ] ]
*
* var dt = String( getDType( y ) );
* // returns 'float64'
*/
declare function broadcastScalarLike<T = unknown, U extends typedndarray<T> = typedndarray<T>>( x: U, value: T ): U;


// EXPORTS //

export = broadcastScalarLike;
