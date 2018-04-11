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


// VARIABLES //

var debug = logger( 'rects:render:rects' );
var ELEMENT = 'rect';


// MAIN //

/**
* Renders data as a rectangles.
*
* @private
* @param {Object} state - state
* @returns {Array<VTree>} array of virtual trees
*/
function render( state ) {
	var lineOpacity;
	var faceOpacity;
	var faceColor;
	var lineColor;
	var label;
	var props;
	var xPos;
	var yPos;
	var data;
	var out;
	var pos;
	var x0;
	var x1;
	var y;
	var i;
	var j;

	debug( 'Rendering rectangles...' );

	label = state.label;
	lineOpacity = state.lineOpacity;
	faceOpacity = state.faceOpacity;
	lineColor = state.lineColor;
	faceColor = state.faceColor;
	xPos = state.xPos;
	yPos = state.yPos;
	data = state.data;

	out = new Array( data.length/3 );
	for ( i = 0; i < data.length; i += 3 ) {
		j = i / 3;

		x0 = data[ i ];
		x1 = data[ i+1 ];
		y = data[ i+2 ];

		pos = xPos( x0 );

		debug( 'Rendering datum %d...', j );
		props = {
			'namespace': 'http://www.w3.org/2000/svg',
			'property': 'column',
			'className': 'column',
			'attributes': {
				'x': pos,
				'width': xPos( x1 ) - pos,
				'height': yPos( y ), // FIXME
				'stroke': lineColor( x0, x1, y, j ),
				'stroke-opacity': lineOpacity( x0, x1, y, j ),
				'fill': faceColor( x0, x1, y, j ),
				'fill-opacity': faceOpacity( x0, x1, y, j ),
				'data-label': label( x0, x1, y, j )
			}
		};
		debug( 'Generating a virtual DOM tree (%s) with properties: %s.', ELEMENT, JSON.stringify( props ) );
		out[ j ] = h( ELEMENT, props, [] );
	}
	return out;
}


// EXPORTS //

module.exports = render;
