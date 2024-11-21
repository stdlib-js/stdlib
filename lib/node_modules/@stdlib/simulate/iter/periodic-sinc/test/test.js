/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var sinpi = require( '@stdlib/math/base/special/sinpi' );
var abs = require( '@stdlib/math/base/special/abs' );
var wrap = require( '@stdlib/math/base/special/wrap' );
var EPS = require( '@stdlib/constants/float64/eps' );
var iterPeriodicSinc = require( './../lib' );


// FUNCTIONS //

function periodicSincEven( t, n, tau, a, phi ) {
	t = wrap( t-phi, 0, tau );
	if ( t === 0 ) {
		return a;
	}
	tau /= 2;
	if ( t === tau ) {
		return -a;
	}
	return a * sinpi( t*(n/tau) )/( n*sinpi( t/tau ) );
}

function periodicSincOdd( t, n, tau, a, phi ) {
	t = wrap( t-phi, 0, tau );
	if ( t === 0 ) {
		return a;
	}
	return a * sinpi( t*(n/tau) )/( n*sinpi( t/tau ) );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterPeriodicSinc, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a positive integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
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
			iterPeriodicSinc( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a positive integer (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
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
			iterPeriodicSinc( value, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterPeriodicSinc( 7, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
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
			iterPeriodicSinc( 7, {
				'iter': value
			});
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object which generates a periodic sinc waveform', function test( t ) {
	var expected;
	var actual;
	var delta;
	var tau;
	var tol;
	var phi;
	var it;
	var n;
	var i;

	n = 7;
	tau = 100;
	phi = 0;

	expected = [];
	for ( i = 0; i < 200; i++ ) {
		expected.push({
			'value': periodicSincOdd( i, n, tau, 1.0, phi ),
			'done': false
		});
	}

	it = iterPeriodicSinc( n );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.equal( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.equal( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports specifying the waveform period (odd N; even period)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tau;
	var tol;
	var phi;
	var it;
	var n;
	var i;

	n = 7;
	tau = 50;
	phi = 0;

	expected = [];
	for ( i = 0; i < 400; i++ ) {
		expected.push({
			'value': periodicSincOdd( i, n, tau, 1.0, phi ),
			'done': false
		});
	}

	opts = {
		'period': tau
	};
	it = iterPeriodicSinc( n, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.equal( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.equal( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports specifying the waveform period (odd N; odd period)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tau;
	var tol;
	var phi;
	var it;
	var n;
	var i;

	n = 7;
	tau = 51;
	phi = 0;

	expected = [];
	for ( i = 0; i < 400; i++ ) {
		expected.push({
			'value': periodicSincOdd( i, n, tau, 1.0, phi ),
			'done': false
		});
	}

	opts = {
		'period': tau
	};
	it = iterPeriodicSinc( n, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.equal( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.equal( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports specifying the waveform period (even N; even period)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var tau;
	var phi;
	var it;
	var n;
	var i;

	n = 6;
	tau = 50;
	phi = 0;

	expected = [];
	for ( i = 0; i < 400; i++ ) {
		expected.push({
			'value': periodicSincEven( i, n, tau, 1.0, phi ),
			'done': false
		});
	}

	opts = {
		'period': tau
	};
	it = iterPeriodicSinc( n, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.equal( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.equal( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports specifying the waveform period (even N; odd period)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var tau;
	var phi;
	var it;
	var n;
	var i;

	n = 6;
	tau = 51;
	phi = 0;

	expected = [];
	for ( i = 0; i < 400; i++ ) {
		expected.push({
			'value': periodicSincEven( i, n, tau, 1.0, phi ),
			'done': false
		});
	}

	opts = {
		'period': tau
	};
	it = iterPeriodicSinc( n, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.equal( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.equal( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports specifying the wave amplitude (odd N)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var tau;
	var phi;
	var it;
	var n;
	var a;
	var i;

	n = 5;
	a = 10.0;
	tau = 100;
	phi = 0;

	expected = [];
	for ( i = 0; i < 200; i++ ) {
		expected.push({
			'value': periodicSincOdd( i, n, tau, a, phi ),
			'done': false
		});
	}

	opts = {
		'period': tau,
		'amplitude': a
	};
	it = iterPeriodicSinc( n, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.equal( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.equal( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports specifying the wave amplitude (even N)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var tau;
	var phi;
	var it;
	var n;
	var a;
	var i;

	n = 6;
	a = 10.0;
	tau = 100;
	phi = 0;

	expected = [];
	for ( i = 0; i < 200; i++ ) {
		expected.push({
			'value': periodicSincEven( i, n, tau, a, phi ),
			'done': false
		});
	}

	opts = {
		'period': tau,
		'amplitude': a
	};
	it = iterPeriodicSinc( n, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.equal( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.equal( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports specifying the phase offset (left shift; odd N)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var tau;
	var phi;
	var it;
	var n;
	var i;

	n = 3;
	phi = -3;
	tau = 100;

	expected = [];
	for ( i = 0; i < 400; i++ ) {
		expected.push({
			'value': periodicSincOdd( i, n, tau, 1.0, phi ),
			'done': false
		});
	}

	opts = {
		'period': tau,
		'offset': phi
	};
	it = iterPeriodicSinc( n, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.equal( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.equal( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports specifying the phase offset (left shift; even N)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var tau;
	var phi;
	var it;
	var n;
	var i;

	n = 8;
	phi = -3;
	tau = 100;

	expected = [];
	for ( i = 0; i < 400; i++ ) {
		expected.push({
			'value': periodicSincEven( i, n, tau, 1.0, phi ),
			'done': false
		});
	}

	opts = {
		'period': tau,
		'offset': phi
	};
	it = iterPeriodicSinc( n, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.equal( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.equal( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports specifying the phase offset (left shift; mod; odd N)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var tau;
	var phi;
	var it;
	var n;
	var i;

	n = 11;
	phi = -130;
	tau = 100;

	expected = [];
	for ( i = 0; i < 200; i++ ) {
		expected.push({
			'value': periodicSincOdd( i, n, tau, 1.0, phi ),
			'done': false
		});
	}

	opts = {
		'period': tau,
		'offset': phi
	};
	it = iterPeriodicSinc( n, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.equal( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.equal( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports specifying the phase offset (left shift; mod; even N)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var tau;
	var phi;
	var it;
	var n;
	var i;

	n = 8;
	phi = -130;
	tau = 100;

	expected = [];
	for ( i = 0; i < 200; i++ ) {
		expected.push({
			'value': periodicSincEven( i, n, tau, 1.0, phi ),
			'done': false
		});
	}

	opts = {
		'period': tau,
		'offset': phi
	};
	it = iterPeriodicSinc( n, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.equal( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.equal( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports specifying the phase offset (right shift; odd N)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var tau;
	var phi;
	var it;
	var n;
	var i;

	n = 7;
	phi = 3;
	tau = 100;

	expected = [];
	for ( i = 0; i < 200; i++ ) {
		expected.push({
			'value': periodicSincOdd( i, n, tau, 1.0, phi ),
			'done': false
		});
	}

	opts = {
		'period': tau,
		'offset': phi
	};
	it = iterPeriodicSinc( n, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.equal( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.equal( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports specifying the phase offset (right shift; even N)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var tau;
	var phi;
	var it;
	var n;
	var i;

	n = 8;
	phi = 3;
	tau = 100;

	expected = [];
	for ( i = 0; i < 200; i++ ) {
		expected.push({
			'value': periodicSincEven( i, n, tau, 1.0, phi ),
			'done': false
		});
	}

	opts = {
		'period': tau,
		'offset': phi
	};
	it = iterPeriodicSinc( n, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.equal( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.equal( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports specifying the phase offset (right shift; mod; odd N)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var tau;
	var phi;
	var it;
	var n;
	var i;

	n = 5;
	phi = 230;
	tau = 100;

	expected = [];
	for ( i = 0; i < 200; i++ ) {
		expected.push({
			'value': periodicSincOdd( i, n, tau, 1.0, phi ),
			'done': false
		});
	}

	opts = {
		'period': tau,
		'offset': phi
	};
	it = iterPeriodicSinc( n, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.equal( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.equal( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports specifying the phase offset (right shift; mod; even N)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var tau;
	var phi;
	var it;
	var n;
	var i;

	n = 8;
	phi = 230;
	tau = 100;

	expected = [];
	for ( i = 0; i < 200; i++ ) {
		expected.push({
			'value': periodicSincEven( i, n, tau, 1.0, phi ),
			'done': false
		});
	}

	opts = {
		'period': tau,
		'offset': phi
	};
	it = iterPeriodicSinc( n, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.equal( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.equal( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports limiting the number of iterations (odd N)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var tau;
	var phi;
	var it;
	var n;
	var i;

	n = 9;
	phi = 0;
	tau = 100;

	expected = [];
	for ( i = 0; i < 10; i++ ) {
		expected.push({
			'value': periodicSincOdd( i, n, tau, 1.0, phi ),
			'done': false
		});
	}

	opts = {
		'period': tau,
		'iter': 10
	};
	it = iterPeriodicSinc( n, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.equal( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.equal( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	actual = it.next();
	t.equal( actual.value, void 0, 'returns expected value' );
	t.equal( actual.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports limiting the number of iterations (even N)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var tau;
	var phi;
	var it;
	var n;
	var i;

	n = 12;
	phi = 0;
	tau = 100;

	expected = [];
	for ( i = 0; i < 10; i++ ) {
		expected.push({
			'value': periodicSincEven( i, n, tau, 1.0, phi ),
			'done': false
		});
	}

	opts = {
		'period': tau,
		'iter': 10
	};
	it = iterPeriodicSinc( n, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.equal( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.equal( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	actual = it.next();
	t.equal( actual.value, void 0, 'returns expected value' );
	t.equal( actual.done, true, 'returns expected value' );

	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = iterPeriodicSinc( 7 );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var it;
	var r;

	it = iterPeriodicSinc( 7 );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return( 'finished' );
	t.equal( r.value, 'finished', 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'if an environment supports `Symbol.iterator`, the returned iterator is iterable', function test( t ) {
	var iterPeriodicSinc;
	var it1;
	var it2;
	var i;

	iterPeriodicSinc = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	it1 = iterPeriodicSinc( 7 );
	t.equal( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.equal( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < 10; i++ ) {
		t.equal( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable"', function test( t ) {
	var iterPeriodicSinc;
	var it;

	iterPeriodicSinc = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	it = iterPeriodicSinc( 7 );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});
