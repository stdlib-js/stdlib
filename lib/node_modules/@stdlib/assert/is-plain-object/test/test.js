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
var defineProperty = require( '@stdlib/utils/define-property' );
var Fcn = require( '@stdlib/function/ctor' );
var Object = require( '@stdlib/object/ctor' );
var isPlainObject = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isPlainObject, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a plain object', function test( t ) {
	t.equal( isPlainObject( {} ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if provided an object with no prototype', function test( t ) {
	var bool;

	bool = isPlainObject( Object.create( null ) );
	t.equal( bool, true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if not provided an object', function test( t ) {
	var values;
	var i;
	values = [
		'5',
		5,
		true,
		void 0,
		null,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isPlainObject( values[i] ), false, 'returns false' );
	}
	t.end();
});

tape( 'the function returns `false` if provided a value having an own `constructor` property', function test( t ) {
	var obj = {
		'constructor': Object
	};

	t.equal( isPlainObject( obj ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided a value whose prototype lacks a `isPrototypeOf` property', function test( t ) {
	function Foo() {
		return this;
	}
	Foo.prototype = Object.create( Object.prototype );
	Foo.prototype.constructor = Foo;
	delete Foo.prototype.isPrototypeOf;

	t.equal( isPlainObject( new Foo() ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided a value whose prototype has a `isPrototypeOf` property which is not a function', function test( t ) {
	function Foo() {
		return this;
	}
	Foo.prototype = Object.create( Object.prototype );
	Foo.prototype.constructor = Foo;
	Foo.prototype.isPrototypeOf = 'beep';

	t.equal( isPlainObject( new Foo() ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided a value whose prototype lacks a `constructor` property', function test( t ) {
	function Foo() {
		return this;
	}
	Foo.prototype = {};

	t.equal( isPlainObject( new Foo() ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided a value whose prototype has a constructor property which is not a function', function test( t ) {
	function Foo() {
		return this;
	}
	Foo.prototype = Object.create( {} );
	Foo.prototype.constructor = 'beep';

	t.equal( isPlainObject( new Foo() ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided a value whose prototype has a constructor property whose native class does not match a function\'s native class', function test( t ) {
	var isPlainObject;

	function Foo() {
		return this;
	}
	Foo.prototype = Object.create( {} );
	Foo.prototype.constructor = Foo;

	isPlainObject = proxyquire( './../lib/main.js', {
		'@stdlib/utils/native-class': nativeClass
	});
	t.equal( isPlainObject( new Foo() ), false, 'returns false' );
	t.end();

	function nativeClass() {
		return '[object String]';
	}
});

tape( 'the function returns `true` if provided a value whose prototype equals the global `Object` prototype (same realm)', function test( t ) {
	function Foo() {
		return this;
	}
	Foo.prototype = Object.prototype;
	Foo.prototype.constructor = Foo;

	t.equal( isPlainObject( new Foo() ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if provided a value whose prototype does not equal the global `Object` prototype and has non-own properties (cross-realm)', function test( t ) {
	function Foo() {
		this.foo = 'bar';
		this.a = 'b';
		this.c = 'd';
		return this;
	}
	Foo.prototype = Object.create( Fcn.prototype );
	Foo.prototype.constructor = Foo;
	Foo.prototype.isPrototypeOf = function beep() {};
	Foo.prototype.boop = 'boop';

	t.equal( isPlainObject( new Foo() ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `true` if provided a value whose prototype does not equal the global `Object` prototype and has only own properties (cross-realm)', function test( t ) {
	function Foo() {
		this.foo = 'bar';
		this.a = 'b';
		this.c = 'd';
		return this;
	}
	Foo.prototype = Object.create( Object.prototype );

	defineProperty( Foo.prototype, 'constructor', {
		'configurable': true,
		'enumerable': false,
		'value': Foo
	});
	defineProperty( Foo.prototype, 'isPrototypeOf', {
		'configurable': true,
		'enumerable': false,
		'value': function foo() {}
	});

	t.equal( isPlainObject( new Foo() ), true, 'returns true' );
	t.end();
});
