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

var logger = require( 'debug' );


// VARIABLES //

var debug = logger( 'axis:engine:translate-y' );


// MAIN //

/**
* Returns a function to vertically translate a tick.
*
* @private
* @param {Function} scale - scale function
* @returns {Function} function to translate a tick
*/
function translateY( scale ) {
	return translateY;

	/**
	* Vertically translates a tick.
	*
	* @private
	* @param {*} d - datum
	* @returns {string} transform
	*/
	function translateY( d ) {
		var t = 'translate(0,'+scale( d )+')';
		debug( 'Value: %s => Transform: %s.', d, t );
		return t;
	}
}


// EXPORTS //

module.exports = translateY;
