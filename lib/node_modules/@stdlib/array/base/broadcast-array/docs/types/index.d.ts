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

import { Collection } from '@stdlib/types/array';

/**
* Interface describing a broadcast object.
*/
interface BroadcastObject<T> {
	/**
	* Reference to the input array.
	*/
	ref: Collection<T>;

	/**
	* Broadcasted array.
	*/
	data: any; // FIXME: how to type this, as this can be an arbitrarily nested array, where the number of dimensions is dependent on the length of `inShape`?

	/**
	* Broadcasted array shape.
	*/
	shape: Array<number>;

	/**
	* Broadcasted array strides.
	*/
	strides: Array<number>;
}

/**
* Broadcasts an array to a specified shape.
*
* ## Notes
*
* -   The broadcasted array shares the same data as the input array. As more than one element of a broadcasted array may refer to the same memory location, writing to the broadcasted array may affect multiple elements. If you need to write to the broadcasted array, copy the array before performing operations which may mutate elements.
* -   The function throws an error if a provided input shape is incompatible with a provided output shape.
*
* @param x - input array
* @param inShape - input array shape
* @param outShape - output array shape
* @throws input array cannot have more dimensions than the desired shape
* @throws input array dimension sizes must be `1` or equal to the corresponding dimension in the provided output shape
* @returns broadcast object
*
* @example
* var x = [ 1, 2 ];
*
* var out = broadcastArray( x, [ 2 ], [ 2, 2 ] );
* // returns {...}
*
* var shape = out.shape;
* // returns [ 2, 2 ]
*
* var strides = out.strides;
* // returns [ 0, 1 ]
*
* var ref = out.ref;
* // returns [ 1, 2 ]
*
* var bool = ( x === ref );
* // returns true
*
* var data = out.data;
* // returns [ [ 1, 2 ] ]
*
* @example
* var x = [ 1, 2 ];
*
* var out = broadcastArray( x, [ 2 ], [ 2, 1, 2 ] );
* // returns {...}
*
* var data = out.data;
* // returns [ [ [ 1, 2 ] ] ]
*
* var strides = out.strides;
* // returns [ 0, 0, 1 ]
*
* @example
* var x = [ [ 1 ], [ 2 ] ];
*
* var out = broadcastArray( x, [ 2, 1 ], [ 3, 2, 2 ] );
* // returns {...}
*
* var data = out.data;
* // returns [ [ [ 1 ], [ 2 ] ] ]
*
* var strides = out.strides;
* // returns [ 0, 1, 0 ]
*/
declare function broadcastArray<T = unknown>( x: Collection<T>, inShape: Collection<number>, outShape: Collection<number> ): BroadcastObject<T>;


// EXPORTS //

export = broadcastArray;
