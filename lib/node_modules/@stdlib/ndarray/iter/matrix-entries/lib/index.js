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
* Create an iterator which returns `[index, matrix]` pairs for each matrix in a stack of matrices.
*
* @module @stdlib/ndarray/iter/matrix-entries
*
* @example
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var array = require( '@stdlib/ndarray/array' );
* var nditerMatrixEntries = require( '@stdlib/ndarray/iter/matrix-entries' );
*
* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
* // returns <ndarray>
*
* var iter = nditerMatrixEntries( x );
*
* var v = iter.next().value;
* // returns [...]
*
* var idx = v[ 0 ];
* // returns [ 0, null, null ]
*
* var mat = ndarray2array( v[ 1 ] );
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*
* v = iter.next().value;
* // returns [...]
*
* idx = v[ 0 ];
* // returns [ 1, null, null ]
*
* mat = ndarray2array( v[ 1 ] );
* // returns [ [ 5, 6 ], [ 7, 8 ] ]
*
* // ...
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
