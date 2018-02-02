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
* Evaluate the inverse of the incomplete beta function.
*
* @module @stdlib/math/base/special/betaincinv
*
* @example
* var betaincinv = require( '@stdlib/math/base/special/betaincinv' );
*
* var y = betaincinv( 0.2, 3.0, 3.0 );
* // returns ~0.327
*
* y = betaincinv( 0.4, 3.0, 3.0 );
* // returns ~0.446
*
* y = betaincinv( 0.4, 3.0, 3.0, true );
* // returns ~0.554
*
* y = betaincinv( 0.4, 1.0, 6.0 );
* // returns ~0.082
*
* y = betaincinv( 0.8, 1.0, 6.0 );
* // returns ~0.235
*/

// MODULES //

var betaincinv = require( './betaincinv.js' );


// EXPORTS //

module.exports = betaincinv;
