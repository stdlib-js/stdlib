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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace stdlib
*/
var stdlib = {};

/**
* @name array
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array}
*/
setReadOnly( stdlib, 'array', require( '@stdlib/array' ) );

/**
* @name assert
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/assert}
*/
setReadOnly( stdlib, 'assert', require( '@stdlib/assert' ) );

/**
* @name bench
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/bench}
*/
setReadOnly( stdlib, 'bench', require( '@stdlib/bench' ) );

/**
* @name bigint
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/bigint}
*/
setReadOnly( stdlib, 'bigint', require( '@stdlib/bigint' ) );

/**
* @name blas
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/blas}
*/
setReadOnly( stdlib, 'blas', require( '@stdlib/blas' ) );

/**
* @name buffer
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/buffer}
*/
setReadOnly( stdlib, 'buffer', require( '@stdlib/buffer' ) );

/**
* @name cli
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/cli}
*/
setReadOnly( stdlib, 'cli', require( '@stdlib/cli' ) );

/**
* @name complex
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/complex}
*/
setReadOnly( stdlib, 'complex', require( '@stdlib/complex' ) );

/**
* @name console
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/console}
*/
setReadOnly( stdlib, 'console', require( '@stdlib/console' ) );

/**
* @name constants
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/constants}
*/
setReadOnly( stdlib, 'constants', require( '@stdlib/constants' ) );

/**
* @name datasets
* @memberof stdlib
* @readonly
* @type {Function}
* @see {@link module:@stdlib/datasets}
*/
setReadOnly( stdlib, 'datasets', require( '@stdlib/datasets' ) );

/**
* @name error
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/error}
*/
setReadOnly( stdlib, 'error', require( '@stdlib/error' ) );

/**
* @name fs
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/fs}
*/
setReadOnly( stdlib, 'fs', require( '@stdlib/fs' ) );

/**
* @name function
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/function}
*/
setReadOnly( stdlib, 'function', require( '@stdlib/function' ) );

/**
* @name iter
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/iter}
*/
setReadOnly( stdlib, 'iter', require( '@stdlib/iter' ) );

/**
* @name math
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/math}
*/
setReadOnly( stdlib, 'math', require( '@stdlib/math' ) );

/**
* @name ml
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/ml}
*/
setReadOnly( stdlib, 'ml', require( '@stdlib/ml' ) );

/**
* @name namespace
* @memberof stdlib
* @readonly
* @type {Function}
* @see {@link module:@stdlib/namespace}
*/
setReadOnly( stdlib, 'namespace', require( '@stdlib/namespace' ) );

/**
* @name ndarray
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/ndarray}
*/
setReadOnly( stdlib, 'ndarray', require( '@stdlib/ndarray' ) );

/**
* @name net
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/net}
*/
setReadOnly( stdlib, 'net', require( '@stdlib/net' ) );

/**
* @name nlp
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/nlp}
*/
setReadOnly( stdlib, 'nlp', require( '@stdlib/nlp' ) );

/**
* @name number
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/number}
*/
setReadOnly( stdlib, 'number', require( '@stdlib/number' ) );

/**
* @name object
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/object}
*/
setReadOnly( stdlib, 'object', require( '@stdlib/object' ) );

/**
* @name os
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/os}
*/
setReadOnly( stdlib, 'os', require( '@stdlib/os' ) );

/**
* @name plot
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/plot}
*/
setReadOnly( stdlib, 'plot', require( '@stdlib/plot' ) );

/**
* @name process
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/process}
*/
setReadOnly( stdlib, 'process', require( '@stdlib/process' ) );

/**
* @name proxy
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/proxy}
*/
setReadOnly( stdlib, 'proxy', require( '@stdlib/proxy' ) );

/**
* @name random
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/random}
*/
setReadOnly( stdlib, 'random', require( '@stdlib/random' ) );

/**
* @name regexp
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/regexp}
*/
setReadOnly( stdlib, 'regexp', require( '@stdlib/regexp' ) );

/**
* @name repl
* @memberof stdlib
* @readonly
* @type {Function}
* @see {@link module:@stdlib/repl}
*/
setReadOnly( stdlib, 'repl', require( '@stdlib/repl' ) );

/**
* @name simulate
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/simulate}
*/
setReadOnly( stdlib, 'simulate', require( '@stdlib/simulate' ) );

/**
* @name slice
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/slice}
*/
setReadOnly( stdlib, 'slice', require( '@stdlib/slice' ) );

/**
* @name stats
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/stats}
*/
setReadOnly( stdlib, 'stats', require( '@stdlib/stats' ) );

/**
* @name streams
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/streams}
*/
setReadOnly( stdlib, 'streams', require( '@stdlib/streams' ) );

/**
* @name strided
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/strided}
*/
setReadOnly( stdlib, 'strided', require( '@stdlib/strided' ) );

/**
* @name string
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/string}
*/
setReadOnly( stdlib, 'string', require( '@stdlib/string' ) );

/**
* @name symbol
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/symbol}
*/
setReadOnly( stdlib, 'symbol', require( '@stdlib/symbol' ) );

/**
* @name time
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/time}
*/
setReadOnly( stdlib, 'time', require( '@stdlib/time' ) );

/**
* @name types
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/types}
*/
setReadOnly( stdlib, 'types', require( '@stdlib/types' ) );

/**
* @name utils
* @memberof stdlib
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/utils}
*/
setReadOnly( stdlib, 'utils', require( '@stdlib/utils' ) );


// EXPORTS //

module.exports = stdlib;
