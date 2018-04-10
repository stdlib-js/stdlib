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
var isNull = require( '@stdlib/assert/is-null' );
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;


// VARIABLES //

var debug = logger( 'plot:set:y-min' );


// MAIN //

/**
* Sets the minimum value of the y-axis domain.
*
* @private
* @param {(FiniteNumber|null)} min - minimum value
* @throws {TypeError} must be a finite number primitive or null
* @returns {void}
*/
function set( min ) {
	/* eslint-disable no-invalid-this */
	if (
		!isNull( min ) &&
		!isNumber( min ) // FIXME: finite number
	) {
		throw new TypeError( 'invalid value. `yMin` must be either a finite number or null. Value: `' + min + '.`' );
	}
	if ( min !== this._yMin ) {
		debug( 'Current value: %d.', this._yMin );

		this._yMin = min;
		debug( 'New value: %d.', this._yMin );

		this.emit( 'change' );
	}
}


// EXPORTS //

module.exports = set;
