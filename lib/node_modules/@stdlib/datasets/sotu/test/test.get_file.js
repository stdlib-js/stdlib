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
var isObject = require( '@stdlib/assert/is-plain-object' );
var getFile = require( './../lib/get_file.js' );


// MAIN //

proxyquire.noPreserveCache();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof getFile, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an object', function test( t ) {
	t.equal( isObject( getFile( 0 ) ), true, 'returns an object' );
	t.end();
});

tape( 'if file data does not exist in the database, the data is synchronously loaded (non-browser environment)', function test( t ) {
	var getFile;
	var data;
	var file;
	var db;

	db = new Array( 10 );
	data = {
		'beep': 'boop'
	};

	getFile = proxyquire( './../lib/get_file.js', {
		'./db.js': db,
		'./load_json.js': load
	});
	t.equal( db[ 5 ], void 0, 'db[5] has empty value' );

	file = getFile( 5 );
	t.deepEqual( file, data, 'returns file data' );
	t.notEqual( file, data, 'returns copy' );
	t.deepEqual( file, db[ 5 ], 'caches the returned data' );

	t.end();

	function load() {
		return data;
	}
});

tape( 'if data has been previously loaded, the function returns a value from a cache', function test( t ) {
	var getFile;
	var data;
	var file;
	var db;
	var i;

	db = new Array( 10 );
	data = {
		'beep': 'boop'
	};

	getFile = proxyquire( './../lib/get_file.js', {
		'./db.js': db,
		'./load_json.js': load
	});
	t.equal( db[ 5 ], void 0, 'db[5] has empty value' );

	for ( i = 0; i < 10; i++ ) {
		file = getFile( 5 );
		t.deepEqual( file, data, 'returns file data' );
		t.deepEqual( db[ 5 ], data, 'data stored in database cache' );
	}
	t.end();

	function load() {
		return data;
	}
});
