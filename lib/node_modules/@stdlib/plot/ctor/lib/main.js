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

var EventEmitter = require( 'events' ).EventEmitter;
var logger = require( 'debug' );
var objectKeys = require( '@stdlib/utils/keys' );
var defineProperty = require( '@stdlib/utils/define-property' );
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var copy = require( '@stdlib/utils/copy' );
var inherit = require( '@stdlib/utils/inherit' );
var mergeFcn = require( '@stdlib/utils/merge' ).factory;
var minstd = require( '@stdlib/random/base/minstd' );
var view = require( './view/view.js' );
var defaults = require( './defaults.js' );
var setX = require( './props/x/set.js' );
var getX = require( './props/x/get.js' );
var setY = require( './props/y/set.js' );
var getY = require( './props/y/get.js' );
var setLabels = require( './props/labels/set.js' );
var getLabels = require( './props/labels/get.js' );
var setIsDefined = require( './props/is-defined/set.js' );
var getIsDefined = require( './props/is-defined/get.js' );
var setColors = require( './props/colors/set.js' );
var getColors = require( './props/colors/get.js' );
var setLineStyle = require( './props/line-style/set.js' );
var getLineStyle = require( './props/line-style/get.js' );
var setLineOpacity = require( './props/line-opacity/set.js' );
var getLineOpacity = require( './props/line-opacity/get.js' );
var setLineWidth = require( './props/line-width/set.js' );
var getLineWidth = require( './props/line-width/get.js' );
var setSymbols = require( './props/symbols/set.js' );
var getSymbols = require( './props/symbols/get.js' );
var setSymbolsSize = require( './props/symbols-size/set.js' );
var getSymbolsSize = require( './props/symbols-size/get.js' );
var setSymbolsOpacity = require( './props/symbols-opacity/set.js' );
var getSymbolsOpacity = require( './props/symbols-opacity/get.js' );
var setWidth = require( './props/width/set.js' );
var getWidth = require( './props/width/get.js' );
var setHeight = require( './props/height/set.js' );
var getHeight = require( './props/height/get.js' );
var setPaddingLeft = require( './props/padding-left/set.js' );
var getPaddingLeft = require( './props/padding-left/get.js' );
var setPaddingRight = require( './props/padding-right/set.js' );
var getPaddingRight = require( './props/padding-right/get.js' );
var setPaddingTop = require( './props/padding-top/set.js' );
var getPaddingTop = require( './props/padding-top/get.js' );
var setPaddingBottom = require( './props/padding-bottom/set.js' );
var getPaddingBottom = require( './props/padding-bottom/get.js' );
var setXMin = require( './props/x-min/set.js' );
var getXMin = require( './props/x-min/get.js' );
var setXMax = require( './props/x-max/set.js' );
var getXMax = require( './props/x-max/get.js' );
var setYMin = require( './props/y-min/set.js' );
var getYMin = require( './props/y-min/get.js' );
var setYMax = require( './props/y-max/set.js' );
var getYMax = require( './props/y-max/get.js' );
var setXScale = require( './props/x-scale/set.js' );
var getXScale = require( './props/x-scale/get.js' );
var setYScale = require( './props/y-scale/set.js' );
var getYScale = require( './props/y-scale/get.js' );
var setXTickFormat = require( './props/x-tick-format/set.js' );
var getXTickFormat = require( './props/x-tick-format/get.js' );
var setYTickFormat = require( './props/y-tick-format/set.js' );
var getYTickFormat = require( './props/y-tick-format/get.js' );
var setXNumTicks = require( './props/x-num-ticks/set.js' );
var getXNumTicks = require( './props/x-num-ticks/get.js' );
var setYNumTicks = require( './props/y-num-ticks/set.js' );
var getYNumTicks = require( './props/y-num-ticks/get.js' );
var setXAxisOrient = require( './props/x-axis-orient/set.js' );
var getXAxisOrient = require( './props/x-axis-orient/get.js' );
var setYAxisOrient = require( './props/y-axis-orient/set.js' );
var getYAxisOrient = require( './props/y-axis-orient/get.js' );
var setXRug = require( './props/x-rug/set.js' );
var getXRug = require( './props/x-rug/get.js' );
var setYRug = require( './props/y-rug/set.js' );
var getYRug = require( './props/y-rug/get.js' );
var setXRugOrient = require( './props/x-rug-orient/set.js' );
var getXRugOrient = require( './props/x-rug-orient/get.js' );
var setYRugOrient = require( './props/y-rug-orient/set.js' );
var getYRugOrient = require( './props/y-rug-orient/get.js' );
var setXRugOpacity = require( './props/x-rug-opacity/set.js' );
var getXRugOpacity = require( './props/x-rug-opacity/get.js' );
var setYRugOpacity = require( './props/y-rug-opacity/set.js' );
var getYRugOpacity = require( './props/y-rug-opacity/get.js' );
var setXRugSize = require( './props/x-rug-size/set.js' );
var getXRugSize = require( './props/x-rug-size/get.js' );
var setYRugSize = require( './props/y-rug-size/set.js' );
var getYRugSize = require( './props/y-rug-size/get.js' );
var setDescription = require( './props/description/set.js' );
var getDescription = require( './props/description/get.js' );
var setTitle = require( './props/title/set.js' );
var getTitle = require( './props/title/get.js' );
var setXLabel = require( './props/x-label/set.js' );
var getXLabel = require( './props/x-label/get.js' );
var setYLabel = require( './props/y-label/set.js' );
var getYLabel = require( './props/y-label/get.js' );
var setEngine = require( './props/engine/set.js' );
var getEngine = require( './props/engine/get.js' );
var setAutoRender = require( './props/auto-render/set.js' );
var getAutoRender = require( './props/auto-render/get.js' );
var setRenderFormat = require( './props/render-format/set.js' );
var getRenderFormat = require( './props/render-format/get.js' );
var setViewer = require( './props/viewer/set.js' );
var getViewer = require( './props/viewer/get.js' );
var setAutoView = require( './props/auto-view/set.js' );
var getAutoView = require( './props/auto-view/get.js' );
var getGraphWidth = require( './props/graph-width/get.js' );
var getGraphHeight = require( './props/graph-height/get.js' );
var getXDomain = require( './props/x-domain/get.js' );
var getYDomain = require( './props/y-domain/get.js' );
var getXRange = require( './props/x-range/get.js' );
var getYRange = require( './props/y-range/get.js' );
var getXPos = require( './props/x-pos/get.js' );
var getYPos = require( './props/y-pos/get.js' );
var render = require( './render' );
var viewMethod = require( './view' );


// VARIABLES //

var debug = logger( 'plot:main' );
var PRIVATE_PROPS = [
	'_autoRender',
	'_autoView',
	'_colors',
	'_description',
	'_engine',
	'_height',
	'_isDefined',
	'_labels',
	'_lineOpacity',
	'_lineStyle',
	'_lineWidth',
	'_paddingBottom',
	'_paddingLeft',
	'_paddingRight',
	'_paddingTop',
	'_renderFormat',
	'_symbols',
	'_symbolsOpacity',
	'_symbolsSize',
	'_title',
	'_viewer',
	'_width',
	'_xAxisOrient',
	'_xData',
	'_xLabel',
	'_xMax',
	'_xMin',
	'_xNumTicks',
	'_xRug',
	'_xRugOpacity',
	'_xRugOrient',
	'_xRugSize',
	'_xScale',
	'_xTickFormat',
	'_yAxisOrient',
	'_yData',
	'_yLabel',
	'_yMax',
	'_yMin',
	'_yNumTicks',
	'_yRug',
	'_yRugOpacity',
	'_yRugOrient',
	'_yRugSize',
	'_yScale',
	'_yTickFormat'
];


// FUNCTIONS //

var merge = mergeFcn({
	'extend': false
});


// MAIN //

/**
* Plot constructor.
*
* @constructor
* @param {Array} [x] - x-values
* @param {Array} [y] - y-values
* @param {Options} [options] - constructor options
* @param {boolean} [options.autoRender=false] - indicates whether to re-render on a change event
* @param {boolean} [options.autoView=false] - indicates whether to generate an updated view on a render event
* @param {(string|StringArray)} [options.colors='category10'] - data colors
* @param {string} [options.description=''] - plot description
* @param {string} [options.engine='svg'] - plot engine
* @param {PositiveNumber} [options.height=400] - plot height
* @param {Function} [options.isDefined] - accessor indicating whether a datum is defined
* @param {(StringArray|EmptyArray)} [options.labels] - data labels
* @param {(number|NumberArray)} [options.lineOpacity=0.9] - data line opacity
* @param {(string|StringArray)} [options.lineStyle='-'] - data line style(s)
* @param {(NonNegativeInteger|Array<NonNegativeInteger>)} [options.lineWidth=2] - data line width(s)
* @param {NonNegativeInteger} [options.paddingBottom=80] - bottom padding
* @param {NonNegativeInteger} [options.paddingLeft=90] - left padding
* @param {NonNegativeInteger} [options.paddingRight=20] - right padding
* @param {NonNegativeInteger} [options.paddingTop=80] - top padding
* @param {string} [options.renderFormat='vdom'] - plot render format
* @param {(string|StringArray)} [options.symbols='none'] - data symbols
* @param {(number|NumberArray)} [options.symbolsOpacity=0.9] - symbols opacity
* @param {(NonNegativeInteger|Array<NonNegativeInteger>)} [options.symbolsSize=6] - symbols size
* @param {string} [options.title=''] - plot title
* @param {string} [options.viewer='none'] - plot viewer
* @param {PositiveNumber} [options.width=400] - plot width
* @param {Array} [options.x=[]] - x-values
* @param {string} [options.xAxisOrient='bottom'] - x-axis orientation
* @param {string} [options.xLabel='x'] - x-axis label
* @param {(Date|FiniteNumber|null)} [options.xMax=null] - maximum value of x-axis domain
* @param {(Date|FiniteNumber|null)} [options.xMin=null] - minimum value of x-axis domain
* @param {(NonNegativeInteger|null)} [options.xNumTicks=5] - number of x-axis tick marks
* @param {(boolean|BooleanArray)} [options.xRug=false] - indicates whether to render a rug plot along the x-axis
* @param {(string|StringArray)} [options.xRugOrient='bottom'] - x-axis rug orientation
* @param {(number|NumberArray)} [options.xRugOpacity=0.1] - x-axis rug opacity
* @param {(NonNegativeInteger|Array<NonNegativeInteger>)} [options.xRugSize=6] - x-axis rug tick (tassel) size
* @param {string} [options.xScale='linear'] - x-axis scale
* @param {(string|null)} [options.xTickFormat=null] - x-axis tick format
* @param {Array} [options.y=[]] - y-values
* @param {string} [options.yAxisOrient='left'] - y-axis orientation
* @param {string} [options.yLabel='y'] - y-axis label
* @param {(FiniteNumber|null)} [options.yMax=null] - maximum value of y-axis domain
* @param {(FiniteNumber|null)} [options.yMin=null] - minimum value of y-axis domain
* @param {(NonNegativeInteger|null)} [options.yNumTicks=5] - number of y-axis tick marks
* @param {(boolean|BooleanArray)} [options.yRug=false] - indicates whether to render a rug plot along the y-axis
* @param {(string|StringArray)} [options.yRugOrient='left'] - y-axis rug orientation
* @param {(number|NumberArray)} [options.yRugOpacity=0.1] - y-axis rug opacity
* @param {(NonNegativeInteger|Array<NonNegativeInteger>)} [options.yRugSize=6] - y-axis rug tick (tassel) size
* @param {string} [options.yScale='linear'] - y-axis scale
* @param {(string|null)} [options.yTickFormat=null] - y-axis tick format
* @throws {TypeError} must provide valid options
* @returns {Plot} Plot instance
*
* @example
* var plot = new Plot();
*/
function Plot() {
	var options;
	var nargs;
	var keys;
	var self;
	var opts;
	var key;
	var i;

	nargs = arguments.length;
	if ( !(this instanceof Plot) ) {
		if ( nargs === 0 ) {
			return new Plot();
		}
		if ( nargs === 1 ) {
			return new Plot( arguments[0] );
		}
		if ( nargs === 2 ) {
			return new Plot( arguments[0], arguments[1] );
		}
		return new Plot( arguments[0], arguments[1], arguments[2] );
	}
	self = this;

	opts = defaults();
	if ( nargs === 0 ) {
		options = {};
	} else if ( nargs === 1 ) {
		options = arguments[ 0 ];
		if ( !isObject( options ) ) {
			throw new TypeError( 'invalid argument. Options argument must be an `object`. Value: `' + options + '`.' );
		}
	} else if ( nargs === 2 ) {
		options = {
			'x': arguments[ 0 ],
			'y': arguments[ 1 ]
		};
	} else if ( nargs > 2 ) {
		if ( !isObject( arguments[2] ) ) {
			throw new TypeError( 'invalid argument. Options argument must be an `object`. Value: `' + arguments[2] + '`.' );
		}
		options = copy( arguments[2] ); // avoid mutation
		options.x = arguments[ 0 ];
		options.y = arguments[ 1 ];
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
	// Set a clipping path id:
	defineProperty( this, '_clipPathId', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': minstd().toString() // TODO: uuid
	});

	// Initialize an internal cache for renderers...
	defineProperty( this, '$', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': {}
	});
	defineProperty( this.$, 'svg', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': {}
	});

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
	* Callback invoked upon receiving a change event.
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
	* Callback invoked upon receiving a render event.
	*
	* @private
	* @param {*} plot - rendered plot
	*/
	function onRender( plot ) {
		/* eslint-disable no-underscore-dangle */
		debug( 'Received a render event.' );
		if ( self._autoView ) {
			debug( 'Viewer: %s.', self._viewer );
			debug( 'Generating view...' );
			view( self, self._viewer, plot );
		}
	}
}

/*
* Inherit from the `EventEmitter` prototype.
*/
inherit( Plot, EventEmitter );

/**
* `x` values.
*
* @name x
* @memberof Plot.prototype
* @type {Array}
* @throws {TypeError} must be an array
* @default []
*
* @example
* var plot = new Plot();
* plot.x = [ [ 1417563950959, 1417563952959 ] ];
*
* @example
* var plot = new Plot({
*     'x': [ [ 1417563950959, 1417563952959 ] ]
* });
* var x = plot.x;
* // returns [ [ 1417563950959, 1417563952959 ] ]
*/
defineProperty( Plot.prototype, 'x', {
	'configurable': false,
	'enumerable': true,
	'set': setX,
	'get': getX
});

/**
* `y` values.
*
* @name y
* @memberof Plot.prototype
* @type {Array}
* @throws {TypeError} must be an array
* @default []
*
* @example
* var plot = new Plot();
* plot.x = [ [ 1417563950959, 1417563952959 ] ];
* plot.y = [ [ 0.25, 0.23 ] ];
*
* @example
* var plot = new Plot({
*     'x': [ [ 1417563950959, 1417563952959 ] ],
*     'y': [ [ 0.25, 0.23 ] ]
* });
* var y = plot.y;
* // returns [ [ 0.25, 0.23 ] ]
*/
defineProperty( Plot.prototype, 'y', {
	'configurable': false,
	'enumerable': true,
	'set': setY,
	'get': getY
});

/**
* Data labels.
*
* @name labels
* @memberof Plot.prototype
* @type {(StringArray|EmptyArray)}
* @throws {TypeError} must be either an array of strings or an empty array
* @default []
*
* @example
* var plot = new Plot();
* plot.labels = [ 'beep', 'boop' ];
*
* @example
* var plot = new Plot({
*     'labels': [ 'beep', 'boop' ]
* });
* var labels = plot.labels;
* // returns [ 'beep', 'boop' ]
*/
defineProperty( Plot.prototype, 'labels', {
	'configurable': false,
	'enumerable': true,
	'set': setLabels,
	'get': getLabels
});

/**
* Accessor which defines whether a datum is defined.
*
* ## Notes
*
* -   This accessor is used to define how missing values are encoded.
* -   The default behavior is to ignore values which are `NaN`.
*
* @name isDefined
* @memberof Plot.prototype
* @type {Function}
* @param {*} d - datum
* @param {integer} i - index
* @throws {TypeError} must be a function
*
* @example
* var plot = new Plot();
* plot.isDefined = function isDefined( d ) {
*     // Check for `NaN`:
*     return ( d === d );
* }
*
* @example
* function isDefined( d ) {
*     // Check for `NaN`:
*     return ( d === d );
* }
* var plot = new Plot({
*     'isDefined': isDefined
* });
* var fcn = plot.isDefined;
* // returns <Function>
*/
defineProperty( Plot.prototype, 'isDefined', {
	'configurable': false,
	'enumerable': true,
	'set': setIsDefined,
	'get': getIsDefined
});

/**
* Data colors. When retrieved, the returned value is always an `array`.
*
* @name colors
* @memberof Plot.prototype
* @type {(string|StringArray)}
* @throws {TypeError} must be either a string or an array of strings
* @default 'category10'
*
* @example
* var plot = new Plot();
* plot.colors = 'category20';
*
* @example
* var plot = new Plot({
*     'colors': 'category20'
* });
* var colors = plot.colors;
* // returns [...]
*/
defineProperty( Plot.prototype, 'colors', {
	'configurable': false,
	'enumerable': true,
	'set': setColors,
	'get': getColors
});

/**
* Data line style(s).
*
* ## Notes
*
* -   When retrieved, the returned value is always an `array`.
*
* @name lineStyle
* @memberof Plot.prototype
* @type {(string|StringArray)}
* @throws {TypeError} must be a string or string array
* @throws {Error} must be a supported line style
* @default '-'
*
* @example
* var plot = new Plot();
* plot.lineStyle = [ '-', 'none' ];
*
* @example
* var plot = new Plot({
*     'lineStyle': 'none'
* });
* var lineStyle = plot.lineStyle;
* // returns [ 'none' ]
*/
defineProperty( Plot.prototype, 'lineStyle', {
	'configurable': false,
	'enumerable': true,
	'set': setLineStyle,
	'get': getLineStyle
});

/**
* Data line opacity.
*
* ## Notes
*
* -   When retrieved, the returned value is always an `array`.
*
* @name lineOpacity
* @memberof Plot.prototype
* @type {(number|NumberArray)}
* @throws {TypeError} must be a number or number array
* @throws {RangeError} must be a number on the interval `[0,1]`
* @default '0.9'
*
* @example
* var plot = new Plot();
* plot.lineOpacity = [ 1.0, 0.5 ];
*
* @example
* var plot = new Plot({
*     'lineOpacity': 0.5
* });
* var opacity = plot.lineOpacity;
* // returns [ 0.5 ]
*/
defineProperty( Plot.prototype, 'lineOpacity', {
	'configurable': false,
	'enumerable': true,
	'set': setLineOpacity,
	'get': getLineOpacity
});

/**
* Data line width.
*
* ## Notes
*
* -   When retrieved, the returned value is always an `array`.
*
* @name lineWidth
* @memberof Plot.prototype
* @type {(NonNegativeInteger|NonNegativeIntegerArray)}
* @throws {TypeError} must be a nonnegative integer or nonnegative integer array
* @default 2
*
* @example
* var plot = new Plot();
* plot.lineWidth = 1;
*
* @example
* var plot = new Plot({
*     'lineWidth': [ 1, 3 ]
* });
* var width = plot.lineWidth;
* // returns [ 1, 3 ]
*/
defineProperty( Plot.prototype, 'lineWidth', {
	'configurable': false,
	'enumerable': true,
	'set': setLineWidth,
	'get': getLineWidth
});

/**
* Data symbols. When retrieved, the returned value is always an `array`.
*
* @name symbols
* @memberof Plot.prototype
* @type {(string|StringArray)}
* @throws {TypeError} must be a string or string array
* @throws {Error} must be a supported symbol
* @default 'none'
*
* @example
* var plot = new Plot();
* plot.symbols = [ 'open-circle', 'closed-circle' ];
*
* @example
* var plot = new Plot({
*     'symbols': 'closed-circle'
* });
* var symbols = plot.symbols;
* // returns [ 'closed-circle' ]
*/
defineProperty( Plot.prototype, 'symbols', {
	'configurable': false,
	'enumerable': true,
	'set': setSymbols,
	'get': getSymbols
});

/**
* Symbols size. When retrieved, the returned value is always an `array`.
*
* @name symbolsSize
* @memberof Plot.prototype
* @type {(NonNegativeInteger|NonNegativeIntegerArray)}
* @throws {TypeError} must be a nonnegative integer or nonnegative integer array
* @default 6
*
* @example
* var plot = new Plot();
* plot.symbolsSize = 4;
*
* @example
* var plot = new Plot({
*     'symbolsSize': [ 4, 6 ]
* });
* var size = plot.symbolsSize;
* // returns [ 4, 6 ]
*/
defineProperty( Plot.prototype, 'symbolsSize', {
	'configurable': false,
	'enumerable': true,
	'set': setSymbolsSize,
	'get': getSymbolsSize
});

/**
* Symbols opacity. When retrieved, the returned value is always an `array`.
*
* @name symbolsOpacity
* @memberof Plot.prototype
* @type {(number|NumberArray)}
* @throws {TypeError} must be a number or number array
* @throws {RangeError} must be a number on the interval `[0,1]`
* @default 0.9
*
* @example
* var plot = new Plot();
* plot.symbolsOpacity = [ 0.2, 0.5 ];
*
* @example
* var plot = new Plot({
*     'symbolsOpacity': 0.2
* });
* var opacity = plot.symbolsOpacity;
* // returns [ 0.2 ]
*/
defineProperty( Plot.prototype, 'symbolsOpacity', {
	'configurable': false,
	'enumerable': true,
	'set': setSymbolsOpacity,
	'get': getSymbolsOpacity
});

/**
* Plot width.
*
* @name width
* @memberof Plot.prototype
* @type {PositiveNumber}
* @throws {TypeError} must be a positive number
* @default 400 (px)
*
* @example
* var plot = new Plot();
* plot.width = 100;
*
* @example
* var plot = new Plot({
*     'width': 480
* });
* var width = plot.width;
* // returns 480
*/
defineProperty( Plot.prototype, 'width', {
	'configurable': false,
	'enumerable': true,
	'set': setWidth,
	'get': getWidth
});

/**
* Plot height.
*
* @name height
* @memberof Plot.prototype
* @type {PositiveNumber}
* @throws {TypeError} must be a positive number
* @default 400 (px)
*
* @example
* var plot = new Plot();
* plot.height = 100;
*
* @example
* var plot = new Plot({
*     'height': 360
* });
* var height = plot.height;
* // returns 360
*/
defineProperty( Plot.prototype, 'height', {
	'configurable': false,
	'enumerable': true,
	'set': setHeight,
	'get': getHeight
});

/**
* Plot left padding.
*
* ## Notes
*
* -   Typically used to create space for a left-oriented y-axis.
*
* @name paddingLeft
* @memberof Plot.prototype
* @type {NonNegativeInteger}
* @throws {TypeError} must be a nonnegative integer
* @default 90 (px)
*
* @example
* var plot = new Plot();
* plot.paddingLeft = 100;
*
* @example
* var plot = new Plot({
*     'paddingLeft': 100
* });
* var padding = plot.paddingLeft;
* // returns 100
*/
defineProperty( Plot.prototype, 'paddingLeft', {
	'configurable': false,
	'enumerable': true,
	'set': setPaddingLeft,
	'get': getPaddingLeft
});

/**
* Plot right padding.
*
* ## Notes
*
* -   Typically used to create space for a right-oriented y-axis.
*
* @name paddingRight
* @memberof Plot.prototype
* @type {NonNegativeInteger}
* @throws {TypeError} must be a nonnegative integer
* @default 20 (px)
*
* @example
* var plot = new Plot();
* plot.paddingRight = 100;
*
* @example
* var plot = new Plot({
*     'paddingRight': 100
* });
* var padding = plot.paddingRight;
* // returns 100
*/
defineProperty( Plot.prototype, 'paddingRight', {
	'configurable': false,
	'enumerable': true,
	'set': setPaddingRight,
	'get': getPaddingRight
});

/**
* Plot top padding.
*
* ## Notes
*
* -   Typically used to create space for a title or top-oriented x-axis.
*
* @name paddingTop
* @memberof Plot.prototype
* @type {NonNegativeInteger}
* @throws {TypeError} must be a nonnegative integer
* @default 80 (px)
*
* @example
* var plot = new Plot();
* plot.paddingTop = 100;
*
* @example
* var plot = new Plot({
*     'paddingTop': 100
* });
* var padding = plot.paddingTop;
* // returns 100
*/
defineProperty( Plot.prototype, 'paddingTop', {
	'configurable': false,
	'enumerable': true,
	'set': setPaddingTop,
	'get': getPaddingTop
});

/**
* Plot bottom padding.
*
* ## Notes
*
* -   Typically used to create space for a bottom-oriented y-axis.
*
* @name paddingBottom
* @memberof Plot.prototype
* @type {NonNegativeInteger}
* @throws {TypeError} must be a nonnegative integer
* @default 80 (px)
*
* @example
* var plot = new Plot();
* plot.paddingBottom = 100;
*
* @example
* var plot = new Plot({
*     'paddingBottom': 100
* });
* var padding = plot.paddingBottom;
* // returns 100
*/
defineProperty( Plot.prototype, 'paddingBottom', {
	'configurable': false,
	'enumerable': true,
	'set': setPaddingBottom,
	'get': getPaddingBottom
});

/**
* Minimum value of the x-axis domain.
*
* ## Notes
*
* -   When retrieved, if the value has been set to `null`, the returned value is computed from the `x` data.
*
* @name xMin
* @memberof Plot.prototype
* @type {(FiniteNumber|null)}
* @throws {TypeError} must be a finite number primitive or null
* @default null
*
* @example
* var plot = new Plot();
* plot.xMin = -1.0;
*
* @example
* var plot = new Plot({
*     'xMin': -10.0
* });
* var xmin = plot.xMin;
* // returns -10.0
*/
defineProperty( Plot.prototype, 'xMin', {
	'configurable': false,
	'enumerable': true,
	'set': setXMin,
	'get': getXMin
});

/**
* Maximum value of the x-axis domain.
*
* ## Notes
*
* -   When retrieved, if the value has been set to `null`, the returned value is computed from the `x` data.
*
* @name xMax
* @memberof Plot.prototype
* @type {(FiniteNumber|null)}
* @throws {TypeError} must be a finite number primitive or null
* @default null
*
* @example
* var plot = new Plot();
* plot.xMax = 100.0;
*
* @example
* var plot = new Plot({
*     'xMax': 10.0
* });
* var xmax = plot.xMax;
* // returns 10.0
*/
defineProperty( Plot.prototype, 'xMax', {
	'configurable': false,
	'enumerable': true,
	'set': setXMax,
	'get': getXMax
});

/**
* Minimum value of the y-axis domain.
*
* ## Notes
*
* -   When retrieved, if the value has been set to `null`, the returned value is computed from the `y` data.
*
* @name yMin
* @memberof Plot.prototype
* @type {(FiniteNumber|null)}
* @throws {TypeError} must be a finite number primitive or null
* @default null
*
* @example
* var plot = new Plot();
* plot.yMin = -100.0;
*
* @example
* var plot = new Plot({
*     'yMin': 3.14
* });
* var ymin = plot.yMin;
* // returns 3.14
*/
defineProperty( Plot.prototype, 'yMin', {
	'configurable': false,
	'enumerable': true,
	'set': setYMin,
	'get': getYMin
});

/**
* Maximum value of the y-axis domain.
*
* ## Notes
*
* -   When retrieved, if the value has been set to `null`, the returned value is computed from the `y` data.
*
* @name yMax
* @memberof Plot.prototype
* @type {(FiniteNumber|null)}
* @throws {TypeError} must be a finite number primitive or null
* @default null
*
* @example
* var plot = new Plot();
* plot.yMax = 100.0;
*
* @example
* var plot = new Plot({
*     'yMax': 31.4
* });
* var ymax = plot.yMax;
* // returns 31.4
*/
defineProperty( Plot.prototype, 'yMax', {
	'configurable': false,
	'enumerable': true,
	'set': setYMax,
	'get': getYMax
});

/**
* Scale function for mapping values to a coordinate along the x-axis. When retrieved, the returned value is a scale function.
*
* @name xScale
* @memberof Plot.prototype
* @type {string}
* @throws {TypeError} must be a string primitive
* @default 'linear'
*
* @example
* var plot = new Plot();
* plot.xScale = 'time';
*
* @example
* var plot = new Plot({
*     'xScale': 'time'
* });
* var scale = plot.xScale;
* // returns <Function>
*/
defineProperty( Plot.prototype, 'xScale', {
	'configurable': false,
	'enumerable': true,
	'set': setXScale,
	'get': getXScale
});

/**
* Scale function for mapping values to a coordinate along the y-axis. When retrieved, the returned value is a scale function.
*
* @name yScale
* @memberof Plot.prototype
* @type {string}
* @throws {TypeError} must be a string primitive
* @default 'linear'
*
* @example
* var plot = new Plot();
* plot.yScale = 'linear';
*
* @example
* var plot = new Plot({
*     'yScale': 'linear'
* });
* var scale = plot.yScale;
* // returns <Function>
*/
defineProperty( Plot.prototype, 'yScale', {
	'configurable': false,
	'enumerable': true,
	'set': setYScale,
	'get': getYScale
});

/**
* x-axis tick format.
*
* ## Notes
*
* -   When retrieved, if the value is not `null`, the returned value is a formatting function.
*
* @name xTickFormat
* @memberof Plot.prototype
* @type {(string|null)}
* @throws {TypeError} must be a string primitive or null
* @default null
*
* @example
* var plot = new Plot();
* plot.xScale = 'time';
* plot.xTickFormat = '%H:%M';
*
* @example
* var plot = new Plot({
*     'xScale': 'time',
*     'xTickFormat': '%H:%M'
* });
* var fmt = plot.xTickFormat;
* // returns <Function>
*/
defineProperty( Plot.prototype, 'xTickFormat', {
	'configurable': false,
	'enumerable': true,
	'set': setXTickFormat,
	'get': getXTickFormat
});

/**
* y-axis tick format.
*
* ## Notes
*
* -   If the value is not `null`, when retrieved, the returned value is a formatting function.
*
* @name yTickFormat
* @memberof Plot.prototype
* @type {(string|null)}
* @throws {TypeError} must be a string primitive or null
* @default null
*
* @example
* var plot = new Plot();
* plot.yTickFormat = '.0%';
*
* @example
* var plot = new Plot({
*     'yTickFormat': '.0%'
* });
* var fmt = plot.yTickFormat;
* // returns <Function>
*/
defineProperty( Plot.prototype, 'yTickFormat', {
	'configurable': false,
	'enumerable': true,
	'set': setYTickFormat,
	'get': getYTickFormat
});

/**
* Number of x-axis tick marks.
*
* @name xNumTicks
* @memberof Plot.prototype
* @type {(NonNegativeInteger|null)}
* @throws {TypeError} must be a nonnegative integer or null
* @default 5
*
* @example
* var plot = new Plot();
* plot.xNumTicks = 10;
*
* @example
* var plot = new Plot({
*     'xNumTicks': 10
* });
* var ticks = plot.xNumTicks;
* // returns 10
*/
defineProperty( Plot.prototype, 'xNumTicks', {
	'configurable': false,
	'enumerable': true,
	'set': setXNumTicks,
	'get': getXNumTicks
});

/**
* Number of y-axis tick marks.
*
* @name yNumTicks
* @memberof Plot.prototype
* @type {(NonNegativeInteger|null)}
* @throws {TypeError} must be a nonnegative integer or null
* @default 5
*
* @example
* var plot = new Plot();
* plot.yNumTicks = 10;
*
* @example
* var plot = new Plot({
*     'yNumTicks': 10
* });
* var ticks = plot.yNumTicks;
* // returns 10
*/
defineProperty( Plot.prototype, 'yNumTicks', {
	'configurable': false,
	'enumerable': true,
	'set': setYNumTicks,
	'get': getYNumTicks
});

/**
* x-axis orientation.
*
* @name xAxisOrient
* @memberof Plot.prototype
* @type {string}
* @throws {TypeError} must be either `'top'` or `'bottom'`
* @default 'bottom'
*
* @example
* var plot = new Plot();
* plot.xAxisOrient = 'bottom';
*
* @example
* var plot = new Plot({
*     'xAxisOrient': 'bottom'
* });
* var orientation = plot.xAxisOrient;
* // returns 'bottom'
*/
defineProperty( Plot.prototype, 'xAxisOrient', {
	'configurable': false,
	'enumerable': true,
	'set': setXAxisOrient,
	'get': getXAxisOrient
});

/**
* y-axis orientation.
*
* @name yAxisOrient
* @memberof Plot.prototype
* @type {string}
* @throws {TypeError} must be either `'left'` or `'right'`
* @default 'left'
*
* @example
* var plot = new Plot();
* plot.yAxisOrient = 'left';
*
* @example
* var plot = new Plot({
*     'yAxisOrient': 'left'
* });
* var orientation = plot.yAxisOrient;
* // returns 'left'
*/
defineProperty( Plot.prototype, 'yAxisOrient', {
	'configurable': false,
	'enumerable': true,
	'set': setYAxisOrient,
	'get': getYAxisOrient
});

/**
* Boolean flag(s) indicating whether to display a rug plot along the x-axis. When retrieved, the returned value is always an `array`.
*
* @name xRug
* @memberof Plot.prototype
* @type {(boolean|BooleanArray)}
* @throws {TypeError} must be a boolean primitive or boolean array
* @default false
*
* @example
* var plot = new Plot({
*     'xRug': true
* });
*
* var bool = plot.xRug;
* // returns [ true ]
*/
defineProperty( Plot.prototype, 'xRug', {
	'configurable': false,
	'enumerable': true,
	'set': setXRug,
	'get': getXRug
});

/**
* Boolean flag(s) indicating whether to display a rug plot along the y-axis. When retrieved, the returned value is always an `array`.
*
* @name yRug
* @memberof Plot.prototype
* @type {(boolean|BooleanArray)}
* @throws {TypeError} must be a boolean primitive or boolean array
* @default false
*
* @example
* var plot = new Plot({
*     'yRug': true
* });
*
* var bool = plot.yRug;
* // returns [ true ]
*/
defineProperty( Plot.prototype, 'yRug', {
	'configurable': false,
	'enumerable': true,
	'set': setYRug,
	'get': getYRug
});

/**
* x-axis rug orientation. When retrieved, the returned value is always an `array`.
*
* @name xRugOrient
* @memberof Plot.prototype
* @type {(string|StringArray)}
* @throws {TypeError} must be a string or string array
* @throws {TypeError} must be either `'top'` or `'bottom'`
* @default 'bottom'
*
* @example
* var plot = new Plot();
* plot.xRugOrient = [ 'bottom', 'top' ];
*
* @example
* var plot = new Plot({
*     'xRugOrient': 'bottom'
* });
* var orientation = plot.xRugOrient;
* // returns [ 'bottom' ]
*/
defineProperty( Plot.prototype, 'xRugOrient', {
	'configurable': false,
	'enumerable': true,
	'set': setXRugOrient,
	'get': getXRugOrient
});

/**
* y-axis rug orientation. When retrieved, the returned value is always an `array`.
*
* @name yRugOrient
* @memberof Plot.prototype
* @type {(string|StringArray)}
* @throws {TypeError} must be a string or string array
* @throws {TypeError} must be either `'left'` or `'right'`
* @default 'left'
*
* @example
* var plot = new Plot();
* plot.yRugOrient = [ 'right', 'left' ];
*
* @example
* var plot = new Plot({
*     'yRugOrient': 'left'
* });
* var orientation = plot.yRugOrient;
* // returns [ 'left' ]
*/
defineProperty( Plot.prototype, 'yRugOrient', {
	'configurable': false,
	'enumerable': true,
	'set': setYRugOrient,
	'get': getYRugOrient
});

/**
* x-axis rug opacity. When retrieved, the returned value is always an `array`.
*
* @name xRugOpacity
* @memberof Plot.prototype
* @type {(number|NumberArray)}
* @throws {TypeError} must be a number or number array
* @throws {RangeError} must be a number on the interval `[0,1]`
* @default 0.1
*
* @example
* var plot = new Plot();
* plot.xRugOpacity = [ 0.1, 0.5 ];
*
* @example
* var plot = new Plot({
*     'xRugOpacity': 0.1
* });
* var opacity = plot.xRugOpacity;
* // returns [ 0.1 ]
*/
defineProperty( Plot.prototype, 'xRugOpacity', {
	'configurable': false,
	'enumerable': true,
	'set': setXRugOpacity,
	'get': getXRugOpacity
});

/**
* y-axis rug opacity. When retrieved, the returned value is always an `array`.
*
* @name yRugOpacity
* @memberof Plot.prototype
* @type {(number|NumberArray)}
* @throws {TypeError} must be a number or number array
* @throws {RangeError} must be a number on the interval `[0,1]`
* @default 0.1
*
* @example
* var plot = new Plot();
* plot.yRugOpacity = [ 0.1, 0.5 ];
*
* @example
* var plot = new Plot({
*     'yRugOpacity': 0.1
* });
* var opacity = plot.yRugOpacity;
* // returns [ 0.1 ]
*/
defineProperty( Plot.prototype, 'yRugOpacity', {
	'configurable': false,
	'enumerable': true,
	'set': setYRugOpacity,
	'get': getYRugOpacity
});

/**
* x-axis rug tick (tassel) size. When retrieved, the returned value is always an `array`.
*
* @name xRugSize
* @memberof Plot.prototype
* @type {(NonNegativeInteger|Array<NonNegativeInteger>)}
* @throws {TypeError} must be a nonnegative integer or nonnegative integer array
* @default 6
*
* @example
* var plot = new Plot();
* plot.xRugSize = [ 4, 6 ];
*
* @example
* var plot = new Plot({
*     'xRugSize': 4
* });
* var size = plot.xRugSize;
* // returns [ 4 ]
*/
defineProperty( Plot.prototype, 'xRugSize', {
	'configurable': false,
	'enumerable': true,
	'set': setXRugSize,
	'get': getXRugSize
});

/**
* y-axis rug tick (tassel) size. When retrieved, the returned value is always an `array`.
*
* @name yRugSize
* @memberof Plot.prototype
* @type {(NonNegativeInteger|Array<NonNegativeInteger>)}
* @throws {TypeError} must be a nonnegative integer or nonnegative integer array
* @default 6
*
* @example
* var plot = new Plot();
* plot.yRugSize = [ 4, 6 ];
*
* @example
* var plot = new Plot({
*     'yRugSize': 4
* });
* var size = plot.yRugSize;
* // returns [ 4 ]
*/
defineProperty( Plot.prototype, 'yRugSize', {
	'configurable': false,
	'enumerable': true,
	'set': setYRugSize,
	'get': getYRugSize
});

/**
* Plot description.
*
* @name description
* @memberof Plot.prototype
* @type {string}
* @throws {TypeError} must be a string primitive
* @default ''
*
* @example
* var plot = new Plot();
* plot.description = 'Average stock market index covering the last 100 years.';
*
* @example
* var plot = new Plot({
*     'description': 'A plot description.'
* });
* var desc = plot.description;
* // returns 'A plot description.'
*/
defineProperty( Plot.prototype, 'description', {
	'configurable': false,
	'enumerable': true,
	'set': setDescription,
	'get': getDescription
});

/**
* Plot title.
*
* @name title
* @memberof Plot.prototype
* @type {string}
* @throws {TypeError} must be a string primitive
* @default ''
*
* @example
* var plot = new Plot();
* plot.title = 'Time Series';
*
* @example
* var plot = new Plot({
*     'title': 'Time Series'
* });
* var t = plot.title;
* // returns 'Time Series'
*/
defineProperty( Plot.prototype, 'title', {
	'configurable': false,
	'enumerable': true,
	'set': setTitle,
	'get': getTitle
});

/**
* x-axis label.
*
* @name xLabel
* @memberof Plot.prototype
* @type {string}
* @throws {TypeError} must be a string primitive
* @default 'x'
*
* @example
* var plot = new Plot();
* plot.xLabel = 'time';
*
* @example
* var plot = new Plot({
*     'xLabel': 'time'
* });
* var xLabel = plot.xLabel;
* // returns 'time'
*/
defineProperty( Plot.prototype, 'xLabel', {
	'configurable': false,
	'enumerable': true,
	'set': setXLabel,
	'get': getXLabel
});

/**
* y-axis label.
*
* @name yLabel
* @memberof Plot.prototype
* @type {string}
* @throws {TypeError} must be a string primitive
* @default 'y'
*
* @example
* var plot = new Plot();
* plot.yLabel = 'value';
*
* @example
* var plot = new Plot({
*     'yLabel': 'value'
* });
* var yLabel = plot.yLabel;
* // returns 'value'
*/
defineProperty( Plot.prototype, 'yLabel', {
	'configurable': false,
	'enumerable': true,
	'set': setYLabel,
	'get': getYLabel
});

/**
* Plot engine.
*
* @name engine
* @memberof Plot.prototype
* @type {string}
* @throws {TypeError} must be a recognized engine
* @default 'svg'
*
* @example
* var plot = new Plot();
* plot.engine = 'svg';
*
* @example
* var plot = new Plot({
*     'engine': 'svg'
* });
* var engine = plot.engine;
* // returns 'svg'
*/
defineProperty( Plot.prototype, 'engine', {
	'configurable': false,
	'enumerable': true,
	'set': setEngine,
	'get': getEngine
});

/**
* Rendering mode.
*
* ## Notes
*
* -   If `true`, an instance re-renders on each change event.
*
* @name autoRender
* @memberof Plot.prototype
* @type {boolean}
* @throws {TypeError} must be a boolean primitive
* @default false
*
* @example
* var plot = new Plot({
*     'autoRender': true
* });
*
* var mode = plot.autoRender;
* // returns true
*/
defineProperty( Plot.prototype, 'autoRender', {
	'configurable': false,
	'enumerable': true,
	'set': setAutoRender,
	'get': getAutoRender
});

/**
* Plot render format.
*
* @name renderFormat
* @memberof Plot.prototype
* @type {string}
* @throws {TypeError} must be a recognized format
* @default 'vdom'
*
* @example
* var plot = new Plot();
* plot.renderFormat = 'vdom';
*
* @example
* var plot = new Plot({
*     'renderFormat': 'html'
* });
* var fmt = plot.renderFormat;
* // returns 'html'
*/
defineProperty( Plot.prototype, 'renderFormat', {
	'configurable': false,
	'enumerable': true,
	'set': setRenderFormat,
	'get': getRenderFormat
});

/**
* Plot viewer.
*
* @name viewer
* @memberof Plot.prototype
* @type {string}
* @throws {TypeError} must be a recognized viewer
* @default 'none'
*
* @example
* var plot = new Plot();
* plot.viewer = 'none';
*
* @example
* var plot = new Plot({
*     'viewer': 'none'
* });
* var viewer = plot.viewer;
* // returns 'none'
*/
defineProperty( Plot.prototype, 'viewer', {
	'configurable': false,
	'enumerable': true,
	'set': setViewer,
	'get': getViewer
});

/**
* Viewer mode. If `true`, an instance generates an updated view on each render event.
*
* @name autoView
* @memberof Plot.prototype
* @type {boolean}
* @throws {TypeError} must be a boolean primitive
* @default false
*
* @example
* var plot = new Plot({
*     'autoView': false
* });
*
* var mode = plot.autoView;
* // returns false
*/
defineProperty( Plot.prototype, 'autoView', {
	'configurable': false,
	'enumerable': true,
	'set': setAutoView,
	'get': getAutoView
});

/**
* Expected graph width.
*
* @name graphWidth
* @memberof Plot.prototype
* @type {number}
*
* @example
* var plot = new Plot({
*     'width': 100,
*     'paddingLeft': 10,
*     'paddingRight': 10
* });
* var width = plot.graphWidth;
* // returns 80
*/
defineProperty( Plot.prototype, 'graphWidth', {
	'configurable': false,
	'enumerable': true,
	'get': getGraphWidth
});

/**
* Expected graph height.
*
* @name graphHeight
* @memberof Plot.prototype
* @type {number}
*
* @example
* var plot = new Plot({
*     'height': 100,
*     'paddingTop': 10,
*     'paddingBottom': 20
* });
* var height = plot.graphHeight;
* // returns 70
*/
defineProperty( Plot.prototype, 'graphHeight', {
	'configurable': false,
	'enumerable': true,
	'get': getGraphHeight
});

/**
* x-axis domain.
*
* @name xDomain
* @memberof Plot.prototype
* @type {Array}
*
* @example
* var plot = new Plot({
*     'xMin': 0,
*     'xMax': 100
* });
* var domain = plot.xDomain;
* // returns [ 0, 100 ]
*/
defineProperty( Plot.prototype, 'xDomain', {
	'configurable': false,
	'enumerable': true,
	'get': getXDomain
});

/**
* y-axis domain.
*
* @name yDomain
* @memberof Plot.prototype
* @type {NumberArray}
*
* @example
* var plot = new Plot({
*     'yMin': 0,
*     'yMax': 100
* });
* var domain = plot.yDomain;
* // returns [ 0, 100 ]
*/
defineProperty( Plot.prototype, 'yDomain', {
	'configurable': false,
	'enumerable': true,
	'get': getYDomain
});

/**
* x-axis range.
*
* @name xRange
* @memberof Plot.prototype
* @type {NumberArray}
*
* @example
* var plot = new Plot({
*     'width': 100,
*     'paddingLeft': 10,
*     'paddingRight': 10
* });
* var range = plot.xRange;
* // returns [ 0, 80 ]
*/
defineProperty( Plot.prototype, 'xRange', {
	'configurable': false,
	'enumerable': true,
	'get': getXRange
});

/**
* y-axis range.
*
* @name yRange
* @memberof Plot.prototype
* @type {NumberArray}
*
* @example
* var plot = new Plot({
*     'height': 100,
*     'paddingTop': 10,
*     'paddingBottom': 20
* });
* var range = plot.yRange;
* // returns [ 70, 0 ]
*/
defineProperty( Plot.prototype, 'yRange', {
	'configurable': false,
	'enumerable': true,
	'get': getYRange
});

/**
* Function to map values to x-axis coordinate values.
*
* @name xPos
* @memberof Plot.prototype
* @type {Function}
*
* @example
* var plot = new Plot();
* var xPos = plot.xPos;
* // returns <Function>
*/
defineProperty( Plot.prototype, 'xPos', {
	'configurable': false,
	'enumerable': true,
	'get': getXPos
});

/**
* Function to map values to y-axis coordinate values.
*
* @name yPos
* @memberof Plot.prototype
* @type {Function}
*
* @example
* var plot = new Plot();
* var yPos = plot.yPos;
* // returns <Function>
*/
defineProperty( Plot.prototype, 'yPos', {
	'configurable': false,
	'enumerable': true,
	'get': getYPos
});

/**
* Renders a plot.
*
* @name render
* @memberof Plot.prototype
* @type {Function}
* @param {string} [format] - render format
* @throws {TypeError} must provide a recognized format
* @returns {(VTree|string)} virtual tree or string
*
* @example
* var plot = new Plot();
* plot.x = [ [ 1, 2, 3 ] ];
* plot.y = [ [ 1, 0, 1 ] ];
*
* var out = plot.render();
*
* @example
* var plot = new Plot();
* plot.x = [ [ 1, 2, 3 ] ];
* plot.y = [ [ 1, 0, 1 ] ];
*
* var out = plot.render( 'html' );
*/
setReadOnly( Plot.prototype, 'render', render );

/**
* Generates a plot view.
*
* @name view
* @memberof Plot.prototype
* @type {Function}
* @param {string} [viewer]
* @throws {TypeError} must provide a recognized viewer
*
* @example
* var plot = new Plot();
* plot.x = [ [ 1, 2, 3 ] ];
* plot.y = [ [ 1, 0, 1 ] ];
*
* plot.view( 'stdout' );
*/
setReadOnly( Plot.prototype, 'view', viewMethod );


// EXPORTS //

module.exports = Plot;
