/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Create an iterator which returns indices for use in indexing into an ndarray having a specified shape.
*
* @module @stdlib/ndarray/iter/indices
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var nditerIndices = require( '@stdlib/ndarray/iter/indices' );
*
* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
* // returns <ndarray>
*
* var iter = nditerIndices( x.shape );
*
* var v = iter.next().value;
* // returns [ 0, 0, 0 ]
*
* v = iter.next().value;
* // returns [ 0, 0, 1 ]
*
* v = iter.next().value;
* // returns [ 0, 1, 0 ]
*
* // ...
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
