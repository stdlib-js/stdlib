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
* Laplace distribution differential entropy.
*
* @module @stdlib/stats/base/dists/laplace/entropy
*
* @example
* var entropy = require( '@stdlib/stats/base/dists/laplace/entropy' );
*
* var y = entropy( 0.0, 1.0 );
* // returns ~1.693
*
* y = entropy( 4.0, 2.0 );
* // returns ~2.386
*/

// MODULES //

var entropy = require( './entropy.js' );


// EXPORTS //

module.exports = entropy;
