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
* Computes the L2-norm of a one-dimensional single-precision complex floating-point ndarray.
*
* ## Notes
*
* -   The function expects the following ndarrays:
*
*     -   a one-dimensional input ndarray.
*
* @param arrays - array-like object containing ndarrays
* @returns L2-norm
*
* @example
* var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
*
* var x = new Complex64Vector( [ 1.0, 2.0, 2.0, 4.0 ] );
*
* var y = scnrm2( [ x ] );
* // returns 5.0
*/
declare function scnrm2( arrays: [ complex64ndarray ] ): number;


// EXPORTS //

export = scnrm2;
