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

var debug = logger( 'plot:base:set:x-axis-orient' );


// MAIN //

/**
* Sets the x-axis orientation.
*
* @private
* @param {string} orientation - axis orientation
* @throws {TypeError} must be either `'bottom'` or `'top'`
*/
function set( orientation ) {
	/* eslint-disable no-invalid-this */
	if ( indexOf( ORIENTATIONS, orientation ) === -1 ) {
		throw new TypeError( 'invalid value. `xAxisOrient` must be one of `[' + ORIENTATIONS.join( ', ' ) + ']`. Value: `' + orientation + '.`' );
	}
	if ( orientation !== this._xAxisOrient ) {
		debug( 'Current value: %s.', this._xAxisOrient );

		this._xAxisOrient = orientation;
		debug( 'New value: %s.', this._xAxisOrient );

		this.emit( 'change' );
	}
}


// EXPORTS //

module.exports = set;
