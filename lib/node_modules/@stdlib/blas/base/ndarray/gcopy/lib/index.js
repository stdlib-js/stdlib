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
* BLAS level 1 routine to copy values from a one-dimensional ndarray `x` into a one-dimensional ndarray `y`.
*
* @module @stdlib/blas/base/ndarray/gcopy
*
* @example
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var gcopy = require( '@stdlib/blas/base/ndarray/gcopy' );
*
* var xbuf = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var x = new ndarray( 'generic', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* var ybuf = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
* var y = new ndarray( 'generic', ybuf, [ 5 ], [ 1 ], 0, 'row-major' );
*
* var z = gcopy( [ x, y ] );
* // returns <ndarray>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*
* var bool = ( z === y );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
