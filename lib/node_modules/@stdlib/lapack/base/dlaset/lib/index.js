/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* LAPACK routine to set the off-diagonal elements and the diagonal elements of a double-precision floating-point matrix to specified values.
*
* @module @stdlib/lapack/base/dlaset
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dlaset = require( '@stdlib/lapack/base/dlaset' );
*
* var A = new Float64Array( 4 );
*
* dlaset( 'row-major', 'all', 2, 2, 2.0, 1.0, A, 2 );
* // A => <Float64Array>[ 1.0, 2.0, 2.0, 1.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dlaset = require( '@stdlib/lapack/base/dlaset' );
*
* var A = new Float64Array( 4 );
*
* dlaset.ndarray( 'all', 2, 2, 2.0, 1.0, A, 2, 1, 0 );
* // A => <Float64Array>[ 1.0, 2.0, 2.0, 1.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dlaset;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dlaset = main;
} else {
	dlaset = tmp;
}


// EXPORTS //

module.exports = dlaset;

// exports: { "ndarray": "dlaset.ndarray" }
