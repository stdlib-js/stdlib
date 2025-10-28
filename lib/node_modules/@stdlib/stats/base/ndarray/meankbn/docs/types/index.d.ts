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

import { ndarray } from '@stdlib/types/ndarray';

/**
* Computes the arithmetic mean of a one-dimensional ndarray using an improved Kahan–Babuška algorithm.
*
* @param arrays - array-like object containing an input ndarray
* @returns arithmetic mean
*
* @example
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var v = meankbn( [ x ] );
* // returns 2.5
*/
declare function meankbn<T extends ndarray = ndarray>( arrays: [ T ] ): number;


// EXPORTS //

export = meankbn;
