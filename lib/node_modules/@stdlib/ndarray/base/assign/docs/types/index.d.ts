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
* Assigns elements in an ndarray to elements in an ndarray.
*
* @param arrays - array-like object containing one input ndarray and one output ndarray
* @throws arrays must have the same number of dimensions
* @throws arrays must have the same shape
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* // Create data buffers:
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
* var ybuf = new Float64Array( 6 );
*
* // Define the shape of the input and output arrays:
* var shape = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 4, 1 ];
* var sy = [ 2, 2, 1 ];
*
* // Define the index offsets:
* var ox = 1;
* var oy = 0;
*
* // Create the input and output ndarrays:
* var x = ndarray( 'float64', xbuf, shape, sx, ox, 'row-major' );
* var y = ndarray( 'float64', ybuf, shape, sy, oy, 'row-major' );
*
* // Copy elements:
* assign( [ x, y ] );
*
* console.log( y.data );
* // => <Float64Array>[ 2.0, 3.0, 6.0, 7.0, 10.0, 11.0 ]
*/
declare function assign( arrays: ArrayLike<ndarray> ): void;


// EXPORTS //

export = assign;
