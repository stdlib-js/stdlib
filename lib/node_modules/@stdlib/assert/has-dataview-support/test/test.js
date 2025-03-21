/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var detect = require( './../lib' );


// VARIABLES //

var hasDataView = ( typeof DataView === 'function' ); // eslint-disable-line stdlib/require-globals


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof detect, 'function', 'main export is a function' );
	t.end();
});

tape( 'feature detection result is a boolean', function test( t ) {
	t.strictEqual( typeof detect(), 'boolean', 'detection result is a boolean' );
	t.end();
});

tape( 'if `DataView` is supported, detection result is `true`', function test( t ) {
	var mocked;
	if ( hasDataView ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}

	mocked = proxyquire( './../lib/main.js', {
		'./dataview.js': Mock,
		'@stdlib/assert/is-dataview': isDataView
	});
	t.strictEqual( mocked(), true, 'detection result is `true` (mocked)' );

	t.end();

	function Mock( buf, byteOffset, byteLength ) {
		var out;
		var i;

		if ( byteOffset === void 0 ) {
			byteOffset = 0;
		}
		if ( byteLength === void 0 ) {
			byteLength = buf.byteLength - byteOffset;
		}
		out = {};
		out.buffer = buf;
		out._buffer = new Array( byteLength ); // eslint-disable-line no-underscore-dangle
		for ( i = 0; i < byteLength; i++ ) {
			out._buffer[ i ] = 0; // eslint-disable-line no-underscore-dangle
		}
		out.byteLength = byteLength;
		out.byteOffset = byteOffset;
		out.getFloat64 = getFloat64;
		out.setFloat64 = setFloat64;
		return out;
	}

	function isDataView() {
		return true;
	}

	function getFloat64( byteOffset ) {
		return this._buffer[ byteOffset ]; // eslint-disable-line no-invalid-this
	}

	function setFloat64( byteOffset, value ) {
		this._buffer[ byteOffset ] = value; // eslint-disable-line no-invalid-this
	}
});

tape( 'if `DataView` is not supported, detection result is `false` (no DataView global function)', function test( t ) {
	var mocked;
	if ( hasDataView ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./dataview.js': {}
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );
	t.end();
});

tape( 'if `DataView` is not supported, detected result is `false` (constructor throws)', function test( t ) {
	var mocked;
	if ( hasDataView ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./dataview.js': mock
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );
	t.end();

	function mock() {
		throw new Error( 'beep' );
	}
});

tape( 'if `DataView` is not supported, detected result is `false` (instance has no `getFloat64` method)', function test( t ) {
	var mocked;
	if ( hasDataView ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./dataview.js': mock
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );
	t.end();

	function mock( buf ) {
		var view = new DataView( buf ); // eslint-disable-line stdlib/require-globals
		view.getFloat64 = null;
		return view;
	}
});

tape( 'if `DataView` is not supported, detected result is `false` (instance has no `setFloat64` method)', function test( t ) {
	var mocked;
	if ( hasDataView ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./dataview.js': mock
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );
	t.end();

	function mock( buf ) {
		var view = new DataView( buf ); // eslint-disable-line stdlib/require-globals
		view.setFloat64 = null;
		return view;
	}
});

tape( 'if `DataView` is not supported, detected result is `false` (broken setFloat64)', function test( t ) {
	var mocked;
	if ( hasDataView ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./dataview.js': mock
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );
	t.end();

	function mock( buf, offset, len ) {
		var view = new DataView( buf, offset, len ); // eslint-disable-line stdlib/require-globals
		view.setFloat64 = setFloat64;
		return view;
	}

	function setFloat64() {
		// No-op...
	}
});

tape( 'if `DataView` is not supported, detected result is `false` (broken getFloat64)', function test( t ) {
	var mocked;
	if ( hasDataView ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./dataview.js': mock
	});
	t.strictEqual( mocked(), false, 'detection result is `false`' );
	t.end();

	function mock( buf, offset, len ) {
		var view = new DataView( buf, offset, len ); // eslint-disable-line stdlib/require-globals
		view.getFloat64 = getFloat64;
		return view;
	}

	function getFloat64() {
		// No-op...
	}
});
