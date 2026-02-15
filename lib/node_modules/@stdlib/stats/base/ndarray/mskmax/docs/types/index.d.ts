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

/**
* Calculates the maximum value of a one-dimensional ndarray according to a mask.
*
* @param arrays - array-like object containing an input ndarray and a mask ndarray
* @returns maximum value
*
* @example
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var xbuf = [ 1.0, -2.0, 4.0, 2.0 ];
* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var mbuf = [ 0, 0, 1, 0 ];
* var mask = new ndarray( 'generic', mbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var v = mskmax( [ x, mask ] );
* // returns 2.0
*/
declare function mskmax<T extends typedndarray<number> = typedndarray<number>>( arrays: [ T, T ] ): number;


// EXPORTS //

export = mskmax;
