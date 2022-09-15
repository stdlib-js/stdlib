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

var defineProperty = require( '@stdlib/utils/define-property' );
var xValue = require( './x_value.js' );
var yValue = require( './y_value.js' );
var formatData = require( './format_data.js' );
var validate = require( './validate.js' );
var setXValue = require( './set_xvalue.js' );
var getXValue = require( './get_xvalue.js' );
var setYValue = require( './set_yvalue.js' );
var getYValue = require( './get_yvalue.js' );
var setX = require( './set_x.js' );
var getX = require( './get_x.js' );
var setY = require( './set_y.js' );
var getY = require( './get_y.js' );
var render = require( './render.js' );


// MAIN //

/**
* Creates a stem-and-leaf plot.
*
* @constructor
* @param {Options} [options] - steam-and-leaf options
* @param {(Array|TypedArray)} [options.x] - first input data
* @param {(Array|TypedArray)} [options.y] - second input data
* @param {Function} [options.xValue] - x-value accessor
* @param {Function} [options.yValue] - y-value accessor
* @param {PositiveInteger} [options.leafDigits=1] - number of digits to display as leafs
* @returns {StemLeaf} chart instance
*/
function StemLeaf( options ) {
	var opts;
	var err;
	if ( !(this instanceof StemLeaf) ) {
		if ( arguments.length ) {
			return new StemLeaf( options );
		}
		return new StemLeaf();
	}
	if ( arguments.length ) {
		opts = options;
		err = validate( opts );
		if ( err ) {
			throw err;
		}
	} else {
		opts = {};
	}

	defineProperty( this, '_x', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': []
	});
	defineProperty( this, '_xValue', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': xValue
	});
	defineProperty( this, '_y', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': []
	});
	defineProperty( this, '_yValue', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': yValue
	});
	defineProperty( this, '_leafDigits', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': 1
	});

	if ( opts.xValue !== void 0 ) {
		this._xValue = opts.xValue;
	}
	if ( opts.yValue !== void 0 ) {
		this._yValue = opts.yValue;
	}
	if ( opts.x !== void 0 ) {
		this._x = formatData( opts.x, this._yValue );
	}
	if ( opts.y !== void 0 ) {
		this._y = formatData( opts.y, this._yValue );
	}
	if ( opts.leafDigits !== void 0 ) {
		this._leafDigits = opts.leafDigits;
	}
	return this;
}

/**
* `x`-value accessor.
*
* @name xValue
* @memberof StemLeaf.prototype
* @type {Function}
* @throws {TypeError} must be a function
*
* @example
* function xValue( d ) {
*     return d.y;
* }
* var chart = new StemLeaf();
* chart.xValue = xValue;
*
* @example
* function xValue( d ) {
*     return d.y;
* }
* var chart = new StemLeaf({
*     'xValue': xValue
* });
* var fcn = chart.xValue;
* var bool = ( fcn === xValue );
* // returns true
*/
defineProperty( StemLeaf.prototype, 'xValue', {
	'configurable': false,
	'enumerable': true,
	'set': setXValue,
	'get': getXValue
});

/**
* `y`-value accessor.
*
* @name yValue
* @memberof StemLeaf.prototype
* @type {Function}
* @throws {TypeError} must be a function
*
* @example
* function yValue( d ) {
*     return d.y;
* }
* var chart = new StemLeaf();
* chart.yValue = yValue;
*
* @example
* function yValue( d ) {
*     return d.y;
* }
* var chart = new StemLeaf({
*     'yValue': yValue
* });
* var fcn = chart.yValue;
* var bool = ( fcn === yValue );
* // returns true
*/
defineProperty( StemLeaf.prototype, 'yValue', {
	'configurable': false,
	'enumerable': true,
	'set': setYValue,
	'get': getYValue
});

/**
* First stem-and-leaf data.
*
* @name x
* @memberof StemLeaf.prototype
* @type {(Array|TypedArray)}
* @throws {TypeError} must be an array or typed array
*
* @example
* var chart = new StemLeaf();
* chart.x = [ 1.0, 0.0, 8.0, 2.0, 5.0 ];
*
* @example
* var x = [ 1.0, 0.0, 9.0, 2.0, 5.0 ];
* var chart = new StemLeaf({
*     'x': x
* });
* var d = chart.x;
* // returns [...]
*/
defineProperty( StemLeaf.prototype, 'x', {
	'configurable': false,
	'enumerable': true,
	'set': setX,
	'get': getX
});

/**
* Second stem-and-leaf data.
*
* @name y
* @memberof StemLeaf.prototype
* @type {(Array|TypedArray)}
* @throws {TypeError} must be an array or typed array
*
* @example
* var chart = new StemLeaf();
* chart.y = [ 1.0, 0.0, 8.0, 2.0, 5.0 ];
*
* @example
* var y = [ 1.0, 0.0, 9.0, 2.0, 5.0 ];
* var chart = new StemLeaf({
*     'y': y
* });
* var d = chart.y;
* // returns [...]
*/
defineProperty( StemLeaf.prototype, 'y', {
	'configurable': false,
	'enumerable': true,
	'set': setY,
	'get': getY
});

/**
* Renders a stem-and-leaf plot.
*
* @memberof StemLeaf.prototype
* @function render
* @returns {string} rendered stem-and-leaf display
*/
StemLeaf.prototype.render = render;


// EXPORTS //

module.exports = StemLeaf;
