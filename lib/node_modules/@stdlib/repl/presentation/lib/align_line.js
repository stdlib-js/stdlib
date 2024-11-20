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

var startsWith = require( '@stdlib/string/starts-with' );
var alignCenter = require( './align_center.js' );
var alignLeft = require( './align_left.js' );
var alignRight = require( './align_right.js' );
var alignFlushLeft = require( './align_flush_left.js' );
var alignFlushRight = require( './align_flush_right.js' );


// MAIN //

/**
* Aligns a line of presentation text.
*
* @private
* @param {PositiveInteger} width - slide width
* @param {string} txt - line text
* @param {NonNegativeInteger} len - effective line length
* @param {string} fill - fill character
* @param {NonNegativeInteger} padding - padding
* @returns {string} formatted line text
*/
function align( width, txt, len, fill, padding ) {
	if ( startsWith( txt, '<< ' ) ) {
		return alignFlushLeft( width, txt.substring( 3 ), len-3, fill );
	}
	if ( startsWith( txt, '>> ' ) ) {
		return alignFlushRight( width, txt.substring( 3 ), len-3, fill );
	}
	if ( startsWith( txt, '< ' ) ) {
		return alignLeft( width, txt.substring( 2 ), len-2, fill, padding );
	}
	if ( startsWith( txt, '> ' ) ) {
		return alignRight( width, txt.substring( 2 ), len-2, fill, padding );
	}
	if ( startsWith( txt, '| ' ) ) {
		return alignCenter( width, txt.substring( 2 ), len-2, fill );
	}
	// Default: left align
	return alignLeft( width, txt, len, fill, padding );
}


// EXPORTS //

module.exports = align;
