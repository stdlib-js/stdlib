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
var isFiniteNumber = require( '@stdlib/assert/is-finite' ).isPrimitive;
var isNull = require( '@stdlib/assert/is-null' );


// VARIABLES //

var debug = logger( 'sparkline:unicode:set:y-max' );


// MAIN //

/**
* Sets the maximum value of the y-axis domain.
*
* @private
* @param {(FiniteNumber|null)} max - maximum value
* @throws {TypeError} must be a finite number primitive or null
*/
function set( max ) {
	/* eslint-disable no-invalid-this */
	if ( !isFiniteNumber( max ) && !isNull( max ) ) {
		throw new TypeError( 'invalid value. `yMax` must be a finite number primitive or null. Value: `' + max + '`.' );
	}
	if ( max !== this._yMax ) {
		debug( 'Current value: %s.', this._yMax );

		this._yMax = max;
		debug( 'New value: %s.', this._yMax );

		this.emit( 'change' );
	}
}


// EXPORTS //

module.exports = set;
