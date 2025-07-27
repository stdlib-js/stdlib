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
* Computes the dot product of two one-dimensional ndarrays.
*
* @param arrays - array-like object containing two one-dimensional input ndarrays
* @returns dot product
*
* @example
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var xbuf = [ 4.0, 2.0, -3.0, 5.0, -1.0 ];
* var x = new ndarray( 'generic', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* var ybuf = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];
* var y = new ndarray( 'generic', ybuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* var z = gdot( [ x, y ] );
* // returns -5.0
*/
declare function gdot<T extends ndarray = ndarray>( arrays: [ T, T ] ): number;


// EXPORTS //

export = gdot;
