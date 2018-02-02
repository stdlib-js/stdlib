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
var isFunction = require( '@stdlib/assert/is-function' );


// VARIABLES //

var debug = logger( 'symbols:set:xscale' );


// MAIN //

/**
* Sets the x-scale function.
*
* @private
* @param {Function} fcn - scale
* @throws {TypeError} must be a function
*/
function set( fcn ) {
	/* eslint-disable no-invalid-this */
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid value. `xScale` must be a function. Value: `' + fcn + '.`' );
	}
	debug( 'Current value: %s.', this._xScale );

	this._xScale = fcn;
	debug( 'New Value: %s.', this._xScale );

	this.emit( 'change' );
}


// EXPORTS //

module.exports = set;
