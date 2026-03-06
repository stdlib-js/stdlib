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
* Compute the nth Bernoulli number.
*
* @module @stdlib/math/base/special/bernoulli
*
* @example
* var bernoulli = require( '@stdlib/math/base/special/bernoulli' );
*
* var y = bernoulli( 0 );
* // returns 1.0
*
* y = bernoulli( 1 );
* // returns 0.5
*
* y = bernoulli( 2 );
* // returns ~0.166
*
* y = bernoulli( 3 );
* // returns 0.0
*
* y = bernoulli( 4 );
* // returns ~-0.033
*
* y = bernoulli( 5 );
* // returns 0.0
*
* y = bernoulli( 20 );
* // returns ~-529.124
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
