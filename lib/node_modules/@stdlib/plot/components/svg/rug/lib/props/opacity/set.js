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
var isFunction = require( '@stdlib/assert/is-function' );


// VARIABLES //

var debug = logger( 'rug:set:opacity' );


// MAIN //

/**
* Sets the opacity.
*
* @private
* @param {(number|Function)} opacity - opacity
* @throws {TypeError} must be a number or a function
* @throws {RangeError} must be a number on the interval `[0,1]`
*/
function set( opacity ) {
	/* eslint-disable no-invalid-this */
	var isNum = isNumber( opacity );
	if ( !isNum && !isFunction( opacity ) ) {
		throw new TypeError( 'invalid value. `opacity` must be a number or a function. Value: `' + opacity + '.`' );
	}
	if ( isNum && (opacity !== opacity || opacity < 0.0 || opacity > 1.0) ) {
		throw new RangeError( 'invalid value. `opacity` must be a number on the interval `[0,1]`. Value: `' + opacity + '`.' );
	}
	if ( opacity !== this._opacity ) {
		debug( 'Current value: %d.', this._opacity );

		this._opacity = opacity;
		debug( 'New Value: %d.', this._opacity );

		this.emit( 'change' );
	}
}


// EXPORTS //

module.exports = set;
