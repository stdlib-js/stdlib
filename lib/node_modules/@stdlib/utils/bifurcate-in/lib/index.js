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

/**
* Split an object's own and inherited property values into two groups according to a predicate function.
*
* @module @stdlib/utils/bifurcate-in
*
* @example
* var bifurcateIn = require( '@stdlib/utils/bifurcate-in' );
*
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
*
* function Foo() {
*     this.a = 'beep';
*     this.b = 'boop';
*     return this;
* }
*
* Foo.prototype = Object.create( null );
* Foo.prototype.c = 'foo';
* Foo.prototype.d = 'bar';
*
* var obj = new Foo();
*
* var out = bifurcateIn( obj, predicate );
* // e.g., returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
*
* @example
* var bifurcateIn = require( '@stdlib/utils/bifurcate-in' );
*
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
*
* function Foo() {
*     this.a = 'beep';
*     this.b = 'boop';
*     return this;
* }
*
* Foo.prototype = Object.create( null );
* Foo.prototype.c = 'foo';
* Foo.prototype.d = 'bar';
*
* var obj = new Foo();
*
* var opts = {
*     'returns': 'keys'
* };
* var out = bifurcateIn( obj, opts, predicate );
* // e.g., returns [ [ 'a', 'b', 'd' ], [ 'c' ] ]
*
* @example
* var bifurcateIn = require( '@stdlib/utils/bifurcate-in' );
*
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
*
* function Foo() {
*     this.a = 'beep';
*     this.b = 'boop';
*     return this;
* }
*
* Foo.prototype = Object.create( null );
* Foo.prototype.c = 'foo';
* Foo.prototype.d = 'bar';
*
* var obj = new Foo();
*
* var opts = {
*     'returns': '*'
* };
* var out = bifurcateIn( obj, opts, predicate );
* // e.g., returns [ [ [ 'a', 'beep' ], [ 'b', 'boop' ], [ 'd', 'bar' ] ], [ [ 'c', 'foo' ] ] ]
*/

// MODULES //

var bifurcateIn = require( './main.js' );


// EXPORTS //

module.exports = bifurcateIn;
