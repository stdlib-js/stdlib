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
* Compute the squared absolute value of a double-precision floating-point number.
*
* @module @stdlib/math/base/special/abs2
*
* @example
* var abs2 = require( '@stdlib/math/base/special/abs2' );
*
* var v = abs2( -1.0 );
* // returns 1.0
*
* v = abs2( 2.0 );
* // returns 4.0
*
* v = abs2( 0.0 );
* // returns 0.0
*
* v = abs2( -0.0 );
* // returns 0.0
*
* v = abs2( NaN );
* // returns NaN
*/

// MODULES //

var abs2 = require( './main.js' );


// EXPORTS //

module.exports = abs2;
