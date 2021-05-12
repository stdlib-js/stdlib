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
* Compute the cosine of a number minus one.
*
* @module @stdlib/math/base/special/cosm1
*
* @example
* var PI = require( '@stdlib/constants/float64/pi' );
* var cosm1 = require( '@stdlib/math/base/special/cosm1' );
*
* var v = cosm1( 0.0 );
* // returns 0.0
*
* v = cosm1( PI/4.0 );
* // returns ~-0.291
*
* v = cosm1( -PI/6.0 );
* // returns ~-0.134
*/

// MODULES //

var cosm1 = require( './cosm1.js' );


// EXPORTS //

module.exports = cosm1;
