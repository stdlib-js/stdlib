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

var translateX = require( './translate_x.js' );
var translateY = require( './translate_y.js' );


// MAIN //

/**
* Returns a function to translate ticks.
*
* @private
* @param {string} orient - axis orientation
* @param {Function} scale - scale function
* @returns {Function} transform function
*/
function tickTransform( orient, scale ) {
	if ( orient === 'top' || orient === 'bottom' ) {
		return translateX( scale );
	}
	return translateY( scale );
}


// EXPORTS //

module.exports = tickTransform;
