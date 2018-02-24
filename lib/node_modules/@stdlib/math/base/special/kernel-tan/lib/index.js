/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Compute the tangent of a number on `[-π/4, π/4]`.
*
* @module @stdlib/math/base/special/kernel-tan
*
* @example
* var kernelTan = require( '@stdlib/math/base/special/kernel-tan' );
*
* var out = kernelTan( 3.141592653589793/4.0, 0.0, 1 );
* // returns ~1.0
*
* out = kernelTan( 3.141592653589793/4.0, 0.0, -1 );
* // returns ~-1.0
*
* out = kernelTan( 3.141592653589793/6.0, 0.0, 1 );
* // returns ~0.577
*
* out = kernelTan( 0.664, 5.288e-17, 1 );
* // returns ~0.783
*/

// MODULES //

var kernelTan = require( './kernel_tan.js' );


// EXPORTS //

module.exports = kernelTan;
