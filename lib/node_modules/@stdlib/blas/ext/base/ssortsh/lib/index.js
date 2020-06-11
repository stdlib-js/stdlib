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
* Sort a single-precision floating-point strided array using Shellsort.
*
* @module @stdlib/blas/ext/base/ssortsh
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var ssortsh = require( '@stdlib/blas/ext/base/ssortsh' );
*
* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
*
* ssortsh( x.length, 1.0, x, 1 );
* // x => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var ssortsh = require( '@stdlib/blas/ext/base/ssortsh' );
*
* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
*
* ssortsh.ndarray( x.length, 1.0, x, 1, 0 );
* // x => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var ssortsh = require( './main.js' );


// MAIN //

var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( !(tmp instanceof Error) ) {
	ssortsh = tmp;
}


// EXPORTS //

module.exports = ssortsh;
