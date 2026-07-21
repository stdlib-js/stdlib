/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Return a typed array constructor for creating typed arrays having a specified byte order.
*
* @module @stdlib/array/fixed-endian-factory
*
* @example
* var factory = require( '@stdlib/array/fixed-endian-factory' );
*
* var Float64ArrayFE = factory( 'float64' );
*
* var arr = new Float64ArrayFE( 'little-endian' );
* // returns <Float64ArrayFE>
*
* var len = arr.length;
* // returns 0
*
* @example
* var factory = require( '@stdlib/array/fixed-endian-factory' );
*
* var Float64ArrayFE = factory( 'float64' );
*
* var arr = new Float64ArrayFE( 'little-endian', 2 );
* // returns <Float64ArrayFE>
*
* var len = arr.length;
* // returns 2
*
* @example
* var factory = require( '@stdlib/array/fixed-endian-factory' );
*
* var Float64ArrayFE = factory( 'float64' );
*
* var arr = new Float64ArrayFE( 'little-endian', [ 1.0 ] );
* // returns <Float64ArrayFE>
*
* var len = arr.length;
* // returns 1
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var factory = require( '@stdlib/array/fixed-endian-factory' );
*
* var Float64ArrayFE = factory( 'float64' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new Float64ArrayFE( 'little-endian', buf );
* // returns <Float64ArrayFE>
*
* var len = arr.length;
* // returns 2
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var factory = require( '@stdlib/array/fixed-endian-factory' );
*
* var Float64ArrayFE = factory( 'float64' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new Float64ArrayFE( 'little-endian', buf, 8 );
* // returns <Float64ArrayFE>
*
* var len = arr.length;
* // returns 1
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var factory = require( '@stdlib/array/fixed-endian-factory' );
*
* var Float64ArrayFE = factory( 'float64' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = new Float64ArrayFE( 'little-endian', buf, 8, 2 );
* // returns <Float64ArrayFE>
*
* var len = arr.length;
* // returns 2
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
