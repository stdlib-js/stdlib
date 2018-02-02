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
* Remove a list of words from a string.
*
* @module @stdlib/string/remove-words
*
* @example
* var removeWords = require( '@stdlib/string/remove-words' );
*
* var str = 'beep boop Foo bar';
* var words = [ 'boop', 'foo' ];
*
* var out = removeWords( str, words );
* // returns 'beep  Foo bar'
*
* // Case-insensitive:
* out = removeWords( str, words, true )
* //returns 'beep   bar'
*/

// MODULES //

var removeWords = require( './remove_words.js' );


// EXPORTS //

module.exports = removeWords;
