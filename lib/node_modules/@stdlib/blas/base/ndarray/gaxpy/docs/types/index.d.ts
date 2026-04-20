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

import { typedndarray } from '@stdlib/types/ndarray';

/**
* Multiplies a one-dimensional ndarray `x` by a constant `alpha` and adds the result to a one-dimensional ndarray `y`.
*
* @param arrays - array-like object containing an input ndarray, an output ndarray, and a zero-dimensional ndarray containing a scalar constant
* @returns output ndarray
*
* @example
* var scalar2ndarray = require( '@stdlib/ndarray/base/from-scalar' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var xbuf = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var x = new ndarray( 'generic', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* var ybuf = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
* var y = new ndarray( 'generic', ybuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* var alpha = scalar2ndarray( 5.0, 'generic', 'row-major' );
*
* var z = gaxpy( [ x, y, alpha ] );
* // returns <ndarray>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
*
* var bool = ( z === y );
* // returns true
*/
declare function gaxpy<T extends typedndarray<number> = typedndarray<number>, U extends typedndarray<number> = typedndarray<number>>( arrays: [ T, U, T ] ): U;


// EXPORTS //

export = gaxpy;
