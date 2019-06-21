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

// MAIN //

// TODO: remove once we have stdlib pkg equivalents
var GLOBALS = {
	'Array': Array,
	'Boolean': Boolean,
	'Date': Date,
	'Function': Function,
	'Object': Object,
	'parseFloat': parseFloat,
	'parseInt': parseInt,
	'RegExp': RegExp,
	'String': String,

	// TODO: BigInt, DataView, Map, Set, Promise, Reflect(?), WeakMap, WeakSet, WebAssembly

	'Error': Error,
	'EvalError': EvalError,
	'RangeError': RangeError,
	'ReferenceError': ReferenceError,
	'SyntaxError': SyntaxError,
	'TypeError': TypeError,
	'URIError': URIError,

	'clearImmediate': clearImmediate,
	'clearInterval': clearInterval,
	'clearTimeout': clearTimeout,
	'setImmediate': setImmediate,
	'setInterval': setInterval,
	'setTimeout': setTimeout
};


// EXPORTS //

module.exports = GLOBALS;
