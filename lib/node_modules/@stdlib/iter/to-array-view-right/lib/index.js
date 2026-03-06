/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Fill an array-like object view from right to left with values returned from an iterator.
*
* @module @stdlib/iter/to-array-view-right
*
* @example
* var randu = require( '@stdlib/random/iter/randu' );
* var Float64Array = require( '@stdlib/array/float64' );
* var iterator2arrayviewRight = require( '@stdlib/iter/to-array-view-right' );
*
* var iter = randu({
*     'iter': 10
* });
*
* var arr = iterator2arrayviewRight( iter, new Float64Array( 20 ), 5 );
* // returns <Float64Array>
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
