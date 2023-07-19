/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Create an iterator which generates a list of all continued fraction terms which can be obtained given the precision of `x`.
*
* @module @stdlib/math/iter/sequences/continued-fraction
*
* @example
* var iterContinuedFractionSeq = require( '@stdlib/math/iter/sequences/continued-fraction' );
*
* var iter = iterContinuedFractionSeq( 3.245 );
*
* var v = iter.next().value;
* // returns 3
*
* v = iter.next().value;
* // returns 4
*
* v = iter.next().value;
* // returns 12
*
* v = iter.next().value;
* // returns 4
*
* var bool = iter.next().done;
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
