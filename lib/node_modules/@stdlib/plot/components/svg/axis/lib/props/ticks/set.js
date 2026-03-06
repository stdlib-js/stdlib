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
var isNull = require( '@stdlib/assert/is-null' );
var events = require( './../../events' );
var isValid = require( './../../validators/ticks.js' );


// VARIABLES //

var debug = logger( 'axis:set:ticks' );
var CHANGE_EVENT = events( 'ticks' );


// MAIN //

/**
* Sets the axis tick values.
*
* @private
* @param {(Array|null)} ticks - tick values
* @throws {TypeError} must be an array or null
*/
function set( ticks ) {
	/* eslint-disable no-invalid-this */
	var err = isValid( ticks );
	if ( err ) {
		throw err;
	}
	debug( 'Current value: %s.', JSON.stringify( this._ticks ) );

	if ( isNull( ticks ) ) {
		this._ticks = ticks;
	} else {
		this._ticks = ticks.slice();
	}
	debug( 'New Value: %s.', JSON.stringify( this._ticks ) );

	this.emit( CHANGE_EVENT );
}


// EXPORTS //

module.exports = set;
