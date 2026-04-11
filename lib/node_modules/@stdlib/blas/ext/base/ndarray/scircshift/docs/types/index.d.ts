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

import { typedndarray, float32ndarray } from '@stdlib/types/ndarray';

/**
* Circularly shifts the elements of a one-dimensional single-precision floating-point ndarray by a specified number of positions.
*
* @param arrays - array-like object containing a one-dimensional input ndarray and a zero-dimensional ndarray specifying the number of positions to shift
* @returns input ndarray
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var xbuf = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var x = new ndarray( 'float32', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* var k = scalar2ndarray( 2, {
*    'dtype': 'generic'
* });
*
* var out = scircshift( [ x, k ] );
* // returns <ndarray>[ 4.0, 5.0, 1.0, 2.0, 3.0 ]
*/
declare function scircshift( arrays: [ float32ndarray, typedndarray<number> ] ): float32ndarray;


// EXPORTS //

export = scircshift;
