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
var tmpdir = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof tmpdir, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a string', function test( t ) {
	t.equal( typeof tmpdir(), 'string', 'returns a string' );
	t.end();
});

tape( 'the function checks the `TEMP` environment variable on Windows platforms', function test( t ) {
	var tmpdir;
	var dir;

	tmpdir = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-windows': true,
		'@stdlib/process/env': {
			'TEMP': 'C:\\foo\\bar\\baz',
			'@noCallThru': true
		}
	});

	dir = tmpdir();
	t.strictEqual( dir, 'C:\\foo\\bar\\baz', 'returns directory' );

	t.end();
});

tape( 'the function checks the `TMP` environment variable on Windows platforms', function test( t ) {
	var tmpdir;
	var dir;

	tmpdir = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-windows': true,
		'@stdlib/process/env': {
			'TMP': 'C:\\foo\\bar\\baz',
			'@noCallThru': true
		}
	});

	dir = tmpdir();
	t.strictEqual( dir, 'C:\\foo\\bar\\baz', 'returns directory' );

	t.end();
});

tape( 'the function checks the `SystemRoot` environment variable on Windows platforms', function test( t ) {
	var tmpdir;
	var dir;

	tmpdir = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-windows': true,
		'@stdlib/process/env': {
			'SystemRoot': 'C:\\foo\\bar\\baz',
			'@noCallThru': true
		}
	});

	dir = tmpdir();
	t.strictEqual( dir, 'C:\\foo\\bar\\baz\\temp', 'returns directory' );

	t.end();
});

tape( 'the function checks the `windir` environment variable on Windows platforms', function test( t ) {
	var tmpdir;
	var dir;

	tmpdir = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-windows': true,
		'@stdlib/process/env': {
			'windir': 'C:\\foo\\bar\\baz',
			'@noCallThru': true
		}
	});

	dir = tmpdir();
	t.strictEqual( dir, 'C:\\foo\\bar\\baz\\temp', 'returns directory' );

	t.end();
});

tape( 'the function returns `\\temp` as the fallback directory for temporary files on Windows platforms', function test( t ) {
	var tmpdir;
	var dir;

	tmpdir = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-windows': true,
		'@stdlib/process/env': {
			'@noCallThru': true
		}
	});

	dir = tmpdir();
	t.strictEqual( dir, '\\temp', 'returns directory' );

	t.end();
});

tape( 'the function checks the `TMPDIR` environment variable on POSIX platforms', function test( t ) {
	var tmpdir;
	var dir;

	tmpdir = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-windows': false,
		'@stdlib/process/env': {
			'TMPDIR': '/foo/bar/baz',
			'@noCallThru': true
		}
	});

	dir = tmpdir();
	t.strictEqual( dir, '/foo/bar/baz', 'returns directory' );

	t.end();
});

tape( 'the function checks the `TMP` environment variable on POSIX platforms', function test( t ) {
	var tmpdir;
	var dir;

	tmpdir = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-windows': false,
		'@stdlib/process/env': {
			'TMP': '/foo/bar/baz',
			'@noCallThru': true
		}
	});

	dir = tmpdir();
	t.strictEqual( dir, '/foo/bar/baz', 'returns directory' );

	t.end();
});

tape( 'the function checks the `TEMP` environment variable on POSIX platforms', function test( t ) {
	var tmpdir;
	var dir;

	tmpdir = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-windows': false,
		'@stdlib/process/env': {
			'TEMP': '/foo/bar/baz',
			'@noCallThru': true
		}
	});

	dir = tmpdir();
	t.strictEqual( dir, '/foo/bar/baz', 'returns directory' );

	t.end();
});

tape( 'the function returns `/tmp` as the fallback directory for temporary files on POSIX platforms', function test( t ) {
	var tmpdir;
	var dir;

	tmpdir = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-windows': false,
		'@stdlib/process/env': {
			'@noCallThru': true
		}
	});

	dir = tmpdir();
	t.strictEqual( dir, '/tmp', 'returns directory' );

	t.end();
});

tape( 'the function removes trailing slashes on Windows paths (non-device)', function test( t ) {
	var tmpdir;
	var dir;
	var env;

	env = {
		'TEMP': 'C:\\foo\\bar\\baz\\',
		'@noCallThru': true
	};

	tmpdir = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-windows': true,
		'@stdlib/process/env': env
	});

	dir = tmpdir();
	t.strictEqual( dir, 'C:\\foo\\bar\\baz', 'returns directory' );

	env.TEMP = 'C:\\';

	dir = tmpdir();
	t.strictEqual( dir, 'C:\\', 'returns directory' );

	t.end();
});

tape( 'the function removes trailing slashes on POSIX paths', function test( t ) {
	var tmpdir;
	var dir;

	tmpdir = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-windows': false,
		'@stdlib/process/env': {
			'TEMP': '/foo/bar/baz/',
			'@noCallThru': true
		}
	});

	dir = tmpdir();
	t.strictEqual( dir, '/foo/bar/baz', 'returns directory' );

	t.end();
});
