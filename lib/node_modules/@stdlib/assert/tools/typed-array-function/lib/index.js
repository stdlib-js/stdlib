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
* Return a function which tests if every element in a typed array passes a test condition.
*
* @module @stdlib/assert/tools/typed-array-function
*
* @example
* var isOdd = require( '@stdlib/math/base/assert/is-odd' );
* var typedarrayfcn = require( '@stdlib/assert/tools/typed-array-function' );
*
* var arr1 = new Int32Array( [ 1, 3, 5, 7 ] );
* var arr2 = new Int32Array( [ 3, 5, 6, 8 ] );
*
* var f = typedarrayfcn( isOdd );
*
* var bool = f( arr1 );
* // returns true
*
* bool = f( arr2 );
* // returns false
*/

// MODULES //

var typedarrayfcn = require( './typedarrayfcn.js' );


// EXPORTS //

module.exports = typedarrayfcn;
