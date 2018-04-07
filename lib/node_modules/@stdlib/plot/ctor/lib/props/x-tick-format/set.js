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
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;


// VARIABLES //

var debug = logger( 'plot:set:x-tick-format' );


// MAIN //

/**
* Sets the x-axis tick format.
*
* @private
* @param {(string|null)} fmt - axis tick format
* @throws {TypeError} must be a string primitive
*/
function set( fmt ) {
	/* eslint-disable no-invalid-this */
	if ( !isNull( fmt ) && !isString( fmt ) ) {
		throw new TypeError( 'invalid value. `xTickFormat` must be a string or null. Value: `' + fmt + '.`' );
	}
	if ( fmt !== this._xTickFormat ) {
		debug( 'Current value: %s.', this._xTickFormat );

		this._xTickFormat = fmt;
		debug( 'New value: %s.', this._xTickFormat );

		this.emit( 'change' );
	}
}


// EXPORTS //

module.exports = set;
