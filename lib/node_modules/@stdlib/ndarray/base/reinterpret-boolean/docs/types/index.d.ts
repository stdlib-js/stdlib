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

import { boolndarray, uint8ndarray } from '@stdlib/types/ndarray';

/**
* Reinterprets a boolean ndarray as an unsigned 8-bit integer ndarray.
*
* ## Notes
*
* -   The returned ndarray is a view on the input ndarray data buffer.
* -   The returned ndarray is a "base" ndarray, and, thus, the returned ndarray does not perform bounds checking or afford any of the guarantees of the non-base ndarray constructor. The primary intent of this function is to reinterpret an ndarray-like object within internal implementations and to do so with minimal overhead.
*
* @param x - input ndarray
* @returns unsigned 8-bit integer ndarray view
*
* @example
* var zeros = require( '@stdlib/ndarray/base/zeros' );
*
* var x = zeros( 'bool', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ false, false ], [ false, false ] ]
*
* var out = reinterpretBoolean( x );
* // returns <ndarray>[ [ 0, 0 ], [ 0, 0 ] ]
*/
declare function reinterpretBoolean( x: boolndarray ): uint8ndarray;


// EXPORTS //

export = reinterpretBoolean;
