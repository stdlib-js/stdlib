/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Create an iterator which iteratively evaluates the Bessel function of the second kind of order one.
*
* @module @stdlib/math/iter/special/bessely1
*
* @example
* var randu = require( '@stdlib/random/iter/randu' );
* var iterBessely1 = require( '@stdlib/math/iter/special/bessely1' );
*
* var iter = iterBessely1( randu() );
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

var iterator = require( './main.js' );


// EXPORTS //

module.exports = iterator;
