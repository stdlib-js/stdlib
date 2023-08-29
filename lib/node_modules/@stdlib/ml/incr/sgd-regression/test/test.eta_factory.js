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
var factory = require( './../lib/eta_factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if supplied an unknown `learningRate`', function test( t ) {
	t.throws( badValue, Error, 'throws an error when provided unknown learning rate' );
	t.end();

	function badValue() {
		factory( 'scaling', 0.0, 0.0 );
	}
});

tape( 'the function returns a function', function test( t ) {
	var getEta = factory( 'basic', 0.02, 0.0 );
	t.equal( typeof getEta, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns eta0 when type is equal to `constant`', function test( t ) {
	var getEta;
	var eta0;
	var eta;

	eta0 = 0.05;
	getEta = factory( 'constant', eta0, 0.0 );

	eta = getEta();
	t.equal( eta, eta0, 'returns eta0' );

	eta = getEta();
	t.equal( eta, eta0, 'returns eta0' );

	t.end();
});

tape( 'the function returns 1 over lambda times iteration number when type is equal to `pegasos`', function test( t ) {
	var getEta;
	var lambda;
	var eta0;
	var eta;
	var it;

	it = 1;
	eta0 = 0;
	lambda = 1e-4;
	getEta = factory( 'pegasos', eta0, lambda );

	eta = getEta();
	t.equal( eta, 1.0 / ( lambda * it ), 'returns correct value' );
	it += 1;

	eta = getEta();
	t.equal( eta, 1.0 / ( lambda * it ), 'returns correct value' );
	it += 1;

	eta = getEta();
	t.equal( eta, 1.0 / ( lambda * it ), 'returns correct value' );
	it += 1;

	t.end();
});

tape( 'the function returns 1000 / ( 1000 + iteration ) when type is equal to `basic`', function test( t ) {
	var getEta;
	var lambda;
	var eta0;
	var eta;
	var it;

	it = 1;
	eta0 = 0;
	lambda = 1e-4;
	getEta = factory( 'basic', eta0, lambda );

	eta = getEta();
	t.equal( eta, 1000 / ( 1000 + it ), 'returns correct value' );
	it += 1;

	eta = getEta();
	t.equal( eta, 1000 / ( 1000 + it ), 'returns correct value' );
	it += 1;

	eta = getEta();
	t.equal( eta, 1000 / ( 1000 + it ), 'returns correct value' );
	it += 1;

	t.end();
});
