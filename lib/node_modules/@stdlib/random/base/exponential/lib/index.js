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
* Exponentially distributed pseudorandom numbers.
*
* @module @stdlib/random/base/exponential
*
* @example
* var exponential = require( '@stdlib/random/base/exponential' );
*
* var v = exponential( 4.0 );
* // returns <number>
*
* @example
* var factory = require( '@stdlib/random/base/exponential' ).factory;
*
* var exponential = factory( 4.0, {
*     'seed': 297
* });
*
* var v = exponential();
* // returns <number>
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var exponential = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( exponential, 'factory', factory );


// EXPORTS //

module.exports = exponential;
