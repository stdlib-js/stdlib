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
* LAPACK routine to return an updated sum of squares represented in scaled form.
*
* @module @stdlib/lapack/base/dlassq
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dlassq = require( '@stdlib/lapack/base/dlassq' );
*
* var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var out = dlassq( X.length, X, 1, 1.0, 0.0 );
* // returns <Float64Array>[ 1.0, 30.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dlassq = require( '@stdlib/lapack/base/dlassq' );
*
* var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var out = new Float64Array( [ 0.0, 0.0 ] );
*
* dlassq.ndarray( X.length, X, 1, 0, 1.0, 0.0, out, 1, 0 );
* // out => <Float64Array>[ 1.0, 30.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dlassq;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dlassq = main;
} else {
	dlassq = tmp;
}


// EXPORTS //

module.exports = dlassq;
