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
* Create a 2-dimensional plot.
*
* @module @stdlib/plot/ctor
*
* @example
* var Plot = require( '@stdlib/plot/ctor' );
*
* var x = [ 1, 2, 3 ];
* var y = [ 1, 0, 1 ];
*
* var p = new Plot( [ x ], [ y ] );
*
* @example
* var Plot = require( '@stdlib/plot/ctor' );
*
* var opts = {
*     'width': 600,
*     'height': 400
* };
* var myPlot = Plot.factory( opts );
*
* var h1 = myPlot( [[1,2,3]], [[1,0,1]] );
* var h2 = myPlot( [[4,5,6]], [[0,1,0]] );
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var Plot = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( Plot, 'factory', factory );


// EXPORTS //

module.exports = Plot;
