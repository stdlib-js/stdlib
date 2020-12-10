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
var setText = require( './props/text/set.js' );
var getText = require( './props/text/get.js' );
var setAutoRender = require( './props/auto-render/set.js' );
var getAutoRender = require( './props/auto-render/get.js' );
var render = require( './methods/render.js' );


// VARIABLES //

var debug = logger( 'title:main' );


// MAIN //

/**
* Title constructor.
*
* @constructor
* @param {Options} options - constructor options
* @param {string} [options.text] - title text
* @param {boolean} [options.autoRender=false] - indicates whether to re-render on a change event
* @throws {TypeError} must provide valid options
* @returns {Title} title instance
*
* @example
* var title = new Title({
*     'text':'Beep'
* });
*/
function Title( options ) {
	var self;
	var opts;
	var err;
	if ( !( this instanceof Title ) ) {
		return new Title( options );
	}
	self = this;
	opts = copy( defaults );
	err = validate( opts, options );
	if ( err ) {
		throw err;
	}
	debug( 'Creating an instance with the following configuration: %s.', JSON.stringify( opts ) );
	EventEmitter.call( this );

	defineProperty( this, '_text', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': opts.text
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
Title.prototype = Object.create( EventEmitter.prototype );

/*
* Set the constructor.
*/
Title.prototype.constructor = Title;

/**
* Title text.
*
* @name text
* @memberof Title.prototype
* @type {string}
* @throws {TypeError} must be a primitive string
*
* @example
* var title = new Title({
*     'text': 'Beep'
* });
*
* var text = title.text;
* // returns 'Beep'
*/
defineProperty( Title.prototype, 'text', {
	'configurable': false,
	'enumerable': true,
	'set': setText,
	'get': getText
});

/**
* Rendering mode. If `true`, an instance re-renders on each change event.
*
* @name autoRender
* @memberof Title.prototype
* @type {boolean}
* @throws {TypeError} must be a boolean primitive
* @default false
*
* @example
* var title = new Title({
*     'autoRender': true
* });
*
* var mode = title.autoRender;
* // returns true
*/
defineProperty( Title.prototype, 'autoRender', {
	'configurable': false,
	'enumerable': true,
	'set': setAutoRender,
	'get': getAutoRender
});

/**
* Renders a virtual DOM tree.
*
* @name render
* @memberof Title.prototype
* @type {Function}
* @returns {VTree} virtual tree
*
* @example
* var title = new Title();
*
* var out = title.render();
*/
setReadOnly( Title.prototype, 'render', render );


// EXPORTS //

module.exports = Title;
