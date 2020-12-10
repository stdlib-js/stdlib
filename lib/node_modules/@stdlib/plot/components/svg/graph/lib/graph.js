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
var defineProperty = require( '@stdlib/utils/define-property' );
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var copy = require( '@stdlib/utils/copy' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var setTranslateX = require( './props/translate-x/set.js' );
var getTranslateX = require( './props/translate-x/get.js' );
var setTranslateY = require( './props/translate-y/set.js' );
var getTranslateY = require( './props/translate-y/get.js' );
var setAutoRender = require( './props/auto-render/set.js' );
var getAutoRender = require( './props/auto-render/get.js' );
var render = require( './methods/render.js' );


// VARIABLES //

var debug = logger( 'graph:main' );


// MAIN //

/**
* Graph constructor.
*
* @constructor
* @param {Options} options - constructor options
* @param {NonNegativeInteger} [options.translateX=0] - horizontal translation
* @param {NonNegativeInteger} [options.translateY=0] - vertical translation
* @param {boolean} [options.autoRender=false] - indicates whether to re-render on a change event
* @throws {TypeError} must provide valid options
* @returns {Graph} graph instance
*
* @example
* var graph = new Graph({
*     'translateX': 90,
*     'translateY': 20
* });
*/
function Graph( options ) {
	var self;
	var opts;
	var err;
	if ( !( this instanceof Graph ) ) {
		return new Graph( options );
	}
	self = this;
	opts = copy( defaults );
	err = validate( opts, options );
	if ( err ) {
		throw err;
	}
	debug( 'Creating an instance with the following configuration: %s.', JSON.stringify( opts ) );
	EventEmitter.call( this );

	defineProperty( this, '_translateX', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': opts.translateX
	});
	defineProperty( this, '_translateY', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': opts.translateY
	});
	defineProperty( this, '_autoRender', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': opts.autoRender
	});

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
		if ( self._autoRender ) { // eslint-disable-line no-underscore-dangle
			self.render();
		}
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
* Create a prototype which inherits from the parent prototype.
*/
Graph.prototype = Object.create( EventEmitter.prototype );

/*
* Set the constructor.
*/
Graph.prototype.constructor = Graph;

/**
* Horizontal translation.
*
* @name translateX
* @memberof Graph.prototype
* @type {NonNegativeInteger}
* @throws {TypeError} must be a nonnegative integer
* @default 0
*
* @example
* var graph = new Graph({
*     'translateX': 90
* });
*
* var v = graph.translateX;
* // returns 90
*/
defineProperty( Graph.prototype, 'translateX', {
	'configurable': false,
	'enumerable': true,
	'set': setTranslateX,
	'get': getTranslateX
});

/**
* Vertical translation.
*
* @name translateY
* @memberof Graph.prototype
* @type {NonNegativeInteger}
* @throws {TypeError} must be a nonnegative integer
* @default 0
*
* @example
* var graph = new Graph({
*     'translateY': 20
* });
*
* var v = graph.translateY;
* // returns 20
*/
defineProperty( Graph.prototype, 'translateY', {
	'configurable': false,
	'enumerable': true,
	'set': setTranslateY,
	'get': getTranslateY
});

/**
* Rendering mode. If `true`, an instance re-renders on each change event.
*
* @name autoRender
* @memberof Graph.prototype
* @type {boolean}
* @throws {TypeError} must be a boolean primitive
* @default false
*
* @example
* var graph = new Graph({
*     'autoRender': true
* });
*
* var mode = graph.autoRender;
* // returns true
*/
defineProperty( Graph.prototype, 'autoRender', {
	'configurable': false,
	'enumerable': true,
	'set': setAutoRender,
	'get': getAutoRender
});

/**
* Renders a virtual DOM tree.
*
* @name render
* @memberof Graph.prototype
* @type {Function}
* @returns {VTree} virtual tree
*
* @example
* var graph = new Graph();
*
* var out = graph.render();
*/
setReadOnly( Graph.prototype, 'render', render );


// EXPORTS //

module.exports = Graph;
