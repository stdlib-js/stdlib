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

var FS_ALIASES = require( './fs_aliases.js' );


// MAIN //

/**
* Returns a list of argument completion flags for a specified file system API.
*
* @private
* @param {string} alias - alias
* @returns {(Array|null)} argument completion flags
*/
function argFlags( alias ) {
	var i;
	for ( i = 0; i < FS_ALIASES.length; i++ ) {
		if ( FS_ALIASES[ i ][ 0 ] === alias ) {
			return FS_ALIASES[ i ].slice( 1 );
		}
	}
	return null;
}


// EXPORTS //

module.exports = argFlags;
