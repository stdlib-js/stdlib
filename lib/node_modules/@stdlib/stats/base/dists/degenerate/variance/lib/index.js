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
* Degenerate distribution variance.
*
* @module @stdlib/stats/base/dists/degenerate/variance
*
* @example
* var variance = require( '@stdlib/stats/base/dists/degenerate/variance' );
*
* var v = variance( 10.0 );
* // returns 0.0
*
* v = variance( -5.0 );
* // returns 0.0
*/

// MODULES //

var variance = require( './variance.js' );


// EXPORTS //

module.exports = variance;
