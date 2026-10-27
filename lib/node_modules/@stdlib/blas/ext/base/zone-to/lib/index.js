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
* Fill a double-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from one.
*
* @module @stdlib/blas/ext/base/zone-to
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var zoneTo = require( '@stdlib/blas/ext/base/zone-to' );
*
* var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* zoneTo( x.length, x, 1 );
* // x => <Complex128Array>[ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var zoneTo = require( '@stdlib/blas/ext/base/zone-to' );
*
* var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* zoneTo.ndarray( x.length, x, 1, 0 );
* // x => <Complex128Array>[ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0, 0.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var zoneTo;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	zoneTo = main;
} else {
	zoneTo = tmp;
}


// EXPORTS //

module.exports = zoneTo;

// exports: { "ndarray": "zoneTo.ndarray" }
