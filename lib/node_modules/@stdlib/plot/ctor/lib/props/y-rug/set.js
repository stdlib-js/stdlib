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
var isBooleanArray = require( '@stdlib/assert/is-boolean-array' ).primitives;


// VARIABLES //

var debug = logger( 'plot:set:y-rug' );


// MAIN //

/**
* Sets a flag indicating whether to display a rug plot along the y-axis.
*
* @private
* @param {(boolean|BooleanArray)} v - boolean flag(s) indicating whether to display a rug plot along the y-axis
* @throws {TypeError} must be a boolean primitive or boolean array
*/
function set( v ) {
	/* eslint-disable no-invalid-this */
	var isBool = isBoolean( v );
	if ( !isBool && !isBooleanArray( v ) ) {
		throw new TypeError( 'invalid value. `yRug` must be a boolean or boolean array. Value: `' + v + '.`' );
	}
	if ( isBool ) {
		v = [ v ];
	}
	debug( 'Current value: %s.', JSON.stringify( this._yRug ) );

	this._yRug = v;
	debug( 'New Value: %s.', JSON.stringify( this._yRug ) );

	this.emit( 'change' );
}


// EXPORTS //

module.exports = set;
