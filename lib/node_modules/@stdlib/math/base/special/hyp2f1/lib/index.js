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
* Evaluate the Gaussian hypergoemetric function.
*
* @module @stdlib/math/base/special/hyp2f1
*
* @example
* var hyp2f1 = require( '@stdlib/math/base/special/hyp2f1' );
*
* var v = hyp2f1( 1.0, 1.0, 1.0, 0.0 );
* // returns 1.0
*
* v = hyp2f1( 10.0, 7.4, -1.8, -0.99 );
* // returns ~0.423
*
* v = hyp2f1( 10.0, 1.0, -1.8, -0.99 );
* // returns ~-0.875
*
* v = hyp2f1( 2.0, 3.0, 5.0, 0.99 );
* // returns ~27.699
*
* v = hyp2f1( 3.0, 4.0, 7.0, 1.0 );
* // returns +Infinity
*
* v = hyp2f1( NaN, 3.0, 2.0, 0.5 );
* // returns NaN
*
* v = hyp2f1( 1.0, NaN, 2.0, 0.5 );
* // returns NaN
*/

// MODULES //

var hyp2f1 = require( './main.js' );


// EXPORTS //

module.exports = hyp2f1;
