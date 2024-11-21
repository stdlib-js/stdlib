/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var Plot = require( '@stdlib/plot/ctor' );
var dataset = require( './../lib' );


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var data;
	var plt;
	var N;
	var x;
	var i;

	// Load the dataset:
	data = dataset();

	// Generate x-axis data:
	N = data.black.length;
	x = [];
	for ( i = 0; i < N; i++ ) {
		x.push( 1915+i );
	}

	// Create a new plot:
	plt = new Plot( [ x, x ], [ data.black, data.white ] );
	plt.width = 560;

	plt.title = 'Infant Mortality Rate, Black vs White (1915-2013)';
	plt.xLabel = 'Year';
	plt.yLabel = 'Infant Mortality Rate';

	plt.xTickFormat = 'd';

	plt.view( 'window' );
}

main();
