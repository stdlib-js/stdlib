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
var events = require( './../../events' );
var isValid = require( './../../validators/inner_tick_size.js' );


// VARIABLES //

var debug = logger( 'axis:set:ticksize-inner' );
var CHANGE_EVENT = events( 'innerTickSize' );


// MAIN //

/**
* Sets the inner tick size.
*
* @private
* @param {NonNegativeInteger} size - size
* @throws {TypeError} must be a nonnegative integer
*/
function set( size ) {
	/* eslint-disable no-invalid-this */
	var err = isValid( size );
	if ( err ) {
		throw err;
	}
	debug( 'Current value: %d.', size );

	this._innerTickSize = size;
	debug( 'New Value: %s.', this._innerTickSize );

	this.emit( CHANGE_EVENT );
}


// EXPORTS //

module.exports = set;
