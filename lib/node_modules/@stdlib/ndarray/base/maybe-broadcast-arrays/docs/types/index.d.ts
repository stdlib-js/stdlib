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
import { ndarray } from '@stdlib/types/ndarray';

/**
* Broadcasts ndarrays to a common shape.
*
* ## Notes
*
* -   The function throws an error if a provided broadcast-incompatible ndarrays.
* -   If a provided ndarray has a shape matching the common shape, the function returns the provided ndarray.
* -   If a provided ndarray has a different (broadcast compatible) shape than the common shape, the function returns a new (base) ndarray view of the provided ndarray's data. The view is typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to a view may affect multiple elements. If you need to write to a returned array, copy the array before performing operations which may mutate elements.
* -   A returned array view is a "base" ndarray, and, thus, a returned array view does not perform bounds checking or afford any of the guarantees of the non-base ndarray constructor. The primary intent of this function is to broadcast ndarray-like objects within internal implementations and to do so with minimal overhead.
*
* @param arrays - input arrays
* @throws input arrays must be broadcast compatible
* @returns list of broadcasted arrays
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var array = require( '@stdlib/ndarray/array' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x1 = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>[ [ 1, 2 ], [ 3, 4 ] ]
*
* var shx = getShape( x1 );
* // returns [ 2, 2 ]
*
* var y1 = zeros( [ 3, 2, 2 ] );
* // returns <ndarray>[ [ [ 0, 0 ], [ 0, 0 ] ], [ [ 0, 0 ], [ 0, 0 ] ], [ [ 0, 0 ], [ 0, 0 ] ] ]
*
* var shy = getShape( y1 );
* // returns [ 3, 2, 2 ]
*
* var out = maybeBroadcastArrays( [ x1, y1 ] );
* // returns [ <ndarray>, <ndarray> ]
*
* var x2 = out[ 0 ];
* // returns <ndarray>[ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 1, 2 ], [ 3, 4 ] ], [ [ 1, 2 ], [ 3, 4 ] ] ]
*
* var y2 = out[ 1 ];
* // returns <ndarray>[ [ [ 0, 0 ], [ 0, 0 ] ], [ [ 0, 0 ], [ 0, 0 ] ], [ [ 0, 0 ], [ 0, 0 ] ] ]
*
* shx = getShape( x2 );
* // returns [ 3, 2, 2 ]
*
* shy = getShape( y2 );
* // returns [ 3, 2, 2 ]
*/
declare function maybeBroadcastArrays( arrays: ArrayLike<ndarray> ): Array<ndarray>;


// EXPORTS //

export = maybeBroadcastArrays;
