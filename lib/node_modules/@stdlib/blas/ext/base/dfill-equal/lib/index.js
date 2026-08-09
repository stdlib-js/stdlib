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
* Replace double-precision floating-point strided array elements equal to a provided search element with a specified scalar constant.
*
* @module @stdlib/blas/ext/base/dfill-equal
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dfillEqual = require( '@stdlib/blas/ext/base/dfill-equal' );
*
* var x = new Float64Array( [ 0.0, 0.0, 1.0, 0.0 ] );
*
* dfillEqual( x.length, 0.0, 5.0, x, 1 );
* // x => <Float64Array>[ 5.0, 5.0, 1.0, 5.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dfillEqual = require( '@stdlib/blas/ext/base/dfill-equal' );
*
* var x = new Float64Array( [ 0.0, 0.0, 1.0, 0.0 ] );
*
* dfillEqual.ndarray( x.length, 0.0, 5.0, x, 1, 0 );
* // x => <Float64Array>[ 5.0, 5.0, 1.0, 5.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dfillEqual;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dfillEqual = main;
} else {
	dfillEqual = tmp;
}


// EXPORTS //

module.exports = dfillEqual;

// exports: { "ndarray": "dfillEqual.ndarray" }
