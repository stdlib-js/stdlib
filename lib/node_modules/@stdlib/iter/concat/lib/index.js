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
* Create an iterator which iterates over the values of two or more iterators.
*
* @module @stdlib/iter/concat
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
* var iterConcat = require( '@stdlib/iter/concat' );
*
* var it1 = array2iterator( [ 1, 2 ] );
* var it2 = array2iterator( [ 3, 4 ] );
*
* var iter = iterConcat( it1, it2 );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 3
*
* v = iter.next().value;
* // returns 4
*
* var bool = iter.next().done;
* // returns true
*/

// MODULES //

var iterConcat = require( './main.js' );


// EXPORTS //

module.exports = iterConcat;
