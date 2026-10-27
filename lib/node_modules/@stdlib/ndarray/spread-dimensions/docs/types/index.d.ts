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

import { typedndarray } from '@stdlib/types/ndarray';
import { Collection } from '@stdlib/types/array';

/**
* Returns a read-only view of an input ndarray where the dimensions of the input ndarray are expanded to a specified dimensionality by spreading dimensions to specified dimension indices and inserting dimensions of size one for the remaining dimensions.
*
* @param ndims - number of dimensions in the output array
* @param x - input ndarray
* @param dims - dimension indices
* @returns output array
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = [ 1.0, 2.0, 3.0, 4.0 ];
* var shape = [ 2, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>[ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
*
* var y = spreadDimensions( 5, x, [ 1, 3 ] );
* // returns <ndarray>[ [ [ [ [ 1.0 ], [ 2.0 ] ] ], [ [ [ 3.0 ], [ 4.0 ] ] ] ] ]
*/
declare function spreadDimensions<T = unknown, U extends typedndarray<T> = typedndarray<T>>( ndims: number, x: U, dims: Collection<number> ): U;


// EXPORTS //

export = spreadDimensions;
