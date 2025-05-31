/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Callback invoked for ndarray elements.
*
* @param x - first ndarray element
* @param y - second ndarray element
* @returns result
*/
type Binary = ( x: any, y: any ) => any;

/**
* Applies a binary callback to elements in input ndarrays and assigns results to elements in an output ndarray.
*
* @param arrays - array-like object containing two input ndarrays and one output ndarray
* @param fcn - binary callback
* @throws arrays must have the same number of dimensions
* @throws arrays must have the same shape
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var getData = require( '@stdlib/ndarray/data-buffer' );
*
* function add( a, b ) {
*     return a + b;
* }
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var ybuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var zbuf = new Float64Array( 6 );
*
* // Define the shape of the input and output arrays:
* var shape = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 2, 2, 1 ];
* var sy = [ 2, 2, 1 ];
* var sz = [ 2, 2, 1 ];
*
* // Define the index offsets:
* var ox = 0;
* var oy = 0;
* var oz = 0;
*
* // Create the input and output ndarrays:
* var x = new ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
* var y = new ndarray( 'float64', ybuf, shape, sy, oy, 'row-major' );
* var z = new ndarray( 'float64', zbuf, shape, sz, oz, 'row-major' );
*
* // Apply the binary function:
* binary( [ x, y, z ], add );
*
* console.log( getData( z ) );
* // => <Float64Array>[ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ]
*/
declare function binary( arrays: ArrayLike<ndarray>, fcn: Binary ): void;


// EXPORTS //

export = binary;
