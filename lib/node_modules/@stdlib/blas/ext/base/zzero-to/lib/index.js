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
* Fill a double-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from zero.
*
* @module @stdlib/blas/ext/base/zzero-to
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var zzeroTo = require( '@stdlib/blas/ext/base/zzero-to' );
*
* var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* zzeroTo( x.length, x, 1 );
* // x => <Complex128Array>[ 0.0, 0.0, 1.0, 0.0, 2.0, 0.0, 3.0, 0.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var zzeroTo = require( '@stdlib/blas/ext/base/zzero-to' );
*
* var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* zzeroTo.ndarray( x.length, x, 1, 0 );
* // x => <Complex128Array>[ 0.0, 0.0, 1.0, 0.0, 2.0, 0.0, 3.0, 0.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var zzeroTo;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	zzeroTo = main;
} else {
	zzeroTo = tmp;
}


// EXPORTS //

module.exports = zzeroTo;

// exports: { "ndarray": "zzeroTo.ndarray" }
