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


// VARIABLES //

var debug = logger( 'sparkline:push' );


// MAIN //

/**
* Appends data.
*
* @private
* @param {*} datum - data to append
* @returns {Sparkline} class instance
*/
function push( datum ) {
	/* eslint-disable no-invalid-this */
	debug( 'Current value: %s.', JSON.stringify( this._data ) );
	if ( this._data.length >= this._bufferSize ) {
		this._data.shift();
	}
	this._data.push( datum );

	debug( 'New value: %s.', JSON.stringify( this._data ) );
	this.emit( 'change' );

	return this;
}


// EXPORTS //

module.exports = push;
