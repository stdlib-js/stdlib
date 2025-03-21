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

var lpad = require( '@stdlib/string/left-pad' );
var OCTAL_CODES = require( './octal_codes.json' );


// MAIN //

/**
* Converts an integer mask to symbolic notation.
*
* @private
* @param {NonNegativeInteger} mask - integer mask
* @returns {string} mask in symbolic notation
*/
function toSymbolic( mask ) {
	var out;

	// Convert the mask to a four-digit octal string representation (e.g., 0077):
	mask = mask.toString( 8 );
	mask = lpad( mask, 4, '0' );

	// For each digit, get the permissions: (NOTE: we skip the special modes digit, as only the file permission bits of the mask are used; see http://man7.org/linux/man-pages/man2/umask.2.html)
	out = '';
	out += 'u='+OCTAL_CODES[ mask[1] ];
	out += ',';
	out += 'g='+OCTAL_CODES[ mask[2] ];
	out += ',';
	out += 'o='+OCTAL_CODES[ mask[3] ];

	return out;
}


// EXPORTS //

module.exports = toSymbolic;
