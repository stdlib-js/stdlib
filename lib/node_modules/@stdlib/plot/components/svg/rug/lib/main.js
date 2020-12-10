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
var linear = require( 'd3-scale' ).scaleLinear; // TODO: remove
var defineProperty = require( '@stdlib/utils/define-property' );
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var objectKeys = require( '@stdlib/utils/keys' );
var copy = require( '@stdlib/utils/copy' );
var merge = require( '@stdlib/utils/merge' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var inherit = require( '@stdlib/utils/inherit' );
var isDefined = require( './accessors/is_defined.js' );
var defaults = require( './defaults.json' );
var setAutoRender = require( './props/auto-render/set.js' );
var getAutoRender = require( './props/auto-render/get.js' );
var setColor = require( './props/color/set.js' );
var getColor = require( './props/color/get.js' );
var setData = require( './props/data/set.js' );
var getData = require( './props/data/get.js' );
var setIsDefined = require( './props/is-defined/set.js' );
var getIsDefined = require( './props/is-defined/get.js' );
var setLabel = require( './props/label/set.js' );
var getLabel = require( './props/label/get.js' );
var setOpacity = require( './props/opacity/set.js' );
var getOpacity = require( './props/opacity/get.js' );
var setOrientation = require( './props/orientation/set.js' );
var getOrientation = require( './props/orientation/get.js' );
var getPos = require( './props/pos/get.js' );
var setScale = require( './props/scale/set.js' );
var getScale = require( './props/scale/get.js' );
var setSize = require( './props/size/set.js' );
var getSize = require( './props/size/get.js' );
var render = require( './render' );


// VARIABLES //

var debug = logger( 'rug:main' );
var PRIVATE_PROPS = [
	'_autoRender',
	'_color',
	'_data',
	'_isDefined',
	'_label',
	'_opacity',
	'_orientation',
	'_scale',
	'_size'
];


// MAIN //

/**
* Rug constructor.
*
* @constructor
* @param {Options} [options] - constructor options
* @param {boolean} [options.autoRender=false] - indicates whether to re-render on a change event
* @param {(string|Function)} [options.color="#aaa"] - color
* @param {ArrayLike} [options.data=[]] - data
* @param {Function} [options.isDefined] - predicate function indicating whether a datum is defined
* @param {(string|Function)} [options.label] - label
* @param {(number|Function)} [options.opacity=0.9] - opacity
* @param {string} [options.orientation="bottom"] - orientation
* @param {Function} [options.scale] - scale function
* @param {NonNegativeInteger} [options.size=6] - tick (tassel) size
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Rug} Rug instance
*
* @example
* var node = new Rug({
*     'data': [ 0.1, 0.2, 0.3 ]
* });
* // returns <Rug>
*/
function Rug( options ) {
	var self;
	var keys;
	var opts;
	var key;
	var i;
	if ( !instanceOf( this, Rug ) ) {
		if ( arguments.length ) {
			return new Rug( options );
		}
		return new Rug();
	}
	self = this;

	opts = copy( defaults );
	opts.isDefined = isDefined;
	opts.scale = linear();

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
* Inherit from the `EventEmitter` prototype.
*/
inherit( Rug, EventEmitter );

/**
* Rendering mode. If `true`, an instance re-renders on each change event.
*
* @name autoRender
* @memberof Rug.prototype
* @type {boolean}
* @throws {TypeError} must be a boolean primitive
* @default false
*
* @example
* var node = new Rug({
*     'autoRender': true
* });
*
* var mode = node.autoRender;
* // returns true
*/
defineProperty( Rug.prototype, 'autoRender', {
	'configurable': false,
	'enumerable': true,
	'set': setAutoRender,
	'get': getAutoRender
});

/**
* Tick color. When retrieved, the returned value is a color accessor.
*
* @name color
* @memberof Rug.prototype
* @type {(string|Function)}
* @throws {TypeError} must be a primitive string or function
*
* @example
* var node = new Rug({
*     'color': 'steelblue'
* });
*
* var color = node.color;
* // returns <Function>
*/
defineProperty( Rug.prototype, 'color', {
	'configurable': false,
	'enumerable': true,
	'set': setColor,
	'get': getColor
});

/**
* Data.
*
* @name data
* @memberof Rug.prototype
* @type {ArrayLike}
* @throws {TypeError} must be array-like
* @default []
*
* @example
* var node = new Rug({
*     'data': [ 0.1, 0.2, 0.3 ]
* });
*
* var data = node.data;
* // returns [ 0.1, 0.2, 0.3 ]
*/
defineProperty( Rug.prototype, 'data', {
	'configurable': false,
	'enumerable': true,
	'set': setData,
	'get': getData
});

/**
* Predicate function which defines whether a datum is defined. This accessor is used to define how missing values are encoded. The default behavior is to ignore values which are `NaN`.
*
* @name isDefined
* @memberof Rug.prototype
* @type {Function}
* @throws {TypeError} must be a function
*
* @example
* var node = new Rug();
*
* function isDefined( d ) {
*     // Check for `NaN`:
*     return ( d === d );
* }
* node.isDefined = isDefined;
*
* @example
* function isDefined( d ) {
*     // Check for `NaN`:
*     return ( d === d );
* }
* var node = new Rug({
*     'isDefined': isDefined
* });
* var fcn = node.isDefined;
* // returns <Function>
*/
defineProperty( Rug.prototype, 'isDefined', {
	'configurable': false,
	'enumerable': true,
	'set': setIsDefined,
	'get': getIsDefined
});

/**
* Tick label. When retrieved, the returned value is a label accessor.
*
* @name label
* @memberof Rug.prototype
* @type {(string|Function)}
* @throws {TypeError} must be a primitive string or function
*
* @example
* var node = new Rug({
*     'label': 'group-1'
* });
*
* var label = node.label;
* // returns <Function>
*/
defineProperty( Rug.prototype, 'label', {
	'configurable': false,
	'enumerable': true,
	'set': setLabel,
	'get': getLabel
});

/**
* Tick opacity. When retrieved, the returned value is an opacity accessor.
*
* @name opacity
* @memberof Rug.prototype
* @type {number}
* @throws {TypeError} must be a number
* @throws {RangeError} must be a number on the interval `[0,1]`
* @default 0.9
*
* @example
* var node = new Rug({
*     'opacity': 0.5
* });
*
* var opacity = node.opacity;
* // returns <Function>
*/
defineProperty( Rug.prototype, 'opacity', {
	'configurable': false,
	'enumerable': true,
	'set': setOpacity,
	'get': getOpacity
});

/**
* Rug orientation.
*
* @name orientation
* @memberof Rug.prototype
* @type {string}
* @throws {TypeError} must be a supported orientation
*
* @example
* var node = new Rug({
*     'orientation': 'left'
* });
*
* var orient = node.orientation;
* // returns 'left'
*/
defineProperty( Rug.prototype, 'orientation', {
	'configurable': false,
	'enumerable': true,
	'set': setOrientation,
	'get': getOrientation
});

/**
* Function to map values to x coordinate values.
*
* @name pos
* @memberof Rug.prototype
* @type {Function}
*
* @example
* var node = new Rug();
*
* var pos = node.pos;
* // returns <Function>
*/
defineProperty( Rug.prototype, 'pos', {
	'configurable': false,
	'enumerable': true,
	'get': getPos
});

/**
* Scale function.
*
* @name scale
* @memberof Rug.prototype
* @type {Function}
* @throws {TypeError} must be a function
*
* @example
* var node = new Rug({
*     'scale': function scale() {}
* });
*
* var fcn = node.scale;
* // returns <Function>
*/
defineProperty( Rug.prototype, 'scale', {
	'configurable': false,
	'enumerable': true,
	'set': setScale,
	'get': getScale
});

/**
* Tick (tassel) size.
*
* @name size
* @memberof Rug.prototype
* @type {NonNegativeInteger}
* @throws {TypeError} must be a nonnegative integer
* @default 6
*
* @example
* var node = new Rug({
*     'size': 5
* });
*
* var size = node.size;
* // returns 5
*/
defineProperty( Rug.prototype, 'size', {
	'configurable': false,
	'enumerable': true,
	'set': setSize,
	'get': getSize
});

/**
* Renders a Virtual DOM tree.
*
* @name render
* @memberof Rug.prototype
* @type {Function}
* @returns {VTree} virtual tree
*
* @example
* var node = new Rug();
*
* var out = node.render();
* // returns <Object>
*/
setReadOnly( Rug.prototype, 'render', render );


// EXPORTS //

module.exports = Rug;
