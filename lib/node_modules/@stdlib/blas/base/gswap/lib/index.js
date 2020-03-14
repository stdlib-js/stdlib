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
* BLAS level 1 routine to interchange vectors `x` and `y`.
*
* @module @stdlib/blas/base/gswap
*
* @example
* var gswap = require( '@stdlib/blas/base/gswap' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
*
* gswap( x.length, x, 1, y, 1 );
* // x => [ 6.0, 7.0, 8.0, 9.0, 10.0 ]
* // y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*
* @example
* var gswap = require( '@stdlib/blas/base/gswap' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
*
* gswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // x => [ 6.0, 7.0, 8.0, 9.0, 10.0 ]
* // y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var gswap = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( gswap, 'ndarray', ndarray );


// EXPORTS //

module.exports = gswap;
