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
* Return a string by joining strided array elements using a specified separator for each pair of consecutive elements.
*
* @module @stdlib/blas/ext/base/gjoin-between
*
* @example
* var gjoinBetween = require( '@stdlib/blas/ext/base/gjoin-between' );
*
* var x = [ 1, 2, 3, 4 ];
* var sep = [ ' + ', ' - ', ' != ' ];
*
* var str = gjoinBetween( x.length, 'op: ', '', x, 1, sep, 1 );
* // returns 'op: 1 + 2 - 3 != 4'
*
* @example
* var gjoinBetween = require( '@stdlib/blas/ext/base/gjoin-between' );
*
* var x = [ 1, 2, 3, 4 ];
* var sep = [ ' + ', ' - ', ' != ' ];
*
* var str = gjoinBetween.ndarray( x.length, 'op: ', '', x, 1, 0, sep, 1, 0 );
* // returns 'op: 1 + 2 - 3 != 4'
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
