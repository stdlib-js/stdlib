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
var xRugTransform = require( './../utils/x_rug_transform.js' );


// VARIABLES //

var debug = logger( 'plot:render:svg:marks:x-rug' );


// MAIN //

/**
* Renders x-axis rug plots.
*
* @private
* @param {Object} state - state
* @returns {VTree} virtual tree
*/
function render( state ) {
	var rugTransform;
	var nOpacities;
	var nOrients;
	var opacity;
	var nColors;
	var nSizes;
	var orient;
	var nFlgs;
	var color;
	var marks;
	var size;
	var rug;
	var len;
	var tmp;
	var i;

	rug = state.$.svg.xRug;

	nOpacities = state.xRugOpacity.length;
	nOrients = state.xRugOrient.length;
	nColors = state.colors.length;
	nSizes = state.xRugSize.length;
	nFlgs = state.xRug.length;

	len = state.x.length;
	marks = [];

	debug( 'Rendering x-axis rug plots...' );
	for ( i = 0; i < len; i++ ) {
		if ( !state.xRug[ i%nFlgs ] ) {
			debug( 'Rug plot (%d) disabled. Skipping...', i );
			continue;
		}
		color = state.colors[ i%nColors ];
		debug( 'Rug color: %s (%d).', color, i );

		opacity = state.xRugOpacity[ i%nOpacities ];
		debug( 'Rug opacity: %d (%d).', opacity, i );

		orient = state.xRugOrient[ i%nOrients ];
		debug( 'Rug orientation: %s (%d).', orient, i );

		size = state.xRugSize[ i%nSizes ];
		debug( 'Rug tick size: %d (%d).', size, i );

		rug.data = state.x[ i ];
		rug.label = state.labels[ i ] || '';
		rug.color = color;
		rug.size = size;
		rug.opacity = opacity;
		rug.orientation = orient;

		debug( 'Rendering x-axis rug %d...', i );
		tmp = rug.render();

		// Update the class name to indicate this is an x-axis rug and add a transform to translate the rug into position based on the graph dimensions.
		tmp.properties.className += ' x';
		rugTransform = xRugTransform( orient, state.graphHeight );
		if ( !tmp.properties.attributes ) {
			tmp.properties.attributes = {};
		}
		tmp.properties.attributes.transform = rugTransform;

		marks.push( tmp );
	}
	debug( 'Finished rendering x-axis rug plots.' );
	return marks;
}


// EXPORTS //

module.exports = render;
