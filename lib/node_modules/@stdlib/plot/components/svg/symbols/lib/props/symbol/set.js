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
var indexOf = require( '@stdlib/utils/index-of' );
var SYMBOLS = require( './symbols.json' );


// VARIABLES //

var debug = logger( 'symbols:set:symbol' );


// MAIN //

/**
* Sets the symbol.
*
* @private
* @param {string} symbol - symbol
* @throws {TypeError} must be a supported symbol
*/
function set( symbol ) {
	/* eslint-disable no-invalid-this */
	if ( indexOf( SYMBOLS, symbol ) === -1 ) {
		throw new TypeError( 'invalid value. `symbol` must be a supported symbol. Symbols: ['+SYMBOLS.join(',')+']. Value: `'+symbol+'`.' );
	}
	debug( 'Current value: %d.', this._symbol );

	this._symbol = symbol;
	debug( 'New Value: %d.', this._symbol );

	this.emit( 'change' );
}


// EXPORTS //

module.exports = set;
