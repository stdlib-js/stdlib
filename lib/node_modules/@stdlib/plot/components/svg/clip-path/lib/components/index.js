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
var rect = require( './rect.js' );


// VARIABLES //

var debug = logger( 'clippath:components:main' );
var ELEMENT = 'clipPath';


// MAIN //

/**
* Renders a clipping path.
*
* @private
* @param {Object} ctx - context
* @returns {VTree} virtual tree
*/
function render( ctx ) {
	var children;
	var props;

	props = {
		'namespace': 'http://www.w3.org/2000/svg',
		'id': ctx.id
	};

	debug( 'Rendering clipping path rectangle...' );
	children = [
		rect( ctx )
	];

	debug( 'Generating a virtual DOM tree (%s) with properties: %s.', ELEMENT, JSON.stringify( props ) );

	return h( ELEMENT, props, children );
}


// EXPORTS //

module.exports = render;
