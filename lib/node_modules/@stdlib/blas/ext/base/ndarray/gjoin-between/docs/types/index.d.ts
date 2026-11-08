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
* Returns a string by joining one-dimensional ndarray elements using a specified separator for each pair of consecutive elements.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a zero-dimensional ndarray containing a prefix string.
*     -   a zero-dimensional ndarray containing a suffix string.
*     -   a one-dimensional ndarray containing separator strings.
*
* @param arrays - array-like object containing ndarrays
* @returns joined string
*
* @example
* var vector = require( '@stdlib/ndarray/vector/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = vector( [ 1, 2, 3, 4 ], 'generic' );
*
* var prefix = scalar2ndarray( 'op: ', {
*     'dtype': 'generic'
* });
*
* var suffix = scalar2ndarray( '', {
*     'dtype': 'generic'
* });
*
* var separators = vector( [ ' + ', ' - ', ' != ' ], 'generic' );
*
* var v = gjoinBetween( [ x, prefix, suffix, separators ] );
* // returns 'op: 1 + 2 - 3 != 4'
*/
declare function gjoinBetween<T = unknown>( arrays: [ typedndarray<T>, typedndarray<string>, typedndarray<string>, typedndarray<string> ] ): string;


// EXPORTS //

export = gjoinBetween;
