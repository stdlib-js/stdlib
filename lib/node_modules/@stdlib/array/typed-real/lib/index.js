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
* Create a typed array.
*
* @module @stdlib/array/typed-real
*
* @example
* var realarray = require( '@stdlib/array/typed-real' );
*
* var arr = realarray();
* // returns <Float64Array>
*
* @example
* var realarray = require( '@stdlib/array/typed-real' );
*
* var arr = realarray( 2 );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* @example
* var realarray = require( '@stdlib/array/typed-real' );
*
* var arr = realarray( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* @example
* var realarray = require( '@stdlib/array/typed-real' );
*
* var arr = realarray( [ 0.5, 0.5 ] );
* // returns <Float64Array>[ 0.5, 0.5 ]
*
* @example
* var realarray = require( '@stdlib/array/typed-real' );
*
* var arr = realarray( [ 5, -3 ], 'int32' );
* // returns <Int32Array>[ 5, -3 ]
*
* @example
* var realarray = require( '@stdlib/array/typed-real' );
*
* var arr1 = realarray( [ 5, 3 ], 'int32' );
* var arr2 = realarray( arr1 );
* // returns <Float64Array>[ 5.0, 3.0 ]
*
* @example
* var realarray = require( '@stdlib/array/typed-real' );
*
* var arr1 = realarray( [ 5, 3 ], 'int32' );
* var arr2 = realarray( arr1, 'uint32' );
* // returns <Uint32Array>[ 5, 3 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var realarray = require( '@stdlib/array/typed-real' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = realarray( buf );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var realarray = require( '@stdlib/array/typed-real' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = realarray( buf, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var realarray = require( '@stdlib/array/typed-real' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = realarray( buf, 8 );
* // returns <Float64Array>[ 0.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var realarray = require( '@stdlib/array/typed-real' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = realarray( buf, 8, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var realarray = require( '@stdlib/array/typed-real' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = realarray( buf, 8, 2 );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var realarray = require( '@stdlib/array/typed-real' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = realarray( buf, 8, 2, 'int32' );
* // returns <Int32Array>[ 0, 0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
