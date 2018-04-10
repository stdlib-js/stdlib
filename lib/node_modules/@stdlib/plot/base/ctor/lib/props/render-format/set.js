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
var FORMATS = require( './formats.json' );


// VARIABLES //

var debug = logger( 'plot:base:set:render-format' );


// MAIN //

/**
* Sets the render format.
*
* @private
* @param {string} format - format
* @throws {TypeError} must be a recognized render format
*/
function set( format ) {
	/* eslint-disable no-invalid-this */
	if ( indexOf( FORMATS, format ) === -1 ) {
		throw new TypeError( 'invalid value. Unrecognized/unsupported `format`. Must be one of `[' + FORMATS.join( ', ' ) + ']`. Value: `' + format + '.`' );
	}
	if ( format !== this._renderFormat ) {
		debug( 'Current value: %s.', this._renderFormat );

		this._renderFormat = format;
		debug( 'New value: %s.', this._renderFormat );

		this.emit( 'change' );
	}
}


// EXPORTS //

module.exports = set;
