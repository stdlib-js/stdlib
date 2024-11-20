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
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var iterBartlettPulse = require( './../lib' );


// FUNCTIONS //

function bartlett( t, A, tau ) {
	return A * ( 1.0 - abs( (t*(2.0/(tau-1))) - 1.0 ) );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterBartlettPulse, 'function', 'main export is a function' );
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
			iterBartlettPulse( value );
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
			iterBartlettPulse({
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
			iterBartlettPulse({
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
			iterBartlettPulse({
				'duration': value,
				'period': 4
			});
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object which generates a "Bartlett" pulse waveform', function test( t ) {
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
			'value': bartlett( j, A, tau ),
			'done': false
		});
	}

	it = iterBartlettPulse();
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
			'value': bartlett( j, A, tau ),
			'done': false
		});
	}

	opts = {
		'period': T
	};
	it = iterBartlettPulse( opts );
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
				'value': bartlett( j, A, tau ),
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
	it = iterBartlettPulse( opts );
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
				'value': bartlett( j, A, tau ),
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
	it = iterBartlettPulse( opts );
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
				'value': bartlett( j, A, tau ),
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
	it = iterBartlettPulse( opts );
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
				'value': bartlett( j, A, tau ),
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
	it = iterBartlettPulse( opts );
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
				'value': bartlett( j, A, tau ),
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
	it = iterBartlettPulse( opts );
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
				'value': bartlett( j, A, tau ),
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
	it = iterBartlettPulse( opts );
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
			'value': bartlett( i, A, tau ),
			'done': false
		});
	}

	opts = {
		'period': T,
		'iter': 4
	};
	it = iterBartlettPulse( opts );
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

	it = iterBartlettPulse();

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

	it = iterBartlettPulse();

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
	var iterBartlettPulse;
	var it1;
	var it2;
	var i;

	iterBartlettPulse = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	it1 = iterBartlettPulse();
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
	var iterBartlettPulse;
	var it;

	iterBartlettPulse = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	it = iterBartlettPulse();
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});
