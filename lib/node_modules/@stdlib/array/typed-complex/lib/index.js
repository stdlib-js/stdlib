/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Create a complex number typed array.
*
* @module @stdlib/array/typed-complex
*
* @example
* var complexarray = require( '@stdlib/array/typed-complex' );
*
* var arr = complexarray();
* // returns <Complex128Array>
*
* @example
* var complexarray = require( '@stdlib/array/typed-complex' );
*
* var arr = complexarray( 2 );
* // returns <Complex128Array>
*
* @example
* var complexarray = require( '@stdlib/array/typed-complex' );
*
* var arr = complexarray( 2, 'complex64' );
* // returns <Complex64Array>
*
* @example
* var complexarray = require( '@stdlib/array/typed-complex' );
*
* var arr = complexarray( [ 0.5, 0.5 ] );
* // returns <Complex128Array>
*
* @example
* var complexarray = require( '@stdlib/array/typed-complex' );
*
* var arr = complexarray( [ 5.0, -3.0 ], 'complex64' );
* // returns <Complex64Array>
*
* @example
* var complexarray = require( '@stdlib/array/typed-complex' );
*
* var arr1 = complexarray( [ 5.0, 3.0 ], 'complex64' );
* var arr2 = complexarray( arr1 );
* // returns <Complex128Array>
*
* @example
* var complexarray = require( '@stdlib/array/typed-complex' );
*
* var arr1 = complexarray( [ 5.0, 3.0 ], 'complex128' );
* var arr2 = complexarray( arr1, 'complex64' );
* // returns <Complex64Array>
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var complexarray = require( '@stdlib/array/typed-complex' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = complexarray( buf );
* // returns <Complex128Array>
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var complexarray = require( '@stdlib/array/typed-complex' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = complexarray( buf, 'complex64' );
* // returns <Complex64Array>
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var complexarray = require( '@stdlib/array/typed-complex' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = complexarray( buf, 16 );
* // returns <Complex128Array>
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var complexarray = require( '@stdlib/array/typed-complex' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = complexarray( buf, 16, 'complex64' );
* // returns <Complex64Array>
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var complexarray = require( '@stdlib/array/typed-complex' );
*
* var buf = new ArrayBuffer( 64 );
* var arr = complexarray( buf, 16, 2 );
* // returns <Complex128Array>
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var complexarray = require( '@stdlib/array/typed-complex' );
*
* var buf = new ArrayBuffer( 64 );
* var arr = complexarray( buf, 16, 2, 'complex64' );
* // returns <Complex64Array>
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
