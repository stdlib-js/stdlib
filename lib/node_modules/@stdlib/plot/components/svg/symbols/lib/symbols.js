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
var setSymbol = require( './props/symbol/set.js' );
var getSymbol = require( './props/symbol/get.js' );
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
var setSize = require( './props/size/set.js' );
var getSize = require( './props/size/get.js' );
var setOpacity = require( './props/opacity/set.js' );
var getOpacity = require( './props/opacity/get.js' );
var setColor = require( './props/color/set.js' );
var getColor = require( './props/color/get.js' );
var setLabel = require( './props/label/set.js' );
var getLabel = require( './props/label/get.js' );
var setAutoRender = require( './props/auto-render/set.js' );
var getAutoRender = require( './props/auto-render/get.js' );
var getXPos = require( './props/x-pos/get.js' );
var getYPos = require( './props/y-pos/get.js' );
var render = require( './render' );


// VARIABLES //

var debug = logger( 'symbols:main' );
var PRIVATE_PROPS = [
	'_autoRender',
	'_color',
	'_isDefined',
	'_label',
	'_opacity',
	'_size',
	'_symbol',
	'_xData',
	'_xScale',
	'_yData',
	'_yScale'
];


// MAIN //

/**
* Symbols constructor.
*
* @constructor
* @param {Options} options - constructor options
* @param {ArrayLike} [options.x=[]] - x-values
* @param {ArrayLike} [options.y=[]] - y-values
* @param {Function} [options.xScale] - x scale function
* @param {Function} [options.yScale] - y scale function
* @param {Function} [options.isDefined] - accessor indicating whether a datum is defined
* @param {string} [options.symbol='closed-circle'] - symbol
* @param {(number|Function)} [options.opacity=0.9] - opacity
* @param {(string|Function)} [options.color] - color
* @param {(string|Function)} [options.label] - label
* @param {(NonNegativeInteger|Function)} [options.size=6] - symbol size
* @param {boolean} [options.autoRender=false] - indicates whether to re-render on a change event
* @throws {TypeError} must provide valid options
* @returns {Symbols} Symbols instance
*
* @example
* var symbols = new Symbols({
*     'x': [0.1,0.2,0.3],
*     'y': [0.4,0.5,0.6]
* });
*/
function Symbols( options ) {
	var self;
	var keys;
	var opts;
	var key;
	var i;
	if ( !( this instanceof Symbols ) ) {
		if ( arguments.length ) {
			return new Symbols( options );
		}
		return new Symbols();
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
Symbols.prototype = Object.create( EventEmitter.prototype );

/*
* Set the constructor.
*/
Symbols.prototype.constructor = Symbols;

/**
* Symbol.
*
* @name symbol
* @memberof Symbols.prototype
* @type {string}
* @throws {TypeError} must be a supported symbol
* @default 'closed-circle'
*
* @example
* var symbols = new Symbols({
*     'symbol': 'open-circle'
* });
*
* var symbol = symbols.symbol;
* // returns 'open-circle'
*/
defineProperty( Symbols.prototype, 'symbol', {
	'configurable': false,
	'enumerable': true,
	'set': setSymbol,
	'get': getSymbol
});

/**
* `x` values.
*
* @name x
* @memberof Symbols.prototype
* @type {ArrayLike}
* @throws {TypeError} must be array-like
* @default []
*
* @example
* var symbols = new Symbols({
*     'x': [0.1,0.2,0.3]
* });
*
* var x = symbols.x;
* // returns [0.1,0.2,0.3]
*/
defineProperty( Symbols.prototype, 'x', {
	'configurable': false,
	'enumerable': true,
	'set': setX,
	'get': getX
});

/**
* `y` values.
*
* @name y
* @memberof Symbols.prototype
* @type {ArrayLike}
* @throws {TypeError} must be array-like
* @default []
*
* @example
* var symbols = new Symbols({
*     'y': [0.4,0.5,0.6]
* });
*
* var y = symbols.y;
* // returns [0.4,0.5,0.6]
*/
defineProperty( Symbols.prototype, 'y', {
	'configurable': false,
	'enumerable': true,
	'set': setY,
	'get': getY
});

/**
* `x` scale function.
*
* @name xScale
* @memberof Symbols.prototype
* @type {Function}
* @throws {TypeError} must be a function
*
* @example
* var symbols = new Symbols({
*     'xScale': function scale(){}
* });
*
* var f = symbols.xScale;
* // returns <Function>
*/
defineProperty( Symbols.prototype, 'xScale', {
	'configurable': false,
	'enumerable': true,
	'set': setXScale,
	'get': getXScale
});

/**
* `y` scale function.
*
* @name yScale
* @memberof Symbols.prototype
* @type {Function}
* @throws {TypeError} must be a function
*
* @example
* var symbols = new Symbols({
*     'yScale': function scale(){}
* });
*
* var f = symbols.yScale;
* // returns <Function>
*/
defineProperty( Symbols.prototype, 'yScale', {
	'configurable': false,
	'enumerable': true,
	'set': setYScale,
	'get': getYScale
});

/**
* Accessor which defines whether a datum is defined. This accessor is used to define how missing values are encoded. The default behavior is to ignore values which are `NaN`.
*
* @name isDefined
* @memberof Symbols.prototype
* @type {Function}
* @throws {TypeError} must be a function
*
* @example
* var symbols = new Symbols();
* symbols.isDefined = function isDefined( d ) {
*     // Check for `NaN`:
*     return ( d === d );
* }
*
* @example
* function isDefined( d ) {
*     // Check for `NaN`:
*     return ( d === d );
* }
* var symbols = new Symbols({
*     'isDefined': isDefined
* });
* var fcn = symbols.isDefined;
* // returns <Function>
*/
defineProperty( Symbols.prototype, 'isDefined', {
	'configurable': false,
	'enumerable': true,
	'set': setIsDefined,
	'get': getIsDefined
});

/**
* Symbol size. When retrieved, the returned value is a size accessor.
*
* @name size
* @memberof Symbols.prototype
* @type {(NonNegativeInteger|Function)}
* @throws {TypeError} must be a nonnegative integer or function
* @default 6
*
* @example
* var symbols = new Symbols({
*     'size': 5
* });
*
* var size = symbols.size;
* // returns <Function>
*/
defineProperty( Symbols.prototype, 'size', {
	'configurable': false,
	'enumerable': true,
	'set': setSize,
	'get': getSize
});

/**
* Symbol opacity. When retrieved, the returned value is an opacity accessor.
*
* @name opacity
* @memberof Symbols.prototype
* @type {(number|Function)}
* @throws {TypeError} must be a number or function
* @throws {RangeError} must be a number on the interval `[0,1]`
* @default 0.9
*
* @example
* var symbols = new Symbols({
*     'opacity': 0.5
* });
*
* var opacity = symbols.opacity;
* // returns <Function>
*/
defineProperty( Symbols.prototype, 'opacity', {
	'configurable': false,
	'enumerable': true,
	'set': setOpacity,
	'get': getOpacity
});

/**
* Symbols color. When retrieved, the returned value is a color accessor.
*
* @name color
* @memberof Symbols.prototype
* @type {(string|Function)}
* @throws {TypeError} must be a primitive string or function
*
* @example
* var symbols = new Symbols({
*     'color': 'steelblue'
* });
*
* var color = symbols.color;
* // returns <Function>
*/
defineProperty( Symbols.prototype, 'color', {
	'configurable': false,
	'enumerable': true,
	'set': setColor,
	'get': getColor
});

/**
* Symbols label. When retrieved, the returned value is a label accessor.
*
* @name label
* @memberof Symbols.prototype
* @type {(string|Function)}
* @throws {TypeError} must be a primitive string or function
*
* @example
* var symbols = new Symbols({
*     'label': 'group-1'
* });
*
* var label = symbols.label;
* // returns <Function>
*/
defineProperty( Symbols.prototype, 'label', {
	'configurable': false,
	'enumerable': true,
	'set': setLabel,
	'get': getLabel
});

/**
* Rendering mode. If `true`, an instance re-renders on each change event.
*
* @name autoRender
* @memberof Symbols.prototype
* @type {boolean}
* @throws {TypeError} must be a boolean primitive
* @default false
*
* @example
* var symbols = new Symbols({
*     'autoRender': true
* });
*
* var mode = symbols.autoRender;
* // returns true
*/
defineProperty( Symbols.prototype, 'autoRender', {
	'configurable': false,
	'enumerable': true,
	'set': setAutoRender,
	'get': getAutoRender
});

/**
* Function to map values to x coordinate values.
*
* @name xPos
* @memberof Symbols.prototype
* @type {Function}
*
* @example
* var symbols = new Symbols();
* var xPos = symbols.xPos;
* // returns <Function>
*/
defineProperty( Symbols.prototype, 'xPos', {
	'configurable': false,
	'enumerable': true,
	'get': getXPos
});

/**
* Function to map values to y coordinate values.
*
* @name yPos
* @memberof Symbols.prototype
* @type {Function}
*
* @example
* var symbols = new Symbols();
* var yPos = symbols.yPos;
* // returns <Function>
*/
defineProperty( Symbols.prototype, 'yPos', {
	'configurable': false,
	'enumerable': true,
	'get': getYPos
});

/**
* Renders a virtual DOM tree.
*
* @name render
* @memberof Symbols.prototype
* @type {Function}
* @returns {VTree} virtual tree
*
* @example
* var symbols = new Symbols();
*
* var out = symbols.render();
*/
setReadOnly( Symbols.prototype, 'render', render );


// EXPORTS //

module.exports = Symbols;
