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

import { float64ndarray } from '@stdlib/types/ndarray';

/**
* Fills a one-dimensional double-precision floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from one.
*
* @param arrays - array-like object containing a one-dimensional input ndarray
* @returns input ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
* // returns <ndarray>[ 0.0, 0.0, 0.0, 0.0 ]
*
* var out = doneTo( [ x ] );
* // returns <ndarray>[ 1.0, 2.0, 3.0, 4.0 ]
*/
declare function doneTo( arrays: [ float64ndarray ] ): float64ndarray;


// EXPORTS //

export = doneTo;
