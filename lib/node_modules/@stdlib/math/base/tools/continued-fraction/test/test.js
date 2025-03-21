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
var proxyquire = require( 'proxyquire' );
var detectGeneratorSupport = require( '@stdlib/assert/has-generator-support' );
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var continuedFraction = require( './../lib/' );
var continuedFractionBasic = proxyquire( './../lib', {
	'detect-generator-support': function getFalse() { return false; }
});


// VARIABLES //

var hasGeneratorsSupport = detectGeneratorSupport();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof continuedFraction, 'function', 'main export is a function' );
	t.end();
});

// Run generator function tests if environment supports `function*()`...

if ( hasGeneratorsSupport ) {
	require( './es2015-generator' ); // eslint-disable-line stdlib/no-unassigned-require
}

tape( 'by default, the function evaluates the continued fraction without the leading b_0 term', function test( t ) {
	// Continued fraction for (e-1)^(-1):
	var expected = 0.5819767068693261;
	var actual = continuedFraction( generator() );

	t.ok( abs( actual - expected ) < EPS, 'returned result is within tolerance. actual: ' + actual + '; expected: ' + expected + '.' );
	t.end();

	function generator() {
		var i = 0;
		return next;

		function next() {
			i += 1;
			return [ i, i ];
		}
	}
});

tape( 'by default, the function evaluates the continued fraction without the leading b_0 term (when generators are not supported)', function test( t ) {
	// Continued fraction for (e-1)^(-1):
	var expected = 0.5819767068693261;
	var actual = continuedFractionBasic( generator() );

	t.ok( abs( actual - expected ) < EPS, 'returned result is within tolerance. actual: ' + actual + '; expected: ' + expected + '.' );
	t.end();

	function generator() {
		var i = 0;
		return next;

		function next() {
			i += 1;
			return [ i, i ];
		}
	}
});

tape( 'if keep option is true, the function evaluates the continued fraction with the leading b_0 term', function test( t ) {
	var expected = 0.6977746579640078;
	var actual = continuedFraction( generator1(), {
		'keep': true
	});

	t.ok( abs( actual - expected ) < EPS, 'returned result is within tolerance. actual: ' + actual + '; expected: ' + expected + '.' );

	actual = continuedFraction( generator2(), {
		'keep': true
	});
	expected = 1.525135276160983;

	t.ok( abs( actual - expected ) < 1e-14, 'returned result is within tolerance. actual: ' + actual + '; expected: ' + expected + '.' );
	t.end();

	// Continued fraction for (I_1(2))/(I_0(2)), see http://mathworld.wolfram.com/ContinuedFraction.html:
	function generator1() {
		var b = -1;
		return next;

		function next() {
			b += 1;
			return [ 1, b ];
		}
	}
	// Continued fraction for sqrt(2/(epi))[erfc(2^(-1/2))]^(-1), see http://mathworld.wolfram.com/ContinuedFraction.html:
	function generator2() {
		var a = -1;
		return next;

		function next() {
			a += 1;
			return [ a, 1 ];
		}
	}
});

tape( 'if keep option is true, the function evaluates the continued fraction with the leading b_0 term (when generators are not supported)', function test( t ) {
	var expected = 0.6977746579640078;
	var actual = continuedFractionBasic( generator1(), {
		'keep': true
	});

	t.ok( abs( actual - expected ) < EPS, 'returned result is within tolerance. actual: ' + actual + '; expected: ' + expected + '.' );

	actual = continuedFractionBasic( generator2(), {
		'keep': true
	});
	expected = 1.525135276160983;

	t.ok( abs( actual - expected ) < 1e-14, 'returned result is within tolerance. actual: ' + actual + '; expected: ' + expected + '.' );
	t.end();

	// Continued fraction for (I_1(2))/(I_0(2)), see http://mathworld.wolfram.com/ContinuedFraction.html:
	function generator1() {
		var b = -1;
		return next;

		function next() {
			b += 1;
			return [ 1, b ];
		}
	}
	// Continued fraction for sqrt(2/(epi))[erfc(2^(-1/2))]^(-1), see http://mathworld.wolfram.com/ContinuedFraction.html:
	function generator2() {
		var a = -1;
		return next;

		function next() {
			a += 1;
			return [ a, 1 ];
		}
	}
});
