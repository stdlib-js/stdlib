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

var format = require( 'd3-format' ).format; // TODO: remove
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isNull = require( '@stdlib/assert/is-null' );
var identity = require( '@stdlib/utils/identity-function' );


// MAIN //

/**
* Returns the axis tick format.
*
* @private
* @returns {Function} format function
*/
function get() {
	/* eslint-disable no-invalid-this */
	if ( isString( this._tickFormat ) ) {
		return format( this._tickFormat );
	}
	if ( isNull( this._tickFormat ) ) {
		if ( this._scale.tickFormat ) {
			return this._scale.tickFormat( this._numTicks, this._tickFormat );
		}
		return identity;
	}
	return this._tickFormat;
}


// EXPORTS //

module.exports = get;
