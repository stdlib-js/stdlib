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

import { complex64ndarray } from '@stdlib/types/ndarray';

/**
* Returns the index of the first truthy element in a one-dimensional single-precision complex floating-point ndarray.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*
* @param arrays - array-like object containing ndarrays
* @returns index
*
* @example
* var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
*
* var x = new Complex64Vector( [ 0.0, 0.0, 0.0, 0.0, 3.0, 0.0, 2.0, 0.0 ] );
*
* var v = cindexOfTruthy( [ x ] );
* // returns 2
*/
declare function cindexOfTruthy( arrays: [ complex64ndarray ] ): number;


// EXPORTS //

export = cindexOfTruthy;
