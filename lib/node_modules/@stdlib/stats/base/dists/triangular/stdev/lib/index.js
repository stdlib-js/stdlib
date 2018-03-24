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
* Triangular distribution standard deviation.
*
* @module @stdlib/stats/base/dists/triangular/stdev
*
* @example
* var stdev = require( '@stdlib/stats/base/dists/triangular/stdev' );
*
* var v = stdev( 0.0, 1.0, 0.5 );
* // returns ~0.205
*
* v = stdev( 4.0, 12.0, 5.0 );
* // returns ~1.78
*
* v = stdev( 2.0, 8.0, 7.0 );
* // returns ~1.312
*/

// MODULES //

var stdev = require( './stdev.js' );


// EXPORTS //

module.exports = stdev;
