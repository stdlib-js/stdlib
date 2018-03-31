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
var CHART_TYPES = require( './chart_types.json' );


// VARIABLES //

var debug = logger( 'sparkline:unicode:set:type' );


// MAIN //

/**
* Sets the sparkline chart type.
*
* @private
* @param {string} type - chart type
* @throws {TypeError} must be a supported chart type
*/
function set( type ) {
	/* eslint-disable no-invalid-this */
	if ( !contains( CHART_TYPES, type ) ) {
		throw new TypeError( 'invalid value. `type` must be one of `[' + CHART_TYPES.join( ', ' ) + ']`. Value: `' + type + '`.' );
	}
	if ( type !== this._type ) {
		debug( 'Current value: %s.', this._type );

		this._type = type;
		debug( 'New value: %s.', this._type );

		this.emit( 'change' );
	}
}


// EXPORTS //

module.exports = set;
