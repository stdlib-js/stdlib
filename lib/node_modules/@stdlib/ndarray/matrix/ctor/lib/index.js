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
* Create a matrix (i.e., a two-dimensional ndarray).
*
* @module @stdlib/ndarray/matrix/ctor
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var getShape = require( '@stdlib/ndarray/shape' );
* var matrix = require( '@stdlib/ndarray/matrix/ctor' );
*
* var v = matrix();
* // returns <ndarray>
*
* var sh = getShape( v );
* // returns [ 0, 0 ]
*
* var dt = String( getDType( v ) );
* // returns 'float64'
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var getShape = require( '@stdlib/ndarray/shape' );
* var matrix = require( '@stdlib/ndarray/matrix/ctor' );
*
* var v = matrix( 2, 2 );
* // returns <ndarray>
*
* var sh = getShape( v );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( v ) );
* // returns 'float64'
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var getShape = require( '@stdlib/ndarray/shape' );
* var matrix = require( '@stdlib/ndarray/matrix/ctor' );
*
* var v = matrix( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] );
* // returns <ndarray>
*
* var sh = getShape( v );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( v ) );
* // returns 'float64'
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var getShape = require( '@stdlib/ndarray/shape' );
* var matrix = require( '@stdlib/ndarray/matrix/ctor' );
*
* var v = matrix( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ], 'float32' );
* // returns <ndarray>
*
* var sh = getShape( v );
* // returns [ 2, 2 ]
*
* var dt = String( getDType( v ) );
* // returns 'float32'
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var getShape = require( '@stdlib/ndarray/shape' );
* var matrix = require( '@stdlib/ndarray/matrix/ctor' );
*
* var buf = new ArrayBuffer( 32 );
* var v = matrix( buf );
* // returns <ndarray>
*
* var sh = getShape( v );
* // returns [ 1, 4 ]
*
* var dt = String( getDType( v ) );
* // returns 'float64'
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var getShape = require( '@stdlib/ndarray/shape' );
* var matrix = require( '@stdlib/ndarray/matrix/ctor' );
*
* var buf = new ArrayBuffer( 32 );
* var v = matrix( buf, 16 );
* // returns <ndarray>
*
* var sh = getShape( v );
* // returns [ 1, 2 ]
*
* var dt = String( getDType( v ) );
* // returns 'float64'
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var getShape = require( '@stdlib/ndarray/shape' );
* var matrix = require( '@stdlib/ndarray/matrix/ctor' );
*
* var buf = new ArrayBuffer( 64 );
* var v = matrix( buf, 16, 2, 1 );
* // returns <ndarray>
*
* var sh = getShape( v );
* // returns [ 2, 1 ]
*
* var dt = String( getDType( v ) );
* // returns 'float64'
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var factory = require( './factory.js' );
var main = require( './main.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;

// exports: { "factory": "main.factory" }
