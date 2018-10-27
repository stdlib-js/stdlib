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
* Lévy distributed pseudorandom numbers.
*
* @module @stdlib/random/base/levy
*
* @example
* var levy = require( '@stdlib/random/base/levy' );
*
* var v = levy( 0.5, 1.0 );
* // returns <number>
*
* @example
* var factory = require( '@stdlib/random/base/levy' ).factory;
* var levy = factory( 3.0, 2.0, {
*     'seed': 297
* });
*
* var v = levy();
* // returns <number>
*
* @example
* var factory = require( '@stdlib/random/base/levy' ).factory;
* var levy = factory({
*     'seed': 297
* });
*
* var v = levy( 3.0, 2.0 );
* // returns <number>
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var levy = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( levy, 'factory', factory );


// EXPORTS //

module.exports = levy;
