/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* BLAS level 1 routine to apply a plane rotation.
*
* @module @stdlib/blas/base/drot
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var drot = require( '@stdlib/blas/base/drot' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
*
* drot( x.length, x, 1, y, 1, 0.8, 0.6 );
* // x => <Float64Array>[ ~4.4, ~5.8, 7.2, 8.6, 10.0 ]
* // y => <Float64Array>[ ~4.2, 4.4, 4.6, 4.8, 5.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var drot = require( '@stdlib/blas/base/drot' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
*
* drot.ndarray( 4, x, 1, 1, y, 1, 1, 0.8, 0.6 );
* // x => <Float64Array>[ 1.0, ~5.8, 7.2, 8.6, 10.0 ]
* // y => <Float64Array>[ 6.0, 4.4, ~4.6, ~4.8, 5.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var drot;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	drot = main;
} else {
	drot = tmp;
}


// EXPORTS //

module.exports = drot;

// exports: { "ndarray": "drot.ndarray" }
