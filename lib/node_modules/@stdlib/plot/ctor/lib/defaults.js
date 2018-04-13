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

var isNodeREPL = require( '@stdlib/assert/is-node-repl' );
var isDefined = require( './accessors/is_defined.js' );


// MAIN //

/**
* Returns default options.
*
* @private
* @returns {Object} default options
*/
function defaults() {
	var isREPL;
	var o;

	isREPL = isNodeREPL();
	o = {};

	// Boolean indicating whether to re-render on a change event:
	o.autoRender = false;

	// Boolean indicating whether to generate an updated view on a render event:
	o.autoView = false;

	// Data colors:
	o.colors = 'category10';

	// Plot description:
	o.description = '';

	// Plot engine:
	o.engine = 'svg';

	// Plot height:
	o.height = 400; // px

	// Accessor indicating whether a datum is defined:
	o.isDefined = isDefined;

	// Data labels:
	o.labels = [];

	// Data line opacity:
	o.lineOpacity = 0.9; // [0,1]

	// Data line style(s):
	o.lineStyle = '-';

	// Data line width(s):
	o.lineWidth = 2; // px

	// FIXME: padding props depend on orientation (may require using `null` to flag)

	// Bottom padding:
	o.paddingBottom = 80; // px

	// Left padding:
	o.paddingLeft = 90; // px

	// Right padding:
	o.paddingRight = 20; // px

	// Top padding:
	o.paddingTop = 80; // px

	// Render format:
	o.renderFormat = 'vdom';

	// Data symbols:
	o.symbols = 'none';

	// Symbols opacity:
	o.symbolsOpacity = 0.9; // [0,1]

	// Symbols size:
	o.symbolsSize = 6; // px

	// Plot title:
	o.title = '';

	// Plot viewer:
	if ( isREPL ) {
		o.viewer = 'window';
	} else {
		o.viewer = 'none';
	}
	// Plot width:
	o.width = 400; // px

	// x-values:
	o.x = [];

	// x-axis orientation:
	o.xAxisOrient = 'bottom';

	// x-axis label:
	o.xLabel = 'x';

	// Maximum value of x-axis domain:
	o.xMax = null;

	// Minimum value of x-axis domain:
	o.xMin = null;

	// Number of x-axis tick marks:
	o.xNumTicks = 5;

	// Boolean indicating whether to render a rug plot along the x-axis:
	o.xRug = false;

	// x-axis rug orientation:
	o.xRugOrient = 'bottom';

	// x-axis rug opacity:
	o.xRugOpacity = 0.1; // [0,1]

	// x-axis rug tick (tassel) size:
	o.xRugSize = 6; // px

	// x-axis scale:
	o.xScale = 'linear';

	// x-axis tick format:
	o.xTickFormat = null;

	// y-values:
	o.y = [];

	// y-axis orientation:
	o.yAxisOrient = 'left';

	// y-axis label:
	o.yLabel = 'y';

	// Maximum value of y-axis domain:
	o.yMax = null;

	// Minimum value of y-axis domain:
	o.yMin = null;

	// Number of y-axis tick marks:
	o.yNumTicks = 5;

	// Boolean indicating whether to render a rug plot along the y-axis:
	o.yRug = false;

	// y-axis rug orientation:
	o.yRugOrient = 'left';

	// y-axis rug opacity:
	o.yRugOpacity = 0.1; // [0,1]

	// y-axis rug tick (tassel) size:
	o.yRugSize = 6; // px

	// y-axis scale:
	o.yScale = 'linear';

	// y-axis tick format:
	o.yTickFormat = null;

	return o;
}


// EXPORTS //

module.exports = defaults;
