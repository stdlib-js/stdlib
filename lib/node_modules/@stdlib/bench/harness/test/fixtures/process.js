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

var EventEmitter = require( 'events' ).EventEmitter;
var inherit = require( '@stdlib/utils/inherit' );


// MAIN //

/**
* Creates a mock process object.
*
* @private
* @constructor
* @param {Function} onExit - callback to invoke upon invocation of the `exit` method
* @returns {Process} Process instance
*/
function Process( onExit ) {
	if ( !( this instanceof Process ) ) {
		return new Process( onExit );
	}
	EventEmitter.call( this );
	this.exit = exit;
	this._onExit = onExit;
	return this;

	/**
	* Mock `exit` method.
	*
	* @private
	* @param {integer} code - exit code
	*/
	function exit( code ) {
		onExit( code );
	}
}

/*
* Inherit from the `EventEmitter` prototype.
*/
inherit( Process, EventEmitter );


// EXPORTS //

module.exports = Process;
