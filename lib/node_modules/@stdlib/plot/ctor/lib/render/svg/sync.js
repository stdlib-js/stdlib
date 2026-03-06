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

var debug = logger( 'plot:render:svg:sync' );


// MAIN //

/**
* Syncs SVG components with the current state.
*
* @private
* @param {Object} state - state
*/
function sync( state ) {
	var svg = state.$.svg;

	debug( 'Syncing...' );

	debug( 'Syncing canvas...' );
	svg.canvas.width = state.width;
	svg.canvas.height = state.height;

	debug( 'Syncing definitions...' );

	// ...

	debug( 'Syncing clipping path...' );
	svg.clipPath.width = state.graphWidth;
	svg.clipPath.height = state.graphHeight;

	debug( 'Syncing graph...' );
	svg.graph.translateX = state.paddingLeft;
	svg.graph.translateY = state.paddingTop;

	debug( 'Syncing annotations...' );

	// ...

	debug( 'Syncing title...' );
	svg.title.text = state.title;

	debug( 'Syncing background...' );
	svg.bkgd.width = state.graphWidth;
	svg.bkgd.height = state.graphHeight;

	debug( 'Syncing marks...' );
	svg.marks.clipPathId = state._clipPathId; // eslint-disable-line no-underscore-dangle

	debug( 'Syncing path...' );
	svg.path.xScale = state.xScale;
	svg.path.yScale = state.yScale;

	// svg.path.isDefined = state.isDefined; // TODO

	debug( 'Syncing symbols...' );
	svg.symbols.xScale = state.xScale;
	svg.symbols.yScale = state.yScale;

	// svg.symbols.isDefined = state.isDefined; // TODO

	debug( 'Syncing x-axis rug...' );
	svg.xRug.scale = state.xScale;

	// svg.xRug.isDefined = state.isDefined; // TODO

	debug( 'Syncing y-axis rug...' );
	svg.yRug.scale = state.yScale;

	// svg.yRug.isDefined = state.isDefined; // TODO

	debug( 'Syncing x-axis...' );
	svg.xAxis.scale = state.xScale;
	svg.xAxis.label = state.xLabel;
	svg.xAxis.tickFormat = state.xTickFormat;
	svg.xAxis.numTicks = state.xNumTicks;
	svg.xAxis.orientation = state.xAxisOrient;

	debug( 'Syncing y-axis...' );
	svg.yAxis.scale = state.yScale;
	svg.yAxis.label = state.yLabel;
	svg.yAxis.tickFormat = state.yTickFormat;
	svg.yAxis.numTicks = state.yNumTicks;
	svg.yAxis.orientation = state.yAxisOrient;

	debug( 'Sync complete.' );
}


// EXPORTS //

module.exports = sync;
