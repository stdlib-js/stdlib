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
* Compute the cumulative minimum absolute value of single-precision floating-point strided array elements.
*
* @module @stdlib/stats/base/scuminabs
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var scuminabs = require( '@stdlib/stats/base/scuminabs' );
*
* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
* var y = new Float32Array( x.length );
*
* scuminabs( x.length, x, 1, y, 1 );
* // y => <Float32Array>[ 1.0, 1.0, 1.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var scuminabs = require( '@stdlib/stats/base/scuminabs' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
* var y = new Float32Array( x.length );
*
* scuminabs.ndarray( 4, x, 2, 1, y, 1, 0 );
* // y => <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var scuminabs;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	scuminabs = main;
} else {
	scuminabs = tmp;
}


// EXPORTS //

module.exports = scuminabs;

// exports: { "ndarray": "scuminabs.ndarray" }
