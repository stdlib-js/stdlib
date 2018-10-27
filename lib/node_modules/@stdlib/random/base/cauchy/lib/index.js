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
* Cauchy distribution pseudorandom numbers.
*
* @module @stdlib/random/base/cauchy
*
* @example
* var cauchy = require( '@stdlib/random/base/cauchy' );
*
* var v = cauchy( 0.5, 1.0 );
* // returns <number>
*
* @example
* var factory = require( '@stdlib/random/base/cauchy' ).factory;
*
* var cauchy = factory( 3.0, 2.0, {
*     'seed': 297
* });
*
* var v = cauchy();
* // returns <number>
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var cauchy = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( cauchy, 'factory', factory );


// EXPORTS //

module.exports = cauchy;
