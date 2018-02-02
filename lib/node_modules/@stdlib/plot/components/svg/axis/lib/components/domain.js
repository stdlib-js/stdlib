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

/*
* For manually constructing SVG paths, see [MDN]{@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d}
*/

// MODULES //

var logger = require( 'debug' );
var h = require( 'virtual-dom/h' );


// VARIABLES //

var debug = logger( 'axis:components:domain' );
var ELEMENT = 'path';


// MAIN //

/**
* Renders an axis domain.
*
* @private
* @param {Object} ctx - context
* @returns {VTree} virtual tree
*/
function render( ctx ) {
	/* eslint-disable no-underscore-dangle */
	var orient;
	var stroke;
	var range0;
	var range1;
	var offset;
	var range;
	var props;
	var d;

	orient = ctx._orientation;
	debug( 'Axis orientation: %s.', orient );

	range = ctx._scale.range();
	debug( 'Axis range: %s.', JSON.stringify( range ) );

	range0 = range[ 0 ] + 0.5;
	range1 = range[ range.length-1 ] + 0.5;

	offset = ctx.tickDir * ctx._outerTickSize;
	d = '';
	if ( orient === 'left' || orient === 'right' ) {
		d += 'M' + offset + ',' + range0;
		d += 'H0.5';
		d += 'V' + range1;
		d += 'H' + offset;

		stroke = 'none';
	} else {
		d += 'M' + range0 + ',' + offset;
		d += 'V0.5';
		d += 'H' + range1;
		d += 'V' + offset;

		stroke = '#aaa';
	}
	props = {
		'namespace': 'http://www.w3.org/2000/svg',
		'property': 'axis.domain',
		'className': 'domain',
		'attributes': {
			'fill': 'none',
			'stroke': stroke,
			'stroke-width': 1,
			'd': d
		}
	};

	debug( 'Generating a virtual DOM tree (%s) with properties: %s.', ELEMENT, JSON.stringify( props ) );

	return h( ELEMENT, props, [] );
}


// EXPORTS //

module.exports = render;
