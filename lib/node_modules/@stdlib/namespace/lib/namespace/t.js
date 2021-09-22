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
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'tabulate',
	'path': '@stdlib/utils/tabulate',
	'value': require( '@stdlib/utils/tabulate' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/count-by',
		'@stdlib/utils/group-by',
		'@stdlib/utils/tabulate-by'
	]
});

ns.push({
	'alias': 'tabulateBy',
	'path': '@stdlib/utils/tabulate-by',
	'value': require( '@stdlib/utils/tabulate-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/count-by',
		'@stdlib/utils/group-by',
		'@stdlib/utils/tabulate'
	]
});

ns.push({
	'alias': 'tabulateByAsync',
	'path': '@stdlib/utils/async/tabulate-by',
	'value': require( '@stdlib/utils/async/tabulate-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/count-by',
		'@stdlib/utils/async/group-by',
		'@stdlib/utils/tabulate-by'
	]
});

ns.push({
	'alias': 'tic',
	'path': '@stdlib/time/tic',
	'value': require( '@stdlib/time/tic' ),
	'type': 'Function',
	'related': [
		'@stdlib/time/toc'
	]
});

ns.push({
	'alias': 'timeit',
	'path': '@stdlib/utils/timeit',
	'value': require( '@stdlib/utils/timeit' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'tmpdir',
	'path': '@stdlib/os/tmpdir',
	'value': require( '@stdlib/os/tmpdir' ),
	'type': 'Function',
	'related': [
		'@stdlib/os/configdir',
		'@stdlib/os/homedir'
	]
});

ns.push({
	'alias': 'toc',
	'path': '@stdlib/time/toc',
	'value': require( '@stdlib/time/toc' ),
	'type': 'Function',
	'related': [
		'@stdlib/time/tic'
	]
});

ns.push({
	'alias': 'tokenize',
	'path': '@stdlib/nlp/tokenize',
	'value': require( '@stdlib/nlp/tokenize' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'transformStream',
	'path': '@stdlib/streams/node/transform',
	'value': require( '@stdlib/streams/node/transform' ),
	'type': 'Function',
	'related': [
		'@stdlib/streams/node/readable',
		'@stdlib/streams/node/writable'
	]
});

ns.push({
	'alias': 'trim',
	'path': '@stdlib/string/trim',
	'value': require( '@stdlib/string/trim' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/left-trim',
		'@stdlib/string/pad',
		'@stdlib/string/right-trim'
	]
});

ns.push({
	'alias': 'truncate',
	'path': '@stdlib/string/truncate',
	'value': require( '@stdlib/string/truncate' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/truncate-middle'
	]
});

ns.push({
	'alias': 'truncateMiddle',
	'path': '@stdlib/string/truncate-middle',
	'value': require( '@stdlib/string/truncate-middle' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/truncate'
	]
});

ns.push({
	'alias': 'trycatch',
	'path': '@stdlib/utils/try-catch',
	'value': require( '@stdlib/utils/try-catch' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/try-catch',
		'@stdlib/utils/try-then'
	]
});

ns.push({
	'alias': 'trycatchAsync',
	'path': '@stdlib/utils/async/try-catch',
	'value': require( '@stdlib/utils/async/try-catch' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/try-catch',
		'@stdlib/utils/async/try-then'
	]
});

ns.push({
	'alias': 'tryFunction',
	'path': '@stdlib/utils/try-function',
	'value': require( '@stdlib/utils/try-function' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'tryRequire',
	'path': '@stdlib/utils/try-require',
	'value': require( '@stdlib/utils/try-require' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'trythen',
	'path': '@stdlib/utils/try-then',
	'value': require( '@stdlib/utils/try-then' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/try-catch',
		'@stdlib/utils/async/try-then'
	]
});

ns.push({
	'alias': 'trythenAsync',
	'path': '@stdlib/utils/async/try-then',
	'value': require( '@stdlib/utils/async/try-then' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/try-catch',
		'@stdlib/utils/try-then'
	]
});

ns.push({
	'alias': 'ttest',
	'path': '@stdlib/stats/ttest',
	'value': require( '@stdlib/stats/ttest' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/ttest2'
	]
});

ns.push({
	'alias': 'ttest2',
	'path': '@stdlib/stats/ttest2',
	'value': require( '@stdlib/stats/ttest2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/ttest'
	]
});

ns.push({
	'alias': 'TWO_PI',
	'path': '@stdlib/constants/float64/two-pi',
	'value': require( '@stdlib/constants/float64/two-pi' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/pi'
	]
});

ns.push({
	'alias': 'typedarray',
	'path': '@stdlib/array/typed',
	'value': require( '@stdlib/array/typed' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/float64',
		'@stdlib/array/float32',
		'@stdlib/array/int32',
		'@stdlib/array/uint32',
		'@stdlib/array/int16',
		'@stdlib/array/uint16',
		'@stdlib/array/int8',
		'@stdlib/array/uint8',
		'@stdlib/array/uint8c'
	]
});

ns.push({
	'alias': 'typedarray2json',
	'path': '@stdlib/array/to-json',
	'value': require( '@stdlib/array/to-json' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/reviver'
	]
});

ns.push({
	'alias': 'typedarrayComplexCtors',
	'path': '@stdlib/array/typed-complex-ctors',
	'value': require( '@stdlib/array/typed-complex-ctors' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/ctors',
		'@stdlib/array/typed-ctors'
	]
});

ns.push({
	'alias': 'typedarrayComplexDataTypes',
	'path': '@stdlib/array/typed-complex-dtypes',
	'value': require( '@stdlib/array/typed-complex-dtypes' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/dtypes',
		'@stdlib/array/typed-dtypes',
		'@stdlib/ndarray/dtypes'
	]
});

ns.push({
	'alias': 'typedarrayCtors',
	'path': '@stdlib/array/typed-ctors',
	'value': require( '@stdlib/array/typed-ctors' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/ctors'
	]
});

ns.push({
	'alias': 'typedarrayDataTypes',
	'path': '@stdlib/array/typed-dtypes',
	'value': require( '@stdlib/array/typed-dtypes' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/dtypes',
		'@stdlib/ndarray/dtypes'
	]
});

ns.push({
	'alias': 'typedarraypool',
	'path': '@stdlib/array/pool',
	'value': require( '@stdlib/array/pool' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/typed'
	]
});

ns.push({
	'alias': 'typemax',
	'path': '@stdlib/utils/type-max',
	'value': require( '@stdlib/utils/type-max' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/real-max',
		'@stdlib/utils/type-min'
	]
});

ns.push({
	'alias': 'typemin',
	'path': '@stdlib/utils/type-min',
	'value': require( '@stdlib/utils/type-min' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/real-min',
		'@stdlib/utils/type-max'
	]
});

ns.push({
	'alias': 'typeOf',
	'path': '@stdlib/utils/type-of',
	'value': require( '@stdlib/utils/type-of' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/constructor-name',
		'@stdlib/utils/native-class'
	]
});


// EXPORTS //

module.exports = ns;
