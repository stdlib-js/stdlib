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
* Create a vector (i.e., a one-dimensional ndarray).
*
* @module @stdlib/ndarray/vector/ctor
*
* @example
* var Vector = require( '@stdlib/ndarray/vector/ctor' );
*
* var v = new Vector();
* // returns <ndarray>
*
* var len = v.length;
* // returns 0
*
* var dt = v.dtype;
* // returns 'float64'
*
* @example
* var Vector = require( '@stdlib/ndarray/vector/ctor' );
*
* var v = new Vector( 2 );
* // returns <ndarray>
*
* var len = v.length;
* // returns 2
*
* var dt = v.dtype;
* // returns 'float64'
*
* @example
* var Vector = require( '@stdlib/ndarray/vector/ctor' );
*
* var v = new Vector( [ 1.0, 2.0 ] );
* // returns <ndarray>
*
* var len = v.length;
* // returns 2
*
* var dt = v.dtype;
* // returns 'float64'
*
* @example
* var Vector = require( '@stdlib/ndarray/vector/ctor' );
*
* var v = new Vector( [ 1.0, 2.0 ], 'float32' );
* // returns <ndarray>
*
* var len = v.length;
* // returns 2
*
* var dt = v.dtype;
* // returns 'float32'
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var Vector = require( '@stdlib/ndarray/vector/ctor' );
*
* var buf = new ArrayBuffer( 32 );
* var v = new Vector( buf );
* // returns <ndarray>
*
* var len = v.length;
* // returns 4
*
* var dt = v.dtype;
* // returns 'float64'
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var Vector = require( '@stdlib/ndarray/vector/ctor' );
*
* var buf = new ArrayBuffer( 32 );
* var v = new Vector( buf, 16 );
* // returns <ndarray>
*
* var len = v.length;
* // returns 2
*
* var dt = v.dtype;
* // returns 'float64'
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var Vector = require( '@stdlib/ndarray/vector/ctor' );
*
* var buf = new ArrayBuffer( 64 );
* var v = new Vector( buf, 16, 2 );
* // returns <ndarray>
*
* var len = v.length;
* // returns 2
*
* var dt = v.dtype;
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
