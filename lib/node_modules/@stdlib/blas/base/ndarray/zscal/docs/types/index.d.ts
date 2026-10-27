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
* Multiplies a one-dimensional double-precision complex floating-point ndarray by a scalar constant.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a zero-dimensional ndarray containing a scalar constant.
*
* @param arrays - array-like object containing ndarrays
* @returns input ndarray
*
* @example
* var Complex128Vector = require( '@stdlib/ndarray/vector/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = new Complex128Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var alpha = scalar2ndarray( new Complex128( 2.0, 0.0 ), {
*     'dtype': 'complex128'
* });
*
* var y = zscal( [ x, alpha ] );
* // returns <ndarray>[ <Complex128>[ 2.0, 4.0 ], <Complex128>[ 6.0, 8.0 ], <Complex128>[ 10.0, 12.0 ] ]
*
* var bool = ( y === x );
* // returns true
*/
declare function zscal( arrays: [ complex128ndarray, complex128ndarray ] ): complex128ndarray;


// EXPORTS //

export = zscal;
