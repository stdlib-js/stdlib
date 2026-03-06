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

import { ndarray } from '@stdlib/types/ndarray';
import { Slice } from '@stdlib/types/slice';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Boolean indicating whether to enforce strict bounds checking (default: true).
	*/
	strict?: boolean;
}

/**
* Slice argument.
*/
type SliceArgument = Slice | number | null | undefined;

/**
* Returns a read-only view of an input ndarray when sliced along a specified dimension.
*
* @param x - input array
* @param dim - index of dimension to slice
* @param s - slice object or an integer
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], 'float64' );
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 3, 2 ]
*
* var arr = ndarray2array( x );
* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
*
* var s = new Slice( null, null, -1 );
* // returns <Slice>
*
* var y = sliceDimension( x, 0, s );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 3, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 5.0, 6.0 ], [ 3.0, 4.0 ], [ 1.0, 2.0 ] ]
*/
declare function sliceDimension<T extends ndarray = ndarray>( x: T, dim: number, s: SliceArgument, options?: Options ): T;


// EXPORTS //

export = sliceDimension;
