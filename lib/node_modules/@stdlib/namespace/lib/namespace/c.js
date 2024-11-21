/* eslint-disable max-lines */

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

// MAIN //

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'camelcase',
	'path': '@stdlib/string/camelcase',
	'value': require( '@stdlib/string/camelcase' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/constantcase',
		'@stdlib/string/kebabcase',
		'@stdlib/string/pascalcase',
		'@stdlib/string/snakecase'
	]
});

ns.push({
	'alias': 'capitalize',
	'path': '@stdlib/string/capitalize',
	'value': require( '@stdlib/string/capitalize' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/uncapitalize',
		'@stdlib/string/uppercase'
	]
});

ns.push({
	'alias': 'capitalizeKeys',
	'path': '@stdlib/utils/capitalize-keys',
	'value': require( '@stdlib/utils/capitalize-keys' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/uncapitalize-keys',
		'@stdlib/utils/uppercase-keys'
	]
});

ns.push({
	'alias': 'CATALAN',
	'path': '@stdlib/constants/float64/catalan',
	'value': require( '@stdlib/constants/float64/catalan' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'CBRT_EPS',
	'path': '@stdlib/constants/float64/cbrt-eps',
	'value': require( '@stdlib/constants/float64/cbrt-eps' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/eps',
		'@stdlib/constants/float64/sqrt-eps'
	]
});

ns.push({
	'alias': 'CDC_NCHS_US_BIRTHS_1969_1988',
	'path': '@stdlib/datasets/cdc-nchs-us-births-1969-1988',
	'value': require( '@stdlib/datasets/cdc-nchs-us-births-1969-1988' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/cdc-nchs-us-births-1994-2003',
		'@stdlib/datasets/ssa-us-births-2000-2014'
	]
});

ns.push({
	'alias': 'CDC_NCHS_US_BIRTHS_1994_2003',
	'path': '@stdlib/datasets/cdc-nchs-us-births-1994-2003',
	'value': require( '@stdlib/datasets/cdc-nchs-us-births-1994-2003' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/cdc-nchs-us-births-1969-1988',
		'@stdlib/datasets/ssa-us-births-2000-2014'
	]
});

ns.push({
	'alias': 'CDC_NCHS_US_INFANT_MORTALITY_BW_1915_2013',
	'path': '@stdlib/datasets/cdc-nchs-us-infant-mortality-bw-1915-2013',
	'value': require( '@stdlib/datasets/cdc-nchs-us-infant-mortality-bw-1915-2013' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'chdir',
	'path': '@stdlib/process/chdir',
	'value': require( '@stdlib/process/chdir' ),
	'type': 'Function',
	'related': [
		'@stdlib/process/cwd'
	]
});

ns.push({
	'alias': 'chi2gof',
	'path': '@stdlib/stats/chi2gof',
	'value': require( '@stdlib/stats/chi2gof' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'chi2test',
	'path': '@stdlib/stats/chi2test',
	'value': require( '@stdlib/stats/chi2test' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'circarray2iterator',
	'path': '@stdlib/array/to-circular-iterator',
	'value': require( '@stdlib/array/to-circular-iterator' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/to-iterator',
		'@stdlib/array/to-strided-iterator'
	]
});

ns.push({
	'alias': 'circularArrayStream',
	'path': '@stdlib/streams/node/from-circular-array',
	'value': require( '@stdlib/streams/node/from-circular-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/streams/node/from-array',
		'@stdlib/streams/node/from-iterator',
		'@stdlib/streams/node/from-strided-array'
	]
});

ns.push({
	'alias': 'CircularBuffer',
	'path': '@stdlib/utils/circular-buffer',
	'value': require( '@stdlib/utils/circular-buffer' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/fifo',
		'@stdlib/utils/stack'
	]
});

ns.push({
	'alias': 'close',
	'path': '@stdlib/fs/close',
	'value': require( '@stdlib/fs/close' ),
	'type': 'Function',
	'related': [
		'@stdlib/fs/exists',
		'@stdlib/fs/open',
		'@stdlib/fs/read-file'
	]
});

ns.push({
	'alias': 'CMUDICT',
	'path': '@stdlib/datasets/cmudict',
	'value': require( '@stdlib/datasets/cmudict' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'codePointAt',
	'path': '@stdlib/string/code-point-at',
	'value': require( '@stdlib/string/code-point-at' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/from-code-point'
	]
});

ns.push({
	'alias': 'commonKeys',
	'path': '@stdlib/utils/common-keys',
	'value': require( '@stdlib/utils/common-keys' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/common-keys-in',
		'@stdlib/utils/keys'
	]
});

ns.push({
	'alias': 'commonKeysIn',
	'path': '@stdlib/utils/common-keys-in',
	'value': require( '@stdlib/utils/common-keys-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/common-keys',
		'@stdlib/utils/keys-in'
	]
});

ns.push({
	'alias': 'complex',
	'path': '@stdlib/complex/cmplx',
	'value': require( '@stdlib/complex/cmplx' ),
	'type': 'Function',
	'related': [
		'@stdlib/complex/float64/ctor',
		'@stdlib/complex/float32/ctor'
	]
});

ns.push({
	'alias': 'Complex64',
	'path': '@stdlib/complex/float32/ctor',
	'value': require( '@stdlib/complex/float32/ctor' ),
	'type': 'Function',
	'related': [
		'@stdlib/complex/cmplx',
		'@stdlib/complex/float64/ctor'
	]
});

ns.push({
	'alias': 'COMPLEX64_NAN',
	'path': '@stdlib/constants/complex64/nan',
	'value': require( '@stdlib/constants/complex64/nan' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/complex128/nan'
	]
});

ns.push({
	'alias': 'COMPLEX64_NUM_BYTES',
	'path': '@stdlib/constants/complex64/num-bytes',
	'value': require( '@stdlib/constants/complex64/num-bytes' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/complex128/num-bytes',
		'@stdlib/constants/float32/num-bytes'
	]
});

ns.push({
	'alias': 'COMPLEX64_ZERO',
	'path': '@stdlib/constants/complex64/zero',
	'value': require( '@stdlib/constants/complex64/zero' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/complex128/zero'
	]
});

ns.push({
	'alias': 'Complex64Array',
	'path': '@stdlib/array/complex64',
	'value': require( '@stdlib/array/complex64' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/complex128',
		'@stdlib/complex/cmplx',
		'@stdlib/complex/float32/ctor'
	]
});

ns.push({
	'alias': 'Complex128',
	'path': '@stdlib/complex/float64/ctor',
	'value': require( '@stdlib/complex/float64/ctor' ),
	'type': 'Function',
	'related': [
		'@stdlib/complex/cmplx',
		'@stdlib/complex/float32/ctor'
	]
});

ns.push({
	'alias': 'COMPLEX128_NAN',
	'path': '@stdlib/constants/complex128/nan',
	'value': require( '@stdlib/constants/complex128/nan' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/complex64/nan'
	]
});

ns.push({
	'alias': 'COMPLEX128_NUM_BYTES',
	'path': '@stdlib/constants/complex128/num-bytes',
	'value': require( '@stdlib/constants/complex128/num-bytes' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/complex64/num-bytes',
		'@stdlib/constants/float64/num-bytes'
	]
});

ns.push({
	'alias': 'COMPLEX128_ZERO',
	'path': '@stdlib/constants/complex128/zero',
	'value': require( '@stdlib/constants/complex128/zero' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/complex64/zero'
	]
});

ns.push({
	'alias': 'Complex128Array',
	'path': '@stdlib/array/complex128',
	'value': require( '@stdlib/array/complex128' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/complex64',
		'@stdlib/complex/cmplx',
		'@stdlib/complex/float64/ctor'
	]
});

ns.push({
	'alias': 'complexarray',
	'path': '@stdlib/array/typed-complex',
	'value': require( '@stdlib/array/typed-complex' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/typed',
		'@stdlib/array/typed-real'
	]
});

ns.push({
	'alias': 'complexarrayCtors',
	'path': '@stdlib/array/typed-complex-ctors',
	'value': require( '@stdlib/array/typed-complex-ctors' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/ctors',
		'@stdlib/array/typed-ctors',
		'@stdlib/array/typed-real-ctors'
	]
});

ns.push({
	'alias': 'complexarrayDataTypes',
	'path': '@stdlib/array/typed-complex-dtypes',
	'value': require( '@stdlib/array/typed-complex-dtypes' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/dtypes',
		'@stdlib/array/typed-dtypes',
		'@stdlib/array/typed-real-dtypes',
		'@stdlib/ndarray/dtypes'
	]
});

ns.push({
	'alias': 'complexCtors',
	'path': '@stdlib/complex/ctors',
	'value': require( '@stdlib/complex/ctors' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/typed-complex-ctors'
	]
});

ns.push({
	'alias': 'complexDataType',
	'path': '@stdlib/complex/dtype',
	'value': require( '@stdlib/complex/dtype' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/dtype'
	]
});

ns.push({
	'alias': 'complexDataTypes',
	'path': '@stdlib/complex/dtypes',
	'value': require( '@stdlib/complex/dtypes' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/typed-complex-dtypes'
	]
});

ns.push({
	'alias': 'complexPromotionRules',
	'path': '@stdlib/complex/promotion-rules',
	'value': require( '@stdlib/complex/promotion-rules' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/promotion-rules',
		'@stdlib/ndarray/promotion-rules'
	]
});

ns.push({
	'alias': 'compose',
	'path': '@stdlib/utils/compose',
	'value': require( '@stdlib/utils/compose' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/compose'
	]
});

ns.push({
	'alias': 'composeAsync',
	'path': '@stdlib/utils/async/compose',
	'value': require( '@stdlib/utils/async/compose' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/compose'
	]
});

ns.push({
	'alias': 'configdir',
	'path': '@stdlib/os/configdir',
	'value': require( '@stdlib/os/configdir' ),
	'type': 'Function',
	'related': [
		'@stdlib/os/homedir',
		'@stdlib/os/tmpdir'
	]
});

ns.push({
	'alias': 'conj',
	'path': '@stdlib/complex/float64/conj',
	'value': require( '@stdlib/complex/float64/conj' ),
	'type': 'Function',
	'related': [
		'@stdlib/complex/float64/imag',
		'@stdlib/complex/float64/real',
		'@stdlib/complex/float64/reim'
	]
});

ns.push({
	'alias': 'conjf',
	'path': '@stdlib/complex/float32/conj',
	'value': require( '@stdlib/complex/float32/conj' ),
	'type': 'Function',
	'related': [
		'@stdlib/complex/float64/conj',
		'@stdlib/complex/float32/imag',
		'@stdlib/complex/float32/real',
		'@stdlib/complex/float32/reim'
	]
});

ns.push({
	'alias': 'constantcase',
	'path': '@stdlib/string/constantcase',
	'value': require( '@stdlib/string/constantcase' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/camelcase',
		'@stdlib/string/kebabcase',
		'@stdlib/string/pascalcase',
		'@stdlib/string/snakecase'
	]
});

ns.push({
	'alias': 'constantFunction',
	'path': '@stdlib/utils/constant-function',
	'value': require( '@stdlib/utils/constant-function' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/argument-function',
		'@stdlib/utils/identity-function'
	]
});

ns.push({
	'alias': 'constantStream',
	'path': '@stdlib/streams/node/from-constant',
	'value': require( '@stdlib/streams/node/from-constant' ),
	'type': 'Function',
	'related': [
		'@stdlib/streams/node/from-array',
		'@stdlib/streams/node/from-iterator'
	]
});

ns.push({
	'alias': 'constructorName',
	'path': '@stdlib/utils/constructor-name',
	'value': require( '@stdlib/utils/constructor-name' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/function-name'
	]
});

ns.push({
	'alias': 'contains',
	'path': '@stdlib/assert/contains',
	'value': require( '@stdlib/assert/contains' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'convertArray',
	'path': '@stdlib/array/convert',
	'value': require( '@stdlib/array/convert' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/convert-same'
	]
});

ns.push({
	'alias': 'convertArraySame',
	'path': '@stdlib/array/convert-same',
	'value': require( '@stdlib/array/convert-same' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/convert'
	]
});

ns.push({
	'alias': 'convertPath',
	'path': '@stdlib/utils/convert-path',
	'value': require( '@stdlib/utils/convert-path' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'copy',
	'path': '@stdlib/utils/copy',
	'value': require( '@stdlib/utils/copy' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/merge'
	]
});

ns.push({
	'alias': 'copyBuffer',
	'path': '@stdlib/buffer/from-buffer',
	'value': require( '@stdlib/buffer/from-buffer' ),
	'type': 'Function',
	'related': [
		'@stdlib/buffer',
		'@stdlib/buffer/alloc',
		'@stdlib/buffer/alloc-unsafe',
		'@stdlib/buffer/ctor'
	]
});

ns.push({
	'alias': 'countBy',
	'path': '@stdlib/utils/count-by',
	'value': require( '@stdlib/utils/count-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/group',
		'@stdlib/utils/group-by'
	]
});

ns.push({
	'alias': 'countByAsync',
	'path': '@stdlib/utils/async/count-by',
	'value': require( '@stdlib/utils/async/count-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/count-by',
		'@stdlib/utils/async/group-by',
		'@stdlib/utils/async/tabulate-by'
	]
});

ns.push({
	'alias': 'currentYear',
	'path': '@stdlib/time/current-year',
	'value': require( '@stdlib/time/current-year' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-current-year'
	]
});

ns.push({
	'alias': 'curry',
	'path': '@stdlib/utils/curry',
	'value': require( '@stdlib/utils/curry' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/curry-right',
		'@stdlib/utils/uncurry',
		'@stdlib/utils/uncurry-right'
	]
});

ns.push({
	'alias': 'curryRight',
	'path': '@stdlib/utils/curry-right',
	'value': require( '@stdlib/utils/curry-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/curry',
		'@stdlib/utils/uncurry',
		'@stdlib/utils/uncurry-right'
	]
});

ns.push({
	'alias': 'cwd',
	'path': '@stdlib/process/cwd',
	'value': require( '@stdlib/process/cwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/process/chdir'
	]
});


// EXPORTS //

module.exports = ns;
