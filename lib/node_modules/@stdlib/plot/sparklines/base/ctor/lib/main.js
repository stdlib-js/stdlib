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
var objectKeys = require( '@stdlib/utils/keys' );
var inherit = require( '@stdlib/utils/inherit' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var isCollection = require( '@stdlib/assert/is-collection' );
var mergeFcn = require( '@stdlib/utils/merge' ).factory;
var defaults = require( './defaults.js' );
var setAutoRender = require( './props/auto-render/set.js' );
var getAutoRender = require( './props/auto-render/get.js' );
var setBufferSize = require( './props/buffer-size/set.js' );
var getBufferSize = require( './props/buffer-size/get.js' );
var setData = require( './props/data/set.js' );
var getData = require( './props/data/get.js' );
var setDescription = require( './props/description/set.js' );
var getDescription = require( './props/description/get.js' );
var setIsDefined = require( './props/is-defined/set.js' );
var getIsDefined = require( './props/is-defined/get.js' );
var setLabel = require( './props/label/set.js' );
var getLabel = require( './props/label/get.js' );
var push = require( './push.js' );
var render = require( './render' );
var stub = require( './render/stub.js' );
var toString = require( './tostring.js' ); // eslint-disable-line stdlib/no-redeclare


// VARIABLES //

var debug = logger( 'sparkline:main' );

var merge = mergeFcn({
	'extend': false
});

// List of private properties (note: keep in alphabetical order):
var PRIVATE_PROPS = [
	'_autoRender',
	'_bufferSize',
	'_data',
	'_description',
	'_isDefined',
	'_labels'
];


// MAIN //

/**
* Sparkline constructor.
*
* @constructor
* @param {(Collection|ndarrayLike)} [data] - sparkline data
* @param {Options} [options] - sparkline options
* @param {boolean} [options.autoRender=false] - indicates whether to re-render on a `change` event
* @param {(PositiveInteger|null)} [options.bufferSize] - data buffer size
* @param {(Collection|ndarrayLike)} [options.data] - data
* @param {string} [options.description=''] - sparkline description
* @param {Function} [options.isDefined] - accessor indicating whether a datum is defined
* @param {string} [options.label] - data label
* @throws {TypeError} must provide valid options
* @returns {Sparkline} sparkline instance
*
* @example
* var data = [ 1.0, 5.0, 3.0, 2.0, 4.0, 4.0, 3.0 ];
*
* var chart = Sparkline( data );
*
* @example
* var data = [ 1.0, 5.0, 3.0, 2.0, 4.0, 4.0, 3.0 ];
* var opts = {
*     'data': data
* };
* var chart = Sparkline( opts );
*/
function Sparkline() {
	var options;
	var nargs;
	var opts;
	var keys;
	var self;
	var key;
	var i;

	nargs = arguments.length;
	if ( !(this instanceof Sparkline) ) {
		if ( nargs === 0 ) {
			return new Sparkline();
		}
		if ( nargs === 1 ) {
			return new Sparkline( arguments[ 0 ] );
		}
		return new Sparkline( arguments[ 0 ], arguments[ 1 ] );
	}
	self = this;

	opts = defaults();
	if ( nargs === 0 ) {
		options = {};
	} else if ( nargs === 1 ) {
		if ( isCollection( arguments[ 0 ] ) ) {
			options = {
				'data': arguments[ 0 ]
			};
		} else {
			options = arguments[ 0 ];
			if ( !isObject( options ) ) {
				throw new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
			}
		}
	} else {
		if ( !isObject( arguments[ 1 ] ) ) {
			throw new TypeError( 'invalid argument. Options argument must be an object. Value: `' + arguments[ 1 ] + '`.' );
		}
		options = arguments[ 1 ];
		options.data = arguments[ 0 ];
	}
	opts = merge( opts, options );

	debug( 'Creating an instance with the following configuration: %s.', JSON.stringify( opts ) );
	EventEmitter.call( this );

	for ( i = 0; i < PRIVATE_PROPS.length; i++ ) {
		defineProperty( this, PRIVATE_PROPS[i], {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': null
		});
	}

	// Set options...
	keys = objectKeys( opts );
	for ( i = 0; i < keys.length; i++ ) {
		key = keys[ i ];
		this[ key ] = opts[ key ];
	}

	// Add event listeners:
	this.on( 'change', onChange );
	this.on( 'render', onRender );

	return this;

	/**
	* Callback invoked upon receiving a `change` event.
	*
	* @private
	*/
	function onChange() {
		/* eslint-disable no-underscore-dangle */
		debug( 'Received a change event.' );
		if ( self._autoRender ) {
			self.render();
		}
	}

	/**
	* Callback invoked upon receiving a `render` event.
	*
	* @private
	* @param {*} chart - rendered chart
	*/
	function onRender() {
		debug( 'Received a render event.' );
	}
}

/*
* Inherit from the `EventEmitter` prototype.
*/
inherit( Sparkline, EventEmitter );

/**
* Rendering mode.
*
* ## Notes
*
* -   If `true`, an instance re-renders on each `change` event.
*
* @name autoRender
* @memberof Sparkline.prototype
* @type {boolean}
* @throws {TypeError} must be a boolean primitive
* @default false
*
* @example
* var chart = new Sparkline({
*     'autoRender': true
* });
*
* var mode = chart.autoRender;
* // returns true
*/
defineProperty( Sparkline.prototype, 'autoRender', {
	'configurable': false,
	'enumerable': true,
	'set': setAutoRender,
	'get': getAutoRender
});

/**
* Size of data buffer.
*
* @name bufferSize
* @memberof Sparkline.prototype
* @type {(PositiveInteger|null)}
* @throws {TypeError} must be a positive integer or null
* @throws {RangeError} must be greater than or equal to the number of data elements
*
* @example
* var chart = new Sparkline();
* chart.bufferSize = 20;
*
* @example
* var chart = new Sparkline({
*     'bufferSize': 25
* });
* var size = chart.bufferSize;
* // returns 25
*/
defineProperty( Sparkline.prototype, 'bufferSize', {
	'configurable': false,
	'enumerable': true,
	'set': setBufferSize,
	'get': getBufferSize
});

/**
* Sparkline data.
*
* @name data
* @memberof Sparkline.prototype
* @type {(ArrayLikeObject|ndarrayLike)}
* @throws {TypeError} must be an array-like object or an ndarray
* @throws {RangeError} length must not exceed maximum data buffer size
*
* @example
* var chart = new Sparkline();
* chart.data = [ 1.0, 0.0, 3.14, 2.0, 5.0 ];
*
* @example
* var data = [ 1.0, 0.0, 3.14, 2.0, 5.0 ];
* var chart = new Sparkline({
*     'data': data
* });
* var d = chart.data;
* // returns [ 1.0, 0.0, 3.14, 2.0, 5.0 ]
*/
defineProperty( Sparkline.prototype, 'data', {
	'configurable': false,
	'enumerable': true,
	'set': setData,
	'get': getData
});

/**
* Sparkline description.
*
* @name description
* @memberof Sparkline.prototype
* @type {string}
* @throws {TypeError} must be a string primitive
* @default ''
*
* @example
* var chart = new Sparkline();
* chart.description = 'Average daily stock market index for the past year.';
*
* @example
* var chart = new Sparkline({
*     'description': 'A description.'
* });
* var desc = chart.description;
* // returns 'A description.'
*/
defineProperty( Sparkline.prototype, 'description', {
	'configurable': false,
	'enumerable': true,
	'set': setDescription,
	'get': getDescription
});

/**
* Accessor which defines whether a datum is defined.
*
* ## Notes
*
* -   This accessor is used to define how missing values are encoded. The default behavior is to ignore values which are `NaN`.
*
* @name isDefined
* @memberof Sparkline.prototype
* @type {Function}
* @param {*} d - datum
* @param {integer} i - index
* @throws {TypeError} must be a function
*
* @example
* var chart = new Sparkline();
* chart.isDefined = function isDefined( d ) {
*     // Check for `NaN`:
*     return ( d === d );
* }
*
* @example
* function isDefined( d ) {
*     // Check for `NaN`:
*     return ( d === d );
* }
* var chart = new Sparkline({
*     'isDefined': isDefined
* });
* var fcn = chart.isDefined;
* // returns <Function>
*/
defineProperty( Sparkline.prototype, 'isDefined', {
	'configurable': false,
	'enumerable': true,
	'set': setIsDefined,
	'get': getIsDefined
});

/**
* Data label.
*
* @name label
* @memberof Sparkline.prototype
* @type {string}
* @throws {TypeError} must be a string
* @default ''
*
* @example
* var chart = new Sparkline();
* chart.label = 'beep';
*
* @example
* var chart = new Sparkline({
*     'label': 'beep'
* });
* var label = chart.label;
* // returns 'beep'
*/
defineProperty( Sparkline.prototype, 'label', {
	'configurable': false,
	'enumerable': true,
	'set': setLabel,
	'get': getLabel
});

/**
* Appends data.
*
* @name push
* @memberof Sparkline.prototype
* @type {Function}
* @param {*} datum - data to append
* @returns {Sparkline} chart instance
*
* @example
* var data = [ 1.0, 0.0, 3.14, 2.0, 5.0 ];
*
* var chart = new Sparkline({
*     'data': data
* });
*
* chart.push( 6.0 ).push( -3.14 ).push( -1.0 );
*/
Sparkline.prototype.push = push;

/**
* Renders a sparkline.
*
* @name render
* @memberof Sparkline.prototype
* @type {Function}
* @returns {string} rendered sparkline
*/
Sparkline.prototype.render = render;

/**
* Renders a sparkline.
*
* ## Notes
*
* -   This method **should** be implemented by descendants.
*
* @private
* @name _render
* @memberof Sparkline.prototype
* @type {Function}
* @returns {string} rendered sparkline
*/
Sparkline.prototype._render = stub;

/**
* Serializes a sparkline as a string.
*
* @name toString
* @memberof Sparkline.prototype
* @type {Function}
* @returns {string} serialized sparkline
*/
Sparkline.prototype.toString = toString;

// TODO: stub `toJSON` method, which, similar to `render`, should be implemented by descendants, as will be chart type specific


// EXPORTS //

module.exports = Sparkline;
