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
var isCollection = require( '@stdlib/assert/is-collection' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );


// VARIABLES //

var debug = logger( 'sparkline:set:data' );


// MAIN //

/**
* Sets the sparkline data.
*
* @private
* @param {(Collection|ndarrayLike)} data - sparkline data
* @throws {TypeError} must be an array-like object or an ndarray
* @throws {RangeError} length must not exceed maximum data buffer size
*/
function set( data ) {
	/* eslint-disable no-invalid-this */
	var FLG;
	var i;

	FLG = isndarrayLike( data ) && typeof data.iget === 'function';
	if ( !isCollection( data ) && !FLG ) {
		throw new TypeError( 'invalid value. `data` must be an array-like object or an ndarray. Value: `' + data + '`.' );
	}
	if ( data.length > this._bufferSize ) {
		throw new RangeError( 'invalid value. `data` length exceeds maximum data buffer size. Buffer size: `' + this._bufferSize + '`. Length: `' + data.length + '`.' );
	}
	debug( 'Current value: %s.', JSON.stringify( this._data ) );

	this._data = [];
	if ( FLG ) {
		for ( i = 0; i < data.length; i++ ) {
			this._data.push( data.iget( i ) );
		}
	} else {
		for ( i = 0; i < data.length; i++ ) {
			this._data.push( data[ i ] );
		}
	}
	debug( 'New value: %s.', JSON.stringify( this._data ) );
	this.emit( 'change' );
}


// EXPORTS //

module.exports = set;
