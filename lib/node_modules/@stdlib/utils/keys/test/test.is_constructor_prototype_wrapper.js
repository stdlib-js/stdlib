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
var isConstructorPrototype = require( './../lib/is_constructor_prototype.js' );
var wrapper = require( './../lib/is_constructor_prototype_wrapper.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof wrapper, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if a value equals the prototype of its constructor (non-buggy non-browser environments)', function test( t ) {
	var wrapper;
	var bool;
	var obj;

	wrapper = proxyquire( './../lib/is_constructor_prototype_wrapper.js', {
		'./has_window.js': false,
		'./has_automation_equality_bug.js': false
	});

	obj = {
		'constructor': {
			'prototype': null
		}
	};
	obj.constructor.prototype = obj; // circular

	bool = wrapper( obj );

	t.strictEqual( bool, isConstructorPrototype( obj ), 'returns expected value' );
	t.strictEqual( bool, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if a value does not equal the prototype of its constructor (non-buggy non-browser environments)', function test( t ) {
	var wrapper;
	var bool;
	var obj;

	wrapper = proxyquire( './../lib/is_constructor_prototype_wrapper.js', {
		'./has_window.js': false,
		'./has_automation_equality_bug.js': false
	});

	obj = {
		'constructor': {
			'prototype': null
		}
	};
	obj.constructor.prototype = {};

	bool = wrapper( obj );

	t.strictEqual( bool, isConstructorPrototype( obj ), 'returns expected value' );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if a value equals the prototype of its constructor (buggy non-browser environments)', function test( t ) {
	var wrapper;
	var bool;
	var obj;

	wrapper = proxyquire( './../lib/is_constructor_prototype_wrapper.js', {
		'./has_window.js': false,
		'./has_automation_equality_bug.js': true
	});

	obj = {
		'constructor': {
			'prototype': null
		}
	};
	obj.constructor.prototype = obj; // circular

	bool = wrapper( obj );

	t.strictEqual( bool, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if a value does not equal the prototype of its constructor (buggy non-browser environments)', function test( t ) {
	var wrapper;
	var bool;
	var obj;

	wrapper = proxyquire( './../lib/is_constructor_prototype_wrapper.js', {
		'./has_window.js': false,
		'./has_automation_equality_bug.js': true
	});

	obj = {
		'constructor': {
			'prototype': null
		}
	};
	obj.constructor.prototype = {};

	bool = wrapper( obj );

	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if a value equals the prototype of its constructor (non-buggy browser environments)', function test( t ) {
	var wrapper;
	var bool;
	var obj;

	wrapper = proxyquire( './../lib/is_constructor_prototype_wrapper.js', {
		'./has_window.js': true,
		'./has_automation_equality_bug.js': false
	});

	obj = {
		'constructor': {
			'prototype': null
		}
	};
	obj.constructor.prototype = obj; // circular

	bool = wrapper( obj );

	t.strictEqual( bool, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if a value does not equal the prototype of its constructor (non-buggy browser environments)', function test( t ) {
	var wrapper;
	var bool;
	var obj;

	wrapper = proxyquire( './../lib/is_constructor_prototype_wrapper.js', {
		'./has_window.js': true,
		'./has_automation_equality_bug.js': false
	});

	obj = {
		'constructor': {
			'prototype': null
		}
	};
	obj.constructor.prototype = {};

	bool = wrapper( obj );

	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if a value equals the prototype of its constructor (buggy browser environments)', function test( t ) {
	var wrapper;
	var bool;
	var obj;

	wrapper = proxyquire( './../lib/is_constructor_prototype_wrapper.js', {
		'./has_window.js': true,
		'./has_automation_equality_bug.js': true,
		'./is_constructor_prototype.js': mock
	});

	obj = {
		'constructor': {
			'prototype': null
		}
	};
	obj.constructor.prototype = obj; // circular

	bool = wrapper( obj );

	t.strictEqual( bool, true, 'returns expected value' );
	t.end();

	function mock() {
		return true;
	}
});

tape( 'the function returns `false` if a value does not equal the prototype of its constructor (buggy browser environments)', function test( t ) {
	var wrapper;
	var bool;
	var obj;

	wrapper = proxyquire( './../lib/is_constructor_prototype_wrapper.js', {
		'./has_window.js': true,
		'./has_automation_equality_bug.js': true,
		'./is_constructor_prototype.js': mock
	});

	obj = {
		'constructor': {
			'prototype': null
		}
	};
	obj.constructor.prototype = {};

	bool = wrapper( obj );

	t.strictEqual( bool, false, 'returns expected value' );
	t.end();

	function mock() {
		throw new Error( 'beep!' );
	}
});
