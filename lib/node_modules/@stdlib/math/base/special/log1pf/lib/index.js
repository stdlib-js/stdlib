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
* Evaluate the natural logarithm of \\(1+x\\) as a single-precision floating-point number.
*
* @module @stdlib/math/base/special/log1pf
*
* @example
* var log1pf = require( '@stdlib/math/base/special/log1pf' );
*
* var v = log1pf( 4.0 );
* // returns ~1.609
*
* v = log1pf( -1.0 );
* // returns -Infinity
*
* v = log1pf( 0.0 );
* // returns 0.0
*
* v = log1pf( -0.0 );
* // returns -0.0
*
* v = log1pf( -2.0 );
* // returns NaN
*
* v = log1pf( NaN );
* // returns NaN
*/

// MODULES //

var log1pf = require( './main.js' );


// EXPORTS //

module.exports = log1pf;
