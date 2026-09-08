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

/* eslint-disable stdlib/first-unit-test */

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var env = require( 'process' ).env;
var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
var contains = require( '@stdlib/assert/contains' );
var existsSync = require( '@stdlib/fs/exists' ).sync;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var manifest = require( '@stdlib/utils/library-manifest' );


// VARIABLES //

var root = resolve( __dirname, '..', '..', '..', 'lib', 'node_modules' );
var dir = resolve( root, '@stdlib', 'blas', 'ext', 'base', 'dsumpw' );
var fpath = resolve( dir, 'manifest.json' );
var mopts = {
	'basedir': dir,
	'paths': 'posix'
};
var opts = {
	'skip': IS_BROWSER
};
var runtimeOpts = {
	'skip': IS_BROWSER || !env.STDLIB_TEST_HIGHWAY_RUNTIME
};


// TESTS //

tape( 'Highway build integration', function test( t ) {
	t.ok( true, __filename );
	t.end();
});

tape( 'the default native manifest selects the C implementation', opts, function test( t ) {
	var conf = manifest( fpath, {}, mopts );
	t.strictEqual( contains( conf.src, 'src/main.c' ), true, 'includes the C source' );
	t.strictEqual( contains( conf.src, 'src/simd/dsumpw_highway.cpp' ), false, 'does not include the Highway source' );
	t.deepEqual( conf.defines, [], 'does not enable a SIMD backend' );
	t.deepEqual( conf, manifest( fpath, {
		'simd': ''
	}, mopts ), 'an empty backend preserves the default configuration' );
	t.end();
});

tape( 'the Highway native manifest selects the SIMD implementation', opts, function test( t ) {
	var conf = manifest( fpath, {
		'simd': 'highway'
	}, mopts );
	t.strictEqual( contains( conf.src, 'src/main.c' ), true, 'includes the C source' );
	t.strictEqual( contains( conf.src, 'src/simd/dsumpw_highway.cpp' ), true, 'includes the Highway source' );
	t.deepEqual( conf.defines, [ 'STDLIB_BLAS_EXT_BASE_DSUMPW_SIMD_HIGHWAY' ], 'enables the Highway implementation' );
	t.end();
});

tape( 'the native runtime exports its include directory and static library', runtimeOpts, function test( t ) {
	var conf = JSON.parse( readFileSync( resolve( env.STDLIB_TEST_HIGHWAY_RUNTIME, 'highway.json' ), {
		'encoding': 'utf8'
	}));
	t.deepEqual( conf.include, [ env.STDLIB_TEST_HIGHWAY_SOURCE ], 'exports the Highway include directory' );
	t.strictEqual( contains( conf.defines, 'HWY_STATIC_DEFINE' ), true, 'exports the static library definition' );
	t.strictEqual( existsSync( conf.libraries[ 0 ] ), true, 'exports an existing runtime library' );
	t.end();
});

tape( 'the native runtime exports detected platform definitions and link dependencies', runtimeOpts, function test( t ) {
	var cache;
	var conf;
	var lib;

	conf = JSON.parse( readFileSync( resolve( env.STDLIB_TEST_HIGHWAY_RUNTIME, 'highway.json' ), {
		'encoding': 'utf8'
	}));
	cache = readFileSync( resolve( env.STDLIB_TEST_HIGHWAY_RUNTIME, 'CMakeCache.txt' ), {
		'encoding': 'utf8'
	});
	t.strictEqual( contains( conf.defines, 'TOOLCHAIN_MISS_SYS_AUXV_H' ), !/^HAVE_SYS_AUXV_H:INTERNAL=1$/m.test( cache ), 'preserves the sys/auxv.h detection result' );
	t.strictEqual( contains( conf.defines, 'TOOLCHAIN_MISS_ASM_HWCAP_H' ), !/^HAVE_ASM_HWCAP_H:INTERNAL=1$/m.test( cache ), 'preserves the asm/hwcap.h detection result' );
	if ( IS_WINDOWS ) {
		lib = 'atomic.lib';
	} else {
		lib = '-latomic';
	}
	t.strictEqual( contains( conf.libraries, lib ), !/^ATOMICS_LOCK_FREE_INSTRUCTIONS:INTERNAL=1$/m.test( cache ), 'preserves the libatomic link dependency when needed' );
	t.end();
});
