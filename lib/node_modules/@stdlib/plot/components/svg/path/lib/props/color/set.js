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
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;


// VARIABLES //

var debug = logger( 'path:set:color' );


// MAIN //

/**
* Sets the path color.
*
* @private
* @param {string} color - color
* @throws {TypeError} must be a string primitive
*/
function set( color ) {
	/* eslint-disable no-invalid-this */
	if ( !isString( color ) ) {
		throw new TypeError( 'invalid value. `color` must be a string primitive. Value: `' + color + '.`' );
	}
	debug( 'Current value: %d.', this._color );

	this._color = color;
	debug( 'New Value: %d.', this._color );

	this.emit( 'change' );
}


// EXPORTS //

module.exports = set;
