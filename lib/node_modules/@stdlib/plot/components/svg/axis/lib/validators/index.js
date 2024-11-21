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

var autoRender = require( './auto_render.js' );
var label = require( './label.js' );
var numTicks = require( './num_ticks.js' );
var orientation = require( './orientation.js' );
var scale = require( './scale.js' );
var tickFormat = require( './tick_format.js' );
var tickPadding = require( './tick_padding.js' );
var ticks = require( './ticks.js' );
var tickSize = require( './tick_size.js' );
var innerTickSize = require( './inner_tick_size.js' );
var outerTickSize = require( './outer_tick_size.js' );


// MAIN //

var validators = {
	'autoRender': autoRender,
	'label': label,
	'numTicks': numTicks,
	'orientation': orientation,
	'scale': scale,
	'tickFormat': tickFormat,
	'tickPadding': tickPadding,
	'ticks': ticks,
	'tickSize': tickSize,
	'innerTickSize': innerTickSize,
	'outerTickSize': outerTickSize
};


// EXPORTS //

module.exports = validators;
