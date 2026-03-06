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
var components = require( './../components' );


// VARIABLES //

var debug = logger( 'axis:render' );


// MAIN //

/**
* Renders a virtual DOM tree.
*
* @private
* @returns {VTree} virtual tree
*/
function render() {
	/* eslint-disable no-invalid-this */
	var vtree;

	debug( 'Rendering...' );
	vtree = components( this );

	// Announce that a new tree has been rendered:
	this.emit( '_render', vtree );

	return vtree;
}


// EXPORTS //

module.exports = render;
