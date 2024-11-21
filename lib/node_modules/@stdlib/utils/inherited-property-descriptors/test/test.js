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
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var objectKeys = require( '@stdlib/utils/keys' );
var getSymbols = require( '@stdlib/utils/property-symbols' );
var defineProperty = require( '@stdlib/utils/define-property' );
var inherit = require( '@stdlib/utils/inherit' );
var inheritedPropertyDescriptors = require( './../lib' ); // eslint-disable-line id-length


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof inheritedPropertyDescriptors, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a positive integer for the inheritance level', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		0,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			inheritedPropertyDescriptors( {}, value );
		};
	}
});

tape( 'the function returns an object\'s inherited property descriptors', function test( t ) {
	var expected;
	var actual;
	var keys;
	var obj;
	var i;

	function Foo() {
		this.beep = 'boop';
		this.a = {
			'b': 'c'
		};
		defineProperty( this, 'c', {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': 'd'
		});
		return this;
	}

	Foo.prototype.foo = [ 'bar' ];
	defineProperty( Foo.prototype, 'boop', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'beep'
	});

	obj = new Foo();

	expected = {
		'foo': {
			'configurable': true,
			'enumerable': true,
			'writable': true,
			'value': obj.foo
		},
		'boop': {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': 'beep'
		}
	};
	keys = objectKeys( expected );

	actual = inheritedPropertyDescriptors( obj );
	t.strictEqual( objectKeys( actual ).length >= keys.length, true, 'has expected number of descriptors' );
	for ( i = 0; i < keys.length; i++ ) {
		t.deepEqual( actual[ keys[i] ], expected[ keys[i] ], 'contains property descriptor for property: '+keys[i] );
	}
	t.end();
});

tape( 'the function returns an object\'s inherited property descriptors (multiple inheritance)', function test( t ) {
	var expected;
	var actual;
	var keys;
	var obj;
	var i;

	function Bar() {
		this.boop = 'beep';
		this.a = {
			'b': 'c'
		};
		defineProperty( this, 'd', {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'e'
		});
		return this;
	}

	Bar.prototype.foo = 3.14;
	Bar.prototype.bar = [ 'foo' ];
	defineProperty( Bar.prototype, 'bap', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'baz'
	});

	function Foo() {
		Bar.call( this );
		this.beep = 'boop';
		this.a = {
			'b': 'c'
		};
		defineProperty( this, 'c', {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': 'd'
		});
		return this;
	}

	inherit( Foo, Bar );

	Foo.prototype.foo = [ 'bar' ];
	defineProperty( Foo.prototype, 'boop', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': 'beep'
	});

	obj = new Foo();

	expected = {
		'foo': {
			'configurable': true,
			'enumerable': true,
			'writable': true,
			'value': obj.foo
		},
		'boop': {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'beep'
		},
		'bar': {
			'configurable': true,
			'enumerable': true,
			'writable': true,
			'value': obj.bar
		},
		'bap': {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': 'baz'
		}
	};
	keys = objectKeys( expected );

	actual = inheritedPropertyDescriptors( obj );
	t.strictEqual( objectKeys( actual ).length >= keys.length, true, 'has expected number of descriptors' );
	for ( i = 0; i < keys.length; i++ ) {
		t.deepEqual( actual[ keys[i] ], expected[ keys[i] ], 'contains property descriptor for property: '+keys[i] );
	}
	t.end();
});

tape( 'the function returns an object\'s inherited property descriptors (symbols)', function test( t ) {
	var expected;
	var actual;
	var keys;
	var sym;
	var obj;
	var i;

	if ( hasSymbolSupport() === false ) {
		t.pass( 'environment lacks Symbol support' );
		return t.end();
	}
	sym = [ Symbol( 'a' ), Symbol( 'b' ), Symbol( 'c' ), Symbol( 'd' ) ];

	function Bar() {
		this[ sym[0] ] = 0;
		return this;
	}

	Bar.prototype[ sym[ 2 ] ] = 2; // duplicate symbol

	function Foo() {
		this[ sym[1] ] = 1;
		return this;
	}

	inherit( Foo, Bar );

	Foo.prototype[ sym[ 2 ] ] = -1; // duplicate symbol
	defineProperty( Foo.prototype, sym[ 3 ], {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 3
	});

	obj = new Foo();

	expected = {};
	expected[ sym[2] ] = {
		'configurable': true,
		'enumerable': true,
		'writable': true,
		'value': -1
	};
	expected[ sym[3] ] = {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 3
	};
	keys = getSymbols( expected );

	actual = inheritedPropertyDescriptors( obj );
	t.strictEqual( getSymbols( actual ).length >= keys.length, true, 'has expected number of descriptors' );
	for ( i = 0; i < keys.length; i++ ) {
		t.deepEqual( actual[ keys[i] ], expected[ keys[i] ], 'contains property descriptor for property: '+keys[i].toString() );
	}
	t.end();
});

tape( 'the function supports limiting the inheritance level', function test( t ) {
	var expected;
	var actual;
	var keys;
	var obj;
	var i;

	function Bar() {
		this.boop = 'beep';
		this.a = {
			'b': 'c'
		};
		defineProperty( this, 'd', {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'e'
		});
		return this;
	}

	Bar.prototype.foo = 3.14;
	Bar.prototype.bar = [ 'foo' ];
	defineProperty( Bar.prototype, 'bap', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'baz'
	});

	function Foo() {
		Bar.call( this );
		this.beep = 'boop';
		this.a = {
			'b': 'c'
		};
		defineProperty( this, 'c', {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': 'd'
		});
		return this;
	}

	inherit( Foo, Bar );

	Foo.prototype.foo = [ 'bar' ];
	defineProperty( Foo.prototype, 'boop', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': 'beep'
	});

	obj = new Foo();

	expected = {
		'foo': {
			'configurable': true,
			'enumerable': true,
			'writable': true,
			'value': obj.foo
		},
		'boop': {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'beep'
		}
	};
	keys = objectKeys( expected );

	actual = inheritedPropertyDescriptors( obj, 1 );
	t.strictEqual( objectKeys( actual ).length >= keys.length, true, 'has expected number of descriptors' );
	for ( i = 0; i < keys.length; i++ ) {
		t.deepEqual( actual[ keys[i] ], expected[ keys[i] ], 'contains property descriptor for property: '+keys[i] );
	}
	t.end();
});

tape( 'the function returns an empty object if provided `null` or `undefined`', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		void 0,
		null
	];
	expected = {};

	for ( i = 0; i < values.length; i++ ) {
		actual = inheritedPropertyDescriptors( values[ i ] );
		t.deepEqual( actual, expected, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});
