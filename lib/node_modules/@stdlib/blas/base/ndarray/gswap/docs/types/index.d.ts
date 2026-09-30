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
* Interchanges two one-dimensional ndarrays.
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
* var vector = require( '@stdlib/ndarray/vector/ctor' );
*
* var x = vector( [ 1.0, 2.0, 3.0, 4.0, 5.0 ], 'generic' );
* var y = vector( [ 6.0, 7.0, 8.0, 9.0, 10.0 ], 'generic' );
*
* var z = gswap( [ x, y ] );
* // x => <ndarray>[ 6.0, 7.0, 8.0, 9.0, 10.0 ]
* // y => <ndarray>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*
* var bool = ( z === y );
* // returns true
*/
declare function gswap<T extends typedndarray<number> = typedndarray<number>>( arrays: [ T, T ] ): T;


// EXPORTS //

export = gswap;
