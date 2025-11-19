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
* Computes the sum of all elements in a one-dimensional ndarray.
*
* @param arrays - array-like object containing an input ndarray
* @returns sum
*
* @example
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var v = gsum( [ x ] );
* // returns 10.0
*/
declare function gsum<T extends typedndarray<number> = typedndarray<number>>( arrays: [ T ] ): number;

/**
* Computes the sum of all elements in a one-dimensional ndarray.
*
* @param arrays - array-like object containing an input ndarray
* @returns sum
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var xbuf = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var x = new ndarray( 'complex128', xbuf, [ 2 ], [ 1 ], 0, 'row-major' );
*
* var v = gsum( [ x ] );
* // returns <Complex128>
*
* var re = real( v );
* // returns 4.0
*
* var im = imag( v );
* // returns 6.0
*/
declare function gsum<T extends ComplexLike = ComplexLike, U extends typedndarray<T> = typedndarray<T>>( arrays: [ U ] ): T;


// EXPORTS //

export = gsum;
