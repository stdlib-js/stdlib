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

import { float64ndarray } from '@stdlib/types/ndarray';

/**
* Computes the median value of a sorted one-dimensional double-precision floating-point ndarray.
*
* @param arrays - array-like object containing a sorted input ndarray
* @returns median value
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var xbuf = new Float64Array( [ 1.0, 2.0, 3.0 ] );
* var x = new ndarray( 'float64', xbuf, [ 3 ], [ 1 ], 0, 'row-major' );
*
* var v = dmediansorted( [ x ] );
* // returns 2.0
*/
declare function dmediansorted( arrays: [ float64ndarray ] ): number;


// EXPORTS //

export = dmediansorted;
