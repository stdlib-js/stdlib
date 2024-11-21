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
* Compute a two-sample z-Test.
*
* @module @stdlib/stats/ztest2
*
* @example
* var ztest2 = require( '@stdlib/stats/ztest2' );
*
* var x = [ 2.66, 1.5, 3.25, 0.993, 2.31, 2.41, 1.76, 2.57, 2.62, 1.23 ]; // Drawn from N(2,1)
* var y = [ 4.88, 2.93, 2.96, 4.5, -0.0603, 4.62, 3.35, 2.98 ]; // Drawn from N(3,2)
*
* var out = ztest2( x, y, 1.0, 2.0 );
* // returns {...}
*/

// MODULES //

var ztest2 = require( './main.js' );


// EXPORTS //

module.exports = ztest2;
