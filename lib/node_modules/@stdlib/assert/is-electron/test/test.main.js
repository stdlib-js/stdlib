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
var ENV = require( '@stdlib/process/env' );
var isElectron = require( './../lib/main.js' );


// FIXTURES //

function Process() {
	this.type = 'browser';
	this.versions = {
		'electron': '1.0.0',
		'chrome': '42.1.34'
	};
	this.env = ENV;
	return this;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isElectron, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if runtime is Electron (browser/main)', function test( t ) {
	var isElectron;
	var proc;
	var bool;

	proc = new Process();
	proc.type = 'browser';

	isElectron = proxyquire( './../lib/main.js', {
		'@stdlib/utils/native-class': nativeClass,
		'./process.js': proc
	});

	bool = isElectron();
	t.strictEqual( bool, true, 'returns true' );

	t.end();

	function nativeClass() {
		return '[object process]';
	}
});

tape( 'the function returns `true` if runtime is Electron (renderer)', function test( t ) {
	var isElectron;
	var proc;
	var bool;

	proc = new Process();
	proc.type = 'renderer';

	isElectron = proxyquire( './../lib/main.js', {
		'@stdlib/utils/native-class': nativeClass,
		'./process.js': proc
	});

	bool = isElectron();
	t.strictEqual( bool, true, 'returns true' );

	t.end();

	function nativeClass() {
		return '[object process]';
	}
});

tape( 'the function returns `false` if runtime is not Electron (`process` variable has wrong class)', function test( t ) {
	var isElectron;
	var proc;
	var bool;

	function nativeClass() {
		return '[object beeeeeep]';
	}

	proc = new Process();
	proc.type = 'browser';

	isElectron = proxyquire( './../lib/main.js', {
		'@stdlib/utils/native-class': nativeClass,
		'./process.js': proc
	});

	bool = isElectron();
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if runtime is not Electron (`process.versions` is not an object)', function test( t ) {
	var isElectron;
	var proc;
	var bool;

	proc = new Process();
	proc.versions = true;

	isElectron = proxyquire( './../lib/main.js', {
		'@stdlib/utils/native-class': nativeClass,
		'./process.js': proc
	});

	bool = isElectron();
	t.strictEqual( bool, false, 'returns false' );

	t.end();

	function nativeClass() {
		return '[object process]';
	}
});

tape( 'the function returns `false` if runtime is not Electron (`process.versions.electron` is not a string primitive)', function test( t ) {
	var isElectron;
	var proc;
	var bool;

	proc = new Process();
	proc.versions.electron = null;

	isElectron = proxyquire( './../lib/main.js', {
		'@stdlib/utils/native-class': nativeClass,
		'./process.js': proc
	});

	bool = isElectron();
	t.strictEqual( bool, false, 'returns false' );

	t.end();

	function nativeClass() {
		return '[object process]';
	}
});

tape( 'the function returns `false` if runtime is not Electron (`process.versions.chrome` is not a string primitive)', function test( t ) {
	var isElectron;
	var proc;
	var bool;

	proc = new Process();
	proc.versions.chrome = {};

	isElectron = proxyquire( './../lib/main.js', {
		'@stdlib/utils/native-class': nativeClass,
		'./process.js': proc
	});

	bool = isElectron();
	t.strictEqual( bool, false, 'returns false' );

	t.end();

	function nativeClass() {
		return '[object process]';
	}
});

tape( 'the function returns `false` if runtime is not Electron (`process.type` is not equal to `browser` or `renderer`)', function test( t ) {
	var isElectron;
	var proc;
	var bool;

	proc = new Process();
	proc.type = 'beeeeep';

	isElectron = proxyquire( './../lib/main.js', {
		'@stdlib/utils/native-class': nativeClass,
		'./process.js': proc
	});

	bool = isElectron();
	t.strictEqual( bool, false, 'returns false' );

	t.end();

	function nativeClass() {
		return '[object process]';
	}
});
