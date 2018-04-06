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

var debug = logger( 'plot:set:description' );


// MAIN //

/**
* Sets the description.
*
* @private
* @param {string} str - description
* @throws {TypeError} must be a string primitive
*/
function set( str ) {
	/* eslint-disable no-invalid-this */
	if ( !isString( str ) ) {
		throw new TypeError( 'invalid value. `description` must be a string. Value: `' + str + '.`' );
	}
	if ( str !== this._description ) {
		debug( 'Current value: %s.', this._description );

		this._description = str;
		debug( 'New value: %s.', this._description );

		this.emit( 'change' );
	}
}


// EXPORTS //

module.exports = set;
