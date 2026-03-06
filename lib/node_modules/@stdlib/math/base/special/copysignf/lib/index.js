/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Return a single-precision floating-point number with the magnitude of `x` and the sign of `y`.
*
* @module @stdlib/math/base/special/copysignf
*
* @example
* var copysignf = require( '@stdlib/math/base/special/copysignf' );
*
* var z = copysignf( -3.0, 10.0 );
* // returns 3.0
*
* z = copysignf( 3.0, -1.0 );
* // returns -3.0
*
* z = copysignf( 1.0, -0.0 );
* // returns -1.0
*
* z = copysignf( -3.0, -0.0 );
* // returns -3.0
*
* z = copysignf( -0.0, 1.0 );
* // returns 0.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
