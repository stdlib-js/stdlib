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

var isNull = require( '@stdlib/assert/is-null' );
var min = require( './../../utils/min.js' ); // TODO: replace with mod when written


// FUNCTIONS //

/**
* Computes a minimum value.
*
* @private
* @param {Array<NumericArray>} arr - input array
* @returns {(number|null)} minimum value or null
*/
function getMin( arr ) {
	var tmp;
	var i;
	if ( arr.length === 0 ) {
		return null;
	}
	tmp = new Array( arr.length );
	for ( i = 0; i < arr.length; i++ ) {
		tmp[ i ] = min( arr[ i ] );
	}
	return min( tmp );
}


// MAIN //

/**
* Returns the minimum value of the y-axis domain.
*
* @private
* @returns {number} minimum value
*/
function get() {
	/* eslint-disable no-invalid-this */
	var min;
	if ( isNull( this._yMin ) ) {
		min = getMin( this._yData );
		return ( isNull( min ) ) ? 0.0 : min;
	}
	return this._yMin;
}


// EXPORTS //

module.exports = get;
