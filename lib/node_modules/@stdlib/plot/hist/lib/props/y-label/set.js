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
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isNull = require( '@stdlib/assert/is-null' );


// VARIABLES //

var debug = logger( 'hist:set:y-label' );
var LABELS = {
	'count': 'counts',
	'probability': 'probability',
	'countdensity': 'density',
	'pdf': 'pdf',
	'cumcount': 'counts',
	'cdf': 'cdf'
};


// MAIN //

/**
* Sets the y-axis label.
*
* @private
* @param {(string|null)} label - axis label
* @throws {TypeError} must be a string primitive or null
*/
function set( label ) {
	/* eslint-disable no-invalid-this */
	var FLG = isNull( label );
	if ( !isString( label ) && !FLG ) {
		throw new TypeError( 'invalid value. `yLabel` must be a string or null. Value: `' + label + '.`' );
	}
	if ( FLG ) {
		label = LABELS[ this._normalization ];
	}
	if ( label !== this._yLabel ) {
		debug( 'Current value: %s.', this._yLabel );

		this._yLabel = label;
		debug( 'New value: %s.', this._yLabel );

		this.emit( 'change' );
	}
}


// EXPORTS //

module.exports = set;
