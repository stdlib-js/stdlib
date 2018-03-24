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
* Discrete uniform distribution standard deviation.
*
* @module @stdlib/stats/base/dists/discrete-uniform/stdev
*
* @example
* var stdev = require( '@stdlib/stats/base/dists/discrete-uniform/stdev' );
*
* var v = stdev( 0, 1 );
* // returns ~0.5
*
* v = stdev( 4, 12 );
* // returns ~2.582
*
* v = stdev( 2, 8 );
* // returns 2.0
*/

// MODULES //

var stdev = require( './stdev.js' );


// EXPORTS //

module.exports = stdev;
