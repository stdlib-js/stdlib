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
* Triangular distribution variance.
*
* @module @stdlib/stats/base/dists/triangular/variance
*
* @example
* var variance = require( '@stdlib/stats/base/dists/triangular/variance' );
*
* var v = variance( 0.0, 1.0, 0.5 );
* // returns ~0.042
*
* v = variance( 4.0, 12.0, 5.0 );
* // returns ~3.167
*
* v = variance( 2.0, 8.0, 7.0 );
* // returns ~1.722
*/

// MODULES //

var variance = require( './variance.js' );


// EXPORTS //

module.exports = variance;
