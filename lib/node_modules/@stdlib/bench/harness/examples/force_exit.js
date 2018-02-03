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

var logStream = require( './../lib/log' );
var createHarness = require( './../lib' ).createHarness;

var bench = createHarness();
bench.createStream().pipe( logStream() );

var opts = {
	'iterations': 5
};

bench( 'force exit', opts, function benchmark( b ) {
	var i = 0;
	b.tic();
	next();
	function next() {
		i += 1;
		if ( i <= b.iterations ) {
			b.ok( true, 'should be truthy' );
			return setTimeout( next, 10 );
		}
		b.toc();
		b.end();
	}
});

// Forcefully exit:
setTimeout( onTimeout, 20 );

function onTimeout() {
	bench.exit();
}
