/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Compute a sum of absolute values incrementally, ignoring `NaN` values.
*
* @module @stdlib/stats/incr/nansumabs
*
* @example
* var incrnansumabs = require( '@stdlib/stats/incr/nansumabs' );
*
* var accumulator = incrnansumabs();
*
* var sum = accumulator();
* // returns null
*
* sum = accumulator( 2.0 );
* // returns 2.0
*
* sum = accumulator( NaN );
* // returns 2.0
*
* sum = accumulator( -5.0 );
* // returns 7.0
*
* sum = accumulator();
* // returns 7.0
*/

// MODULES //

var incrnansumabs = require( './main.js' );


// EXPORTS //

module.exports = incrnansumabs;
