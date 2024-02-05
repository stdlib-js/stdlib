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

import { ArrayLike } from '@stdlib/types/array';
import { typedndarray } from '@stdlib/types/ndarray';

/**
* Broadcasts ndarrays to a common shape.
*
* ## Notes
*
* -   The function throws an error if provided broadcast-incompatible ndarrays.
* -   The returned arrays are **read-only** views on their respective underlying array data buffers. The views are typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to a view may affect multiple elements. If you need to write to an input array, copy the array before broadcasting.
* -   The function always returns new ndarray instances even if an input ndarray shape and the broadcasted shape are the same.
*
* @param arrays - input arrays
* @throws input arrays must be broadcast compatible
* @returns list of broadcasted arrays
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x1 = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>
*
* var shx = x1.shape;
* // returns [ 2, 2 ]
*
* var y1 = zeros( [ 3, 2, 2 ] );
* // returns <ndarray>
*
* var shy = y1.shape;
* // returns [ 3, 2, 2 ]
*
* var out = broadcastArrays( [ x1, y1 ] );
* // returns <ndarray>
*
* var x2 = out[ 0 ];
* // returns <ndarray>
*
* var y2 = out[ 1 ];
* // returns <ndarray>
*
* shx = x2.shape;
* // returns [ 3, 2, 2 ]
*
* shy = y2.shape;
* // returns [ 3, 2, 2 ]
*
* var v = x2.get( 0, 0, 0 );
* // returns 1
*
* v = x2.get( 0, 0, 1 );
* // returns 2
*
* v = x2.get( 1, 0, 0 );
* // returns 1
*
* v = x2.get( 1, 1, 0 );
* // returns 3
*
* v = x2.get( 2, 0, 0 );
* // returns 1
*
* v = x2.get( 2, 1, 1 );
* // returns 4
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ] );
* // returns <ndarray>
*
* var y = zeros( [ 4, 2 ] );
* // returns <ndarray>
*
* var out = broadcastArrays( [ x, y ] );
* // throws <Error>
*/
declare function broadcastArrays<T = unknown>( arrays: ArrayLike<typedndarray<T>> ): Array<typedndarray<T>>;

/**
* Broadcasts ndarrays to a common shape.
*
* ## Notes
*
* -   The function throws an error if provided broadcast-incompatible ndarrays.
* -   The returned arrays are **read-only** views on their respective underlying array data buffers. The views are typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to a view may affect multiple elements. If you need to write to an input array, copy the array before broadcasting.
* -   The function always returns new ndarray instances even if an input ndarray shape and the broadcasted shape are the same.
*
* @param arrays - input arrays
* @throws input arrays must be broadcast compatible
* @returns list of broadcasted arrays
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x1 = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>
*
* var shx = x1.shape;
* // returns [ 2, 2 ]
*
* var y1 = zeros( [ 3, 2, 2 ] );
* // returns <ndarray>
*
* var shy = y1.shape;
* // returns [ 3, 2, 2 ]
*
* var out = broadcastArrays( [ x1, y1 ] );
* // returns <ndarray>
*
* var x2 = out[ 0 ];
* // returns <ndarray>
*
* var y2 = out[ 1 ];
* // returns <ndarray>
*
* shx = x2.shape;
* // returns [ 3, 2, 2 ]
*
* shy = y2.shape;
* // returns [ 3, 2, 2 ]
*
* var v = x2.get( 0, 0, 0 );
* // returns 1
*
* v = x2.get( 0, 0, 1 );
* // returns 2
*
* v = x2.get( 1, 0, 0 );
* // returns 1
*
* v = x2.get( 1, 1, 0 );
* // returns 3
*
* v = x2.get( 2, 0, 0 );
* // returns 1
*
* v = x2.get( 2, 1, 1 );
* // returns 4
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ] );
* // returns <ndarray>
*
* var y = zeros( [ 4, 2 ] );
* // returns <ndarray>
*
* var out = broadcastArrays( [ x, y ] );
* // throws <Error>
*/
declare function broadcastArrays<T = unknown>( ...arrays: Array<typedndarray<T>> ): Array<typedndarray<T>>;


// EXPORTS //

export = broadcastArrays;
