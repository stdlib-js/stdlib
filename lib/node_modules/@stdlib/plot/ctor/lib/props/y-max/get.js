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
var max = require( './../../utils/max.js' ); // TODO: replace with mod when written


// FUNCTIONS //

/**
* Computes a maximum value.
*
* @private
* @param {Array<NumericArray>} arr - input array
* @returns {(number|null)} maximum value or null
*/
function getMax( arr ) {
	var tmp;
	var i;
	if ( arr.length === 0 ) {
		return null;
	}
	tmp = new Array( arr.length );
	for ( i = 0; i < arr.length; i++ ) {
		tmp[ i ] = max( arr[ i ] );
	}
	return max( tmp );
}


// MAIN //

/**
* Returns the maximum value of the y-axis domain.
*
* @private
* @returns {number} maximum value
*/
function get() {
	/* eslint-disable no-invalid-this */
	var max;
	if ( isNull( this._yMax ) ) {
		max = getMax( this._yData );
		return ( isNull( max ) ) ? 1.0 : max;
	}
	return this._yMax;
}


// EXPORTS //

module.exports = get;
