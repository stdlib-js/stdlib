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
* Return a new array with the element at the specified index replaced with a provided value.
*
* @module @stdlib/array/base/with
*
* @example
* var arrayWith = require( '@stdlib/array/base/with' );
*
* var x = [ 1, 2, 3, 4 ];
*
* var v = arrayWith( x, 0, 5 );
* // returns [ 5, 2, 3, 4 ]
*
* v = arrayWith( x, -2, -1 );
* // returns [ 1, 2, -1, 4 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
