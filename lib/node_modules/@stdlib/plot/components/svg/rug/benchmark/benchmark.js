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

var bench = require( '@stdlib/bench' );
var noop = require( '@stdlib/utils/noop' );
var randu = require( '@stdlib/random/base/randu' );
var isArray = require( '@stdlib/assert/is-array' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var Rug = require( './../lib' );


// MAIN //

bench( format( '%s::instantiation', pkg ), function benchmark( b ) {
	var node;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		node = new Rug();
		if ( !( node instanceof Rug ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( !( node instanceof Rug ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::instantiation,no_new', pkg ), function benchmark( b ) {
	var ctor;
	var node;
	var i;

	ctor = Rug;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		node = ctor();
		if ( !( node instanceof Rug ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( !( node instanceof Rug ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::instantiation,options', pkg ), function benchmark( b ) {
	var node;
	var opts;
	var i;

	opts = {
		'autoRender': false,
		'color': '#474747',
		'data': [ 1, 2, 3 ],
		'isDefined': noop,
		'label': 'beep',
		'opacity': 1.0,
		'orientation': 'left',
		'size': 10,
		'scale': noop
	};
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		node = new Rug( opts );
		if ( !( node instanceof Rug ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( !( node instanceof Rug ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::set,get:autoRender', pkg ), function benchmark( b ) {
	var node;
	var bool;
	var i;

	node = new Rug();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		node.autoRender = !bool;
		if ( typeof node.autoRender !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( typeof node.autoRender !== 'boolean' ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::set,get:color', pkg ), function benchmark( b ) {
	var values;
	var node;
	var i;

	values = [
		'#fff',
		'#000'
	];
	node = new Rug();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		node.color = values[ i % values.length ];
		if ( typeof node.color !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( typeof node.color !== 'function' ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::set,get:data', pkg ), function benchmark( b ) {
	var node;
	var i;

	node = new Rug();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		node.data = [ randu(), randu(), randu() ];
		if ( typeof node.data !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArray( node.data ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::set,get:isDefined', pkg ), function benchmark( b ) {
	var node;
	var i;

	node = new Rug();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		node.isDefined = createFcn();
		if ( typeof node.isDefined !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( typeof node.isDefined !== 'function' ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function createFcn() {
		return beep;
		function beep() {
			// No-op...
		}
	}
});

bench( format( '%s::set,get:label', pkg ), function benchmark( b ) {
	var values;
	var node;
	var i;

	values = [
		'beep',
		'boop'
	];
	node = new Rug();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		node.label = values[ i % values.length ];
		if ( typeof node.label !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( typeof node.label !== 'function' ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::set,get:opacity', pkg ), function benchmark( b ) {
	var node;
	var i;

	node = new Rug();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		node.opacity = randu();
		if ( typeof node.opacity !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( typeof node.opacity !== 'function' ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::set,get:orientation', pkg ), function benchmark( b ) {
	var values;
	var node;
	var v;
	var i;

	values = [
		'left',
		'right',
		'top',
		'bottom'
	];
	node = new Rug();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = values[ i % values.length ];
		node.orientation = v;
		if ( node.orientation !== v ) {
			b.fail( 'should return set value' );
		}
	}
	b.toc();
	if ( typeof node.orientation !== 'string' ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::set,get:scale', pkg ), function benchmark( b ) {
	var node;
	var i;

	node = new Rug();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		node.scale = createFcn();
		if ( typeof node.scale !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( typeof node.scale !== 'function' ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function createFcn() {
		return beep;
		function beep() {
			// No-op...
		}
	}
});

bench( format( '%s::set,get:size', pkg ), function benchmark( b ) {
	var values;
	var node;
	var v;
	var i;

	values = [
		1,
		2,
		3,
		4,
		5,
		6
	];
	node = new Rug();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = values[ i % values.length ];
		node.size = v;
		if ( node.size !== v ) {
			b.fail( 'should return set value' );
		}
	}
	b.toc();
	if ( typeof node.size !== 'number' ) {
		b.fail( 'should return a number' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
