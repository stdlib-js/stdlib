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
* Create a typed array.
*
* @module @stdlib/array/typed
*
* @example
* var typedarray = require( '@stdlib/array/typed' );
*
* var arr = typedarray();
* // returns <Float64Array>
*
* @example
* var typedarray = require( '@stdlib/array/typed' );
*
* var arr = typedarray( 2 );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* @example
* var typedarray = require( '@stdlib/array/typed' );
*
* var arr = typedarray( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* @example
* var typedarray = require( '@stdlib/array/typed' );
*
* var arr = typedarray( [ 0.5, 0.5 ] );
* // returns <Float64Array>[ 0.5, 0.5 ]
*
* @example
* var typedarray = require( '@stdlib/array/typed' );
*
* var arr = typedarray( [ 5, -3 ], 'int32' );
* // returns <Int32Array>[ 5, -3 ]
*
* @example
* var typedarray = require( '@stdlib/array/typed' );
*
* var arr1 = typedarray( [ 5, 3 ], 'int32' );
* var arr2 = typedarray( arr1 );
* // returns <Float64Array>[ 5.0, 3.0 ]
*
* @example
* var typedarray = require( '@stdlib/array/typed' );
*
* var arr1 = typedarray( [ 5, 3 ], 'int32' );
* var arr2 = typedarray( arr1, 'uint32' );
* // returns <Uint32Array>[ 5, 3 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var typedarray = require( '@stdlib/array/typed' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = typedarray( buf );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var typedarray = require( '@stdlib/array/typed' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = typedarray( buf, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var typedarray = require( '@stdlib/array/typed' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = typedarray( buf, 8 );
* // returns <Float64Array>[ 0.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var typedarray = require( '@stdlib/array/typed' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = typedarray( buf, 8, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var typedarray = require( '@stdlib/array/typed' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = typedarray( buf, 8, 2 );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var typedarray = require( '@stdlib/array/typed' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = typedarray( buf, 8, 2, 'int32' );
* // returns <Int32Array>[ 0, 0 ]
*/

// MODULES //

var typedarray = require( './main.js' );


// EXPORTS //

module.exports = typedarray;
