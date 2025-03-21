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

// MODULES //

var capitalize = require( '@stdlib/string/capitalize' );


// MAIN //

/**
* Converts a snakecase name to a normal name.
*
* @private
* @param {string} str - snakecased name
* @returns {string} normal name
*/
function unsnakecase( str ) {
	var parts;
	var i;
	parts = str.split( '_' );
	for ( i = 0; i < parts.length; i++ ) {
		parts[ i ] = capitalize( parts[ i ] );
	}
	return parts.join( ' ' );
}


// EXPORTS //

module.exports = unsnakecase;
