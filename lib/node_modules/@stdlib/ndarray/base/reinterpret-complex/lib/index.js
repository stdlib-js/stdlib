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
* Reinterpret a complex-valued floating-point ndarray as a real-valued floating-point ndarray having the same precision.
*
* @module @stdlib/ndarray/base/reinterpret-complex
*
* @example
* var zeroTo = require( '@stdlib/blas/ext/zero-to' );
* var reinterpretComplex = require( '@stdlib/ndarray/base/reinterpret-complex' );
*
* var x = zeroTo( [ 2, 2 ], {
*     'dtype': 'complex128'
* });
* // returns <ndarray>[ [ <Complex128>[ 0.0, 0.0 ], <Complex128>[ 1.0, 0.0 ] ], [ <Complex128>[ 0.0, 0.0 ], <Complex128>[ 1.0, 0.0 ] ] ]
*
* var out = reinterpretComplex( x );
* // returns <ndarray>[ [ [ 0.0, 0.0 ], [ 1.0, 0.0 ] ], [ [ 0.0, 0.0 ], [ 1.0, 0.0 ] ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
