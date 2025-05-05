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

import { typedndarray } from '@stdlib/types/ndarray';
import { ComplexLike } from '@stdlib/types/complex';

/**
* Computes the cumulative sum of a one-dimensional ndarray.
*
* @param arrays - array-like object containing an input ndarray, an output ndarray, and ndarray containing the initial sum
* @returns output ndarray
*
* @example
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var scalar2ndarray = require( '@stdlib/ndarray/base/from-scalar' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var ybuf = [ 0.0, 0.0, 0.0, 0.0 ];
* var y = new ndarray( 'generic', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var initial = scalar2ndarray( 0.0, 'generic', 'row-major' );
*
* var v = gcusum( [ x, y, initial ] );
* // returns <ndarray>
*
* var bool = ( v === y );
* // returns true
*
* var arr = ndarray2array( v );
* // returns [ 1.0, 4.0, 8.0, 10.0 ]
*/
declare function gcusum<T extends typedndarray<number> = typedndarray<number>>( arrays: [ T, T, T ] ): T;

/**
* Computes the cumulative sum of a one-dimensional ndarray.
*
* @param arrays - array-like object containing an input ndarray, an output ndarray, and ndarray containing the initial sum
* @returns output ndarray
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var scalar2ndarray = require( '@stdlib/ndarray/base/from-scalar' );
* var getData = require( '@stdlib/ndarray/data-buffer' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var xbuf = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var x = new ndarray( 'complex128', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var ybuf = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );
* var y = new ndarray( 'complex128', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var initial = scalar2ndarray( new Complex128( 0.0, 0.0 ), 'complex128', 'row-major' );
*
* var v = gcusum( [ x, y, initial ] );
* // returns <ndarray>
*
* var bool = ( v === y );
* // returns true
*
* var arr = getData( y );
* // returns <Complex128Array>[ 1.0, 2.0, 4.0, 6.0 ]
*/
declare function gcusum<T extends ComplexLike = ComplexLike, U extends typedndarray<T> = typedndarray<T>>( arrays: [ U, U, U ] ): U;


// EXPORTS //

export = gcusum;
