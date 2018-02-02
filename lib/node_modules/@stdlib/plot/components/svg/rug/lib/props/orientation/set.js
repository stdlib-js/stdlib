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
var indexOf = require( '@stdlib/utils/index-of' );
var ORIENTATIONS = require( './orientations.json' );


// VARIABLES //

var debug = logger( 'rug:set:orientation' );


// MAIN //

/**
* Sets the orientation.
*
* @private
* @param {string} orient - orientation
* @throws {TypeError} must be a supported orientation
*/
function set( orient ) {
	/* eslint-disable no-invalid-this */
	if ( indexOf( ORIENTATIONS, orient ) === -1 ) {
		throw new Error( 'invalid value. `orientation` must be one of `['+ORIENTATIONS.join(',')+']`. Value: `' + orient + '.`' );
	}
	if ( orient !== this._orientation ) {
		debug( 'Current value: %d.', this._orientation );

		this._orientation = orient;
		debug( 'New Value: %d.', this._orientation );

		this.emit( 'change' );
	}
}


// EXPORTS //

module.exports = set;
