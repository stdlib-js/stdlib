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
* Fill a one-dimensional double-precision complex floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from one.
*
* @module @stdlib/blas/ext/base/ndarray/zone-to
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var zoneTo = require( '@stdlib/blas/ext/base/ndarray/zone-to' );
*
* var xbuf = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
* var x = new ndarray( 'complex128', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var out = zoneTo( [ x ] );
* // returns <ndarray>[ <Complex128>[ 1.0, 0.0 ], <Complex128>[ 2.0, 0.0 ], <Complex128>[ 3.0, 0.0 ], <Complex128>[ 4.0, 0.0 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
