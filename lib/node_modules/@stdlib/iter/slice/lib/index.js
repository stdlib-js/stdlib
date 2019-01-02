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
* Create an iterator which returns a subsequence of iterated values from a provided iterator.
*
* @module @stdlib/iter/slice
*
* @example
* var randu = require( '@stdlib/random/iter/randu' );
* var iterSlice = require( '@stdlib/iter/slice' );
*
* var iter = iterSlice( randu(), 10, 20 );
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

var iterSlice = require( './main.js' );


// EXPORTS //

module.exports = iterSlice;
