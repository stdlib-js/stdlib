/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Create an iterator which performs element-wise multiplication of two or more iterators.
*
* @module @stdlib/math/iter/ops/multiply
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
* var iterMultiply = require( '@stdlib/math/iter/ops/multiply' );
*
* var it1 = array2iterator( [ 1.0, 2.0 ] );
* var it2 = array2iterator( [ 3.0, 4.0 ] );
*
* var iter = iterMultiply( it1, it2 );
*
* var v = iter.next().value;
* // returns 3.0
*
* v = iter.next().value;
* // returns 8.0
*
* var bool = iter.next().done;
* // returns true
*/

// MODULES //

var iterMultiply = require( './main.js' );


// EXPORTS //

module.exports = iterMultiply;
