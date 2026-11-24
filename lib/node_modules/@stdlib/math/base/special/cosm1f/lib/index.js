/**
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

'use strict';

/**
* Compute the cosine of a single-precision floating-point number minus one.
*
* @module @stdlib/math/base/special/cosm1f
*
* @example
* var cosm1f = require( '@stdlib/math/base/special/cosm1f' );
*
* var v = cosm1f( 0.0 );
* // returns 0.0
*
* v = cosm1f( 3.141592653589793/4.0 );
* // returns ~-0.293
*
* v = cosm1f( -3.141592653589793/6.0 );
* // returns ~-0.134
*
* v = cosm1f( NaN );
* // returns NaN
*/

// MODULES //

var cosm1f = require( './main.js' );


// EXPORTS //

module.exports = cosm1f;
