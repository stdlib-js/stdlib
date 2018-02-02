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
var xAttr = require( './../utils/x_attr.js' );
var yAttr = require( './../utils/y_attr.js' );


// VARIABLES //

var debug = logger( 'axis:components:line' );
var ELEMENT = 'line';


// MAIN //

/**
* Renders a tick line.
*
* @private
* @param {Object} ctx - context
* @returns {VTree} virtual tree
*/
function render( ctx ) {
	/* eslint-disable no-underscore-dangle */
	var props;
	var x;
	var y;

	props = {
		'namespace': 'http://www.w3.org/2000/svg',
		'attributes': {
			'stroke': '#aaa',
			'stroke-width': 1
		}
	};

	x = xAttr( ctx._orientation );
	y = yAttr( ctx._orientation );

	props.attributes[ x+'2' ] = ctx.tickDir * ctx._innerTickSize;
	props.attributes[ y+'1' ] = 0.5;
	props.attributes[ y+'2' ] = 0.5;

	debug( 'Generating a virtual DOM tree (%s) with properties: %s.', ELEMENT, JSON.stringify( props ) );

	return h( ELEMENT, props, [] );
}


// EXPORTS //

module.exports = render;
