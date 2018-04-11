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
var h = require( 'virtual-dom/h' );
var columns = require( './columns.js' );
var bars = require( './bars.js' );


// VARIABLES //

var debug = logger( 'rects:render' );
var ELEMENT = 'g';
var RENDER = {
	'vertical': columns,
	'horizontal': bars
};


// MAIN //

/**
* Renders a virtual DOM tree.
*
* @private
* @returns {VTree} virtual DOM tree
*/
function render() {
	/* eslint-disable no-invalid-this */
	var children;
	var props;
	var vtree;
	var f;

	debug( 'Rendering...' );

	props = {
		'namespace': 'http://www.w3.org/2000/svg',
		'property': 'rects',
		'className': 'rects'
	};
	f = RENDER[ this.orientation ];
	children = f( this );

	debug( 'Generating a virtual DOM tree (%s) with properties: %s.', ELEMENT, JSON.stringify( props ) );
	vtree = h( ELEMENT, props, children );

	// Announce that a new tree has been rendered:
	this.emit( '_render', vtree );

	return vtree;
}


// EXPORTS //

module.exports = render;
