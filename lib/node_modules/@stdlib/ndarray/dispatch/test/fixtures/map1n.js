/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var ind2sub = require( '@stdlib/ndarray/ind2sub' );
var numel = require( '@stdlib/ndarray/base/numel' );


// MAIN //

/**
* ndarray function which maps the return value of a callback to `N` arrays.
*
* @private
* @param {Array<ndarrayLike>} arrays - ndarrays
* @param {Function} fcn - callback
*/
function map1N( arrays, fcn ) {
	var opts;
	var ords;
	var args;
	var sub;
	var sh;
	var M;
	var N;
	var v;
	var i;
	var j;

	sh = arrays[ 0 ].shape;
	N = numel( sh );
	M = arrays.length;
	ords = [];
	args = [];
	for ( j = 0; j < M; j++ ) {
		ords.push( arrays[ j ].order );
		args.push( 0 );
	}
	opts = {
		'order': ''
	};
	for ( i = 0; i < N; i++ ) {
		v = fcn();
		for ( j = 0; j < M; j++ ) {
			opts.order = ords[ j ];
			sub = ind2sub( sh, i, opts );
			sub.push( v );
			arrays[ j ].set.apply( arrays[ j ], sub );
		}
	}
}


// EXPORTS //

module.exports = map1N;
