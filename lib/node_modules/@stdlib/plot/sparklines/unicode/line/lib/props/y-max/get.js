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

var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Returns the maximum value of the y-axis domain.
*
* @private
* @returns {(FiniteNumber|null)} maximum value of the y-axis domain
*/
function get() {
	/* eslint-disable no-invalid-this */
	var max;
	var len;
	var d;
	var i;

	if ( this._yMax === null ) {
		len = this._data.length;
		max = NINF;
		for ( i = 0; i < len; i++ ) {
			d = this._data[ i ];
			if ( this._isDefined( d ) && d !== PINF && d > max ) {
				max = d;
			}
		}
		return max;
	}
	return this._yMax;
}


// EXPORTS //

module.exports = get;
