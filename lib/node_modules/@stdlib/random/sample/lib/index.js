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
* Sample elements from an array-like object.
*
* @module @stdlib/random/sample
*
* @example
* var sample = require( '@stdlib/random/sample' );
*
* var out = sample( 'abc' );
* // e.g., returns [ 'a', 'a', 'b' ]
*
* out = sample( [ 3, 6, 9 ] );
* // e.g., returns [ 3, 9, 6 ]
*
* var bool = ( out.length === 3 );
* // returns true
*
* @example
* var sample = require( '@stdlib/random/sample' );
*
* var mysample = sample.factory({
*     'seed': 323
* });
* var out = mysample( [ 3, 6, 9 ], {
*     'size': 10
* });
* // e.g., returns [ 3, 9, 3, 3, 3, 6, 3, 3, 3, 6 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var sample = require( './sample.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( sample, 'factory', factory );


// EXPORTS //

module.exports = sample;
