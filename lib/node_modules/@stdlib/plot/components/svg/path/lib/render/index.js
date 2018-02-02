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
var zip = require( './utils/zip.js' );
var style = require( './utils/style.js' );


// VARIABLES //

var debug = logger( 'path:render' );
var ELEMENT = 'path';


// MAIN //

/**
* Renders a virtual DOM tree.
*
* @private
* @returns {VTree} virtual DOM tree
*/
function render() {
	/* eslint-disable no-invalid-this */
	var props;
	var vtree;

	debug( 'Rendering...' );

	props = {
		'namespace': 'http://www.w3.org/2000/svg',
		'property': 'line',
		'className': 'path line',
		'attributes': {
			'd': this.line( zip( this._xData, this._yData ) ),
			'fill': 'none',
			'stroke': this.color,
			'stroke-width': this.width,
			'stroke-opacity': this.opacity,
			'stroke-dasharray': style( this.style ),
			'data-label': this.label
		}
	};

	debug( 'Generating a virtual DOM tree (%s) with properties: %s.', ELEMENT, JSON.stringify( props ) );
	vtree = h( ELEMENT, props, [] );

	// Announce that a new tree has been rendered:
	this.emit( '_render', vtree );

	return vtree;
}


// EXPORTS //

module.exports = render;
