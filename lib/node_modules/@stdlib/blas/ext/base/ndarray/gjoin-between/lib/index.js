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
* Return a string by joining one-dimensional ndarray elements using a specified separator for each pair of consecutive elements.
*
* @module @stdlib/blas/ext/base/ndarray/gjoin-between
*
* @example
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var gjoinBetween = require( '@stdlib/blas/ext/base/ndarray/gjoin-between' );
*
* var xbuf = [ 1, 2, 3, 4 ];
* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var prefix = scalar2ndarray( 'op: ', {
*     'dtype': 'generic'
* });
*
* var suffix = scalar2ndarray( '', {
*     'dtype': 'generic'
* });
*
* var sbuf = [ ' + ', ' - ', ' != ' ];
* var separators = new ndarray( 'generic', sbuf, [ 3 ], [ 1 ], 0, 'row-major' );
*
* var v = gjoinBetween( [ x, prefix, suffix, separators ] );
* // returns 'op: 1 + 2 - 3 != 4'
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
