/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var bundle = require( './../' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof bundle, 'object', 'main export is an object' );
	t.end();
});

tape( 'the object exposes a "tree" namespace', function test( t ) {
	t.equal( typeof bundle.math.base.special, 'object', 'has member' );
	t.equal( bundle.math.base.special.sin( 3.14 ), 0.0015926529164868282, 'returns expected value' );
	t.end();
});
