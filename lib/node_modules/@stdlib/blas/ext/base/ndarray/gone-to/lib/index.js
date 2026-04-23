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
* Fill a one-dimensional ndarray with linearly spaced numeric elements which increment by `1` starting from one.
*
* @module @stdlib/blas/ext/base/ndarray/gone-to
*
* @example
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var goneTo = require( '@stdlib/blas/ext/base/ndarray/gone-to' );
*
* var xbuf = [ 0.0, 0.0, 0.0, 0.0 ];
* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
* // returns <ndarray>[ 0.0, 0.0, 0.0, 0.0 ]
*
* var out = goneTo( [ x ] );
* // returns <ndarray>[ 1.0, 2.0, 3.0, 4.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
