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
var _view = require( './view.js' ); // eslint-disable-line no-underscore-dangle


// VARIABLES //

var debug = logger( 'plot:view' );


// MAIN //

/**
* Generates a plot view.
*
* @private
* @param {string} viewer - plot viewer
*/
function view( viewer ) {
	/* eslint-disable no-invalid-this */
	var tmp = this.viewer;
	if ( arguments.length ) {
		// Temporarily set the viewer:
		this.viewer = viewer;
	}
	debug( 'Viewer: %s.', this.viewer );
	debug( 'Generating view...' );
	_view( this, this.viewer, this.render() );
	if ( arguments.length ) {
		// Restore the viewer:
		this.viewer = tmp;
	}
}


// EXPORTS //

module.exports = view;
