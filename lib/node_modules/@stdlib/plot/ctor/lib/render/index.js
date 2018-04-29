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
var vdom2html = require( 'vdom-to-html' );
var renderSVG = require( './svg' );
var validate = require( './validate.js' );


// VARIABLES //

var debug = logger( 'plot:render' );


// MAIN //

/**
* Renders a plot.
*
* @private
* @param {string} [format] - render format
* @returns {(VTree|string)} virtual tree or a string
*/
function render( format ) {
	/* eslint-disable no-invalid-this */
	var out;
	var tmp;
	var fmt;

	tmp = this.renderFormat;
	if ( arguments.length ) {
		// Temporarily set the render format:
		this.renderFormat = format;
		fmt = format;
	} else {
		fmt = tmp;
	}
	debug( 'Validating render state...' );
	validate( this );

	debug( 'Render format: %s.', this.renderFormat );
	debug( 'Rendering...' );
	if ( this._engine === 'svg' ) {
		out = renderSVG( this );

		// Default render format is virtual DOM.
		if ( fmt === 'html' ) {
			out = vdom2html( out );
		}
		this.emit( 'render', out );
	}
	if ( arguments.length ) {
		// Restore the render format:
		this.renderFormat = tmp;
	}
	return out;
}


// EXPORTS //

module.exports = render;
