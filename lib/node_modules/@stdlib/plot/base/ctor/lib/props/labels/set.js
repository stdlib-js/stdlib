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
var isEmptyArray = require( '@stdlib/assert/is-empty-array' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;


// VARIABLES //

var debug = logger( 'plot:base:set:labels' );


// MAIN //

/**
* Sets the data labels.
*
* @private
* @param {(StringArray|EmptyArray)} labels - data labels
* @throws {TypeError} must be either an array of strings or an empty array
*/
function set( labels ) {
	/* eslint-disable no-invalid-this */
	if ( !isEmptyArray( labels ) && !isStringArray( labels ) ) {
		throw new TypeError( 'invalid value. `labels` must be either an array of strings or an empty array. Value: `' + labels + '.`' );
	}
	debug( 'Current value: %s.', JSON.stringify( this._labels ) );

	this._labels = labels.slice();
	debug( 'New Value: %s.', JSON.stringify( this._labels ) );

	this.emit( 'change' );
}


// EXPORTS //

module.exports = set;
