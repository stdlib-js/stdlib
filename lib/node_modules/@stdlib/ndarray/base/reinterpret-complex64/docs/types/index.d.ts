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

import { complex64ndarray, float32ndarray } from '@stdlib/types/ndarray';

/**
* Reinterprets a single-precision complex floating-point ndarray as a real-valued single-precision floating-point ndarray containing interleaved real and imaginary components.
*
* ## Notes
*
* -   The returned ndarray is a view on the input ndarray data buffer.
* -   The returned ndarray has an additional trailing dimension of size two whose elements correspond to the real and imaginary components, respectively, of each complex-valued element in the input ndarray.
* -   The returned ndarray is a "base" ndarray, and, thus, the returned ndarray does not perform bounds checking or afford any of the guarantees of the non-base ndarray constructor. The primary intent of this function is to reinterpret an ndarray-like object within internal implementations and to do so with minimal overhead.
*
* @param x - input ndarray
* @returns single-precision floating-point ndarray view
*
* @example
* var ones = require( '@stdlib/ndarray/base/ones' );
*
* var x = ones( 'complex64', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ <Complex64>[ 1.0, 0.0 ], <Complex64>[ 1.0, 0.0 ] ], [ <Complex64>[ 1.0, 0.0 ], <Complex64>[ 1.0, 0.0 ] ] ]
*
* var out = reinterpretComplex64( x );
* // returns <ndarray>[ [ [ 1.0, 0.0 ], [ 1.0, 0.0 ] ], [ [ 1.0, 0.0 ], [ 1.0, 0.0 ] ] ]
*/
declare function reinterpretComplex64( x: complex64ndarray ): float32ndarray;


// EXPORTS //

export = reinterpretComplex64;
