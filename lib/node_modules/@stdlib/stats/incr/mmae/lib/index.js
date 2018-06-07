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
* Compute a moving mean absolute error incrementally.
*
* @module @stdlib/stats/incr/mmae
*
* @example
* var incrmmae = require( '@stdlib/stats/incr/mmae' );
*
* var accumulator = incrmmae( 3 );
*
* var m = accumulator();
* // returns null
*
* m = accumulator( 2.0, 3.0 );
* // returns 1.0
*
* m = accumulator( -5.0, 2.0 );
* // returns 4.0
*
* m = accumulator( 3.0, 2.0 );
* // returns 3.0
*
* m = accumulator( 5.0, -2.0 );
* // returns 5.0
*
* m = accumulator();
* // returns 5.0
*/

// MODULES //

var incrmmae = require( './main.js' );


// EXPORTS //

module.exports = incrmmae;
