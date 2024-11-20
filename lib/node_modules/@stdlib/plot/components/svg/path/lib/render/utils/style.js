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

// VARIABLES //

var STYLES = {
	// Solid path:
	'-': '',

	// Dashes:
	'--': '5, 1',

	// Dotted path:
	':': '0.9',

	// Dash-dotted path:
	'-.': '5, 1, 1, 1'
};


// MAIN //

/**
* Checks for a known style. If present, returns the [`stroke-dasharray`][1]. Otherwise, returns the provided input value.
*
* [1]: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
*
* @private
* @param {string} v - style
* @returns {string} stroke dasharray value
*/
function style( v ) {
	var s = STYLES[ v ];
	if ( s ) {
		return s;
	}
	return v;
}


// EXPORTS //

module.exports = style;
