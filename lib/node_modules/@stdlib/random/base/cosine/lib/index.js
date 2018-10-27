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
* Raised cosine distributed pseudorandom numbers.
*
* @module @stdlib/random/base/cosine
*
* @example
* var cosine = require( '@stdlib/random/base/cosine' );
*
* var v = cosine( 0.5, 1.0 );
* // returns <number>
*
* @example
* var factory = require( '@stdlib/random/base/cosine' ).factory;
* var cosine = factory( 3.0, 2.0, {
*     'seed': 297
* });
*
* var v = cosine();
* // returns <number>
*
* @example
* var factory = require( '@stdlib/random/base/cosine' ).factory;
* var cosine = factory({
*     'seed': 297
* });
*
* var v = cosine( 3.0, 2.0 );
* // returns <number>
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var cosine = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( cosine, 'factory', factory );


// EXPORTS //

module.exports = cosine;
