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

/* eslint-disable no-restricted-syntax */

'use strict';

var bench = require( './../lib' );

var opts = {
	'objectMode': true
};

var stream = bench.createStream( opts );
stream.on( 'data', onRow );

function onRow( row ) {
	console.log( JSON.stringify( row ) );
}

opts = {
	'iterations': 1,
	'repeats': 1
};

bench( 'beep', opts, function benchmark( b ) {
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		b.equal( 3.14, 3.14, 'should be equal' );
	}
	b.toc();
	b.end();
});
