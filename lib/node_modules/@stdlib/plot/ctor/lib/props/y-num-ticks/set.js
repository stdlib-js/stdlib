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
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;


// VARIABLES //

var debug = logger( 'plot:set:y-num-ticks' );


// MAIN //

/**
* Sets the number of y-axis tick marks.
*
* @private
* @param {(NonNegativeInteger|null)} ticks - number of ticks
* @throws {TypeError} must be a nonnegative integer or null
*/
function set( ticks ) {
	/* eslint-disable no-invalid-this */
	if ( !isNull( ticks ) && !isNonNegativeInteger( ticks ) ) {
		throw new TypeError( 'invalid value. `yNumTicks` must be a nonnegative integer or null. Value: `' + ticks + '.`' );
	}
	if ( ticks !== this._yNumTicks ) {
		debug( 'Current value: %d.', this._yNumTicks );

		this._yNumTicks = ticks;
		debug( 'New value: %d.', this._yNumTicks );

		this.emit( 'change' );
	}
}


// EXPORTS //

module.exports = set;
