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

/* eslint-disable array-element-newline */

'use strict';

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var normal = require( '@stdlib/random/base/normal' ).factory;
var ndarray = require( '@stdlib/ndarray/ctor' );
var Float64Array = require( '@stdlib/array/float64' );
var Int8Array = require( '@stdlib/array/int8' );
var plot = require( '@stdlib/plot' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var incrkmeans = require( './../lib' );

var clusters;
var results;
var totals;
var colors;
var randn;
var opts;
var acc;
var plt;
var FLG;
var cx;
var cy;
var N;
var k;
var c;
var v;
var m;
var p;
var r;
var X;
var Y;
var x;
var y;
var i;

// Specify whether to generate a plot:
FLG = false;

// Define the number of data points to simulate:
N = 1e4;

// Define the number of clusters:
k = 5;

// Define cluster properties:
clusters = new Float64Array([
	0.0, 1.0, 0.0, 1.0, // meanX, stdevX, meanY, stdevY
	-5.0, 1.0, 5.0, 1.0,
	5.0, 1.0, 5.0, 1.0,
	5.0, 1.0, -5.0, 1.0,
	-5.0, 1.0, -5.0, 1.0
]);
clusters = ndarray( 'float64', clusters, [ k, 4 ], [ 4, 1 ], 0, 'row-major' );

// Define accumulator options:
opts = {
	'metric': 'euclidean',
	'init': [ 'kmeans++', 100 ]
};

// Initialize a 2-dimensional k-means accumulator:
acc = incrkmeans( k, 2, opts );

// Create PRNGs for generating pseudorandom numbers drawn from 2-d uncorrelated normal distributions...
randn = ndarray( 'generic', new Array( k*2 ), [ k, 2 ], [ 2, 1 ], 0, 'row-major' );
for ( i = 0; i < k; i++ ) {
	randn.set( i, 0, normal( clusters.get( i, 0 ), clusters.get( i, 1 ) ) );
	randn.set( i, 1, normal( clusters.get( i, 2 ), clusters.get( i, 3 ) ) );
}

// Create a vector for storing simulated data:
v = ndarray( 'float64', new Float64Array( 2 ), [ 2 ], [ 1 ], 0, 'row-major' );

// Wrap the vector in a matrix for generating cluster predictions:
m = ndarray( 'float64', v.data, [ 1, 2 ], [ 2, 1 ], 0, 'row-major' );

// Create a vector for storing cluster predictions:
p = ndarray( 'int8', new Int8Array( 1 ), [ 1 ], [ 1 ], 0, 'row-major' );

// Simulate data points and incrementally perform k-means clustering...
totals = [ 0, 0, 0, 0, 0 ];
X = [];
Y = [];
for ( i = 0; i < k; i++ ) {
	X.push( [] );
	Y.push( [] );
}
for ( i = 0; i < N; i++ ) {
	// Pick a random cluster from which to sample:
	c = discreteUniform( 0, k-1 );
	totals[ c ] += 1;

	// Generate a random cluster data point:
	x = randn.get( c, 0 )();
	v.set( 0, x );
	X[ c ].push( x );

	y = randn.get( c, 1 )();
	v.set( 1, y );
	Y[ c ].push( y );

	// Generate a cluster prediction:
	r = acc.predict( p, m );
	if ( r ) {
		console.log( 'Data point: (%d, %d). Prediction: %d.', x.toFixed( 3 ), y.toFixed( 3 ), r.get( 0 )+1 );
	}
	// Update the accumulator:
	results = acc( v );
}

// Print cluster results:
results = acc();
if ( results ) {
	console.log( '' );
	for ( i = 0; i < k; i++ ) {
		console.log( 'Cluster %d', i+1 );
		console.log( '  centroid: (%d, %d)', results.centroids.get( i, 0 ), results.centroids.get( i, 1 ) );
		console.log( '  size: %d', results.stats.get( i, 0 ) );
	}
	console.log( '' );
}

console.log( '' );
console.log( 'True cluster distribution: %s', totals.join( ', ' ) );
console.log( '' );

// Generate a plot...
if ( FLG ) {
	// Extract the centroid locations:
	cx = new Float64Array( k );
	cy = new Float64Array( k );
	for ( i = 0; i < k; i++ ) {
		cx[ i ] = results.centroids.get( i, 0 );
		cy[ i ] = results.centroids.get( i, 1 );
	}

	// Append the centroids to our plot data:
	X.push( cx );
	Y.push( cy );

	// Define plot options:
	opts = {
		'title': 'k-means Clustering',
		'xLabel': 'x',
		'yLabel': 'y',
		'xMin': -10.0,
		'xMax': 10.0,
		'yMin': -10.0,
		'yMax': 10.0,
		'lineStyle': [ 'none' ],
		'symbols': [ 'closed-circle' ],
		'symbolsOpacity': [],
		'xRug': false,
		'yRug': false
	};
	for ( i = 0; i < k; i++ ) {
		opts.symbolsOpacity.push( 0.1 );
	}
	opts.symbolsOpacity.push( 1.0 );

	// Create a new plot instance:
	plt = plot( X, Y, opts );

	// Ensure that the centroids are black:
	colors = plt.colors;
	if ( colors.length >= k+1 ) {
		colors[ k ] = '#000000';
	}
	plt.colors = colors;

	// View the plot:
	plt.view( ( IS_BROWSER ) ? 'none' : 'window' );
}
