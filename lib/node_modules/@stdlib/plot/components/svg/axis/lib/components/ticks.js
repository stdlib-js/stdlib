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
var tickTransform = require( './../utils/tick_transform.js' );
var tick = require( './tick.js' );


// VARIABLES //

var debug = logger( 'axis:components:ticks' );


// MAIN //

/**
* Renders axis ticks.
*
* @private
* @param {Object} ctx - context
* @returns {Array<VTree>} array of virtual DOM trees
*/
function render( ctx ) {
	/* eslint-disable no-underscore-dangle */
	var transform;
	var values;
	var out;
	var i;

	values = ctx.ticks;
	debug( 'Tick values: %s.', JSON.stringify( values ) );

	debug( 'Generating tick transform...' );
	transform = tickTransform( ctx._orientation, ctx._scale );

	debug( 'Rendering ticks...' );
	out = new Array( values.length );
	for ( i = 0; i < values.length; i++ ) {
		debug( 'Rendering tick %d with value %s...', i, values[i] );
		out[ i ] = tick( ctx, values[i], transform );
	}
	debug( 'Finished rendering ticks.' );
	return out;
}


// EXPORTS //

module.exports = render;
