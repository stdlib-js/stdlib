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
* Create an iterator from a strided array-like value.
*
* @module @stdlib/array/to-strided-iterator
*
* @example
* var stridedarray2iterator = require( '@stdlib/array/to-strided-iterator' );
*
* var values = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
*
* var N = 4;
* var stride = -2;
* var offset = 6;
*
* var iter = stridedarray2iterator( N, values, stride, offset );
*
* var v = iter.next().value;
* // returns 7
*
* v = iter.next().value;
* // returns 5
*
* v = iter.next().value;
* // returns 3
*
* // ...
*/

// MODULES //

var iterator = require( './main.js' );


// EXPORTS //

module.exports = iterator;
