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

/* eslint-disable no-new-wrappers, no-empty-function, stdlib/require-globals */

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var hasSymbols = require( '@stdlib/assert/has-symbol-support' );
var pkg = require( './../package.json' ).name;
var isSymbol = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasSymbols()
};


// MAIN //

bench( pkg+'::primitives', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isSymbol( values[ i % values.length ] );
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( isBoolean( bool ) ) {
		b.pass( 'benchmark finished' );
	} else {
		b.fail( 'should return a boolean' );
	}
	b.end();
});

bench( pkg+'::objects', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		[],
		{},
		function noop() {},
		new String( 'beep' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isSymbol( values[ i % values.length ] );
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( isBoolean( bool ) ) {
		b.pass( 'benchmark finished' );
	} else {
		b.fail( 'should return a boolean' );
	}
	b.end();
});

bench( pkg+'::primitives:isPrimitive', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isSymbol.isPrimitive( values[ i % values.length ] );
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( isBoolean( bool ) ) {
		b.pass( 'benchmark finished' );
	} else {
		b.fail( 'should return a boolean' );
	}
	b.end();
});

bench( pkg+'::objects:isPrimitive', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		[],
		{},
		function noop() {},
		new String( 'beep' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isSymbol.isPrimitive( values[ i % values.length ] );
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( isBoolean( bool ) ) {
		b.pass( 'benchmark finished' );
	} else {
		b.fail( 'should return a boolean' );
	}
	b.end();
});

bench( pkg+'::primitives:isObject', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isSymbol.isObject( values[ i % values.length ] );
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( isBoolean( bool ) ) {
		b.pass( 'benchmark finished' );
	} else {
		b.fail( 'should return a boolean' );
	}
	b.end();
});

bench( pkg+'::objects:isObject', function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		[],
		{},
		function noop() {},
		new String( 'beep' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isSymbol.isObject( values[ i % values.length ] );
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( isBoolean( bool ) ) {
		b.pass( 'benchmark finished' );
	} else {
		b.fail( 'should return a boolean' );
	}
	b.end();
});

bench( pkg+'::primitives,symbols', opts, function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		Symbol( 'beep' ),
		Symbol( 'boop' ),
		Symbol( 'foo' ),
		Symbol( 'bar' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isSymbol( values[ i % values.length ] );
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( isBoolean( bool ) ) {
		b.pass( 'benchmark finished' );
	} else {
		b.fail( 'should return a boolean' );
	}
	b.end();
});

bench( pkg+'::objects,symbols', opts, function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		Object( Symbol( 'beep' ) ),
		Object( Symbol( 'boop' ) ),
		Object( Symbol( 'foo' ) ),
		Object( Symbol( 'bar' ) )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isSymbol( values[ i % values.length ] );
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( isBoolean( bool ) ) {
		b.pass( 'benchmark finished' );
	} else {
		b.fail( 'should return a boolean' );
	}
	b.end();
});

bench( pkg+'::primitives,symbols:isPrimitive', opts, function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		Symbol( 'beep' ),
		Symbol( 'boop' ),
		Symbol( 'foo' ),
		Symbol( 'bar' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isSymbol.isPrimitive( values[ i % values.length ] );
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( isBoolean( bool ) ) {
		b.pass( 'benchmark finished' );
	} else {
		b.fail( 'should return a boolean' );
	}
	b.end();
});

bench( pkg+'::objects,symbols:isPrimitive', opts, function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		Object( Symbol( 'beep' ) ),
		Object( Symbol( 'boop' ) ),
		Object( Symbol( 'foo' ) ),
		Object( Symbol( 'bar' ) )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isSymbol.isPrimitive( values[ i % values.length ] );
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( isBoolean( bool ) ) {
		b.pass( 'benchmark finished' );
	} else {
		b.fail( 'should return a boolean' );
	}
	b.end();
});

bench( pkg+'::primitives,symbols:isObject', opts, function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		Symbol( 'beep' ),
		Symbol( 'boop' ),
		Symbol( 'foo' ),
		Symbol( 'bar' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isSymbol.isObject( values[ i % values.length ] );
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( isBoolean( bool ) ) {
		b.pass( 'benchmark finished' );
	} else {
		b.fail( 'should return a boolean' );
	}
	b.end();
});

bench( pkg+'::objects,symbols:isObject', opts, function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		Object( Symbol( 'beep' ) ),
		Object( Symbol( 'boop' ) ),
		Object( Symbol( 'foo' ) ),
		Object( Symbol( 'bar' ) )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isSymbol.isObject( values[ i % values.length ] );
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( isBoolean( bool ) ) {
		b.pass( 'benchmark finished' );
	} else {
		b.fail( 'should return a boolean' );
	}
	b.end();
});
