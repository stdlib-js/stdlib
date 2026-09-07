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
* Returns a read-only view of an input ndarray in which the order of elements along the last dimension is reversed.
*
* @param x - input array
* @returns output array
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>[ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
*
* var y = fliplr( x );
* // returns <ndarray>[ [ 2.0, 1.0 ], [ 4.0, 3.0 ], [ 6.0, 5.0 ] ]
*/
declare function fliplr<T extends ndarray = ndarray>( x: T ): T;


// EXPORTS //

export = fliplr;
