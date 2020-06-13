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
* Fill a double-precision floating-point strided array with a specified scalar constant.
*
* @module @stdlib/blas/ext/base/dfill
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dfill = require( '@stdlib/blas/ext/base/dfill' );
*
* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* dfill( x.length, 5.0, x, 1 );
* // x => <Float64Array>[ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dfill = require( '@stdlib/blas/ext/base/dfill' );
*
* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* dfill.ndarray( x.length, 5.0, x, 1, 0 );
* // x => <Float64Array>[ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var dfill = require( './main.js' );


// MAIN //

var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( !(tmp instanceof Error) ) {
	dfill = tmp;
}


// EXPORTS //

module.exports = dfill;
