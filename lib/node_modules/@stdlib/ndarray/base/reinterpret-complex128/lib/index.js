/**
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

'use strict';

/**
* Reinterpret a double-precision complex floating-point ndarray as a real-valued double-precision floating-point ndarray containing interleaved real and imaginary components.
*
* @module @stdlib/ndarray/base/reinterpret-complex128
*
* @example
* var ones = require( '@stdlib/ndarray/base/ones' );
* var reinterpretComplex128 = require( '@stdlib/ndarray/base/reinterpret-complex128' );
*
* var x = ones( 'complex128', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ <Complex128>[ 1.0, 0.0 ], <Complex128>[ 1.0, 0.0 ] ], [ <Complex128>[ 1.0, 0.0 ], <Complex128>[ 1.0, 0.0 ] ] ]
*
* var out = reinterpretComplex128( x );
* // returns <ndarray>[ [ [ 1.0, 0.0 ], [ 1.0, 0.0 ] ], [ [ 1.0, 0.0 ], [ 1.0, 0.0 ] ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
