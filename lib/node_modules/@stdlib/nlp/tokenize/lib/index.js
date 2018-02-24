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
* Tokenize a string.
*
* @module @stdlib/nlp/tokenize
*
* @example
* var tokenize = require( '@stdlib/nlp/tokenize' );
*
* var str = 'Hello Mrs. Maple, could you call me back?';
* var out = tokenize( str );
* // returns [ 'Hello', 'Mrs.', 'Maple', ',', 'could', 'you', 'call', 'me', 'back', '?' ]
*
* str = 'Hello World!';
* out = tokenize( str );
* // returns [ 'Hello', 'World', '!' ]
*/

// MODULES //

var tokenize = require( './tokenize.js' );


// EXPORTS //

module.exports = tokenize;
