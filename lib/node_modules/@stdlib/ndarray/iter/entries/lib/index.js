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
* Create an iterator which returns `[index, value]` pairs for each element in a provided ndarray.
*
* @module @stdlib/ndarray/iter/entries
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var nditerEntries = require( '@stdlib/ndarray/iter/entries' );
*
* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
* // returns <ndarray>
*
* var iter = nditerEntries( x );
*
* var v = iter.next().value;
* // returns [ [ 0, 0, 0 ], 1 ]
*
* v = iter.next().value;
* // returns [ [ 0, 0, 1 ], 2 ]
*
* v = iter.next().value;
* // returns [ [ 0, 1, 0 ], 3 ]
*
* // ...
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
