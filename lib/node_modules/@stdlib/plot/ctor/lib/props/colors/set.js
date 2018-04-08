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
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var COLORS = require( './colors.js' );


// VARIABLES //

var debug = logger( 'plot:set:colors' );


// MAIN //

/**
* Sets the data colors.
*
* @private
* @param {(string|StringArray)} v - data colors
* @throws {TypeError} must be either a string or an array of strings
* @returns {void}
*/
function set( v ) {
	/* eslint-disable no-invalid-this */
	var isStr = isString( v );
	if ( !isStr && !isStringArray( v ) ) {
		throw new TypeError( 'invalid value. `colors` must be either a string or a string array. Value: `' + v + '.`' );
	}
	if ( isStr ) {
		if ( COLORS[ v ] === void 0 ) {
			v = [ v ];
		} else {
			v = COLORS[ v ].slice();
		}
	} else {
		v = v.slice();
	}
	debug( 'Current value: %s.', JSON.stringify( this._colors ) );

	this._colors = v;
	debug( 'New Value: %s.', JSON.stringify( this._colors ) );

	this.emit( 'change' );
}


// EXPORTS //

module.exports = set;
