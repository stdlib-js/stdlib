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

import { complex128ndarray } from '@stdlib/types/ndarray';

/**
* Fills a one-dimensional double-precision complex floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from zero.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*
* @param arrays - array-like object containing ndarrays
* @returns input ndarray
*
* @example
* var Complex128Vector = require( '@stdlib/ndarray/vector/complex128' );
*
* var x = new Complex128Vector( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var out = zzeroTo( [ x ] );
* // returns <ndarray>[ <Complex128>[ 0.0, 0.0 ], <Complex128>[ 1.0, 0.0 ], <Complex128>[ 2.0, 0.0 ], <Complex128>[ 3.0, 0.0 ] ]
*/
declare function zzeroTo( arrays: [ complex128ndarray ] ): complex128ndarray;


// EXPORTS //

export = zzeroTo;
