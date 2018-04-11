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


// VARIABLES //

var debug = logger( 'hist:render:svg:marks:columns' );


// MAIN //

/**
* Renders column marks.
*
* @private
* @param {Object} state - state
* @returns {VTree} virtual tree
*/
function render( state ) {
	var nOpacities;
	var lineStyle;
	var opacity;
	var nColors;
	var nStyles;
	var nWidths;
	var color;
	var width;
	var marks;
	var line;
	var len;
	var i;

	// FIXME

	line = state.$.svg.path;
	nOpacities = state.lineOpacity.length;
	nStyles = state.lineStyle.length;
	nWidths = state.lineWidth.length;
	nColors = state.colors.length;

	len = state.x.length;
	marks = [];

	debug( 'Rendering columns...' );
	for ( i = 0; i < len; i++ ) {
		lineStyle = state.lineStyle[ i%nStyles ];
		debug( 'Line style: %s (%d).', lineStyle, i );

		if ( lineStyle === 'none' ) {
			debug( 'Line style (%d) is `none`. Skipping...', i );
			continue;
		}
		color = state.colors[ i%nColors ];
		debug( 'Line color: %s (%d).', color, i );

		opacity = state.lineOpacity[ i%nOpacities ];
		debug( 'Line opacity: %s (%d).', opacity, i );

		width = state.lineWidth[ i%nWidths ];
		debug( 'Line width: %s (%d).', width, i );

		line.x = state.x[ i ];
		line.y = state.y[ i ];
		line.style = lineStyle;
		line.label = state.labels[ i ] || '';
		line.color = color;
		line.opacity = opacity;
		line.width = width;

		debug( 'Rendering columns %d...', i );
		marks.push( line.render() );
	}
	debug( 'Finished rendering columns.' );
	return marks;
}


// EXPORTS //

module.exports = render;
