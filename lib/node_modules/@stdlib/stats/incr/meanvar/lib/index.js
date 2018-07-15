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
* Compute an arithmetic mean and unbiased sample variance incrementally.
*
* @module @stdlib/stats/incr/meanvar
*
* @example
* var incrmeanvar = require( '@stdlib/stats/incr/meanvar' );
*
* var accumulator = incrmeanvar();
*
* var mv = accumulator();
* // returns null
*
* mv = accumulator( 2.0 );
* // returns [ 2.0, 0.0 ]
*
* mv = accumulator( -5.0 );
* // returns [ -1.5, 24.5 ]
*
* mv = accumulator( 3.0 );
* // returns [ 0.0, 19.0 ]
*
* mv = accumulator( 5.0 );
* // returns [ 1.25, ~18.92 ]
*
* mv = accumulator();
* // returns [ 1.25, ~18.92 ]
*/

// MODULES //

var incrmeanvar = require( './main.js' );


// EXPORTS //

module.exports = incrmeanvar;
