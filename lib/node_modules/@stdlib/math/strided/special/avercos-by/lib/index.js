/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Compute the inverse versed cosine of each element retrieved from an input strided array `x` via a callback function and assign each result to an element in an output strided array `y`.
*
* @module @stdlib/math/strided/special/avercos-by
*
* @example
* var avercosBy = require( '@stdlib/math/strided/special/avercos-by' );
*
* function accessor( v ) {
*     return v;
* }
*
* var x = [ 0.0, -1.57, -0.5, -1.0, -1.25 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* avercosBy( x.length, x, 1, y, 1, accessor );
*
* console.log( y );
* // => [ 0.0, ~2.177, ~1.047, ~1.571, ~1.823 ]
*
* @example
* var avercosBy = require( '@stdlib/math/strided/special/avercos-by' );
*
* function accessor( v ) {
*     return v;
* }
*
* var x = [ 0.0, -1.57, -0.5, -1.0, -1.25 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* avercosBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
*
* console.log( y );
* // => [ 0.0, ~2.177, ~1.047, ~1.571, ~1.823 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
