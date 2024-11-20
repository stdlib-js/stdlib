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
var columns = require( './columns.js' );


// VARIABLES //

var debug = logger( 'hist:render:svg:marks' );


// MAIN //

/**
* Renders individual marks.
*
* @private
* @param {Object} state - state
* @returns {VTree} virtual tree
*/
function render( state ) {
	var parent;
	var marks;
	var len;
	var i;

	debug( 'Rendering marks group...' );
	parent = state.$.svg.marks.render();

	len = state.x.length;
	if ( len === 0 ) {
		debug( 'No individual marks to render.' );
		return parent;
	}
	marks = [];

	debug( 'Rendering columns...' );
	marks = marks.concat( columns( state ) );

	debug( 'Inserting individual marks into marks group...' );
	for ( i = 0; i < marks.length; i++ ) {
		parent.children.push( marks[i] );
		parent.count += marks[i].count;
	}
	debug( 'Finished rendering marks.' );
	return parent;
}


// EXPORTS //

module.exports = render;
