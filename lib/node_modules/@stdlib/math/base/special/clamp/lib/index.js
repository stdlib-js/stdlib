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
* Restrict a double-precision floating-point number to a specified range.
*
* @module @stdlib/math/base/special/clamp
*
* @example
* var clamp = require( '@stdlib/math/base/special/clamp' );
*
* var v = clamp( 3.14, 0.0, 5.0 );
* // returns 3.14
*
* v = clamp( -3.14, 0.0, 5.0 );
* // returns 0.0
*
* v = clamp( 10.0, 0.0, 5.0 );
* // returns 5.0
*
* v = clamp( -0.0, 0.0, 5.0 );
* // returns 0.0
*
* v = clamp( 0.0, -0.0, 5.0 );
* // returns 0.0
*
* v = clamp( NaN, 0.0, 5.0 );
* // returns NaN
*
* v = clamp( 0.0, NaN, 5.0 );
* // returns NaN
*
* v = clamp( 3.14, 0.0, NaN );
* // returns NaN
*/

// MODULES //

var clamp = require( './main.js' );


// EXPORTS //

module.exports = clamp;
