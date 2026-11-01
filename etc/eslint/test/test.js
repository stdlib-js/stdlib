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

// These are configuration integration tests, not tests of a module export:
/* eslint-disable stdlib/first-unit-test */

'use strict';

// MODULES //

var join = require( 'path' ).join;
var tape = require( 'tape' );
var ESLint = require( 'eslint' ).ESLint;
var readFile = require( '@stdlib/fs/read-file' ).sync;
var rootDir = require( '@stdlib/_tools/utils/root-dir' );


// VARIABLES //

var YAML = readFile( join( __dirname, '../../../lib/node_modules/@stdlib/_tools/eslint/rules/yaml-license-header/test/fixtures/valid.yml' ), 'utf8' );
var eslint = new ESLint({
	'cwd': rootDir()
});


// FUNCTIONS //

/**
* Checks a document against the repository ESLint configuration.
*
* @private
* @param {Object} t - test object
* @param {string} code - document
* @param {string} filePath - document path
* @param {number} expected - expected number of errors
*/
function check( t, code, filePath, expected ) {
	eslint.lintText( code, {
		'filePath': filePath
	}).then( onResults, onError );

	/**
	* Checks lint results.
	*
	* @private
	* @param {Array} results - lint results
	*/
	function onResults( results ) {
		t.strictEqual( results[ 0 ].errorCount, expected, 'expected number of errors' );
		t.end();
	}

	/**
	* Handles lint failures.
	*
	* @private
	* @param {Error} err - error
	*/
	function onError( err ) {
		t.fail( err.message );
		t.end();
	}
}


// TESTS //

tape( 'the JSON configuration accepts strict JSON', function test( t ) {
	check( t, '{\n  "foo": "bar"\n}\n', 'etc/example.json', 0 );
});

tape( 'the JSON configuration rejects unquoted keys', function test( t ) {
	check( t, '{\n  foo: 1\n}\n', 'etc/example.json', 1 );
});

tape( 'the JSON configuration rejects single-quoted strings', function test( t ) {
	check( t, "{\n  \"foo\": 'bar'\n}\n", 'etc/example.json', 1 );
});

tape( 'the JSON configuration rejects comments', function test( t ) {
	check( t, '{\n  // comment\n  "foo": 1\n}\n', 'etc/example.json', 1 );
});

tape( 'the JSON configuration rejects trailing commas', function test( t ) {
	check( t, '{\n  "foo": 1,\n}\n', 'etc/example.json', 1 );
});

tape( 'the JSON configuration rejects duplicate keys', function test( t ) {
	check( t, '{\n  "foo": 1,\n  "foo": 2\n}\n', 'etc/example.json', 1 );
});

tape( 'the CLI options configuration accepts tab indentation', function test( t ) {
	check( t, '{\n\t"options": []\n}\n', 'bin/cli_opts.json', 0 );
});

tape( 'the CLI options configuration rejects space indentation', function test( t ) {
	check( t, '{\n  "options": []\n}\n', 'bin/cli_opts.json', 1 );
});

tape( 'the package configuration enforces root key ordering', function test( t ) {
	check( t, '{\n  "version": "1.0.0",\n  "name": "example"\n}\n', 'package.json', 1 );
});

tape( 'the workflow configuration accepts empty event mappings', function test( t ) {
	check( t, YAML + '\non:\n  workflow_dispatch:\n', '.github/workflows/example.yml', 0 );
});

tape( 'the YAML configuration rejects empty mappings outside workflows', function test( t ) {
	check( t, YAML + '\nfoo:\n', '.github/example.yml', 1 );
});
