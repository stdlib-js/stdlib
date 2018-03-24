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
* Beta prime distribution excess kurtosis.
*
* @module @stdlib/stats/base/dists/betaprime/kurtosis
*
* @example
* var kurtosis = require( '@stdlib/stats/base/dists/betaprime/kurtosis' );
*
* var v = kurtosis( 2.0, 6.0 );
* // returns ~26.143
*
* v = kurtosis( 4.0, 12.0 );
* // returns ~5.764
*
* v = kurtosis( 12.0, 6.0 );
* // returns ~19.49
*/

// MODULES //

var kurtosis = require( './kurtosis.js' );


// EXPORTS //

module.exports = kurtosis;
