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
var minstd = require( '@stdlib/random/base/minstd' );
var copy = require( '@stdlib/utils/copy' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var setWidth = require( './props/width/set.js' );
var getWidth = require( './props/width/get.js' );
var setHeight = require( './props/height/set.js' );
var getHeight = require( './props/height/get.js' );
var setID = require( './props/id/set.js' );
var getID = require( './props/id/get.js' );
var setAutoRender = require( './props/auto-render/set.js' );
var getAutoRender = require( './props/auto-render/get.js' );
var render = require( './methods/render.js' );


// VARIABLES //

var debug = logger( 'clippath:main' );


// MAIN //

/**
* Clipping path constructor.
*
* @constructor
* @param {Options} options - constructor options
* @param {PositiveNumber} [options.width=400] - width
* @param {PositiveNumber} [options.height=400] - height
* @param {string} [options.id] - clipping path id
* @param {boolean} [options.autoRender=true] - indicates whether to re-render on a change event
* @throws {TypeError} must provide valid options
* @returns {ClipPath} clipping path instance
*
* @example
* var clipPath = new ClipPath({
*     'width': 500,
*     'height': 500
* });
*/
function ClipPath( options ) {
	var self;
	var opts;
	var err;
	if ( !( this instanceof ClipPath ) ) {
		return new ClipPath( options );
	}
	self = this;
	opts = copy( defaults );
	err = validate( opts, options );
	if ( err ) {
		throw err;
	}
	debug( 'Creating an instance with the following configuration: %s.', JSON.stringify( opts ) );
	EventEmitter.call( this );

	defineProperty( this, '_width', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': opts.width
	});
	defineProperty( this, '_height', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': opts.height
	});
	defineProperty( this, '_id', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': opts.id || minstd().toString() // TODO: uuid
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
ClipPath.prototype = Object.create( EventEmitter.prototype );

/*
* Set the constructor.
*/
ClipPath.prototype.constructor = ClipPath;

/**
* Width.
*
* @name width
* @memberof ClipPath.prototype
* @type {PositiveNumber}
* @throws {TypeError} must be a positive number
* @default 400
*
* @example
* var clipPath = new ClipPath({
*     'width': 500
* });
*
* var width = clipPath.width;
* // returns 500
*/
defineProperty( ClipPath.prototype, 'width', {
	'configurable': false,
	'enumerable': true,
	'set': setWidth,
	'get': getWidth
});

/**
* Height.
*
* @name height
* @memberof ClipPath.prototype
* @type {PositiveNumber}
* @throws {TypeError} must be a positive number
* @default 400
*
* @example
* var clipPath = new ClipPath({
*     'height': 500
* });
*
* var height = clipPath.height;
* // returns 500
*/
defineProperty( ClipPath.prototype, 'height', {
	'configurable': false,
	'enumerable': true,
	'set': setHeight,
	'get': getHeight
});

/**
* Clipping path id.
*
* @name id
* @memberof ClipPath.prototype
* @type {string}
* @throws {TypeError} must be a primitive string
*
* @example
* var clipPath = new ClipPath({
*     'id': '1234'
* });
*
* var id = clipPath.id;
* // returns '1234'
*/
defineProperty( ClipPath.prototype, 'id', {
	'configurable': false,
	'enumerable': true,
	'set': setID,
	'get': getID
});

/**
* Rendering mode. If `true`, an instance re-renders on each change event.
*
* @name autoRender
* @memberof ClipPath.prototype
* @type {boolean}
* @throws {TypeError} must be a boolean primitive
* @default false
*
* @example
* var clipPath = new ClipPath({
*     'autoRender': true
* });
*
* var mode = clipPath.autoRender;
* // returns true
*/
defineProperty( ClipPath.prototype, 'autoRender', {
	'configurable': false,
	'enumerable': true,
	'set': setAutoRender,
	'get': getAutoRender
});

/**
* Renders a virtual DOM tree.
*
* @name render
* @memberof ClipPath.prototype
* @type {Function}
* @returns {VTree} virtual tree
*
* @example
* var clipPath = new ClipPath();
*
* var out = clipPath.render();
*/
setReadOnly( ClipPath.prototype, 'render', render );


// EXPORTS //

module.exports = ClipPath;
