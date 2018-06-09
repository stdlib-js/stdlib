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
* Compute a moving mean arctangent absolute percentage error incrementally.
*
* @module @stdlib/stats/incr/mmaape
*
* @example
* var incrmmaape = require( '@stdlib/stats/incr/mmaape' );
*
* var accumulator = incrmmaape( 3 );
*
* var m = accumulator();
* // returns null
*
* m = accumulator( 2.0, 3.0 );
* // returns ~0.32
*
* m = accumulator( 5.0, 2.0 );
* // returns ~0.65
*
* m = accumulator( 3.0, 2.0 );
* // returns ~0.59
*
* m = accumulator( 2.0, 5.0 );
* // returns ~0.66
*
* m = accumulator();
* // returns ~0.66
*/

// MODULES //

var incrmmaape = require( './main.js' );


// EXPORTS //

module.exports = incrmmaape;
