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
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isNumberArray = require( '@stdlib/assert/is-number-array' ).primitives;


// VARIABLES //

var debug = logger( 'plot:set:y-rug-opacity' );


// MAIN //

/**
* Sets the y-axis rug opacity.
*
* @private
* @param {(number|NumberArray)} v - opacity
* @throws {TypeError} must be a number or number array
* @throws {RangeError} must be a number on the interval `[0,1]`
*/
function set( v ) {
	/* eslint-disable no-invalid-this */
	var isNum = isNumber( v );
	var i;
	if ( !isNum && !isNumberArray( v ) ) {
		throw new TypeError( 'invalid value. `yRugOpacity` must be a number or number array. Value: `' + v + '.`' );
	}
	if ( isNum ) {
		v = [ v ];
	} else {
		v = v.slice();
	}
	for ( i = 0; i < v.length; i++ ) {
		if ( v[ i ] < 0.0 || v[ i ] > 1.0 ) {
			throw new RangeError( 'invalid value. A `yRugOpacity` must be a number on the interval `[0,1]`. Value: `' + v[i] + '`.' );
		}
	}
	debug( 'Current value: %s.', JSON.stringify( this._yRugOpacity ) );

	this._yRugOpacity = v;
	debug( 'New Value: %s.', JSON.stringify( this._yRugOpacity ) );

	this.emit( 'change' );
}


// EXPORTS //

module.exports = set;
