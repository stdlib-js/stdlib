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
var dy = require( './../utils/text_dy.js' );
var xAttr = require( './../utils/x_attr.js' );
var yAttr = require( './../utils/y_attr.js' );


// VARIABLES //

var debug = logger( 'axis:components:text' );
var ELEMENT = 'text';


// MAIN //

/**
* Renders tick text.
*
* @private
* @param {Object} ctx - context
* @param {*} d - tick value
* @returns {VTree} virtual tree
*/
function render( ctx, d ) {
	/* eslint-disable no-underscore-dangle */
	var orient;
	var props;
	var txt;
	var x;
	var y;

	orient = ctx._orientation;
	debug( 'Axis orientation: %s.', orient );

	props = {
		'namespace': 'http://www.w3.org/2000/svg',
		'attributes': {
			'fill': '#000',
			'dy': dy( orient )
		}
	};

	x = xAttr( orient );
	y = yAttr( orient );

	props.attributes[ x ] = ctx.tickDir * ctx.tickSpacing;
	props.attributes[ y ] = 0.5;

	txt = ctx.tickFormat( d );
	debug( 'Tick text: %s.', txt );

	debug( 'Generating a virtual DOM tree (%s) with properties: %s.', ELEMENT, JSON.stringify( props ) );

	return h( ELEMENT, props, txt );
}


// EXPORTS //

module.exports = render;
