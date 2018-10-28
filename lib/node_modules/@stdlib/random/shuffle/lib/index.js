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
* Return a random permutation of elements from an array-like object.
*
* @module @stdlib/random/shuffle
*
* @example
* var shuffle = require( '@stdlib/random/shuffle' );
*
* var data = [ 1, 2, 3 ];
* var out = shuffle( data );
* // e.g., returns [ 3, 1, 2 ]
*
* out = shuffle( data, {
*     'copy': 'none'
* });
*
* var bool = ( data === out );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var shuffle = require( './shuffle.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( shuffle, 'factory', factory );


// EXPORTS //

module.exports = shuffle;
