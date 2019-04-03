/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// MODULES //

var replace = require( '@stdlib/string/replace' );


// VARIABLES //

var RE_REGEXP_CHARS = /[-[\]{}()*+?.,\\^$|#\s]/g;


// MAIN //

/**
* Returns a regular expression for matching an `index` file.
*
* ## Notes
*
* -   Example output:
*
*     ```text
*     /^index(?:\.js|\.node)$/
*     ```
*
* @private
* @param {Array} exts - supported `require` extensions
* @returns {RegExp} regular expression
*/
function createRegExp( exts ) {
	var re;
	var i;

	re = '^index(?:';
	for ( i = 0; i < exts.length; i++ ) {
		re += replace( exts[ i ], RE_REGEXP_CHARS, '\\$&' );
		if ( i < exts.length-1 ) {
			re += '|';
		}
	}
	re += ')$';
	return new RegExp( re );
}


// EXPORTS //

module.exports = createRegExp;
