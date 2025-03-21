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

	// Bar face colors:
	o.barColors = 'category10';

	// Bar face opacity:
	o.barOpacity = 0.9; // [0,1]

	// Binning algorithm:
	o.binMethod = null;

	// Bins and/or number of bins:
	o.bins = [];

	// Bin width:
	o.binWidth = null;

	// Histogram description:
	o.description = '';

	// Maximum bin edge:
	o.edgeMax = null;

	// Minimum bin edge:
	o.edgeMin = null;

	// Bin edges:
	o.edges = [];

	// Rendering engine:
	o.engine = 'svg';

	// Histogram height:
	o.height = 400; // px

	// Accessor indicating whether a datum is defined:
	o.isDefined = isDefined;

	// Data labels:
	o.labels = [];

	// Line color:
	o.lineColors = '#000000';

	// Line opacity:
	o.lineOpacity = 0.9; // [0,1]

	// Line style:
	o.lineStyle = '-';

	// Data line width(s):
	o.lineWidth = 2; // px

	// Histogram normalization:
	o.normalization = 'count';

	// Histogram orientation:
	o.orientation = 'vertical';

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

	// Histgram title:
	o.title = '';

	// Histogram viewer:
	if ( isREPL ) {
		o.viewer = 'window';
	} else {
		o.viewer = 'none';
	}
	// Histogram width:
	o.width = 400; // px

	// Values to bin:
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

	// x-axis tick format:
	o.xTickFormat = null;

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

	// y-axis tick format:
	o.yTickFormat = null;

	return o;
}


// EXPORTS //

module.exports = defaults;
