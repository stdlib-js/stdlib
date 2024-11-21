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
var format = require( '@stdlib/string/format' );


// VARIABLES //

var debug = logger( 'path:set:style' );


// MAIN //

/**
* Sets the path style.
*
* @private
* @param {string} v - style
* @throws {TypeError} must be a string
*/
function set( v ) {
	/* eslint-disable no-invalid-this */
	if ( !isString( v ) ) {
		throw new TypeError( format( 'invalid assignment. `%s` must be a string. Value: `%s`.', 'style', v ) );
	}
	debug( 'Current value: %d.', this._style );

	this._style = v;
	debug( 'New Value: %d.', this._style );

	this.emit( 'change' );
}


// EXPORTS //

module.exports = set;
