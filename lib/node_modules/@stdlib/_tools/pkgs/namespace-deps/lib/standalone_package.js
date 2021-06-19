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

// MODULES //

var startsWith = require( '@stdlib/string/starts-with' );
var replace = require( '@stdlib/string/replace' );
var nthIndex = require( './nth.js' );


// VARIABLES //

var RE_FORWARD_SLASH = /\//g;


// MAIN //

/**
* Replaces all forward slashes after the initial one with dashes to form a valid standalone package name.
*
* ## Notes
*
* -   `data` as part of a package path is treated as an internal directory housing data files.
*
* @private
* @param {string} pkg - package tree path
* @returns {string} valid package name
*/
function standalonePackage( pkg ) {
	var dataDirIdx;
	var idx = nthIndex( pkg, '/', 1 );
	var out = replace( pkg, RE_FORWARD_SLASH, replaceSlashes );
	return ( dataDirIdx ) ? out.slice( 0, dataDirIdx ) : out;

	/**
	* Replaces a forward slash if index is not equal to first match.
	*
	* @private
	* @param {string} s - matched slash
	* @param {number} i - match index
	* @param {string} str - full input string
	* @returns {string} replacement character (`-` or `/`)
	*/
	function replaceSlashes( s, i, str ) {
		if ( !dataDirIdx && startsWith( str.slice( i ), '/data/' ) ) {
			dataDirIdx = i;
		}
		return ( i > idx ) ? '-' : s;
	}
}


// EXPORTS //

module.exports = standalonePackage;
