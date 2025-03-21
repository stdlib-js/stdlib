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

var vm = require( 'vm' ); // TODO: handle in-browser tests
var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var hasClassSupport = require( '@stdlib/assert/has-class-support' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var defineProperty = require( '@stdlib/utils/define-property' );
var toJSON = require( './../lib' );


// FIXTURES //

var createClass1 = require( './fixtures/customerror.proto.js' );
var createClass2 = require( './fixtures/customerror.subclass.js' );


// VARIABLES //

var hasClass = hasClassSupport();
var opts = {
	'skip': false
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof toJSON, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided anything other than an error instance, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws when provided a ' + (typeof values[i]) );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			toJSON( value );
		};
	}
});

tape( 'the function returns a JSON object', function test( t ) {
	var json;
	var err;

	err = new Error( 'beep' );
	json = toJSON( err );
	t.strictEqual( isPlainObject( json ), true, 'returns expected value' );
	t.end();
});

tape( 'the JSON object includes an error type', function test( t ) {
	var expected;
	var values;
	var json;
	var i;

	values = [
		new Error(),
		new EvalError(),
		new TypeError(),
		new ReferenceError(),
		new SyntaxError(),
		new URIError(),
		new RangeError()
	];

	expected = [
		'Error',
		'EvalError',
		'TypeError',
		'ReferenceError',
		'SyntaxError',
		'URIError',
		'RangeError'
	];

	for ( i = 0; i < values.length; i++ ) {
		json = toJSON( values[ i ] );
		t.strictEqual( json.type, expected[ i ], 'type equal to ' + expected[ i ] );
	}
	t.end();
});

tape( 'the JSON object includes an error message', function test( t ) {
	var expected;
	var values;
	var json;
	var i;

	values = [
		new Error( 'a' ),
		new EvalError( 'b' ),
		new TypeError( 'c' ),
		new ReferenceError( 'd' ),
		new SyntaxError( 'e' ),
		new URIError( 'f' ),
		new RangeError( 'g' )
	];

	expected = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g'
	];

	for ( i = 0; i < values.length; i++ ) {
		json = toJSON( values[ i ] );
		t.strictEqual( json.message, expected[ i ], 'message equal to \'' + expected[ i ] + '\'' );
	}
	t.end();
});

tape( 'if a `stack` property is present, the JSON object includes a stack trace', function test( t ) {
	var expected;
	var values;
	var json;
	var i;

	values = [
		new Error(),
		new EvalError(),
		new TypeError(),
		new ReferenceError(),
		new SyntaxError(),
		new URIError(),
		new RangeError()
	];

	expected = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g'
	];

	for ( i = 0; i < values.length; i++ ) {
		values[ i ].stack = expected[ i ];
		json = toJSON( values[ i ] );
		t.strictEqual( json.stack, expected[ i ], 'stack equal to \'' + expected[ i ] + '\'' );
	}
	t.end();
});

tape( 'if a `stack` property is not present, the JSON object will not include a `stack` property', function test( t ) {
	var json;
	var err;

	err = new Error();

	// Fake not having a `stack` by intercepting access and returning `undefined`, similar to non-existent property behavior...
	defineProperty( err, 'stack', {
		'value': void 0,
		'enumerable': false,
		'configuable': true,
		'writable': true
	});

	json = toJSON( err );
	t.strictEqual( json.stack, void 0, 'no stack property' );
	t.end();
});

tape( 'if a `name` property is present, the JSON object includes an error name', function test( t ) {
	var expected;
	var values;
	var json;
	var i;

	values = [
		new Error(),
		new EvalError(),
		new TypeError(),
		new ReferenceError(),
		new SyntaxError(),
		new URIError(),
		new RangeError()
	];

	expected = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g'
	];

	for ( i = 0; i < values.length; i++ ) {
		values[ i ].name = expected[ i ];
		json = toJSON( values[ i ] );
		t.strictEqual( json.name, expected[ i ], 'name equal to \'' + expected[ i ] + '\'' );
	}
	t.end();
});

tape( 'if a `name` property is not present, the JSON object will not include a `name` property', function test(t ) {
	var json;
	var err;

	err = new Error();

	// Fake not having a `name` by intercepting access and returning `void 0`, similar to non-existent property behavior...
	defineProperty( err, 'name', {
		'value': void 0,
		'enumerable': false,
		'configuable': true,
		'writable': true
	});

	json = toJSON( err );
	t.strictEqual( json.name, void 0, 'no name property' );

	t.end();
});

tape( 'if a `code` property is present, the JSON object includes an error code', function test( t ) {
	var expected;
	var values;
	var json;
	var i;

	values = [
		new Error(),
		new EvalError(),
		new TypeError(),
		new ReferenceError(),
		new SyntaxError(),
		new URIError(),
		new RangeError()
	];

	expected = [
		1,
		2,
		3,
		4,
		5,
		6,
		7
	];

	for ( i = 0; i < values.length; i++ ) {
		values[ i ].code = expected[ i ];
		json = toJSON( values[ i ] );
		t.strictEqual( json.code, expected[ i ], 'code equal to \'' + expected[ i ] + '\'' );
	}
	t.end();
});

tape( 'if an `errno` property is present, the JSON object includes an error code string', function test( t ) {
	var expected;
	var values;
	var json;
	var i;

	values = [
		new Error(),
		new EvalError(),
		new TypeError(),
		new ReferenceError(),
		new SyntaxError(),
		new URIError(),
		new RangeError()
	];

	expected = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g'
	];

	for ( i = 0; i < values.length; i++ ) {
		values[ i ].errno = expected[ i ];
		json = toJSON( values[ i ] );
		t.strictEqual( json.errno, expected[ i ], 'errno equal to \'' + expected[ i ] + '\'' );
	}
	t.end();
});

tape( 'if a `syscall` property is present, the JSON object includes a failed system call string', function test( t ) {
	var expected;
	var values;
	var json;
	var i;

	values = [
		new Error(),
		new EvalError(),
		new TypeError(),
		new ReferenceError(),
		new SyntaxError(),
		new URIError(),
		new RangeError()
	];

	expected = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g'
	];

	for ( i = 0; i < values.length; i++ ) {
		values[ i ].syscall = expected[ i ];
		json = toJSON( values[ i ] );
		t.strictEqual( json.syscall, expected[ i ], 'syscall equal to \'' + expected[ i ] + '\'' );
	}
	t.end();
});

tape( 'if a provided error has additional enumerable properties, the function will include these properties and their values in the output JSON', function test( t ) {
	var json;
	var err;

	// Data descriptor...
	err = new Error( 'errrr' );
	err.beep = 'boop';
	err.boop = 'beep';

	json = toJSON( err );
	t.strictEqual( json.beep, err.beep, 'data descriptor' );
	t.strictEqual( json.boop, err.boop, 'data descriptor' );

	// Accessor descriptor...
	err = new Error( 'errrr' );
	defineProperty( err, 'beep', {
		'enumerable': true,
		'configurable': true,
		'get': function get() {
			return 'boop';
		}
	});
	defineProperty( err, 'boop', {
		'enumerable': true,
		'configurable': false,
		'get': function get() {
			return 'beep';
		}
	});

	json = toJSON( err );
	t.strictEqual( json.beep, err.beep, 'accessor descriptor' );
	t.strictEqual( json.boop, err.boop, 'accessor descriptor' );

	t.end();
});

tape( 'the function deep copies enumerable properties', function test( t ) {
	var json;
	var err;

	// Deep equal...
	err = new Error( 'errrr' );
	err.arr = [ 1, 2, [ 3, 4, 5 ] ];

	json = toJSON( err );
	t.notEqual( json.arr, err.arr, 'new instances' );
	t.deepEqual( json.arr, err.arr, 'deep equal' );

	t.end();
});

tape( 'custom errors (proto)', function test( t ) {
	var CustomError;
	var types;
	var ctors;
	var json;
	var err;
	var i;

	ctors = [
		Error,
		TypeError,
		SyntaxError,
		ReferenceError,
		URIError,
		EvalError,
		RangeError
	];

	types = [
		'Error',
		'TypeError',
		'SyntaxError',
		'ReferenceError',
		'URIError',
		'EvalError',
		'RangeError'
	];

	for ( i = 0; i < ctors.length; i++ ) {
		CustomError = createClass1( ctors[ i ] );
		err = new CustomError( 'custom error' );
		json = toJSON( err );

		t.strictEqual( json.type, types[ i ], 'type equal to ' + types[ i ] );
		t.strictEqual( json.message, err.message, 'equal messages' );
		t.strictEqual( json.name, err.name, 'equal names' );
		t.strictEqual( json.stack, err.stack, 'equal stack trace' );
	}
	t.end();
});

opts.skip = !hasClass;
tape( 'custom errors (subclass; ES2015)', opts, function test( t ) {
	var CustomError;
	var ctors;
	var json;
	var err;
	var i;

	ctors = [
		'Error',
		'TypeError',
		'SyntaxError',
		'ReferenceError',
		'URIError',
		'EvalError',
		'RangeError'
	];

	for ( i = 0; i < ctors.length; i++ ) {
		CustomError = createClass2( ctors[ i ] );
		err = new CustomError( 'custom error' );
		json = toJSON( err );

		t.strictEqual( json.type, ctors[ i ], 'type equal to ' + ctors[ i ] );
		t.strictEqual( json.message, err.message, 'equal messages' );
		t.strictEqual( json.name, err.name, 'equal names' );
		t.strictEqual( json.stack, err.stack, 'equal stack trace' );
	}
	t.end();
});

opts.skip = IS_BROWSER;
tape( 'the function supports serializing an error from a different realm', opts, function test( t ) {
	var json;
	var err;

	err = vm.runInNewContext( 'new Error( "beep" )' );
	json = toJSON( err );

	t.strictEqual( json.type, 'Error', 'type equal to Error' );
	t.strictEqual( json.message, err.message, 'equal messages' );
	t.strictEqual( json.name, err.name, 'equal names' );
	t.strictEqual( json.stack, err.stack, 'equal stack trace' );

	t.end();
});

opts.skip = IS_BROWSER;
tape( 'the function supports serializing an object from a different realm which inherits from an error', opts, function test( t ) {
	var json;
	var err;

	err = vm.runInNewContext( 'function Err( msg ) { this.name = "Err"; if ( msg ) { this.message = msg; }; this.stack = ( new Error() ).stack; return this; }; Err.prototype = Object.create( Error.prototype ); Err.prototype.constructor = Err; new Err( "beep" );', {
		'Error': Error
	});
	json = toJSON( err );

	t.strictEqual( json.type, 'Error', 'type equal to Error' );
	t.strictEqual( json.message, err.message, 'equal messages' );
	t.strictEqual( json.name, err.name, 'equal names' );
	t.strictEqual( json.stack, err.stack, 'equal stack trace' );

	t.end();
});
