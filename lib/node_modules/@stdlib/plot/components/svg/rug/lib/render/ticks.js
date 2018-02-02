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
var xAttr = require( './utils/x_attr.js' );
var yAttr = require( './utils/y_attr.js' );
var tickDir = require( './utils/tick_dir.js' );


// VARIABLES //

var debug = logger( 'rug:render:ticks' );
var ELEMENT = 'line';


// MAIN //

/**
* Renders rug ticks (tassels).
*
* @private
* @param {Object} ctx - context
* @returns {Array<VTree>} array of virtual trees
*/
function render( ctx ) {
	var props;
	var data;
	var out;
	var pos;
	var dir;
	var p;
	var x;
	var y;
	var d;
	var i;

	debug( 'Rendering ticks...' );

	data = ctx.data;
	pos = ctx.pos;
	x = xAttr( ctx.orientation );
	y = yAttr( ctx.orientation );
	dir = tickDir( ctx.orientation );

	out = new Array( data.length );
	for ( i = 0; i < data.length; i++ ) {
		d = data[ i ];
		if ( !ctx.isDefined( d, i ) ) {
			debug( 'Datum %d is not defined. Value: %s.', i, d );
			continue;
		}
		props = {
			'namespace': 'http://www.w3.org/2000/svg',
			'property': 'rug.tick',
			'className': 'tick',
			'attributes': {
				'fill': 'none',
				'opacity': ctx.opacity( d, i ),
				'stroke': ctx.color( d, i ),
				'stroke-width': 1,
				'data-label': ctx.label( d, i )
			}
		};

		p = pos( d );
		props.attributes[ x+'1' ] = 0;
		props.attributes[ x+'2' ] = dir * ctx.size;
		props.attributes[ y+'1' ] = p;
		props.attributes[ y+'2' ] = p;

		debug( 'Rendering tick %d with value %s...', i, d );

		debug( 'Generating a virtual DOM tree (%s) with properties: %s.', ELEMENT, JSON.stringify( props ) );
		out[ i ] = h( ELEMENT, props, [] );
	}
	debug( 'Finished rendering ticks.' );
	return out;
}


// EXPORTS //

module.exports = render;
