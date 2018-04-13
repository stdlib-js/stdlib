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
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isNonNegativeIntegerArray = require( '@stdlib/assert/is-nonnegative-integer-array' ).primitives;


// VARIABLES //

var debug = logger( 'plot:base:set:line-width' );


// MAIN //

/**
* Sets the line width(s).
*
* @private
* @param {(NonNegativeInteger|Array<NonNegativeInteger>)} v - width
* @throws {TypeError} must be a nonnegative integer or nonnegative integer array
*/
function set( v ) {
	/* eslint-disable no-invalid-this */
	var isInt = isNonNegativeInteger( v );
	if ( !isInt && !isNonNegativeIntegerArray( v ) ) {
		throw new TypeError( 'invalid value. `lineWidth` must be a nonnegative integer or nonnegative integer array. Value: `' + v + '.`' );
	}
	if ( isInt ) {
		v = [ v ];
	} else {
		v = v.slice();
	}
	debug( 'Current value: %s.', JSON.stringify( this._lineWidth ) );

	this._lineWidth = v;
	debug( 'New Value: %s.', JSON.stringify( this._lineWidth ) );

	this.emit( 'change' );
}


// EXPORTS //

module.exports = set;
