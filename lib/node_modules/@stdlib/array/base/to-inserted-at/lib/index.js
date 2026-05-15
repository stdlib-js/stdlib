/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Return a new array containing every element from an input array and with a provided value inserted at a specified index.
*
* @module @stdlib/array/base/to-inserted-at
*
* @example
* var toInsertedAt = require( '@stdlib/array/base/to-inserted-at' );
*
* var x = [ 1, 2, 3, 4 ];
*
* var v = toInsertedAt( x, 0, 5 );
* // returns [ 5, 1, 2, 3, 4 ]
*
* v = toInsertedAt( x, -2, -1 );
* // returns [ 1, 2, 3, -1, 4 ]
*
* @example
* var toInsertedAt = require( '@stdlib/array/base/to-inserted-at' );
*
* var x = [ 1, 2, 3, 4 ];
*
* var out = [ 0, 0, 0, 0 ];
* var arr = toInsertedAt.assign( x, 0, 5, out, 1, 0 );
* // returns [ 5, 1, 2, 3, 4 ]
*
* var bool = ( arr === out );
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
