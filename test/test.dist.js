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

var resolve = require( 'path' ).resolve;
var join = require( 'path' ).join;
var tape = require( 'tape' );


// VARIABLES //

var dirpath = resolve( __dirname, '..', 'dist' );


// TESTS //

tape( 'distributable files', function test( t ) {
	t.ok( true, __filename );
	t.end();
});

tape( 'project contains a distributable file containing datasets (minified)', function test( t ) {
	var bundle = require( join( dirpath, 'stdlib-datasets-tree.min.js' ) );
	t.equal( typeof bundle, 'object', 'main export is an object' );
	t.equal( typeof bundle.datasets.AFINN_111, 'function', 'is a function' );
	t.equal( typeof bundle.datasets.AFINN_111(), 'object', 'returns expected value' );
	t.end();
});

tape( 'project contains a distributable file exposing a "flat" namespace (unminified)', function test( t ) {
	var bundle = require( join( dirpath, 'stdlib-flat.js' ) );
	t.equal( typeof bundle, 'object', 'main export is an object' );
	t.equal( typeof bundle.base, 'object', 'has member' );
	t.equal( typeof bundle.base.sin( 3.14 ), 'number', 'returns expected value' );
	t.end();
});

tape( 'project contains a distributable file exposing a "flat" namespace (minified)', function test( t ) {
	var bundle = require( join( dirpath, 'stdlib-flat.min.js' ) );
	t.equal( typeof bundle, 'object', 'main export is an object' );
	t.equal( typeof bundle.base, 'object', 'has member' );
	t.equal( typeof bundle.base.sin( 3.14 ), 'number', 'returns expected value' );
	t.end();
});

tape( 'project contains a distributable file for REPL functionality (minified)', function test( t ) {
	var bundle = require( join( dirpath, 'stdlib-repl.min.js' ) );
	t.equal( typeof bundle, 'object', 'main export is an object' );
	t.equal( typeof bundle.repl, 'function', 'is a function' );
	t.end();
});

tape( 'project contains a distributable file exposing a "tree" namespace (unminified)', function test( t ) {
	var bundle = require( join( dirpath, 'stdlib-tree.js' ) );
	t.equal( typeof bundle, 'object', 'main export is an object' );
	t.equal( typeof bundle.math, 'object', 'has member' );
	t.equal( typeof bundle.math.base, 'object', 'has member' );
	t.equal( typeof bundle.math.base.special, 'object', 'has member' );
	t.equal( typeof bundle.math.base.special.sin( 3.14 ), 'number', 'returns expected value' );
	t.end();
});

tape( 'project contains a distributable file exposing a "tree" namespace (minified)', function test( t ) {
	var bundle = require( join( dirpath, 'stdlib-tree.min.js' ) );
	t.equal( typeof bundle, 'object', 'main export is an object' );
	t.equal( typeof bundle.math, 'object', 'has member' );
	t.equal( typeof bundle.math.base, 'object', 'has member' );
	t.equal( typeof bundle.math.base.special, 'object', 'has member' );
	t.equal( typeof bundle.math.base.special.sin( 3.14 ), 'number', 'returns expected value' );
	t.end();
});
