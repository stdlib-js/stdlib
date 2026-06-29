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
* Interchanges two one-dimensional complex double-precision floating-point ndarrays.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   first one-dimensional input ndarray.
*     -   second one-dimensional input ndarray.
*
* @param arrays - array-like object containing ndarrays
* @returns second input ndarray
*
* @example
* var Complex128Vector = require( '@stdlib/ndarray/vector/complex128' );
*
* var x = new Complex128Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex128Vector( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* var z = zswap( [ x, y ] );
* // x => <ndarray>[ <Complex128>[ 7.0, 8.0 ], <Complex128>[ 9.0, 10.0 ], <Complex128>[ 11.0, 12.0 ] ]
* // y => <ndarray>[ <Complex128>[ 1.0, 2.0 ], <Complex128>[ 3.0, 4.0 ], <Complex128>[ 5.0, 6.0 ] ]
*
* var bool = ( z === y );
* // returns true
*/
declare function zswap( arrays: [ complex128ndarray, complex128ndarray ] ): complex128ndarray;


// EXPORTS //

export = zswap;
