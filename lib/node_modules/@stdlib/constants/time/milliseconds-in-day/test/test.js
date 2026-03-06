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

var tape = require( 'tape' );
var MILLISECONDS_IN_DAY = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof MILLISECONDS_IN_DAY, 'number', 'main export is a number' );
	t.end();
});

tape( 'the value equals 1000*60*60*24=86400000', function test( t ) {
	t.strictEqual( MILLISECONDS_IN_DAY, 1000*60*60*24, 'equals 1000*60*60*24=86400000' );
	t.end();
});
