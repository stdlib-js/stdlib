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

import { ArrayLike } from '@stdlib/types/array';
import { ndarray } from '@stdlib/types/ndarray';

/**
* Assigns a scalar value to every element of an output ndarray.
*
* @param arrays - array-like object containing a zero-dimensional input ndarray containing the scalar value and one output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* // Create a zero-dimensional ndarray containing the scalar value:
* var x = scalar2ndarray( 5.0, {
*     'dtype': 'float64'
* });
*
* // Create a data buffer:
* var ybuf = new Float64Array( 4 );
*
* // Define the shape of the output array:
* var shape = [ 2, 2 ];
*
* // Define the array strides:
* var sy = [ 2, 1 ];
*
* // Define the index offset:
* var oy = 0;
*
* // Create the output ndarray:
* var y = ndarray( 'float64', ybuf, shape, sy, oy, 'row-major' );
*
* // Assign the scalar value:
* assignScalar( [ x, y ] );
*
* console.log( y.data );
* // => <Float64Array>[ 5.0, 5.0, 5.0, 5.0 ]
*/
declare function assignScalar( arrays: ArrayLike<ndarray> ): void;


// EXPORTS //

export = assignScalar;
