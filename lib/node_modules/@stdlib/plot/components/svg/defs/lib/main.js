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

var EventEmitter = require( 'events' ).EventEmitter;
var logger = require( 'debug' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var inherit = require( '@stdlib/utils/inherit' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var render = require( './render.js' );


// VARIABLES //

var debug = logger( 'defs:main' );


// MAIN //

/**
* SVG definitions constructor.
*
* @constructor
* @returns {Defs} definitions instance
*
* @example
* var node = new Defs();
* // returns <Defs>
*/
function Defs() {
	var self;
	if ( !instanceOf( this, Defs ) ) {
		return new Defs();
	}
	self = this;
	debug( 'Creating an instance...' );
	EventEmitter.call( this );
	this.on( 'change', onChange );
	this.on( '_render', onRender );
	return this;

	/**
	* Callback invoked upon receiving a change event.
	*
	* @private
	*/
	function onChange() {
		debug( 'Received a change event.' );
		self.render();
	}

	/**
	* Re-emits a render event.
	*
	* @private
	*/
	function onRender() {
		var args;
		var i;
		debug( 'Received a render event. Re-emitting...' );
		args = new Array( arguments.length+1 );
		args[ 0 ] = 'render';
		for ( i = 0; i < arguments.length; i++ ) {
			args[ i+1 ] = arguments[ i ];
		}
		self.emit.apply( self, args );
	}
}

/*
* Inherit from the `EventEmitter` prototype.
*/
inherit( Defs, EventEmitter );

/**
* Renders a virtual DOM tree.
*
* @name render
* @memberof Defs.prototype
* @type {Function}
* @returns {VTree} virtual tree
*
* @example
* var node = new Defs();
*
* var out = node.render();
* // returns <Object>
*/
setReadOnly( Defs.prototype, 'render', render );


// EXPORTS //

module.exports = Defs;
