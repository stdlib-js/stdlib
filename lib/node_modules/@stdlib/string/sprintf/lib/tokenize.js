/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

// VARIABLES //

var RE = /%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;


// MAIN //

/**
* Tokenizes a string.
*
* @private
* @param {string} str - input string
* @returns {Array} tokens
*/
function tokenize( str ) {
	var lastIndex;
	var content;
	var tokens;
	var parsed;
	var match;

	lastIndex = 0;
	tokens = [];
	match = RE.exec( str );
	while ( match ) {
		content = str.slice( lastIndex, RE.lastIndex - match[ 0 ].length );
		if ( content.length ) {
			tokens.push( content );
		}
		parsed = parse( match, tokens.length );
		if ( parsed ) {
			tokens.push( parsed );
		}
		lastIndex = RE.lastIndex;
		match = RE.exec( str );
	}
	content = str.slice( lastIndex );
	if ( content.length ) {
		tokens.push( content );
	}
	return tokens;

	/**
	* Parses a delimeter.
	*
	* @private
	* @param {Array} match - regular expression match
	* @returns {Object} delimeter token object
	*/
	function parse( match ) {
		return {
			'mapping': ( match[ 1 ] ) ? parseInt( match[ 1 ], 10 ) : void 0,
			'flags': match[ 2 ],
			'width': match[ 3 ],
			'hasPeriod': match[ 4 ] === '.',
			'precision': match[ 5 ],
			'specifier': match[ 6 ]
		};
	}
}


// EXPORTS //

module.exports = tokenize;
