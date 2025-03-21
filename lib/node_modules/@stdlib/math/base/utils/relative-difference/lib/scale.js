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

var maxabs = require( './maxabs.js' );
var max = require( './max.js' );
var minabs = require( './minabs.js' );
var min = require( './min.js' );
var meanabs = require( './meanabs.js' );
var mean = require( './mean.js' );
var x = require( './x.js' );
var y = require( './y.js' );


// MAIN //

var SCALES = {
	'max-abs': maxabs,
	'max': max,
	'min-abs': minabs,
	'min': min,
	'mean-abs': meanabs,
	'mean': mean,
	'x': x,
	'y': y
};


// EXPORTS //

module.exports = SCALES;
