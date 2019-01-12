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
* Create an iterator which invokes a function for each iterated value.
*
* @module @stdlib/iter/map
*
* @example
* var randu = require( '@stdlib/random/iter/randu' );
* var iterMap = require( '@stdlib/iter/map' );
*
* function transform( v ) {
*     return v * 10.0;
* }
*
* var iter = iterMap( randu(), transform );
*
* var r = iter.next().value;
* // returns <number>
*
* r = iter.next().value;
* // returns <number>
*
* r = iter.next().value;
* // returns <number>
*
* // ...
*/

// MODULES //

var iterMap = require( './main.js' );


// EXPORTS //

module.exports = iterMap;
