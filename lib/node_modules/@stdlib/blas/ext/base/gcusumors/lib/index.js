/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Compute the cumulative sum of strided array elements using ordinary recursive summation.
*
* @module @stdlib/blas/ext/base/gcusumors
*
* @example
* var gcusumors = require( '@stdlib/blas/ext/base/gcusumors' );
*
* var x = [ 1.0, -2.0, 2.0 ];
* var y = [ 0.0, 0.0, 0.0 ];
*
* gcusumors( x.length, 0.0, x, 1, y, 1 );
* // y => [ 1.0, -1.0, 1.0 ]
*
* @example
* var floor = require( '@stdlib/math/base/special/floor' );
* var gcusumors = require( '@stdlib/blas/ext/base/gcusumors' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
* var N = floor( x.length / 2 );
*
* gcusumors.ndarray( N, 0.0, x, 2, 1, y, 1, 0 );
* // y => [ 1.0, -1.0, 1.0, 5.0, 0.0, 0.0, 0.0, 0.0 ]
*/

// MODULES //

var gcusumors = require( './main.js' );


// EXPORTS //

module.exports = gcusumors;
