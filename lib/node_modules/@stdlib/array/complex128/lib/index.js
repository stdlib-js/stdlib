/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* 128-bit complex number array.
*
* @module @stdlib/array/complex128
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var arr = new Complex128Array();
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 0
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var arr = new Complex128Array( 2 );
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 2
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var arr = new Complex128Array( [ 1.0, -1.0 ] );
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 1
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = new Complex128Array( buf );
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 2
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = new Complex128Array( buf, 16 );
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 2
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var buf = new ArrayBuffer( 64 );
* var arr = new Complex128Array( buf, 16, 2 );
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 2
*/

// MODULES //

var Complex128Array = require( './main.js' );


// EXPORTS //

module.exports = Complex128Array;
