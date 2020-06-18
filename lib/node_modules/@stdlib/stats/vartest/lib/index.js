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

/**
* Compute a two-sample F-test for equal variances.
*
* @module @stdlib/stats/vartest
*
* @example
* var vartest = require( '@stdlib/stats/vartest' );
*
* var x = [ 610, 610, 550, 590, 565, 570 ];
* var y = [ 560, 550, 580, 550, 560, 590, 550, 590 ];
*
* var out = vartest( x, y );
*/

// MODULES //

var vartest = require( './main.js' );


// EXPORTS //

module.exports = vartest;
