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
* Returns a string created by joining one-dimensional ndarray elements using a specified separator.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*     -   a zero-dimensional ndarray containing a separator.
*
* @param arrays - array-like object containing ndarrays
* @returns joined string
*
* @example
* var vector = require( '@stdlib/ndarray/vector/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var x = vector( [ 1.0, 3.0, 4.0, 2.0 ], 'generic' );
*
* var separator = scalar2ndarray( ',', {
*     'dtype': 'generic'
* });
*
* var v = gjoin( [ x, separator ] );
* // returns '1,3,4,2'
*/
declare function gjoin<T = unknown, U = unknown>( arrays: [ typedndarray<T>, typedndarray<U> ] ): string;


// EXPORTS //

export = gjoin;
