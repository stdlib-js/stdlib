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
* Calculates the range of a one-dimensional ndarray according to a mask, ignoring `NaN` values.
*
* @param arrays - array-like object containing an input ndarray and a mask ndarray
* @returns range
*
* @example
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var xbuf = [ 1.0, -2.0, 4.0, 2.0, NaN ];
* var x = new ndarray( 'generic', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* var maskbuf = [ 0, 0, 1, 0, 0 ];
* var mask = new ndarray( 'generic', maskbuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* var v = nanmskrange( [ x, mask ] );
* // returns 4.0
*/
declare function nanmskrange<T extends ndarray = ndarray>( arrays: [ T, T ] ): number;


// EXPORTS //

export = nanmskrange;
