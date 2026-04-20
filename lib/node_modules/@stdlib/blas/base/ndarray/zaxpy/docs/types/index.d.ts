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
* Multiplies a one-dimensional double-precision complex floating-point ndarray `x` by a constant `alpha` and adds the result to a one-dimensional double-precision complex floating-point ndarray `y`.
*
* @param arrays - array-like object containing an input ndarray, an output ndarray, and a zero-dimensional ndarray containing a scalar constant
* @returns output ndarray
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/base/from-scalar' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var xbuf = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
* var x = new ndarray( 'complex128', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* var ybuf = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var y = new ndarray( 'complex128', ybuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* var alpha = scalar2ndarray( new Complex128( 1.0, 2.0 ), 'complex128', 'row-major' );
*
* var z = zaxpy( [ x, y, alpha ] );
* // returns <ndarray>[ <Complex128>[ -2.0, 5.0 ], <Complex128>[ -4.0, 11.0 ], <Complex128>[ -6.0, 17.0 ], <Complex128>[ -8.0, 23.0 ], <Complex128>[ -10.0, 29.0 ] ]
*
* var bool = ( z === y );
* // returns true
*/
declare function zaxpy( arrays: [ complex128ndarray, complex128ndarray, complex128ndarray ] ): complex128ndarray;


// EXPORTS //

export = zaxpy;
