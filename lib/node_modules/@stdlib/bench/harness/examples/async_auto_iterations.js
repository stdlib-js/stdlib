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

/* eslint-disable no-restricted-syntax */

'use strict';

var bench = require( './../lib' );

var opts = {
	'iterations': null,
	'repeats': 3
};

bench( 'async', opts, function benchmark( b ) {
	var i = 0;

	b.tic();
	setTimeout( next, 0 );

	function next( error ) {
		if ( error ) {
			return b.fail( error.message );
		}
		i += 1;
		if ( i <= b.iterations ) {
			return setTimeout( next, 0 );
		}
		b.toc();
		b.pass( 'benchmark finished' );
		after();
	}

	function after() {
		setTimeout( onAfter, 0 );
	}

	function onAfter() {
		b.end();
	}
});
