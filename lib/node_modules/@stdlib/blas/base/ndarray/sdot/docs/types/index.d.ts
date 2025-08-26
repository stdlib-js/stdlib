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

import { float32ndarray } from '@stdlib/types/ndarray';

/**
* Computes the dot product of two one-dimensional single-precision floating-point ndarrays.
*
* @param arrays - array-like object containing two one-dimensional input ndarrays
* @returns dot product
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var xbuf = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
* var x = new ndarray( 'float32', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* var ybuf = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
* var y = new ndarray( 'float32', ybuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* var z = sdot( [ x, y ] );
* // returns -5.0
*/
declare function sdot( arrays: [ float32ndarray, float32ndarray ] ): number;


// EXPORTS //

export = sdot;
