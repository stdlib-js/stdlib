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
var xAxisTransform = require( './utils/x_axis_transform.js' );
var yAxisTransform = require( './utils/y_axis_transform.js' );
var renderMarks = require( './marks' );
var init = require( './init.js' );
var sync = require( './sync.js' );


// VARIABLES //

var debug = logger( 'hist:render:svg:main' );


// MAIN //

/**
* Renders a virtual DOM tree.
*
* @private
* @param {Object} state - state
* @returns {VTree} virtual tree
*/
function render( state ) {
	var annotations;
	var clipPath;
	var canvas;
	var title;
	var graph;
	var marks;
	var xAxis;
	var yAxis;
	var bkgd;
	var defs;
	var svg;

	svg = state.$.svg;

	// Lazily initialize...
	if ( !svg.canvas ) {
		debug( 'Initializing components...' );
		init( state );
	}
	debug( 'Syncing component states...' );
	sync( state );

	debug( 'Rendering individual components...' );

	debug( 'Rendering annotations...' );
	annotations = svg.annotations.render();

	debug( 'Rendering clip-path...' );
	clipPath = svg.clipPath.render();

	debug( 'Rendering canvas...' );
	canvas = svg.canvas.render();

	debug( 'Rendering graph...' );
	graph = svg.graph.render();

	debug( 'Rendering title...' );
	title = svg.title.render();

	debug( 'Rendering x-axis...' );
	xAxis = svg.xAxis.render();

	debug( 'Rendering y-axis...' );
	yAxis = svg.yAxis.render();

	debug( 'Rendering background...' );
	bkgd = svg.bkgd.render();

	debug( 'Rendering definitions...' );
	defs = svg.defs.render();

	debug( 'Rendering marks...' );
	marks = renderMarks( state );

	debug( 'Updating rendered components...' );

	debug( 'Updating title...' );
	title.properties.attributes.x = state.paddingLeft + ( state.graphWidth/2 );
	title.properties.attributes.y = state.paddingTop / 2;

	debug( 'Updating x-axis...' );
	xAxis.properties.className += ' x';
	xAxis.properties.attributes.transform = xAxisTransform( state.xAxisOrient, state.graphHeight ); // eslint-disable-line max-len

	debug( 'Updating y-axis...' );
	yAxis.properties.className += ' y';
	yAxis.properties.attributes.transform = yAxisTransform( state.yAxisOrient, state.graphWidth ); // eslint-disable-line max-len

	debug( 'Assembling virtual tree...' );

	debug( 'Inserting clip-path into definitions...' );
	defs.children.push( clipPath );
	defs.count += clipPath.count;

	debug( 'Inserting background into graph...' );
	graph.children.push( bkgd );
	graph.count += bkgd.count;

	debug( 'Inserting marks into graph...' );
	graph.children.push( marks );
	graph.count += marks.count;

	debug( 'Inserting x-axis into graph...' );
	graph.children.push( xAxis );
	graph.count += xAxis.count;

	debug( 'Inserting y-axis into graph...' );
	graph.children.push( yAxis );
	graph.count += yAxis.count;

	debug( 'Inserting title into annotations...' );
	annotations.children.push( title );
	annotations.count += title.count;

	debug( 'Inserting definitions into canvas...' );
	canvas.children.push( defs );
	canvas.count += defs.count;

	debug( 'Inserting graph into canvas...' );
	canvas.children.push( graph );
	canvas.count += graph.count;

	debug( 'Inserting annotations into canvas...' );
	canvas.children.push( annotations );
	canvas.count += annotations.count;

	return canvas;
}


// EXPORTS //

module.exports = render;
