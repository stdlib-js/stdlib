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
* Uniform distribution pseudorandom numbers.
*
* @module @stdlib/random/base/uniform
*
* @example
* var uniform = require( '@stdlib/random/base/uniform' );
*
* var v = uniform( 0.0, 1.0 );
* // returns <number>
*
* @example
* var factory = require( '@stdlib/random/base/uniform' ).factory;
* var uniform = factory( -5.0, 5.0, {
*     'seed': 297
* });
*
* var v = uniform();
* // returns <number>
*
* @example
* var factory = require( '@stdlib/random/base/uniform' ).factory;
* var uniform = factory({
*     'seed': 297
* });
*
* var v = uniform( -5.0, 5.0 );
* // returns <number>
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var uniform = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( uniform, 'factory', factory );


// EXPORTS //

module.exports = uniform;
