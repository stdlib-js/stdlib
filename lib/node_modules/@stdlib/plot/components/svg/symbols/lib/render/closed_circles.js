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

var debug = logger( 'symbols:render:closed-circles' );
var ELEMENT = 'circle';


// MAIN //

/**
* Renders data as a closed circles.
*
* @private
* @param {Object} state - state
* @returns {Array<VTree>} array of virtual trees
*/
function render( state ) {
	var isDefined;
	var opacity;
	var label;
	var color;
	var props;
	var size;
	var xPos;
	var yPos;
	var out;
	var xi;
	var yi;
	var x;
	var y;
	var i;

	debug( 'Rendering closed circles...' );

	isDefined = state.isDefined;
	opacity = state.opacity;
	label = state.label;
	color = state.color;
	size = state.size;
	xPos = state.xPos;
	yPos = state.yPos;
	x = state.x;
	y = state.y;

	out = new Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		xi = x[ i ];
		yi = y[ i ];
		if ( !isDefined( xi ) || !isDefined( yi ) ) {
			debug( 'Datum %d is undefined. [%s,%s].', i, xi, yi );
			continue;
		}
		debug( 'Rendering datum %d...', i );
		props = {
			'namespace': 'http://www.w3.org/2000/svg',
			'property': 'closed-circle',
			'className': 'closed-circle',
			'attributes': {
				'cx': xPos( xi ),
				'cy': yPos( yi ),
				'r': size( xi, yi, i ) / 2,
				'stroke': 'none',
				'opacity': opacity( xi, yi, i ),
				'fill': color( xi, yi, i ),
				'data-label': label( xi, yi, i )
			}
		};
		debug( 'Generating a virtual DOM tree (%s) with properties: %s.', ELEMENT, JSON.stringify( props ) );
		out[ i ] = h( ELEMENT, props, [] );
	}
	return out;
}


// EXPORTS //

module.exports = render;
