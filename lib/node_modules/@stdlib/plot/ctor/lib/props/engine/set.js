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
var contains = require( '@stdlib/assert/contains' );
var ENGINES = require( './engines.json' );


// VARIABLES //

var debug = logger( 'plot:set:engine' );


// MAIN //

/**
* Sets the engine.
*
* @private
* @param {string} engine - engine
* @throws {TypeError} must be a recognized engine
*/
function set( engine ) {
	/* eslint-disable no-invalid-this */
	if ( !contains( ENGINES, engine ) ) {
		throw new TypeError( 'invalid value. `engine` must be one of `[' + ENGINES.join( ', ' ) + ']`. Value: `' + engine + '.`' );
	}
	if ( engine !== this._engine ) {
		debug( 'Current value: %s.', this._engine );

		this._engine = engine;
		debug( 'New value: %s.', this._engine );

		this.emit( 'change' );
	}
}


// EXPORTS //

module.exports = set;
