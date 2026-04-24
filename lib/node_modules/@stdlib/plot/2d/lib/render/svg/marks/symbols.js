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

var debug = logger( 'plot:render:svg:marks:symbols' );


// MAIN //

/**
* Renders symbols marks.
*
* @private
* @param {Object} state - state
* @returns {VTree} virtual tree
*/
function render( state ) {
	var nOpacities;
	var nSymbols;
	var nColors;
	var opacity;
	var nSizes;
	var symbol;
	var color;
	var marks;
	var size;
	var sym;
	var len;
	var i;

	sym = state.$.svg.symbols;
	nOpacities = state.symbolsOpacity.length;
	nSymbols = state.symbols.length;
	nColors = state.colors.length;
	nSizes = state.symbolsSize.length;

	len = state.x.length;
	marks = [];

	debug( 'Rendering symbols...' );
	for ( i = 0; i < len; i++ ) {
		symbol = state.symbols[ i%nSymbols ];
		debug( 'Symbol: %s (%d).', symbol, i );

		if ( symbol === 'none' ) {
			debug( 'Symbol (%d) is `none`. Skipping...', i );
			continue;
		}
		opacity = state.symbolsOpacity[ i%nOpacities ];
		debug( 'Symbols opacity: %d (%d).', opacity, i );

		size = state.symbolsSize[ i%nSizes ];
		debug( 'Symbols size: %d (%d).', size, i );

		color = state.colors[ i%nColors ];
		debug( 'Symbols color: %s (%d).', color, i );

		sym.x = state.x[ i ];
		sym.y = state.y[ i ];
		sym.symbol = symbol;
		sym.label = state.labels[ i ] || '';
		sym.color = color;
		sym.size = size;
		sym.opacity = opacity;

		debug( 'Rendering symbols %d...', i );
		marks.push( sym.render() );
	}
	debug( 'Finished rendering symbols.' );
	return marks;
}


// EXPORTS //

module.exports = render;
