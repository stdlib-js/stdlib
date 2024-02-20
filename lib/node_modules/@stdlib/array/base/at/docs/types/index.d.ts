/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import { Complex128, Complex64 } from '@stdlib/types/complex';
import { Collection, AccessorArrayLike, Complex128Array, Complex64Array } from '@stdlib/types/array';

/**
* Returns an element from an array.
*
* @param x - input array
* @param index - element index
* @returns array element
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
*
* var v = at( x, 0 );
* // returns <Complex128>
*
* v = at( x, 1 );
* // returns <Complex128>
*
* v = at( x, -2 );
* // returns <Complex128>
*
* var re = real( v );
* // returns 5.0
*
* var im = imag( v );
* // returns 6.0
*/
declare function at( x: Complex128Array, index: number ): Complex128 | void;

/**
* Returns an element from an array.
*
* @param x - input array
* @param index - element index
* @returns array element
*
* @example
* var Complex128Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/realf' );
* var imagf = require( '@stdlib/complex/imagf' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
*
* var v = at( x, 0 );
* // returns <Complex64>
*
* v = at( x, 1 );
* // returns <Complex64>
*
* v = at( x, -2 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns 5.0
*
* var im = imagf( v );
* // returns 6.0
*/
declare function at( x: Complex64Array, index: number ): Complex64 | void;

/**
* Returns an element from an array.
*
* @param x - input array
* @param index - element index
* @returns array element
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var v = at( x, 0 );
* // returns 1
*
* v = at( x, 1 );
* // returns 2
*
* v = at( x, -2 );
* // returns 3
*/
declare function at<T = unknown>( x: Collection<T> | AccessorArrayLike<T>, index: number ): T | void;


// EXPORTS //

export = at;
