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
* Hypergeometric distribution excess kurtosis.
*
* @module @stdlib/stats/base/dists/hypergeometric/kurtosis
*
* @example
* var kurtosis = require( '@stdlib/stats/base/dists/hypergeometric/kurtosis' );
*
* var v = kurtosis( 16, 11, 4 );
* // returns ~-0.326
*
* v = kurtosis( 4, 2, 2 );
* // returns 0.0
*/

// MODULES //

var kurtosis = require( './kurtosis.js' );


// EXPORTS //

module.exports = kurtosis;
