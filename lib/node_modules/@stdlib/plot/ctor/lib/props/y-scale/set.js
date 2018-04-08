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

var debug = logger( 'plot:set:y-scale' );


// MAIN //

/**
* Sets the y-axis scale.
*
* @private
* @param {string} scale - axis scale
* @throws {TypeError} must be a string primitive
* @returns {void}
*/
function set( scale ) {
	/* eslint-disable no-invalid-this */
	if ( !isString( scale ) ) {
		throw new TypeError( 'invalid value. `yScale` must be a string. Value: `' + scale + '.`' );
	}
	// TODO: test for valid scale

	debug( 'Current value: %s.', this._yScale );

	this._yScale = scale;
	debug( 'New value: %s.', this._yScale );

	this.emit( 'change' );
}


// EXPORTS //

module.exports = set;
