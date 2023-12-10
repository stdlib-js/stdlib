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

import { typedndarray, Shape } from '@stdlib/types/ndarray';

/**
* Broadcasts an ndarray to a specified shape.
*
* ## Notes
*
* -   The function throws an error if a provided ndarray is incompatible with a provided shape.
* -   The returned array is a **read-only** view on the input array data buffer. The view is typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to the input array may affect multiple elements. If you need to write to the input array, copy the input array before broadcasting.
* -   The function always returns a new ndarray instance even if the input ndarray shape and the desired shape are the same.
*
* @param x - input array
* @param shape - desired shape
* @throws input array cannot have more dimensions than the desired shape
* @throws input array dimension sizes must be `1` or equal to the corresponding dimension in the provided shape
* @returns broadcasted array
*
* @example
* var array = require( `@stdlib/ndarray/array` );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>
*
* var shx = x.shape;
* // returns [ 2, 2 ]
*
* var y = broadcastArray( x, [ 3, 2, 2 ] );
* // returns <ndarray>
*
* var shy = y.shape;
* // returns [ 3, 2, 2 ]
*
* var v = y.get( 0, 0, 0 );
* // returns 1
*
* v = y.get( 0, 0, 1 );
* // returns 2
*
* v = y.get( 1, 0, 0 );
* // returns 1
*
* v = y.get( 1, 1, 0 );
* // returns 3
*
* v = y.get( 2, 0, 0 );
* // returns 1
*
* v = y.get( 2, 1, 1 );
* // returns 4
*/
declare function broadcastArray<T = unknown>( x: typedndarray<T>, shape: Shape ): typedndarray<T>;


// EXPORTS //

export = broadcastArray;
