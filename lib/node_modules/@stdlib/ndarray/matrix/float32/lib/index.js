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
* Create a single-precision floating-point matrix (i.e., a two-dimensional ndarray).
*
* @module @stdlib/ndarray/matrix/float32
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var Float32Matrix = require( '@stdlib/ndarray/matrix/float32' );
*
* var v = new Float32Matrix();
* // returns <ndarray>
*
* var len = getShape( v );
* // returns [ 0, 0 ]
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var Float32Matrix = require( '@stdlib/ndarray/matrix/float32' );
*
* var v = new Float32Matrix( [ 2, 2 ] );
* // returns <ndarray>
*
* var len = getShape( v );
* // returns [ 2, 2 ]
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var Float32Matrix = require( '@stdlib/ndarray/matrix/float32' );
*
* var v = new Float32Matrix( 2, 2 );
* // returns <ndarray>
*
* var len = getShape( v );
* // returns [ 2, 2 ]
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var Float32Matrix = require( '@stdlib/ndarray/matrix/float32' );
*
* var v = new Float32Matrix( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] );
* // returns <ndarray>
*
* var len = getShape( v );
* // returns [ 2, 2 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var getShape = require( '@stdlib/ndarray/shape' );
* var Float32Matrix = require( '@stdlib/ndarray/matrix/float32' );
*
* var buf = new ArrayBuffer( 32 );
* var v = new Float32Matrix( buf );
* // returns <ndarray>
*
* var len = getShape( v );
* // returns [ 1, 8 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var getShape = require( '@stdlib/ndarray/shape' );
* var Float32Matrix = require( '@stdlib/ndarray/matrix/float32' );
*
* var buf = new ArrayBuffer( 32 );
* var v = new Float32Matrix( buf, 16 );
* // returns <ndarray>
*
* var len = getShape( v );
* // returns [ 1, 4 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var getShape = require( '@stdlib/ndarray/shape' );
* var Float32Matrix = require( '@stdlib/ndarray/matrix/float32' );
*
* var buf = new ArrayBuffer( 64 );
* var v = new Float32Matrix( buf, 16, [ 2, 1 ] );
* // returns <ndarray>
*
* var len = getShape( v );
* // returns [ 2, 1 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var getShape = require( '@stdlib/ndarray/shape' );
* var Float32Matrix = require( '@stdlib/ndarray/matrix/float32' );
*
* var buf = new ArrayBuffer( 64 );
* var v = new Float32Matrix( buf, 16, 2, 1 );
* // returns <ndarray>
*
* var len = getShape( v );
* // returns [ 2, 1 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
