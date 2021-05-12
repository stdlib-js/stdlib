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
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isNull = require( '@stdlib/assert/is-null' );
var FLOAT64_MAX = require( '@stdlib/constants/float64/max' );


// VARIABLES //

var debug = logger( 'sparkline:set:buffer-size' );


// MAIN //

/**
* Sets the data buffer size.
*
* @param {(PositiveInteger|null)} size - data buffer size
* @throws {TypeError} must be a positive integer or null
* @throws {RangeError} must be greater than or equal to the number of data elements
*/
function set( size ) {
	/* eslint-disable no-invalid-this */
	var FLG = isNull( size );
	if ( !isPositiveInteger( size ) && !FLG ) {
		throw new TypeError( 'invalid value. `bufferSize` must be a positive integer or null. Value: `' + size + '`.' );
	}
	if ( FLG ) {
		size = FLOAT64_MAX;
	}
	if ( this._data && size < this._data.length ) {
		throw new RangeError( 'invalid value. `bufferSize` size is smaller than the number of data elements. Number of elements: `'+ this._data.length + '`. Value: `' + size + '`.' );
	}
	if ( size !== this._bufferSize ) {
		debug( 'Current value: %s.', this._bufferSize );

		this._bufferSize = size;
		debug( 'New value: %s.', this._bufferSize );

		this.emit( 'change' );
	}
}


// EXPORTS //

module.exports = set;
