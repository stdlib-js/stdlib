/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

/* eslint-disable stdlib/first-unit-test -- configuration integration tests have no main export */

'use strict';

// MODULES //

var path = require( 'path' );
var tape = require( 'tape' );
var ESLint = require( 'eslint' ).ESLint;
var remark = require( 'remark' );
var factory = require( '@stdlib/_tools/remark/plugins/remark-lint-eslint' ).factory;


// VARIABLES //

var ROOT_DIR = path.resolve( __dirname, '..', '..', '..' );
var PACKAGE_DIR = path.join( ROOT_DIR, 'lib', 'node_modules', '@stdlib', 'math', 'base', 'special', 'abs' );


// TESTS //

tape( 'ESLint discovers the root configuration from a package directory', function test( t ) {
	var eslint = new ESLint({
		'cwd': PACKAGE_DIR
	});

	eslint.calculateConfigForFile( path.join( PACKAGE_DIR, 'lib', 'main.js' ) ).then( onConfig, onError );

	function onConfig( config ) {
		t.strictEqual( config.languageOptions.sourceType, 'script', 'uses script semantics' );
		t.strictEqual( config.rules[ 'stdlib/jsdoc-doctest' ][ 0 ], 2, 'retains source doctests' );
		t.strictEqual( config.settings.jsdoc.tagNamePreference[ 'class' ], 'constructor', 'preserves constructor annotations' );
		t.end();
	}

	function onError( err ) {
		t.fail( err.message );
		t.end();
	}
});

tape( 'benchmark linting does not execute ordinary or nested benchmark files', function test( t ) {
	var eslint = new ESLint({
		'cwd': ROOT_DIR
	});
	var files = [
		path.join( PACKAGE_DIR, 'benchmark', 'eslint-probe.js' ),
		path.join( PACKAGE_DIR, 'benchmark', 'nested', 'eslint-probe.js' )
	];
	var code = 'process.stdlibESLintBenchmarkProbe = true;';

	delete process.stdlibESLintBenchmarkProbe;
	Promise.all( files.map( lint ) ).then( onResults, onError );

	function lint( file ) {
		return eslint.lintText( code, {
			'filePath': file
		});
	}

	function onResults() {
		t.strictEqual( process.stdlibESLintBenchmarkProbe, void 0, 'benchmark source was not evaluated' );
		delete process.stdlibESLintBenchmarkProbe;
		t.end();
	}

	function onError( err ) {
		delete process.stdlibESLintBenchmarkProbe;
		t.fail( err.message );
		t.end();
	}
});

tape( 'source linting retains executable doctests', function test( t ) {
	var eslint = new ESLint({
		'cwd': ROOT_DIR
	});
	var code = 'process.stdlibESLintSourceProbe = true;';

	delete process.stdlibESLintSourceProbe;
	eslint.lintText( code, {
		'filePath': path.join( PACKAGE_DIR, 'lib', 'eslint-probe.js' )
	}).then( onResults, onError );

	function onResults() {
		t.strictEqual( process.stdlibESLintSourceProbe, true, 'source doctest evaluator remains active' );
		delete process.stdlibESLintSourceProbe;
		t.end();
	}

	function onError( err ) {
		delete process.stdlibESLintSourceProbe;
		t.fail( err.message );
		t.end();
	}
});

tape( 'TypeScript configuration loads the migrated plugins and rules', function test( t ) {
	var eslint = new ESLint({
		'cwd': ROOT_DIR
	});

	eslint.calculateConfigForFile( path.join( PACKAGE_DIR, 'docs', 'types', 'test.ts' ) ).then( onConfig, onError );

	function onConfig( config ) {
		t.ok( config.plugins[ '@stylistic' ].rules.indent, 'loads unified stylistic rules' );
		t.ok( config.plugins[ 'import-x' ].rules.order, 'loads import rules with ESLint 10 support' );
		t.strictEqual( config.rules[ 'jsdoc/require-param' ][ 0 ], 0, 'preserves TypeScript test overrides' );
		t.end();
	}

	function onError( err ) {
		t.fail( err.message );
		t.end();
	}
});

tape( 'the Markdown configuration lints code blocks inside lib/node_modules', function test( t ) {
	var eslint = new ESLint({
		'cwd': ROOT_DIR,
		'overrideConfigFile': path.join( ROOT_DIR, 'etc', 'eslint', 'eslint.flat.config.markdown.js' )
	});

	eslint.lintText( 'var x = 1;\nconsole.log( x );', {
		'filePath': path.join( PACKAGE_DIR, 'README.md' )
	}).then( onResults, onError );

	function onResults( results ) {
		t.deepEqual( results[ 0 ].messages, [], 'code block has no lint messages' );
		t.end();
	}

	function onError( err ) {
		t.fail( err.message );
		t.end();
	}
});

tape( 'Markdown code blocks retain spacing before an initial section header', function test( t ) {
	var plugin;
	var input;
	var file;

	plugin = factory({
		'config': path.join( ROOT_DIR, 'etc', 'eslint', 'eslint.flat.config.markdown.js' )
	});
	input = [
		'## Usage',
		'',
		'```javascript',
		"var abs = require( '@stdlib/math/base/special/abs' );",
		'```',
		'',
		'```javascript',
		'// VARIABLES //',
		'',
		'var x = 1;',
		'```'
	].join( '\n' );
	file = remark().use( plugin ).processSync({
		'path': path.join( PACKAGE_DIR, 'README.md' ),
		'contents': input
	});
	t.deepEqual( file.messages, [], 'injected require preserves valid header spacing' );
	t.end();
});
