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
var VIEWERS = require( './viewers.json' );


// VARIABLES //

var debug = logger( 'plot:set:viewer' );


// MAIN //

/**
* Sets the viewer.
*
* @private
* @param {string} viewer - viewer
* @throws {TypeError} must be a recognized viewer
*/
function set( viewer ) {
	/* eslint-disable no-invalid-this */
	if ( indexOf( VIEWERS, viewer ) === -1 ) {
		throw new TypeError( 'invalid value. Unrecognized/unsupported `viewer`. Value: `' + viewer + '.`' );
	}
	if ( viewer !== this._viewer ) {
		debug( 'Current value: %s.', this._viewer );

		this._viewer = viewer;
		debug( 'New value: %s.', this._viewer );

		this.emit( 'change' );
	}
}


// EXPORTS //

module.exports = set;
