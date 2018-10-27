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
* Hypergeometric distributed pseudorandom numbers.
*
* @module @stdlib/random/base/hypergeometric
*
* @example
* var hypergeometric = require( '@stdlib/random/base/hypergeometric' );
*
* var v = hypergeometric( 10, 10, 10 );
* // returns <number>
*
* @example
* var factory = require( '@stdlib/random/base/hypergeometric' ).factory;
* var hypergeometric = factory( 5, 3, 2, {
*     'seed': 297
* });
*
* var v = hypergeometric();
* // returns <number>
*
* @example
* var factory = require( '@stdlib/random/base/hypergeometric' ).factory;
* var hypergeometric = factory();
*
* var v = hypergeometric( 10, 2, 2 );
* // returns <number>
*
* @example
* var factory = require( '@stdlib/random/base/hypergeometric' ).factory;
* var hypergeometric = factory({
*     'seed': 297
* });
*
* var v = hypergeometric( 5, 3, 2 );
* // returns <number>
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var hypergeometric = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( hypergeometric, 'factory', factory );


// EXPORTS //

module.exports = hypergeometric;
