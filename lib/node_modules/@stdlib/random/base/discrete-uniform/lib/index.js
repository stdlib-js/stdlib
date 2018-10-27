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
* Discrete uniform distribution pseudorandom numbers.
*
* @module @stdlib/random/base/discrete-uniform
*
* @example
* var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
*
* var v = discreteUniform( 1, 10 );
* // returns <number>
*
* @example
* var factory = require( '@stdlib/random/base/discrete-uniform' ).factory;
* var discreteUniform = factory( -5, 5, {
*     'seed': 297
* });
*
* var v = discreteUniform();
* // returns <number>
*
* @example
* var factory = require( '@stdlib/random/base/discrete-uniform' ).factory;
* var discreteUniform = factory({
*     'seed': 297
* });
*
* var v = discreteUniform( -5, 5 );
* // returns <number>
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var discreteUniform = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( discreteUniform, 'factory', factory );


// EXPORTS //

module.exports = discreteUniform;
