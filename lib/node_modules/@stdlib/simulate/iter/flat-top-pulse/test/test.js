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
var cospi = require( '@stdlib/math/base/special/cospi' );
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var iterFlatTopPulse = require( './../lib' );


// FUNCTIONS //

function flatTop( t, A, tau ) {
	var s = 2.0 / (tau-1);
	return A * (0.21557895 - (0.41663158*cospi(s*t)) + (0.277263158*cospi(2.0*s*t)) - (0.083578947*cospi(3.0*s*t)) + (0.006947368*cospi(4.0*s*t))); // eslint-disable-line max-len
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterFlatTopPulse, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an object', function test( t ) {
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
			iterFlatTopPulse( value );
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
			iterFlatTopPulse({
				'iter': value
			});
		};
	}
});

tape( 'the function throws an error if provided a pulse duration which is greater than the pulse period', function test( t ) {
	var values;
	var i;

	values = [
		5,
		6,
		7,
		8,
		9,
		10
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterFlatTopPulse({
				'duration': value,
				'period': 4
			});
		};
	}
});

tape( 'the function throws an error if provided a pulse duration which is less than 3', function test( t ) {
	var values;
	var i;

	values = [
		1,
		2
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterFlatTopPulse({
				'duration': value,
				'period': 4
			});
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object which generates a "flat top" pulse waveform', function test( t ) {
	var expected;
	var actual;
	var delta;
	var tol;
	var phi;
	var tau;
	var it;
	var T;
	var A;
	var i;
	var j;

	T = 100;
	tau = T;
	A = 1.0;
	phi = 0;

	expected = [];
	for ( i = 0; i < 200; i++ ) {
		j = (i-phi) % T;
		expected.push({
			'value': flatTop( j, A, tau ),
			'done': false
		});
	}

	it = iterFlatTopPulse();
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.strictEqual( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.strictEqual( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.strictEqual( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports specifying the pulse period', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var phi;
	var tau;
	var it;
	var A;
	var T;
	var i;
	var j;

	T = 10;
	tau = T;
	A = 1.0;
	phi = 0;

	expected = [];
	for ( i = 0; i < 200; i++ ) {
		j = (i-phi) % T;
		expected.push({
			'value': flatTop( j, A, tau ),
			'done': false
		});
	}

	opts = {
		'period': T
	};
	it = iterFlatTopPulse( opts );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.strictEqual( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.strictEqual( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.strictEqual( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports specifying the pulse duration', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var phi;
	var tau;
	var it;
	var A;
	var T;
	var i;
	var j;

	T = 100;
	tau = 50;
	A = 1.0;
	phi = 0;

	expected = [];
	for ( i = 0; i < 200; i++ ) {
		j = (i-phi) % T;
		if ( j < tau ) {
			expected.push({
				'value': flatTop( j, A, tau ),
				'done': false
			});
		} else {
			expected.push({
				'value': 0.0,
				'done': false
			});
		}
	}

	opts = {
		'period': T,
		'duration': tau
	};
	it = iterFlatTopPulse( opts );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.strictEqual( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.strictEqual( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.strictEqual( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports specifying the waveform amplitude', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var phi;
	var tau;
	var it;
	var T;
	var A;
	var i;
	var j;

	T = 100;
	tau = 50;
	A = 10.0;
	phi = 0;

	expected = [];
	for ( i = 0; i < 200; i++ ) {
		j = (i-phi) % T;
		if ( j < tau ) {
			expected.push({
				'value': flatTop( j, A, tau ),
				'done': false
			});
		} else {
			expected.push({
				'value': 0.0,
				'done': false
			});
		}
	}

	opts = {
		'period': T,
		'duration': tau,
		'amplitude': A
	};
	it = iterFlatTopPulse( opts );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.strictEqual( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.strictEqual( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.strictEqual( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports specifying the phase offset (left shift)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var phi;
	var tau;
	var it;
	var T;
	var A;
	var i;
	var j;

	T = 100;
	tau = 50;
	A = 1.0;
	phi = -30;

	expected = [];
	for ( i = 0; i < 200; i++ ) {
		j = (i-phi) % T;
		if ( j < tau ) {
			expected.push({
				'value': flatTop( j, A, tau ),
				'done': false
			});
		} else {
			expected.push({
				'value': 0.0,
				'done': false
			});
		}
	}

	opts = {
		'period': T,
		'duration': tau,
		'offset': phi
	};
	it = iterFlatTopPulse( opts );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.strictEqual( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.strictEqual( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.strictEqual( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports specifying the phase offset (left shift; mod)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var phi;
	var tau;
	var it;
	var T;
	var A;
	var i;
	var j;

	T = 100;
	tau = 50;
	A = 1.0;
	phi = -130;

	expected = [];
	for ( i = 0; i < 200; i++ ) {
		j = (i-phi) % T;
		if ( j < 0 ) {
			j += T;
		}
		if ( j < tau ) {
			expected.push({
				'value': flatTop( j, A, tau ),
				'done': false
			});
		} else {
			expected.push({
				'value': 0.0,
				'done': false
			});
		}
	}

	opts = {
		'period': T,
		'duration': tau,
		'offset': phi
	};
	it = iterFlatTopPulse( opts );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.strictEqual( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.strictEqual( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.strictEqual( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports specifying the phase offset (right shift)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var phi;
	var tau;
	var it;
	var T;
	var A;
	var i;
	var j;

	T = 100;
	tau = 50;
	A = 1.0;
	phi = 30;

	expected = [];
	for ( i = 0; i < 200; i++ ) {
		j = (i-phi) % T;
		if ( j < 0 ) {
			j += T;
		}
		if ( j < tau ) {
			expected.push({
				'value': flatTop( j, A, tau ),
				'done': false
			});
		} else {
			expected.push({
				'value': 0.0,
				'done': false
			});
		}
	}

	opts = {
		'period': T,
		'duration': tau,
		'offset': phi
	};
	it = iterFlatTopPulse( opts );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.strictEqual( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.strictEqual( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.strictEqual( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports specifying the phase offset (right shift; mod)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var phi;
	var tau;
	var it;
	var T;
	var A;
	var i;
	var j;

	T = 100;
	tau = 50;
	A = 1.0;
	phi = 230;

	expected = [];
	for ( i = 0; i < 200; i++ ) {
		j = (i-phi) % T;
		if ( j < 0 ) {
			j += T;
		}
		if ( j < tau ) {
			expected.push({
				'value': flatTop( j, A, tau ),
				'done': false
			});
		} else {
			expected.push({
				'value': 0.0,
				'done': false
			});
		}
	}

	opts = {
		'period': T,
		'duration': tau,
		'offset': phi
	};
	it = iterFlatTopPulse( opts );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.strictEqual( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.strictEqual( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.strictEqual( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function supports limiting the number of iterations', function test( t ) {
	var expected;
	var actual;
	var delta;
	var opts;
	var tol;
	var tau;
	var it;
	var A;
	var T;
	var i;

	T = 10;
	tau = T;
	A = 1.0;

	expected = [];
	for ( i = 0; i < 4; i++ ) {
		expected.push({
			'value': flatTop( i, A, tau ),
			'done': false
		});
	}

	opts = {
		'period': T,
		'iter': 4
	};
	it = iterFlatTopPulse( opts );
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.strictEqual( actual.done, expected[ i ].done, 'returns expected value' );
		if ( actual.value === expected[ i ].value ) {
			t.strictEqual( actual.value, expected[ i ].value, 'returns expected value' );
		} else {
			delta = abs( actual.value - expected[ i ].value );
			tol = 1.0 * EPS * abs( expected[ i ].value );
			t.strictEqual( delta <= tol, true, 'within tolerance. i: '+i+'. actual: '+actual.value+'. expected: '+expected[ i ].value+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	actual = it.next();
	t.strictEqual( actual.value, void 0, 'returns expected value' );
	t.strictEqual( actual.done, true, 'returns expected value' );

	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = iterFlatTopPulse();

	r = it.next();
	t.strictEqual( typeof r.value, 'number', 'returns expected value' );
	t.strictEqual( r.done, false, 'returns expected value' );

	r = it.next();
	t.strictEqual( typeof r.value, 'number', 'returns expected value' );
	t.strictEqual( r.done, false, 'returns expected value' );

	r = it.return();
	t.strictEqual( r.value, void 0, 'returns expected value' );
	t.strictEqual( r.done, true, 'returns expected value' );

	r = it.next();
	t.strictEqual( r.value, void 0, 'returns expected value' );
	t.strictEqual( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var it;
	var r;

	it = iterFlatTopPulse();

	r = it.next();
	t.strictEqual( typeof r.value, 'number', 'returns expected value' );
	t.strictEqual( r.done, false, 'returns expected value' );

	r = it.next();
	t.strictEqual( typeof r.value, 'number', 'returns expected value' );
	t.strictEqual( r.done, false, 'returns expected value' );

	r = it.return( 'finished' );
	t.strictEqual( r.value, 'finished', 'returns expected value' );
	t.strictEqual( r.done, true, 'returns expected value' );

	r = it.next();
	t.strictEqual( r.value, void 0, 'returns expected value' );
	t.strictEqual( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'if an environment supports `Symbol.iterator`, the returned iterator is iterable', function test( t ) {
	var iterFlatTopPulse;
	var it1;
	var it2;
	var i;

	iterFlatTopPulse = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	it1 = iterFlatTopPulse();
	t.strictEqual( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.strictEqual( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.strictEqual( typeof it2, 'object', 'returns expected value' );
	t.strictEqual( typeof it2.next, 'function', 'has method' );
	t.strictEqual( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < 10; i++ ) {
		t.strictEqual( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable"', function test( t ) {
	var iterFlatTopPulse;
	var it;

	iterFlatTopPulse = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	it = iterFlatTopPulse();
	t.strictEqual( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});
