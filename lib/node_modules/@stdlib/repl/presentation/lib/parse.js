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

var parseSlide = require( './parse_slide.js' );


// VARIABLES //

var SLIDE_SEP = '---';


// MAIN //

/**
* Parses a string into presentation slides.
*
* @private
* @param {Array} out - output array
* @param {string} str - string to parse
* @returns {ObjectArray} output array
*/
function parse( out, str ) {
	var slides;
	var i;

	slides = str.split( SLIDE_SEP );
	for ( i = 0; i < slides.length; i++ ) {
		out.push( parseSlide( slides[ i ] ) );
	}
	return out;
}


// EXPORTS //

module.exports = parse;
