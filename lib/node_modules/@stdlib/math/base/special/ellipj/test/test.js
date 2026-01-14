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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var ellipj = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ellipj, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is an `assign` method', function test( t ) {
	t.strictEqual( hasOwnProp( ellipj, 'assign' ), true, 'has property' );
	t.strictEqual( typeof ellipj.assign, 'function', 'has method' );
	t.end();
});

tape( 'attached to the main export are `sn`, `cn`, `dn`, and `am` methods', function test( t ) {
	t.strictEqual( hasOwnProp( ellipj, 'sn' ), true, 'has property sn' );
	t.strictEqual( hasOwnProp( ellipj, 'cn' ), true, 'has property cn' );
	t.strictEqual( hasOwnProp( ellipj, 'dn' ), true, 'has property dn' );
	t.strictEqual( hasOwnProp( ellipj, 'am' ), true, 'has property am' );
	t.strictEqual( typeof ellipj.sn, 'function', 'has method sn' );
	t.strictEqual( typeof ellipj.cn, 'function', 'has method cn' );
	t.strictEqual( typeof ellipj.dn, 'function', 'has method dn' );
	t.strictEqual( typeof ellipj.am, 'function', 'has method am' );
	t.end();
});
