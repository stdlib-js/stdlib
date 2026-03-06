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

var bench = createHarness( onFinish );
bench.createStream().pipe( logStream() );

function onFinish() {
	bench.close();
}

var opts = {
	'iterations': 1,
	'repeats': 1
};

bench( 'assertions', opts, function benchmark( b ) {
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		b.comment( 'This is a comment.' );

		b.skip( false, 'This is skipped.' );
		b.skip( true, 'This is skipped.' );

		b.todo( false, 'This is a todo.' );
		b.todo( true, 'This is a todo.' );

		b.fail( 'This is a failing assertion.' );
		b.pass( 'This is a passing assertion.' );

		b.ok( true, 'This asserts a value is truthy.' );
		b.ok( false, 'This asserts a value is truthy.' );

		b.notOk( false, 'This asserts a value is falsy.' );
		b.notOk( true, 'This asserts a value is falsy.' );

		b.equal( 3.14, 3.14, 'This asserts two values are strictly equal.' );
		b.equal( 1.0, 2.0, 'This asserts two values are strictly equal.' );

		b.notEqual( 1.0, 2.0, 'This asserts two values are not equal.' );
		b.notEqual( 2.0, 2.0, 'This asserts two values are not equal.' );

		b.deepEqual( [ 1, 2, 3 ], [ 1, 2, 3 ], 'This asserts two values are deeply equal.' );
		b.deepEqual( [ 1, 2, 3 ], [ 1, 2, 4 ], 'This asserts two values are deeply equal.' );

		b.notDeepEqual( [ 1, 2, 3 ], [ 1, 2, 4 ], 'This asserts two values are not deeply equal.' );
		b.notDeepEqual( [ 1, 2, 3 ], [ 1, 2, 3 ], 'This asserts two values are not deeply equal.' );
	}
	b.toc();
	b.end();
});
