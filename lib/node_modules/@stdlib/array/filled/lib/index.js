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
* Create a filled array.
*
* @module @stdlib/array/filled
*
* @example
* var filledarray = require( '@stdlib/array/filled' );
*
* var arr = filledarray();
* // returns <Float64Array>
*
* @example
* var filledarray = require( '@stdlib/array/filled' );
*
* var arr = filledarray( 1.0, 2 );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var filledarray = require( '@stdlib/array/filled' );
*
* var arr = filledarray( 1.0, 2, 'float32' );
* // returns <Float32Array>[ 1.0, 1.0 ]
*
* @example
* var filledarray = require( '@stdlib/array/filled' );
*
* var arr = filledarray( 1.0, 2, 'generic' );
* // returns [ 1.0, 1.0 ]
*
* @example
* var filledarray = require( '@stdlib/array/filled' );
*
* var arr = filledarray( 1.0, [ 0.5, 0.5 ] );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var filledarray = require( '@stdlib/array/filled' );
*
* var arr = filledarray( 1, [ 5, -3 ], 'int32' );
* // returns <Int32Array>[ 1, 1 ]
*
* @example
* var filledarray = require( '@stdlib/array/filled' );
*
* var arr1 = filledarray( 10, [ 5, 3 ], 'int32' );
* var arr2 = filledarray( 1.0, arr1 );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var filledarray = require( '@stdlib/array/filled' );
*
* var arr1 = filledarray( 1, [ 5, 3 ], 'int32' );
* var arr2 = filledarray( 2, arr1, 'uint32' );
* // returns <Uint32Array>[ 2, 2 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var filledarray = require( '@stdlib/array/filled' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarray( 1.0, buf );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var filledarray = require( '@stdlib/array/filled' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarray( 1.0, buf, 'float32' );
* // returns <Float32Array>[ 1.0, 1.0, 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var filledarray = require( '@stdlib/array/filled' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarray( 1.0, buf, 8 );
* // returns <Float64Array>[ 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var filledarray = require( '@stdlib/array/filled' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarray( 1.0, buf, 8, 'float32' );
* // returns <Float32Array>[ 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var filledarray = require( '@stdlib/array/filled' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarray( 1.0, buf, 8, 2 );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var filledarray = require( '@stdlib/array/filled' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarray( 1, buf, 8, 2, 'int32' );
* // returns <Int32Array>[ 1, 1 ]
*/

// MODULES //

var filledarray = require( './main.js' );


// EXPORTS //

module.exports = filledarray;
