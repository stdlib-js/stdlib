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
* Compute the arctangent of a number.
*
* @module @stdlib/math/base/special/atan
*
* @example
* var PI = require( '@stdlib/constants/float64/pi' );
* var atan = require( '@stdlib/math/base/special/atan' );
*
* var v = atan( 0.0 );
* // returns ~0.0
*
* v = atan( -PI/4.0 );
* // returns ~-0.666
*
* v = atan( PI/4.0 );
* // returns ~0.666
*
* v = atan( NaN );
* // returns NaN
*/

// MODULES //

var atan = require( './atan.js' );


// EXPORTS //

module.exports = atan;
