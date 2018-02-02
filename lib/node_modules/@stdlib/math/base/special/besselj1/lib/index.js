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
* Compute the Bessel function of the first kind of order one.
*
* @module @stdlib/math/base/special/besselj1
*
* @example
* var j1 = require( '@stdlib/math/base/special/besselj1' );
*
* var v = j1( 0.0 );
* // returns 0.0
*
* v = j1( 1.0 );
* // returns ~0.440
*
* v = j1( Infinity );
* // returns 0.0
*
* v = j1( -Infinity );
* // returns 0.0
*
* v = j1( NaN );
* // returns NaN
*/

// MODULES //

var j1 = require( './j1.js' );


// EXPORTS //

module.exports = j1;
