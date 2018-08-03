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

var stdout = require( './stdout' );


// MAIN //

/**
* Generates a plot view.
*
* @private
* @param {Plot} plot - plot context
* @param {string} viewer - plot viewer
* @param {VTree} vtree - virtual tree
* @throws {Error} must specify a supported viewer
* @returns {void}
*/
function view( plot, viewer, vtree ) {
	if ( viewer === 'none' ) {
		return;
	}
	if ( viewer === 'stdout' ) {
		return stdout( vtree );
	}
	if ( viewer === 'browser' ) {
		throw new Error( 'invalid argument. Must provide a supported viewer. Value: `'+viewer+'`.' );
	}
	if ( viewer === 'terminal' ) {
		// TODO: ASCII
		return;
	}
	throw new Error( 'invalid argument. Must provide a supported viewer. Value: `'+viewer+'`.' );
}


// EXPORTS //

module.exports = view;
