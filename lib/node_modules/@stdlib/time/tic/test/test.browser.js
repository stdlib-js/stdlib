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
var isNonNegativeIntegerArray = require( '@stdlib/assert/is-nonnegative-integer-array' ).primitives;
var now = require( './../lib/polyfill.js' );
var tic = require( './../lib/browser.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof tic, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function does not take any arguments', function test( t ) {
	t.strictEqual( tic.length, 0, 'number of parameters is equal to zero' );
	t.end();
});

tape( 'the function returns a nonnegative integer array', function test( t ) {
	t.strictEqual( isNonNegativeIntegerArray( tic() ), true, 'returns a nonnegative integer array' );
	t.end();
});

tape( 'if available, the module uses the `performance` API', function test( t ) {
	var tic = proxyquire( './../lib/browser.js', {
		'@stdlib/utils/global': getGlobal
	});
	t.strictEqual( tic.length, 0, 'number of parameters is equal to zero' );
	t.strictEqual( isNonNegativeIntegerArray( tic() ), true, 'returns a nonnegative integer array' );
	t.end();

	function getGlobal() {
		return {
			'performance': {
				'now': now
			}
		};
	}
});

tape( 'the module accommodates browser environments lacking a `performance` API', function test( t ) {
	var tic = proxyquire( './../lib/browser.js', {
		'@stdlib/utils/global': getGlobal
	});
	t.strictEqual( tic.length, 0, 'number of parameters is equal to zero' );
	t.strictEqual( isNonNegativeIntegerArray( tic() ), true, 'returns a nonnegative integer array' );
	t.end();

	function getGlobal() {
		return {};
	}
});

tape( 'the module accommodates older Firefox environments', function test( t ) {
	var tic = proxyquire( './../lib/browser.js', {
		'@stdlib/utils/global': getGlobal
	});
	t.strictEqual( tic.length, 0, 'number of parameters is equal to zero' );
	t.strictEqual( isNonNegativeIntegerArray( tic() ), true, 'returns a nonnegative integer array' );
	t.end();

	function getGlobal() {
		return {
			'performance': {
				'mozNow': now
			}
		};
	}
});

tape( 'the module accommodates older IE environments', function test( t ) {
	var tic = proxyquire( './../lib/browser.js', {
		'@stdlib/utils/global': getGlobal
	});
	t.strictEqual( tic.length, 0, 'number of parameters is equal to zero' );
	t.strictEqual( isNonNegativeIntegerArray( tic() ), true, 'returns a nonnegative integer array' );
	t.end();

	function getGlobal() {
		return {
			'performance': {
				'msNow': now
			}
		};
	}
});

tape( 'the module accommodates older Opera environments', function test( t ) {
	var tic = proxyquire( './../lib/browser.js', {
		'@stdlib/utils/global': getGlobal
	});
	t.strictEqual( tic.length, 0, 'number of parameters is equal to zero' );
	t.strictEqual( isNonNegativeIntegerArray( tic() ), true, 'returns a nonnegative integer array' );
	t.end();

	function getGlobal() {
		return {
			'performance': {
				'oNow': now
			}
		};
	}
});

tape( 'the module accommodates older Webkit environments', function test( t ) {
	var tic = proxyquire( './../lib/browser.js', {
		'@stdlib/utils/global': getGlobal
	});
	t.strictEqual( tic.length, 0, 'number of parameters is equal to zero' );
	t.strictEqual( isNonNegativeIntegerArray( tic() ), true, 'returns a nonnegative integer array' );
	t.end();

	function getGlobal() {
		return {
			'performance': {
				'webkitNow': now
			}
		};
	}
});
