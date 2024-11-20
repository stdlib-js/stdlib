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
var isValid = require( './../../validators/tick_format.js' );


// VARIABLES //

var debug = logger( 'axis:set:tickformat' );
var CHANGE_EVENT = events( 'tickFormat' );


// MAIN //

/**
* Sets the axis tick format.
*
* @private
* @param {(null|string|Function)} fmt - tick format
* @throws {TypeError} must be either null, a string, or a function
*/
function set( fmt ) {
	/* eslint-disable no-invalid-this */
	var err = isValid( fmt );
	if ( err ) {
		throw err;
	}
	debug( 'Current value: %s.', this._tickFormat );

	this._tickFormat = fmt;
	debug( 'New Value: %s.', this._tickFormat );

	this.emit( CHANGE_EVENT );
}


// EXPORTS //

module.exports = set;
