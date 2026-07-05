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
* Return the index of the first element in a strided array equal to a corresponding element in another strided array.
*
* @module @stdlib/blas/ext/base/dfirst-index-equal
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dfirstIndexEqual = require( '@stdlib/blas/ext/base/dfirst-index-equal' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Float64Array( [ 0.0, 0.0, 3.0, 0.0 ] );
*
* var idx = dfirstIndexEqual( 4, x, 1, y, 1 );
* // returns 2
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dfirstIndexEqual = require( '@stdlib/blas/ext/base/dfirst-index-equal' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Float64Array( [ 0.0, 0.0, 3.0, 0.0 ] );
*
* var idx = dfirstIndexEqual.ndarray( 4, x, 1, 0, y, 1, 0 );
* // returns 2
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dfirstIndexEqual;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dfirstIndexEqual = main;
} else {
	dfirstIndexEqual = tmp;
}


// EXPORTS //

module.exports = dfirstIndexEqual;

// exports: { "ndarray": "dfirstIndexEqual.ndarray" }
