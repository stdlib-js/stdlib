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
* Create an iterator which replaces all values from a provided iterator from a start index to an end index with a static value.
*
* @module @stdlib/iter/fill
*
* @example
* var randu = require( '@stdlib/random/iter/randu' );
* var iterFill = require( '@stdlib/iter/fill' );
*
* var iter = iterFill( randu(), 3.14, 0, 2 );
*
* var r = iter.next().value;
* // returns 3.14
*
* r = iter.next().value;
* // returns 3.14
*
* r = iter.next().value;
* // returns <number>
*
* // ...
*/

// MODULES //

var iterFill = require( './main.js' );


// EXPORTS //

module.exports = iterFill;
