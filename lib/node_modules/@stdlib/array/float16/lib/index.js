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
* 16-bit floating-point number array constructor.
*
* @module @stdlib/array/float16
*
* @example
* var Float16Array = require( '@stdlib/array/float16' );
*
* var arr = new Float16Array();
* // returns <Float16Array>
*
* var len = arr.length;
* // returns 0
*
* @example
* var Float16Array = require( '@stdlib/array/float16' );
*
* var arr = new Float16Array( 2 );
* // returns <Float16Array>
*
* var len = arr.length;
* // returns 2
*
* @example
* var Float16Array = require( '@stdlib/array/float16' );
*
* var arr = new Float16Array( [ 1.0, 2.0 ] );
* // returns <Float16Array>
*
* var len = arr.length;
* // returns 2
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var Float16Array = require( '@stdlib/array/float16' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new Float16Array( buf );
* // returns <Float16Array>
*
* var len = arr.length;
* // returns 8
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var Float16Array = require( '@stdlib/array/float16' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new Float16Array( buf, 8 );
* // returns <Float16Array>
*
* var len = arr.length;
* // returns 4
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var Float16Array = require( '@stdlib/array/float16' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = new Float16Array( buf, 8, 2 );
* // returns <Float16Array>
*
* var len = arr.length;
* // returns 2
*/

// MODULES //

var hasFloat16ArraySupport = require( '@stdlib/assert/has-float16array-support' );
var polyfill = require( './polyfill' );
var builtin = require( './main.js' );


// MAIN //

var ctor;
if ( hasFloat16ArraySupport() ) {
	ctor = builtin;
} else {
	ctor = polyfill;
}


// EXPORTS //

module.exports = ctor;
