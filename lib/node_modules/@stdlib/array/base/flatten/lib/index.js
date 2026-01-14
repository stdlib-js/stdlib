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
* Flatten an n-dimensional nested array.
*
* @module @stdlib/array/base/flatten
*
* @example
* var flatten = require( '@stdlib/array/base/flatten' );
*
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var out = flatten( x, [ 2, 2 ], false );
* // returns [ 1, 2, 3, 4 ]
*
* @example
* var flatten = require( '@stdlib/array/base/flatten' );
*
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var out = flatten( x, [ 2, 2 ], true );
* // returns [ 1, 3, 2, 4 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var flatten = require( '@stdlib/array/base/flatten' );
*
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var out = new Float64Array( 4 );
* var y = flatten.assign( x, [ 2, 2 ], true, out, 1, 0 );
* // returns <Float64Array>[ 1, 3, 2, 4 ]
*
* var bool = ( y === out );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;
