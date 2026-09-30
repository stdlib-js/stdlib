/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Return the index of the first element in a strided array which is almost equal to a corresponding element in another strided array.
*
* @module @stdlib/blas/ext/base/gfirst-index-almost-equal
*
* @example
* var gfirstIndexAlmostEqual = require( '@stdlib/blas/ext/base/gfirst-index-almost-equal' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 5.0, 4.0, 3.0, 2.0, 1.0 ];
*
* var idx = gfirstIndexAlmostEqual( x.length, 1, x, 1, y, 1 );
* // returns 2
*
* @example
* var gfirstIndexAlmostEqual = require( '@stdlib/blas/ext/base/gfirst-index-almost-equal' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 5.0, 4.0, 3.0, 2.0, 1.0 ];
*
* var idx = gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, y, 1, 0 );
* // returns 2
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
