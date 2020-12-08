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

// TODO: improve JSDoc examples

// MODULES //

var EventEmitter = require( 'events' ).EventEmitter;
var logger = require( 'debug' );
var linear = require( 'd3-scale' ).scaleLinear; // TODO: remove
var defineProperty = require( '@stdlib/utils/define-property' );
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var objectKeys = require( '@stdlib/utils/keys' );
var copy = require( '@stdlib/utils/copy' );
var merge = require( '@stdlib/utils/merge' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var isDefined = require( './accessors/is_defined.js' );
var defaults = require( './defaults.json' );
var setX = require( './props/x/set.js' );
var getX = require( './props/x/get.js' );
var setY = require( './props/y/set.js' );
var getY = require( './props/y/get.js' );
var setXScale = require( './props/x-scale/set.js' );
var getXScale = require( './props/x-scale/get.js' );
var setYScale = require( './props/y-scale/set.js' );
var getYScale = require( './props/y-scale/get.js' );
var setIsDefined = require( './props/is-defined/set.js' );
var getIsDefined = require( './props/is-defined/get.js' );
var setColor = require( './props/color/set.js' );
var getColor = require( './props/color/get.js' );
var setLabel = require( './props/label/set.js' );
var getLabel = require( './props/label/get.js' );
var setOpacity = require( './props/opacity/set.js' );
var getOpacity = require( './props/opacity/get.js' );
var setWidth = require( './props/width/set.js' );
var getWidth = require( './props/width/get.js' );
var setStyle = require( './props/style/set.js' );
var getStyle = require( './props/style/get.js' );
var setAutoRender = require( './props/auto-render/set.js' );
var getAutoRender = require( './props/auto-render/get.js' );
var getLine = require( './props/line/get.js' );
var getXPos = require( './props/x-pos/get.js' );
var getYPos = require( './props/y-pos/get.js' );
var render = require( './render' );


// VARIABLES //

var debug = logger( 'path:main' );
var PRIVATE_PROPS = [
	'_autoRender',
	'_color',
	'_isDefined',
	'_label',
	'_opacity',
	'_style',
	'_width',
	'_xData',
	'_xScale',
	'_yData',
	'_yScale'
];


// MAIN //

/**
* Path constructor.
*
* @constructor
* @param {Options} [options] - constructor options
* @param {ArrayLike} [options.x=[]] - x-values
* @param {ArrayLike} [options.y=[]] - y-values
* @param {Function} [options.xScale] - x scale function
* @param {Function} [options.yScale] - y scale function
* @param {Function} [options.isDefined] - accessor indicating whether a datum is defined
* @param {string} [options.color] - color
* @param {string} [options.label] - label
* @param {NonNegativeInteger} [options.width=2] - width
* @param {number} [options.opacity=0.9] - opacity
* @param {string} [options.style='-'] - style
* @param {boolean} [options.autoRender=false] - indicates whether to re-render on a change event
* @throws {TypeError} must provide valid options
* @returns {Path} Path instance
*
* @example
* var path = new Path({
*     'x': [0.1,0.2,0.3],
*     'y': [0.4,0.5,0.6]
* });
*/
function Path( options ) {
	var self;
	var keys;
	var opts;
	var key;
	var i;
	if ( !( this instanceof Path ) ) {
		if ( arguments.length ) {
			return new Path( options );
		}
		return new Path();
	}
	self = this;

	opts = copy( defaults );
	opts.isDefined = isDefined;
	opts.xScale = linear();
	opts.yScale = linear();

	if ( arguments.length ) {
		if ( !isObject( options ) ) {
			throw new TypeError( 'invalid argument. `options` argument must be an object. Value: `' + options + '`.' );
		}
		opts = merge( opts, options );
	}
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
Path.prototype = Object.create( EventEmitter.prototype );

/*
* Set the constructor.
*/
Path.prototype.constructor = Path;

/**
* `x` values.
*
* @name x
* @memberof Path.prototype
* @type {ArrayLike}
* @throws {TypeError} must be array-like
* @default []
*
* @example
* var path = new Path({
*     'x': [0.1,0.2,0.3]
* });
*
* var x = path.x;
* // returns [0.1,0.2,0.3]
*/
defineProperty( Path.prototype, 'x', {
	'configurable': false,
	'enumerable': true,
	'set': setX,
	'get': getX
});

/**
* `y` values.
*
* @name y
* @memberof Path.prototype
* @type {ArrayLike}
* @throws {TypeError} must be array-like
* @default []
*
* @example
* var path = new Path({
*     'y': [0.4,0.5,0.6]
* });
*
* var y = path.y;
* // returns [0.4,0.5,0.6]
*/
defineProperty( Path.prototype, 'y', {
	'configurable': false,
	'enumerable': true,
	'set': setY,
	'get': getY
});

/**
* `x` scale function.
*
* @name xScale
* @memberof Path.prototype
* @type {Function}
* @throws {TypeError} must be a function
*
* @example
* var path = new Path({
*     'xScale': function scale(){}
* });
*
* var f = path.xScale;
* // returns <Function>
*/
defineProperty( Path.prototype, 'xScale', {
	'configurable': false,
	'enumerable': true,
	'set': setXScale,
	'get': getXScale
});

/**
* `y` scale function.
*
* @name yScale
* @memberof Path.prototype
* @type {Function}
* @throws {TypeError} must be a function
*
* @example
* var path = new Path({
*     'yScale': function scale(){}
* });
*
* var f = path.yScale;
* // returns <Function>
*/
defineProperty( Path.prototype, 'yScale', {
	'configurable': false,
	'enumerable': true,
	'set': setYScale,
	'get': getYScale
});

/**
* Accessor which defines whether a datum is defined. This accessor is used to define how missing values are encoded. The default behavior is to ignore values which are `NaN`.
*
* @name isDefined
* @memberof Path.prototype
* @type {Function}
* @throws {TypeError} must be a function
*
* @example
* var path = new Path();
* path.isDefined = function isDefined( d ) {
*     // Check for `NaN`:
*     return ( d === d );
* }
*
* @example
* function isDefined( d ) {
*     // Check for `NaN`:
*     return ( d === d );
* }
* var path = new Path({
*     'isDefined': isDefined
* });
* var fcn = path.isDefined;
* // returns <Function>
*/
defineProperty( Path.prototype, 'isDefined', {
	'configurable': false,
	'enumerable': true,
	'set': setIsDefined,
	'get': getIsDefined
});

/**
* Path color.
*
* @name color
* @memberof Path.prototype
* @type {string}
* @throws {TypeError} must be a primitive string
*
* @example
* var path = new Path({
*     'color': 'steelblue'
* });
*
* var color = path.color;
* // returns 'steelblue'
*/
defineProperty( Path.prototype, 'color', {
	'configurable': false,
	'enumerable': true,
	'set': setColor,
	'get': getColor
});

/**
* Path label.
*
* @name label
* @memberof Path.prototype
* @type {string}
* @throws {TypeError} must be a primitive string
*
* @example
* var path = new Path({
*     'label': 'line-1'
* });
*
* var label = path.label;
* // returns 'line-1'
*/
defineProperty( Path.prototype, 'label', {
	'configurable': false,
	'enumerable': true,
	'set': setLabel,
	'get': getLabel
});

/**
* Path opacity.
*
* @name opacity
* @memberof Path.prototype
* @type {number}
* @throws {TypeError} must be a number
* @throws {RangeError} must be a number on the interval `[0,1]`
* @default 0.9
*
* @example
* var path = new Path({
*     'opacity': 0.5
* });
*
* var opacity = path.opacity;
* // returns 0.5
*/
defineProperty( Path.prototype, 'opacity', {
	'configurable': false,
	'enumerable': true,
	'set': setOpacity,
	'get': getOpacity
});

/**
* Path width.
*
* @name width
* @memberof Path.prototype
* @type {NonNegativeInteger}
* @throws {TypeError} must be a nonnegative integer
* @default 2
*
* @example
* var path = new Path({
*     'width': 1
* });
*
* var width = path.width;
* // returns 1
*/
defineProperty( Path.prototype, 'width', {
	'configurable': false,
	'enumerable': true,
	'set': setWidth,
	'get': getWidth
});

/**
* Path style.
*
* @name style
* @memberof Path.prototype
* @type {string}
* @throws {TypeError} must be a string primitive
* @default '-'
*
* @example
* var path = new Path({
*     'style': '-.'
* });
*
* var style = path.style;
* // returns '-.'
*/
defineProperty( Path.prototype, 'style', {
	'configurable': false,
	'enumerable': true,
	'set': setStyle,
	'get': getStyle
});

/**
* Rendering mode. If `true`, an instance re-renders on each change event.
*
* @name autoRender
* @memberof Path.prototype
* @type {boolean}
* @throws {TypeError} must be a boolean primitive
* @default false
*
* @example
* var path = new Path({
*     'autoRender': true
* });
*
* var mode = path.autoRender;
* // returns true
*/
defineProperty( Path.prototype, 'autoRender', {
	'configurable': false,
	'enumerable': true,
	'set': setAutoRender,
	'get': getAutoRender
});

/**
* Returns a function to generate a line as an SVG path.
*
* @name line
* @memberof Path.prototype
* @type {Function}
*
* @example
* var path = new Path();
*
* var line = path.line;
* // returns <Function>
*/
defineProperty( Path.prototype, 'line', {
	'configurable': false,
	'enumerable': true,
	'get': getLine
});

/**
* Function to map values to x coordinate values.
*
* @name xPos
* @memberof Path.prototype
* @type {Function}
*
* @example
* var path = new Path();
* var xPos = path.xPos;
* // returns <Function>
*/
defineProperty( Path.prototype, 'xPos', {
	'configurable': false,
	'enumerable': true,
	'get': getXPos
});

/**
* Function to map values to y coordinate values.
*
* @name yPos
* @memberof Path.prototype
* @type {Function}
*
* @example
* var path = new Path();
* var yPos = path.yPos;
* // returns <Function>
*/
defineProperty( Path.prototype, 'yPos', {
	'configurable': false,
	'enumerable': true,
	'get': getYPos
});

/**
* Renders a virtual DOM tree.
*
* @name render
* @memberof Path.prototype
* @type {Function}
* @returns {VTree} virtual tree
*
* @example
* var path = new Path();
*
* var out = path.render();
*/
setReadOnly( Path.prototype, 'render', render );


// EXPORTS //

module.exports = Path;
