/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Trim `n` characters from the beginning of a string.
*
* @module @stdlib/string/left-trim-n
*
* @example
* var ltrimN = require( '@stdlib/string/left-trim-n' );
*
* var str = 'foo  ';
* var out = ltrimN( str, str.length );
* // returns 'foo  '
*
* str = '🐶🐶🐶 Animals 🐶🐶🐶';
* out = ltrimN( str, 4, [ '🐶', ' ' ] );
* // returns 'Animals 🐶🐶🐶'
*/

// MODULES //

var ltrimN = require( './main.js' );


// EXPORTS //

module.exports = ltrimN;
