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
var indexOf = require( '@stdlib/utils/index-of' );
var format = require( '@stdlib/string/format' );
var ORIENTATIONS = require( './orientations.json' );


// VARIABLES //

var debug = logger( 'plot:set:y-rug-orient' );


// MAIN //

/**
* Sets the y-axis rug orientation.
*
* @private
* @param {(string|StringArray)} v - rug orientation
* @throws {TypeError} must be either a string or string array
* @throws {TypeError} must be either `'bottom'` or `'top'`
*/
function set( v ) {
	/* eslint-disable no-invalid-this */
	var isStr = isString( v );
	var i;
	if ( !isStr && !isStringArray( v ) ) {
		throw new TypeError( format( 'invalid assignment. `%s` must be a string or an array of strings. Value: `%s`.', 'yRugOrient', v ) );
	}
	if ( isStr ) {
		v = [ v ];
	} else {
		v = v.slice();
	}
	for ( i = 0; i < v.length; i++ ) {
		if ( indexOf( ORIENTATIONS, v[i] ) === -1 ) {
			throw new TypeError( format( 'invalid assignment. Unrecognized/unsupported orientation. A `%s` value must be one of the following: "%s". Value: `%s`.', 'yRugOrient', ORIENTATIONS.join( '", "' ), v[i] ) );
		}
	}
	debug( 'Current value: %s.', JSON.stringify( this._yRugOrient ) );

	this._yRugOrient = v;
	debug( 'New value: %s.', JSON.stringify( this._yRugOrient ) );

	this.emit( 'change' );
}


// EXPORTS //

module.exports = set;
