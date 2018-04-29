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
var line = require( './line.js' );
var text = require( './text.js' );


// VARIABLES //

var debug = logger( 'axis:components:tick' );
var ELEMENT = 'g';


// MAIN //

/**
* Renders an axis tick.
*
* @private
* @param {Object} ctx - context
* @param {*} d - tick value
* @param {Function} transform - tick transform
* @returns {VTree} virtual tree
*/
function render( ctx, d, transform ) {
	var children;
	var props;

	props = {
		'namespace': 'http://www.w3.org/2000/svg',
		'property': 'axis.tick',
		'className': 'tick',
		'attributes': {
			'opacity': 1,
			'transform': transform( d )
		}
	};
	children = new Array( 2 );

	debug( 'Rendering a tick line...' );
	children[ 0 ] = line( ctx );

	debug( 'Rendering tick text...' );
	children[ 1 ] = text( ctx, d );

	debug( 'Generating a virtual DOM tree (%s) with properties: %s.', ELEMENT, JSON.stringify( props ) );

	return h( ELEMENT, props, children );
}


// EXPORTS //

module.exports = render;
