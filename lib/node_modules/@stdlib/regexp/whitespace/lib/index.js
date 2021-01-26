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
* Return a regular expression to match a white space character.
*
* @module @stdlib/regexp/whitespace
*
* @example
* var reWhitespace = require( '@stdlib/regexp/whitespace' );
*
* var RE_WHITESPACE = reWhitespace();
*
* var bool = RE_WHITESPACE.test( ' ' );
* // returns true
*
* @example
* var reWhitespace = require( '@stdlib/regexp/whitespace' );
*
* var RE_WHITESPACE = reWhitespace({
*     'flags': 'gm'
* });
*
* var bool = RE_WHITESPACE.test( '\t' );
* // returns true
*
* @example
* var RE_WHITESPACE = require( '@stdlib/regexp/whitespace' ).REGEXP;
*
* var bool = RE_WHITESPACE.test( 'a' );
* // returns false
*
* @example
* var RE_WHITESPACE = require( '@stdlib/regexp/whitespace' ).REGEXP_CAPTURE;
* var replace = require( '@stdlib/string/replace' );
*
* var str = 'Duplicate capture';
* var out = replace( str, RE_WHITESPACE, '$1$1' );
* // returns 'Duplicate  capture'
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var reWhitespace = require( './main.js' );
var REGEXP_CAPTURE = require( './regexp_capture.js' );
var REGEXP = require( './regexp.js' );


// MAIN //

setReadOnly( reWhitespace, 'REGEXP', REGEXP );
setReadOnly( reWhitespace, 'REGEXP_CAPTURE', REGEXP_CAPTURE );


// EXPORTS //

module.exports = reWhitespace;
