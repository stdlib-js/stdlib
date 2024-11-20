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
var format = require( '@stdlib/string/format' );
var indexOf = require( '@stdlib/utils/index-of' );
var LINESTYLES = require( './line_styles.json' );


// VARIABLES //

var debug = logger( 'plot:base:set:line-style' );


// MAIN //

/**
* Sets the line style(s).
*
* @private
* @param {(string|StringArray)} v - line style(s)
* @throws {TypeError} must be a string or string array
* @throws {Error} must be a supported line style
*/
function set( v ) {
	/* eslint-disable no-invalid-this */
	var isStr = isString( v );
	var i;
	if ( !isStr && !isStringArray( v ) ) {
		throw new TypeError( format( 'invalid assignment. `%s` must be a string or an array of strings. Value: `%s`.', 'lineStyle', v ) );
	}
	if ( isStr ) {
		v = [ v ];
	} else {
		v = v.slice();
	}
	for ( i = 0; i < v.length; i++ ) {
		if ( indexOf( LINESTYLES, v[i] ) === -1 ) {
			throw new Error( format( 'invalid assignment. Unsupported/unrecognized line style. Must be one of the following: "%s". Value: `%s`.', LINESTYLES.join( '", "' ), v[i] ) );
		}
	}
	debug( 'Current value: %s.', JSON.stringify( this._lineStyle ) );

	this._lineStyle = v;
	debug( 'New Value: %s.', JSON.stringify( this._lineStyle ) );

	this.emit( 'change' );
}


// EXPORTS //

module.exports = set;
