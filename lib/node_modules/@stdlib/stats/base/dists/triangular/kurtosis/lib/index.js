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
* Triangular distribution excess kurtosis.
*
* @module @stdlib/stats/base/dists/triangular/kurtosis
*
* @example
* var kurtosis = require( '@stdlib/stats/base/dists/triangular/kurtosis' );
*
* var v = kurtosis( 0.0, 1.0, 0.5 );
* // returns -0.6
*
* v = kurtosis( 4.0, 12.0, 5.0 );
* // returns -0.6
*
* v = kurtosis( 2.0, 8.0, 7.0 );
* // returns -0.6
*/

// MODULES //

var kurtosis = require( './kurtosis.js' );


// EXPORTS //

module.exports = kurtosis;
