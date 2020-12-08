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
var copy = require( '@stdlib/utils/copy' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var setScale = require( './props/scale/set.js' );
var getScale = require( './props/scale/get.js' );
var setOrientation = require( './props/orientation/set.js' );
var getOrientation = require( './props/orientation/get.js' );
var setLabel = require( './props/label/set.js' );
var getLabel = require( './props/label/get.js' );
var setTicks = require( './props/ticks/set.js' );
var getTicks = require( './props/ticks/get.js' );
var setNumTicks = require( './props/num-ticks/set.js' );
var getNumTicks = require( './props/num-ticks/get.js' );
var setTickFormat = require( './props/tick-format/set.js' );
var getTickFormat = require( './props/tick-format/get.js' );
var setTickSize = require( './props/tick-size/set.js' );
var getTickSize = require( './props/tick-size/get.js' );
var setInnerTickSize = require( './props/inner-tick-size/set.js' );
var getInnerTickSize = require( './props/inner-tick-size/get.js' );
var setOuterTickSize = require( './props/outer-tick-size/set.js' );
var getOuterTickSize = require( './props/outer-tick-size/get.js' );
var setTickPadding = require( './props/tick-padding/set.js' );
var getTickPadding = require( './props/tick-padding/get.js' );
var getTickSpacing = require( './props/tick-spacing/get.js' );
var getTickDir = require( './props/tick-dir/get.js' );
var getTickPos = require( './props/tick-pos/get.js' );
var setAutoRender = require( './props/auto-render/set.js' );
var getAutoRender = require( './props/auto-render/get.js' );
var render = require( './methods/render.js' );


// VARIABLES //

var debug = logger( 'axis:main' );


// MAIN //

/**
* Axis constructor.
*
* @constructor
* @param {Options} options - constructor options
* @param {Function} [options.scale] - scale function
* @param {string} [options.orientation='bottom'] - axis orientation
* @param {string} [options.label] - axis label
* @param {(Array|null)} [options.ticks] - tick values
* @param {(NonNegativeInteger|null)} [options.numTicks] - number of ticks
* @param {(null|string|Function)} [options.tickFormat] - tick format
* @param {NonNegativeInteger} [options.tickSize=6] - tick size
* @param {NonNegativeInteger} [options.innerTickSize=6] - inner tick size
* @param {NonNegativeInteger} [options.outerTickSize=6] - outer tick size
* @param {NonNegativeInteger} [options.tickPadding=3] - tick padding
* @param {boolean} [options.autoRender=false] - indicates whether to re-render on a change event
* @throws {TypeError} must provide valid options
* @returns {Axis} axis instance
*
* @example
* var axis = new Axis({
*     'orientation': 'bottom'
* });
*/
function Axis( options ) {
	var self;
	var opts;
	var err;
	if ( !( this instanceof Axis ) ) {
		return new Axis( options );
	}
	self = this;
	opts = copy( defaults );
	err = validate( opts, options );
	if ( err ) {
		throw err;
	}
	debug( 'Creating an instance with the following configuration: %s.', JSON.stringify( opts ) );
	EventEmitter.call( this );

	defineProperty( this, '_scale', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': opts.scale || linear()
	});
	defineProperty( this, '_orientation', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': opts.orientation
	});
	defineProperty( this, '_label', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': opts.label
	});
	defineProperty( this, '_ticks', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': opts.ticks
	});
	defineProperty( this, '_numTicks', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': opts.numTicks
	});
	defineProperty( this, '_tickFormat', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': opts.tickFormat
	});
	defineProperty( this, '_tickSize', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': opts.tickSize
	});
	defineProperty( this, '_innerTickSize', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': opts.innerTickSize
	});
	defineProperty( this, '_outerTickSize', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': opts.outerTickSize
	});
	defineProperty( this, '_tickPadding', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': opts.tickPadding
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
Axis.prototype = Object.create( EventEmitter.prototype );

/*
* Set the constructor.
*/
Axis.prototype.constructor = Axis;

/**
* Scale function.
*
* @name scale
* @memberof Axis.prototype
* @type {Function}
* @throws {TypeError} must be a function
*
* @example
* var axis = new Axis({
*     'orientation': 'top'
* });
*
* var f = axis.scale;
* // returns <Function>
*/
defineProperty( Axis.prototype, 'scale', {
	'configurable': false,
	'enumerable': true,
	'set': setScale,
	'get': getScale
});

/**
* Axis orientation.
*
* @name orientation
* @memberof Axis.prototype
* @type {string}
* @throws {TypeError} must be a string primitive
* @default 'bottom'
*
* @example
* var axis = new Axis({
*     'orientation': 'bottom'
* });
* axis.orientation = 'top';
*
* var v = axis.orientation;
* // returns 'top'
*/
defineProperty( Axis.prototype, 'orientation', {
	'configurable': false,
	'enumerable': true,
	'set': setOrientation,
	'get': getOrientation
});

/**
* Axis label.
*
* @name label
* @memberof Axis.prototype
* @type {string}
* @throws {TypeError} must be a string primitive
*
* @example
* var axis = new Axis({
*     'label': 'y'
* });
* axis.label = 'Counts';
*
* var v = axis.label;
* // returns 'Counts'
*/
defineProperty( Axis.prototype, 'label', {
	'configurable': false,
	'enumerable': true,
	'set': setLabel,
	'get': getLabel
});

/**
* Axis tick values. When set to `null`, the retrieved values are the computed tick values.
*
* @name ticks
* @memberof Axis.prototype
* @type {(Array|null)}
* @throws {TypeError} must be an array or null
* @default null
*
* @example
* var axis = new Axis({
*     'orientation': 'bottom',
*     'ticks': [1,2,3]
* });
* axis.ticks = ['a','b','c'];
*
* var v = axis.ticks;
* // returns <Array>
*/
defineProperty( Axis.prototype, 'ticks', {
	'configurable': false,
	'enumerable': true,
	'set': setTicks,
	'get': getTicks
});

/**
* Number of axis ticks.
*
* @name numTicks
* @memberof Axis.prototype
* @type {(NonNegativeInteger|null)}
* @throws {TypeError} must be a nonnegative integer or null
* @default null
*
* @example
* var axis = new Axis({
*     'orientation': 'bottom',
*     'numTicks': 10
* });
* axis.numTicks = 5;
*
* var v = axis.numTicks;
* // returns 5
*/
defineProperty( Axis.prototype, 'numTicks', {
	'configurable': false,
	'enumerable': true,
	'set': setNumTicks,
	'get': getNumTicks
});

/**
* Tick format. When retrieved, the returned value is a formatting function.
*
* @name tickFormat
* @memberof Axis.prototype
* @type {(null|string|Function)}
* @throws {TypeError} must be either null, a string, or a function
* @default null
*
* @example
* var axis = new Axis({
*     'orientation': 'bottom',
*     'tickFormat': ',f'
* });
* axis.tickFormat = ',.0f';
*
* var v = axis.tickFormat;
* // returns <Function>
*/
defineProperty( Axis.prototype, 'tickFormat', {
	'configurable': false,
	'enumerable': true,
	'set': setTickFormat,
	'get': getTickFormat
});

/**
* Axis tick size.
*
* @name tickSize
* @memberof Axis.prototype
* @type {NonNegativeInteger}
* @throws {TypeError} must be a nonnegative integer
* @default 6
*
* @example
* var axis = new Axis({
*     'orientation': 'bottom',
*     'tickSize': 12
* });
* axis.tickSize = 8;
*
* var v = axis.tickSize;
* // returns 8
*/
defineProperty( Axis.prototype, 'tickSize', {
	'configurable': false,
	'enumerable': true,
	'set': setTickSize,
	'get': getTickSize
});

/**
* Axis inner tick size.
*
* @name innerTickSize
* @memberof Axis.prototype
* @type {NonNegativeInteger}
* @throws {TypeError} must be a nonnegative integer
* @default 6
*
* @example
* var axis = new Axis({
*     'orientation': 'bottom',
*     'innerTickSize': 10
* });
* axis.innerTickSize = 5;
*
* var v = axis.innerTickSize;
* // returns 5
*/
defineProperty( Axis.prototype, 'innerTickSize', {
	'configurable': false,
	'enumerable': true,
	'set': setInnerTickSize,
	'get': getInnerTickSize
});

/**
* Axis outer tick size.
*
* @name outerTickSize
* @memberof Axis.prototype
* @type {NonNegativeInteger}
* @throws {TypeError} must be a nonnegative integer
* @default 6
*
* @example
* var axis = new Axis({
*     'orientation': 'bottom',
*     'outerTickSize': 10
* });
* axis.outerTickSize = 5;
*
* var v = axis.outerTickSize;
* // returns 5
*/
defineProperty( Axis.prototype, 'outerTickSize', {
	'configurable': false,
	'enumerable': true,
	'set': setOuterTickSize,
	'get': getOuterTickSize
});

/**
* Axis tick padding.
*
* @name tickPadding
* @memberof Axis.prototype
* @type {NonNegativeInteger}
* @throws {TypeError} must be a nonnegative integer
* @default 3
*
* @example
* var axis = new Axis({
*     'orientation': 'bottom',
*     'tickPadding': 10
* });
* axis.tickPadding = 5;
*
* var v = axis.tickPadding;
* // returns 5
*/
defineProperty( Axis.prototype, 'tickPadding', {
	'configurable': false,
	'enumerable': true,
	'set': setTickPadding,
	'get': getTickPadding
});

/**
* Tick spacing.
*
* @name tickSpacing
* @memberof Axis.prototype
* @type {number}
*
* @example
* var axis = new Axis( {} );
*
* var spacing = axis.tickSpacing;
* // returns <number>
*/
defineProperty( Axis.prototype, 'tickSpacing', {
	'configurable': false,
	'enumerable': true,
	'get': getTickSpacing
});

/**
* Tick direction.
*
* @name tickDir
* @memberof Axis.prototype
* @type {number}
*
* @example
* var axis = new Axis( {} );
*
* var dir = axis.tickDir;
* // returns <number>
*/
defineProperty( Axis.prototype, 'tickDir', {
	'configurable': false,
	'enumerable': true,
	'get': getTickDir
});

/**
* Function for computing tick positions.
*
* @name tickPos
* @memberof Axis.prototype
* @type {Function}
*
* @example
* var axis = new Axis( {} );
*
* var tickPos = axis.tickPos;
* // returns <Function>
*/
defineProperty( Axis.prototype, 'tickPos', {
	'configurable': false,
	'enumerable': true,
	'get': getTickPos
});

/**
* Rendering mode. If `true`, an instance re-renders on each change event.
*
* @name autoRender
* @memberof Axis.prototype
* @type {boolean}
* @throws {TypeError} must be a boolean primitive
* @default false
*
* @example
* var axis = new Axis({
*     'autoRender': true
* });
*
* var mode = axis.autoRender;
* // returns true
*/
defineProperty( Axis.prototype, 'autoRender', {
	'configurable': false,
	'enumerable': true,
	'set': setAutoRender,
	'get': getAutoRender
});

/**
* Renders a virtual DOM tree.
*
* @name render
* @memberof Axis.prototype
* @type {Function}
* @returns {VTree} virtual tree
*
* @example
* var axis = new Axis( {} );
*
* var out = axis.render();
*/
setReadOnly( Axis.prototype, 'render', render );


// EXPORTS //

module.exports = Axis;
