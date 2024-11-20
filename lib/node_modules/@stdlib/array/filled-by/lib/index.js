/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Create a filled array according to a provided callback function.
*
* @module @stdlib/array/filled-by
*
* @example
* var filledarrayBy = require( '@stdlib/array/filled-by' );
*
* var arr = filledarrayBy();
* // returns <Float64Array>
*
* @example
* var filledarrayBy = require( '@stdlib/array/filled-by' );
*
* function clbk() {
*     return 1.0;
* }
*
* var arr = filledarrayBy( 2, clbk );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var filledarrayBy = require( '@stdlib/array/filled-by' );
*
* function clbk() {
*     return 1.0;
* }
*
* var arr = filledarrayBy( 2, 'float32', clbk );
* // returns <Float32Array>[ 1.0, 1.0 ]
*
* @example
* var filledarrayBy = require( '@stdlib/array/filled-by' );
*
* function clbk() {
*     return 1.0;
* }
*
* var arr = filledarrayBy( 2, 'generic', clbk );
* // returns [ 1.0, 1.0 ]
*
* @example
* var filledarrayBy = require( '@stdlib/array/filled-by' );
*
* function clbk() {
*     return 1.0;
* }
*
* var arr = filledarrayBy( [ 0.5, 0.5 ], clbk );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var filledarrayBy = require( '@stdlib/array/filled-by' );
*
* function clbk() {
*     return 1;
* }
*
* var arr = filledarrayBy( [ 5, -3 ], 'int32', clbk );
* // returns <Int32Array>[ 1, 1 ]
*
* @example
* var filledarrayBy = require( '@stdlib/array/filled-by' );
*
* function clbk1() {
*     return 10;
* }
*
* function clbk2() {
*     return 1.0;
* }
*
* var arr1 = filledarrayBy( [ 5, 3 ], 'int32', clbk1 );
* var arr2 = filledarrayBy( arr1, clbk2 );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var filledarrayBy = require( '@stdlib/array/filled-by' );
*
* function clbk1() {
*     return 1.0;
* }
*
* function clbk2() {
*     return 2;
* }
*
* var arr1 = filledarrayBy( [ 5, 3 ], 'int32', clbk1 );
* var arr2 = filledarrayBy( arr1, 'uint32', clbk2 );
* // returns <Uint32Array>[ 2, 2 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var filledarrayBy = require( '@stdlib/array/filled-by' );
*
* function clbk() {
*     return 1.0;
* }
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarrayBy( buf, clbk );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var filledarrayBy = require( '@stdlib/array/filled-by' );
*
* function clbk() {
*     return 1.0;
* }
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarrayBy( buf, 'float32', clbk );
* // returns <Float32Array>[ 1.0, 1.0, 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var filledarrayBy = require( '@stdlib/array/filled-by' );
*
* function clbk() {
*     return 1.0;
* }
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarrayBy( buf, 8, clbk );
* // returns <Float64Array>[ 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var filledarrayBy = require( '@stdlib/array/filled-by' );
*
* function clbk() {
*     return 1.0;
* }
*
* var buf = new ArrayBuffer( 16 );
* var arr = filledarrayBy( buf, 8, 'float32', clbk );
* // returns <Float32Array>[ 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var filledarrayBy = require( '@stdlib/array/filled-by' );
*
* function clbk() {
*     return 1.0;
* }
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarrayBy( buf, 8, 2, clbk );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var filledarrayBy = require( '@stdlib/array/filled-by' );
*
* function clbk() {
*     return 1;
* }
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarrayBy( buf, 8, 2, 'int32', clbk );
* // returns <Int32Array>[ 1, 1 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
