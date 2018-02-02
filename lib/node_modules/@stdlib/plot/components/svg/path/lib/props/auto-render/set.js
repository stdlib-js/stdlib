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
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;


// VARIABLES //

var debug = logger( 'path:set:auto-render' );


// MAIN //

/**
* Sets the rendering mode.
*
* @private
* @param {boolean} bool - boolean indicating whether to re-render on a change event
* @throws {TypeError} must be a positive number
*/
function set( bool ) {
	/* eslint-disable no-invalid-this */
	if ( !isBoolean( bool ) ) {
		throw new TypeError( 'invalid value. `autoRender` must be a boolean primitive. Value: `' + bool + '.`' );
	}
	debug( 'Current value: %d.', this._autoRender );

	this._autoRender = bool;
	debug( 'New Value: %d.', this._autoRender );

	this.emit( 'change' );
}


// EXPORTS //

module.exports = set;
