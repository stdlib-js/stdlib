/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var randu = require( '@stdlib/random/base/randu' );
var ascending = require( './fixtures/ascending.js' );
var num2str = require( './fixtures/num2str.js' );
var gsortins = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gsortins, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( gsortins.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function sorts a strided array (increasing order)', function test( t ) {
	var expected;
	var x;
	var i;

	x = [];
	for ( i = 0; i < 100; i++ ) {
		x.push( (randu()*20.0) - 10.0 );
	}

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, 1.0, x, 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[i]+'.' );
		} else if ( isNegativeZero( expected[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[i] )+'.' );
		} else if ( isPositiveZero( expected[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ i ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[i]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array (increasing order, accessors)', function test( t ) {
	var expected;
	var x;
	var i;

	x = [];
	for ( i = 0; i < 100; i++ ) {
		x.push( (randu()*20.0) - 10.0 );
	}

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, 1.0, toAccessorArray( x ), 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[i]+'.' );
		} else if ( isNegativeZero( expected[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[i] )+'.' );
		} else if ( isPositiveZero( expected[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ i ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[i]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array (decreasing order)', function test( t ) {
	var expected;
	var x;
	var i;
	var j;

	x = [];
	for ( i = 0; i < 100; i++ ) {
		x.push( (randu()*20.0) - 10.0 );
	}

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, -1.0, x, 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		j = expected.length - i - 1;
		if ( isnan( expected[ j ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[j]+'.' );
		} else if ( isNegativeZero( expected[ j ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[j] )+'.' );
		} else if ( isPositiveZero( expected[ j ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[j]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ j ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[j]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array (decreasing order, accessors)', function test( t ) {
	var expected;
	var x;
	var i;
	var j;

	x = [];
	for ( i = 0; i < 100; i++ ) {
		x.push( (randu()*20.0) - 10.0 );
	}

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, -1.0, toAccessorArray( x ), 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		j = expected.length - i - 1;
		if ( isnan( expected[ j ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[j]+'.' );
		} else if ( isNegativeZero( expected[ j ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[j] )+'.' );
		} else if ( isPositiveZero( expected[ j ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[j]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ j ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[j]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array which includes NaNs (increasing order)', function test( t ) {
	var expected;
	var x;
	var v;
	var i;

	x = [];
	for ( i = 0; i < 100; i++ ) {
		if ( randu() < 0.2 ) {
			v = NaN;
		} else {
			v = (randu()*20.0) - 10.0;
		}
		x.push( v );
	}

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, 1.0, x, 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[i]+'.' );
		} else if ( isNegativeZero( expected[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[i] )+'.' );
		} else if ( isPositiveZero( expected[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ i ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[i]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array which includes NaNs (increasing order, accessors)', function test( t ) {
	var expected;
	var x;
	var v;
	var i;

	x = [];
	for ( i = 0; i < 100; i++ ) {
		if ( randu() < 0.2 ) {
			v = NaN;
		} else {
			v = (randu()*20.0) - 10.0;
		}
		x.push( v );
	}

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, 1.0, toAccessorArray( x ), 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[i]+'.' );
		} else if ( isNegativeZero( expected[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[i] )+'.' );
		} else if ( isPositiveZero( expected[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ i ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[i]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array which includes NaNs (decreasing order)', function test( t ) {
	var expected;
	var x;
	var v;
	var i;
	var j;

	x = [];
	for ( i = 0; i < 100; i++ ) {
		if ( randu() < 0.2 ) {
			v = NaN;
		} else {
			v = (randu()*20.0) - 10.0;
		}
		x.push( v );
	}

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, -1.0, x, 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		j = expected.length - i - 1;
		if ( isnan( expected[ j ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[j]+'.' );
		} else if ( isNegativeZero( expected[ j ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[j] )+'.' );
		} else if ( isPositiveZero( expected[ j ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[j]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ j ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[j]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array which includes NaNs (decreasing order, accessors)', function test( t ) {
	var expected;
	var x;
	var v;
	var i;
	var j;

	x = [];
	for ( i = 0; i < 100; i++ ) {
		if ( randu() < 0.2 ) {
			v = NaN;
		} else {
			v = (randu()*20.0) - 10.0;
		}
		x.push( v );
	}

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, -1.0, toAccessorArray( x ), 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		j = expected.length - i - 1;
		if ( isnan( expected[ j ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[j]+'.' );
		} else if ( isNegativeZero( expected[ j ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[j] )+'.' );
		} else if ( isPositiveZero( expected[ j ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[j]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ j ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[j]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array which includes positive and negative zeros (increasing order)', function test( t ) {
	var expected;
	var x;
	var v;
	var i;

	x = [];
	for ( i = 0; i < 100; i++ ) {
		if ( randu() < 0.5 ) {
			v = -0.0;
		} else {
			v = 0.0;
		}
		x.push( v );
	}

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, 1.0, x, 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[i]+'.' );
		} else if ( isNegativeZero( expected[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[i] )+'.' );
		} else if ( isPositiveZero( expected[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ i ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[i]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array which includes positive and negative zeros (increasing order, accessors)', function test( t ) {
	var expected;
	var x;
	var v;
	var i;

	x = [];
	for ( i = 0; i < 100; i++ ) {
		if ( randu() < 0.5 ) {
			v = -0.0;
		} else {
			v = 0.0;
		}
		x.push( v );
	}

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, 1.0, toAccessorArray( x ), 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[i]+'.' );
		} else if ( isNegativeZero( expected[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[i] )+'.' );
		} else if ( isPositiveZero( expected[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ i ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[i]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array which includes positive and negative zeros (decreasing order)', function test( t ) {
	var expected;
	var x;
	var v;
	var i;
	var j;

	x = [];
	for ( i = 0; i < 100; i++ ) {
		if ( randu() < 0.5 ) {
			v = -0.0;
		} else {
			v = 0.0;
		}
		x.push( v );
	}

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, -1.0, x, 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		j = expected.length - i - 1;
		if ( isnan( expected[ j ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[j]+'.' );
		} else if ( isNegativeZero( expected[ j ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[j] )+'.' );
		} else if ( isPositiveZero( expected[ j ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[j]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ j ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[j]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array which includes positive and negative zeros (decreasing order, accessors)', function test( t ) {
	var expected;
	var x;
	var v;
	var i;
	var j;

	x = [];
	for ( i = 0; i < 100; i++ ) {
		if ( randu() < 0.5 ) {
			v = -0.0;
		} else {
			v = 0.0;
		}
		x.push( v );
	}

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, -1.0, toAccessorArray( x ), 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		j = expected.length - i - 1;
		if ( isnan( expected[ j ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[j]+'.' );
		} else if ( isNegativeZero( expected[ j ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[j] )+'.' );
		} else if ( isPositiveZero( expected[ j ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[j]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ j ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[j]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array (increasing order, special cases)', function test( t ) {
	var expected;
	var x;
	var i;

	x = [ NaN, 1.0, -1.0, 2.0, 2.0 ];

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, 1.0, x, 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[i]+'.' );
		} else if ( isNegativeZero( expected[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[i] )+'.' );
		} else if ( isPositiveZero( expected[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ i ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[i]+'.' );
		}
	}

	x = [ 1.0, -1.0, 2.0, 2.0, NaN ];

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, 1.0, x, 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[i]+'.' );
		} else if ( isNegativeZero( expected[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[i] )+'.' );
		} else if ( isPositiveZero( expected[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ i ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[i]+'.' );
		}
	}

	x = [ NaN, 1.0, -1.0, 2.0, 2.0, NaN ];

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, 1.0, x, 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[i]+'.' );
		} else if ( isNegativeZero( expected[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[i] )+'.' );
		} else if ( isPositiveZero( expected[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ i ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[i]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array (increasing order, special cases, accessors)', function test( t ) {
	var expected;
	var x;
	var i;

	x = [ NaN, 1.0, -1.0, 2.0, 2.0 ];

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, 1.0, toAccessorArray( x ), 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[i]+'.' );
		} else if ( isNegativeZero( expected[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[i] )+'.' );
		} else if ( isPositiveZero( expected[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ i ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[i]+'.' );
		}
	}

	x = [ 1.0, -1.0, 2.0, 2.0, NaN ];

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, 1.0, toAccessorArray( x ), 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[i]+'.' );
		} else if ( isNegativeZero( expected[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[i] )+'.' );
		} else if ( isPositiveZero( expected[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ i ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[i]+'.' );
		}
	}

	x = [ NaN, 1.0, -1.0, 2.0, 2.0, NaN ];

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, 1.0, toAccessorArray( x ), 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[i]+'.' );
		} else if ( isNegativeZero( expected[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[i] )+'.' );
		} else if ( isPositiveZero( expected[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ i ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[i]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array (decreasing order, special cases)', function test( t ) {
	var expected;
	var x;
	var i;
	var j;

	x = [ NaN, 1.0, -1.0, 2.0, 2.0 ];

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, -1.0, x, 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		j = expected.length - i - 1;
		if ( isnan( expected[ j ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[j]+'.' );
		} else if ( isNegativeZero( expected[ j ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[j] )+'.' );
		} else if ( isPositiveZero( expected[ j ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[j]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ j ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[j]+'.' );
		}
	}

	x = [ 1.0, -1.0, 2.0, 2.0, NaN ];

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, -1.0, x, 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		j = expected.length - i - 1;
		if ( isnan( expected[ j ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[j]+'.' );
		} else if ( isNegativeZero( expected[ j ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[j] )+'.' );
		} else if ( isPositiveZero( expected[ j ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[j]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ j ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[j]+'.' );
		}
	}

	x = [ NaN, 1.0, -1.0, 2.0, 2.0, NaN ];

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, -1.0, x, 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		j = expected.length - i - 1;
		if ( isnan( expected[ j ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[j]+'.' );
		} else if ( isNegativeZero( expected[ j ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[j] )+'.' );
		} else if ( isPositiveZero( expected[ j ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[j]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ j ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[j]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array (decreasing order, special cases, accessors)', function test( t ) {
	var expected;
	var x;
	var i;
	var j;

	x = [ NaN, 1.0, -1.0, 2.0, 2.0 ];

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, -1.0, toAccessorArray( x ), 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		j = expected.length - i - 1;
		if ( isnan( expected[ j ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[j]+'.' );
		} else if ( isNegativeZero( expected[ j ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[j] )+'.' );
		} else if ( isPositiveZero( expected[ j ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[j]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ j ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[j]+'.' );
		}
	}

	x = [ 1.0, -1.0, 2.0, 2.0, NaN ];

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, -1.0, toAccessorArray( x ), 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		j = expected.length - i - 1;
		if ( isnan( expected[ j ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[j]+'.' );
		} else if ( isNegativeZero( expected[ j ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[j] )+'.' );
		} else if ( isPositiveZero( expected[ j ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[j]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ j ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[j]+'.' );
		}
	}

	x = [ NaN, 1.0, -1.0, 2.0, 2.0, NaN ];

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = x.slice().sort( ascending );

	gsortins( x.length, -1.0, toAccessorArray( x ), 1, 0 );
	for ( i = 0; i < expected.length; i++ ) {
		j = expected.length - i - 1;
		if ( isnan( expected[ j ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[j]+'.' );
		} else if ( isNegativeZero( expected[ j ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[j] )+'.' );
		} else if ( isPositiveZero( expected[ j ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[j]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ j ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[j]+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	out = gsortins( x.length, 1.0, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'the function returns a reference to the input array (accessors)', function test( t ) {
	var out;
	var x;

	x = toAccessorArray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	out = gsortins( x.length, 1.0, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `x` unchanged', function test( t ) {
	var expected;
	var x;

	x = [ 3.0, -4.0, 1.0 ];
	expected = [ 3.0, -4.0, 1.0 ];

	gsortins( 0, 1.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	gsortins( -4, 1.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if `order` equals `0`, the function returns `x` unchanged', function test( t ) {
	var expected;
	var x;

	x = [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ];
	expected = [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ];

	gsortins( x.length, 0.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride (increasing order)', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	expected = [
		-5.0, // 0
		-3.0,
		2.0,  // 1
		7.0,
		6.0   // 2
	];

	gsortins( 3, 1.0, x, 2, 0 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a stride (increasing order, accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	expected = [
		-5.0, // 0
		-3.0,
		2.0,  // 1
		7.0,
		6.0   // 2
	];

	gsortins( 3, 1.0, toAccessorArray( x ), 2, 0 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a stride (decreasing order)', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	expected = [
		6.0,  // 0
		-3.0,
		2.0,  // 1
		7.0,
		-5.0  // 2
	];

	gsortins( 3, -1.0, x, 2, 0 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a stride (decreasing order, accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	expected = [
		6.0,  // 0
		-3.0,
		2.0,  // 1
		7.0,
		-5.0  // 2
	];

	gsortins( 3, -1.0, toAccessorArray( x ), 2, 0 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride (increasing order)', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	expected = [
		6.0,  // 2
		-3.0,
		2.0,  // 1
		7.0,
		-5.0  // 0
	];

	gsortins( 3, 1.0, x, -2, x.length-1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride (increasing order, accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	expected = [
		6.0,  // 2
		-3.0,
		2.0,  // 1
		7.0,
		-5.0  // 0
	];

	gsortins( 3, 1.0, toAccessorArray( x ), -2, x.length-1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride (decreasing order)', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	expected = [
		-5.0, // 2
		-3.0,
		2.0,  // 1
		7.0,
		6.0   // 0
	];

	gsortins( 3, -1.0, x, -2, x.length-1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride (decreasing order, accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	expected = [
		-5.0, // 2
		-3.0,
		2.0,  // 1
		7.0,
		6.0   // 0
	];

	gsortins( 3, -1.0, toAccessorArray( x ), -2, x.length-1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying an offset (increasing order)', function test( t ) {
	var expected;
	var x;

	x = [
		1.0,
		-2.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-6.0  // 2
	];
	expected = [
		1.0,
		-6.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-2.0  // 2
	];

	gsortins( 3, 1.0, x, 2, 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying an offset (increasing order, accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		1.0,
		-2.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-6.0  // 2
	];
	expected = [
		1.0,
		-6.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-2.0  // 2
	];

	gsortins( 3, 1.0, toAccessorArray( x ), 2, 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying an offset (decreasing order)', function test( t ) {
	var expected;
	var x;

	x = [
		1.0,
		-6.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-2.0  // 2
	];
	expected = [
		1.0,
		-2.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-6.0  // 2
	];

	gsortins( 3, -1.0, x, 2, 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying an offset (decreasing order, accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		1.0,
		-6.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-2.0  // 2
	];
	expected = [
		1.0,
		-2.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-6.0  // 2
	];

	gsortins( 3, -1.0, toAccessorArray( x ), 2, 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns (increasing order)', function test( t ) {
	var expected;
	var x;

	x = [
		1.0,
		-4.0, // 2
		3.0,
		-2.0, // 1
		5.0,
		-6.0  // 0
	];
	expected = [
		1.0,
		-2.0, // 2
		3.0,
		-4.0, // 1
		5.0,
		-6.0  // 0
	];

	gsortins( 3, 1.0, x, -2, x.length-1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns (decreasing order)', function test( t ) {
	var expected;
	var x;

	x = [
		1.0,
		-2.0, // 2
		3.0,
		-4.0, // 1
		5.0,
		-6.0  // 0
	];
	expected = [
		1.0,
		-6.0, // 2
		3.0,
		-4.0, // 1
		5.0,
		-2.0  // 0
	];

	gsortins( 3, -1.0, x, -2, x.length-1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});
