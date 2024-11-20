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

/* eslint-disable no-restricted-syntax, node/no-unsupported-features/es-syntax */

// MODULES //

var tape = require( 'tape' );
var isGeneratorObject = require( './../../lib' );


// FUNCTIONS //

var GeneratorFunction = Object.getPrototypeOf( function* gen() {} ).constructor;


// FUNCTIONS //

function* generateID() {
	var idx = 0;
	while ( idx < idx+1 ) {
		yield idx;
		idx += 1;
	}
}


// TESTS //

tape( 'the function returns `true` if provided a generator object', function test( t ) {
	var gen = generateID();
	t.equal( isGeneratorObject( gen ), true, 'returns true' );

	gen = new GeneratorFunction( 'idx', 'yield idx' )();
	t.equal( isGeneratorObject( gen ), true, 'returns true' );
	t.end();
});
