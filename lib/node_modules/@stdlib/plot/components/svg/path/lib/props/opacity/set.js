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
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;


// VARIABLES //

var debug = logger( 'path:set:opacity' );


// MAIN //

/**
* Sets the opacity.
*
* @private
* @param {number} opacity - opacity
* @throws {TypeError} must be a number
* @throws {RangeError} must be a number on the interval `[0,1]`
*/
function set( opacity ) {
	/* eslint-disable no-invalid-this */
	if ( !isNumber( opacity ) ) {
		throw new TypeError( 'invalid value. `opacity` must be a number. Value: `' + opacity + '.`' );
	}
	if (
		opacity < 0.0 ||
		opacity > 1.0
	) {
		throw new RangeError( 'invalid value. `opacity` must be a number on the interval `[0,1]`. Value: `' + opacity + '`.' );
	}
	debug( 'Current value: %d.', this._opacity );

	this._opacity = opacity;
	debug( 'New Value: %d.', this._opacity );

	this.emit( 'change' );
}


// EXPORTS //

module.exports = set;
