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
* Create an iterator which returns evenly spaced numbers on a log scale.
*
* @module @stdlib/iter/logspace
*
* @example
* var iterLogspace = require( '@stdlib/iter/logspace' );
*
* var iter = iterLogspace( 0, 3, 4 );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 10
*
* v = iter.next().value;
* // returns 100
*
* // ...
*/

// MODULES //

var iterator = require( './main.js' );


// EXPORTS //

module.exports = iterator;
