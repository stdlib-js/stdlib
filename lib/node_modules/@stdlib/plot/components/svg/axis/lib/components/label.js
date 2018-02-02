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
var labelTransform = require( './../utils/label_transform.js' );
var labelXPos = require( './../utils/label_x_pos.js' );
var labelYPos = require( './../utils/label_y_pos.js' );


// VARIABLES //

var debug = logger( 'axis:components:label' );
var ELEMENT = 'text';


// MAIN //

/**
* Renders an axis label.
*
* @private
* @param {Object} ctx - context
* @returns {VTree} virtual tree
*/
function render( ctx ) {
	/* eslint-disable no-underscore-dangle */
	var orient;
	var props;

	orient = ctx._orientation;
	debug( 'Axis orientation: %s.', orient );

	props = {
		'namespace': 'http://www.w3.org/2000/svg',
		'property': 'axis.label',
		'className': 'label noselect',
		'attributes': {
			'fill': '#000',
			'stroke': 'none',
			'text-anchor': 'middle',
			'transform': labelTransform( orient ),
			'x': labelXPos( orient, ctx._scale.range() ),
			'y': labelYPos( orient )
		}
	};

	debug( 'Axis label: %s.', ctx._label );

	debug( 'Generating a virtual DOM tree (%s) with properties: %s.', ELEMENT, JSON.stringify( props ) );

	return h( ELEMENT, props, ctx._label );
}


// EXPORTS //

module.exports = render;
