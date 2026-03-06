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

/* eslint-disable array-element-newline */

'use strict';

// MODULES //

var tape = require( 'tape' );
var dtypes2signatures = require( '@stdlib/ndarray/base/dtypes2signatures' );
var setProps = require( './../lib' );


// VARIABLES //

var META = {
	'nargs': 7,
	'nin': 1,
	'nout': 1
};

var TYPES = [
	'float64', 'float64',
	'float32', 'float32',
	'generic', 'generic'
];


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof setProps, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function attaches a property for retrieving the number of arguments', function test( t ) {
	var obj = {};
	setProps( META, TYPES, obj, false );
	t.strictEqual( obj.nargs, META.nargs, 'returns expected value' );
	t.end();
});

tape( 'the function attaches a property for retrieving the number of arguments (ndarray)', function test( t ) {
	var obj = {};
	setProps( META, TYPES, obj, true );
	t.strictEqual( obj.nargs, META.nargs+META.nin+META.nout, 'returns expected value' );
	t.end();
});

tape( 'the function attaches a property for retrieving the number of input strided array arguments', function test( t ) {
	var obj = {};
	setProps( META, TYPES, obj, false );
	t.strictEqual( obj.nin, META.nin, 'returns expected value' );
	t.end();
});

tape( 'the function attaches a property for retrieving the number of input strided array arguments (ndarray)', function test( t ) {
	var obj = {};
	setProps( META, TYPES, obj, true );
	t.strictEqual( obj.nin, META.nin, 'returns expected value' );
	t.end();
});

tape( 'the function attaches a property for retrieving the number of output strided array arguments', function test( t ) {
	var obj = {};
	setProps( META, TYPES, obj, false );
	t.strictEqual( obj.nout, META.nout, 'returns expected value' );
	t.end();
});

tape( 'the function attaches a property for retrieving the number of output strided array arguments (ndarray)', function test( t ) {
	var obj = {};
	setProps( META, TYPES, obj, true );
	t.strictEqual( obj.nout, META.nout, 'returns expected value' );
	t.end();
});

tape( 'the function attaches a property for retrieving the list of supported array data types', function test( t ) {
	var obj = {};
	setProps( META, TYPES, obj, false );
	t.deepEqual( obj.types, dtypes2signatures( TYPES, META.nin, META.nout ), 'returns expected value' );
	t.end();
});

tape( 'the function attaches a property for retrieving the list of supported array data types (ndarray)', function test( t ) {
	var obj = {};
	setProps( META, TYPES, obj, true );
	t.deepEqual( obj.types, dtypes2signatures( TYPES, META.nin, META.nout ), 'returns expected value' );
	t.end();
});
