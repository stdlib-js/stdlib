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

var debug = logger( 'plot:set:x-min' );


// MAIN //

/**
* Sets the minimum value of the x-axis domain.
*
* @private
* @param {(Date|FiniteNumber|null)} min - minimum value
* @throws {TypeError} must be a finite number primitive or null
* @returns {void}
*/
function set( min ) {
	/* eslint-disable no-invalid-this */

	// TODO: add test to determine if evaluates to valid date?
	if (
		!isNull( min ) &&
		!isNumber( min ) // FIXME: finite number

		// TODO: Date
	) {
		throw new TypeError( 'invalid value. `xMin` must be either a finite number, Date, or null. Value: `' + min + '.`' );
	}
	debug( 'Current value: %s.', this._xMin );

	this._xMin = min;
	debug( 'New value: %s.', this._xMin );

	this.emit( 'change' );
}


// EXPORTS //

module.exports = set;
