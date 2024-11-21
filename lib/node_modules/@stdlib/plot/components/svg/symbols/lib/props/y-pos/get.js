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

var debug = logger( 'symbols:ypos' );


// MAIN //

/**
* Returns a function to map values to y coordinate values.
*
* @private
* @returns {Function} map function
*/
function get() {
	/* eslint-disable no-invalid-this */
	var scale = this.yScale;
	return yPos;

	/**
	* Maps a value to a y coordinate value.
	*
	* @private
	* @param {*} d - datum
	* @returns {number} pixel value
	*/
	function yPos( d ) {
		var px = scale( d );
		debug( 'Value: %d => Pixel: %d.', d, px );
		return px;
	}
}


// EXPORTS //

module.exports = get;
