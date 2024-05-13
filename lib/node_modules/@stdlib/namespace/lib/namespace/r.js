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

/* eslint-disable stdlib/require-order */

'use strict';

// MODULES //

var append = require( './append.js' );


// MAIN //

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

append( ns, require( './random' ) );

ns.push({
	'alias': 'ranks',
	'path': '@stdlib/stats/ranks',
	'value': require( '@stdlib/stats/ranks' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'readDir',
	'path': '@stdlib/fs/read-dir',
	'value': require( '@stdlib/fs/read-dir' ),
	'type': 'Function',
	'related': [
		'@stdlib/fs/exists',
		'@stdlib/fs/read-file'
	]
});

ns.push({
	'alias': 'readFile',
	'path': '@stdlib/fs/read-file',
	'value': require( '@stdlib/fs/read-file' ),
	'type': 'Function',
	'related': [
		'@stdlib/fs/exists',
		'@stdlib/fs/open',
		'@stdlib/fs/read-dir',
		'@stdlib/fs/read-json',
		'@stdlib/fs/write-file'
	]
});

ns.push({
	'alias': 'readFileList',
	'path': '@stdlib/fs/read-file-list',
	'value': require( '@stdlib/fs/read-file-list' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'readJSON',
	'path': '@stdlib/fs/read-json',
	'value': require( '@stdlib/fs/read-json' ),
	'type': 'Function',
	'related': [
		'@stdlib/fs/read-file'
	]
});

ns.push({
	'alias': 'readWASM',
	'path': '@stdlib/fs/read-wasm',
	'value': require( '@stdlib/fs/read-wasm' ),
	'type': 'Function',
	'related': [
		'@stdlib/fs/read-file'
	]
});

ns.push({
	'alias': 'real',
	'path': '@stdlib/complex/real',
	'value': require( '@stdlib/complex/real' ),
	'type': 'Function',
	'related': [
		'@stdlib/complex/imag',
		'@stdlib/complex/reim'
	]
});

ns.push({
	'alias': 'realarray',
	'path': '@stdlib/array/typed-real',
	'value': require( '@stdlib/array/typed-real' ),
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
	'alias': 'realarrayCtors',
	'path': '@stdlib/array/typed-real-ctors',
	'value': require( '@stdlib/array/typed-real-ctors' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/ctors',
		'@stdlib/array/typed-complex-ctors'
	]
});

ns.push({
	'alias': 'realarrayDataTypes',
	'path': '@stdlib/array/typed-real-dtypes',
	'value': require( '@stdlib/array/typed-real-dtypes' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/dtypes',
		'@stdlib/array/typed-complex-dtypes'
	]
});

ns.push({
	'alias': 'realf',
	'path': '@stdlib/complex/realf',
	'value': require( '@stdlib/complex/realf' ),
	'type': 'Function',
	'related': [
		'@stdlib/complex/imagf',
		'@stdlib/complex/real',
		'@stdlib/complex/reimf'
	]
});

ns.push({
	'alias': 'realmax',
	'path': '@stdlib/utils/real-max',
	'value': require( '@stdlib/utils/real-max' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/real-min',
		'@stdlib/utils/type-max'
	]
});

ns.push({
	'alias': 'realmin',
	'path': '@stdlib/utils/real-min',
	'value': require( '@stdlib/utils/real-min' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/real-max',
		'@stdlib/utils/type-min'
	]
});

ns.push({
	'alias': 'reBasename',
	'path': '@stdlib/regexp/basename',
	'value': require( '@stdlib/regexp/basename' ),
	'type': 'Function',
	'related': [
		'@stdlib/regexp/basename-posix',
		'@stdlib/regexp/basename-windows'
	]
});

ns.push({
	'alias': 'reBasenamePosix',
	'path': '@stdlib/regexp/basename-posix',
	'value': require( '@stdlib/regexp/basename-posix' ),
	'type': 'Function',
	'related': [
		'@stdlib/regexp/basename',
		'@stdlib/regexp/basename-windows'
	]
});

ns.push({
	'alias': 'reBasenameWindows',
	'path': '@stdlib/regexp/basename-windows',
	'value': require( '@stdlib/regexp/basename-windows' ),
	'type': 'Function',
	'related': [
		'@stdlib/regexp/basename',
		'@stdlib/regexp/basename-posix'
	]
});

ns.push({
	'alias': 'reColorHexadecimal',
	'path': '@stdlib/regexp/color-hexadecimal',
	'value': require( '@stdlib/regexp/color-hexadecimal' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'reDecimalNumber',
	'path': '@stdlib/regexp/decimal-number',
	'value': require( '@stdlib/regexp/decimal-number' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'reDirname',
	'path': '@stdlib/regexp/dirname',
	'value': require( '@stdlib/regexp/dirname' ),
	'type': 'Function',
	'related': [
		'@stdlib/regexp/dirname-posix',
		'@stdlib/regexp/dirname-windows',
		'@stdlib/utils/dirname'
	]
});

ns.push({
	'alias': 'reDirnamePosix',
	'path': '@stdlib/regexp/dirname-posix',
	'value': require( '@stdlib/regexp/dirname-posix' ),
	'type': 'Function',
	'related': [
		'@stdlib/regexp/dirname',
		'@stdlib/regexp/dirname-windows',
		'@stdlib/utils/dirname'
	]
});

ns.push({
	'alias': 'reDirnameWindows',
	'path': '@stdlib/regexp/dirname-windows',
	'value': require( '@stdlib/regexp/dirname-windows' ),
	'type': 'Function',
	'related': [
		'@stdlib/regexp/dirname',
		'@stdlib/regexp/dirname-posix',
		'@stdlib/utils/dirname'
	]
});

ns.push({
	'alias': 'reduce',
	'path': '@stdlib/utils/reduce',
	'value': require( '@stdlib/utils/reduce' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/for-each',
		'@stdlib/utils/map',
		'@stdlib/utils/async/reduce',
		'@stdlib/utils/reduce-right'
	]
});

ns.push({
	'alias': 'reduce2d',
	'path': '@stdlib/utils/reduce2d',
	'value': require( '@stdlib/utils/reduce2d' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/map2d',
		'@stdlib/utils/reduce',
		'@stdlib/utils/reduce3d',
		'@stdlib/utils/reduce4d',
		'@stdlib/utils/reduce5d'
	]
});

ns.push({
	'alias': 'reduceAsync',
	'path': '@stdlib/utils/async/reduce',
	'value': require( '@stdlib/utils/async/reduce' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/for-each',
		'@stdlib/utils/async/map',
		'@stdlib/utils/reduce',
		'@stdlib/utils/async/reduce-right'
	]
});

ns.push({
	'alias': 'reduceRight',
	'path': '@stdlib/utils/reduce-right',
	'value': require( '@stdlib/utils/reduce-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/for-each-right',
		'@stdlib/utils/map-right',
		'@stdlib/utils/reduce',
		'@stdlib/utils/async/reduce-right'
	]
});

ns.push({
	'alias': 'reduceRightAsync',
	'path': '@stdlib/utils/async/reduce-right',
	'value': require( '@stdlib/utils/async/reduce-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/for-each-right',
		'@stdlib/utils/async/map-right',
		'@stdlib/utils/async/reduce',
		'@stdlib/utils/reduce-right'
	]
});

ns.push({
	'alias': 'reDurationString',
	'path': '@stdlib/regexp/duration-string',
	'value': require( '@stdlib/regexp/duration-string' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'reEOL',
	'path': '@stdlib/regexp/eol',
	'value': require( '@stdlib/regexp/eol' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'reExtendedLengthPath',
	'path': '@stdlib/regexp/extended-length-path',
	'value': require( '@stdlib/regexp/extended-length-path' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'reExtname',
	'path': '@stdlib/regexp/extname',
	'value': require( '@stdlib/regexp/extname' ),
	'type': 'Function',
	'related': [
		'@stdlib/regexp/extname-posix',
		'@stdlib/regexp/extname-windows',
		'@stdlib/utils/extname'
	]
});

ns.push({
	'alias': 'reExtnamePosix',
	'path': '@stdlib/regexp/extname-posix',
	'value': require( '@stdlib/regexp/extname-posix' ),
	'type': 'Function',
	'related': [
		'@stdlib/regexp/extname',
		'@stdlib/regexp/extname-windows',
		'@stdlib/utils/extname'
	]
});

ns.push({
	'alias': 'reExtnameWindows',
	'path': '@stdlib/regexp/extname-windows',
	'value': require( '@stdlib/regexp/extname-windows' ),
	'type': 'Function',
	'related': [
		'@stdlib/regexp/extname',
		'@stdlib/regexp/extname-posix',
		'@stdlib/utils/extname'
	]
});

ns.push({
	'alias': 'reFilename',
	'path': '@stdlib/regexp/filename',
	'value': require( '@stdlib/regexp/filename' ),
	'type': 'Function',
	'related': [
		'@stdlib/regexp/filename-posix',
		'@stdlib/regexp/filename-windows'
	]
});

ns.push({
	'alias': 'reFilenamePosix',
	'path': '@stdlib/regexp/filename-posix',
	'value': require( '@stdlib/regexp/filename-posix' ),
	'type': 'Function',
	'related': [
		'@stdlib/regexp/filename',
		'@stdlib/regexp/filename-windows'
	]
});

ns.push({
	'alias': 'reFilenameWindows',
	'path': '@stdlib/regexp/filename-windows',
	'value': require( '@stdlib/regexp/filename-windows' ),
	'type': 'Function',
	'related': [
		'@stdlib/regexp/filename',
		'@stdlib/regexp/filename-posix'
	]
});

ns.push({
	'alias': 'reFromString',
	'path': '@stdlib/utils/regexp-from-string',
	'value': require( '@stdlib/utils/regexp-from-string' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'reFunctionName',
	'path': '@stdlib/regexp/function-name',
	'value': require( '@stdlib/regexp/function-name' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/function-name'
	]
});

ns.push({
	'alias': 'regexp2json',
	'path': '@stdlib/regexp/to-json',
	'value': require( '@stdlib/regexp/to-json' ),
	'type': 'Function',
	'related': [
		'@stdlib/regexp/reviver'
	]
});

ns.push({
	'alias': 'reim',
	'path': '@stdlib/complex/reim',
	'value': require( '@stdlib/complex/reim' ),
	'type': 'Function',
	'related': [
		'@stdlib/complex/imag',
		'@stdlib/complex/real'
	]
});

ns.push({
	'alias': 'reimf',
	'path': '@stdlib/complex/reimf',
	'value': require( '@stdlib/complex/reimf' ),
	'type': 'Function',
	'related': [
		'@stdlib/complex/imagf',
		'@stdlib/complex/realf',
		'@stdlib/complex/reim'
	]
});

ns.push({
	'alias': 'rejectArguments',
	'path': '@stdlib/utils/reject-arguments',
	'value': require( '@stdlib/utils/reject-arguments' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/filter-arguments',
		'@stdlib/utils/mask-arguments'
	]
});

ns.push({
	'alias': 'removeFirst',
	'path': '@stdlib/string/remove-first',
	'value': require( '@stdlib/string/remove-first' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/remove-last'
	]
});

ns.push({
	'alias': 'removeLast',
	'path': '@stdlib/string/remove-last',
	'value': require( '@stdlib/string/remove-last' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/remove-first'
	]
});

ns.push({
	'alias': 'removePunctuation',
	'path': '@stdlib/string/remove-punctuation',
	'value': require( '@stdlib/string/remove-punctuation' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'removeUTF8BOM',
	'path': '@stdlib/string/remove-utf8-bom',
	'value': require( '@stdlib/string/remove-utf8-bom' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'removeWords',
	'path': '@stdlib/string/remove-words',
	'value': require( '@stdlib/string/remove-words' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'rename',
	'path': '@stdlib/fs/rename',
	'value': require( '@stdlib/fs/rename' ),
	'type': 'Function',
	'related': [
		'@stdlib/fs/exists',
		'@stdlib/fs/read-file',
		'@stdlib/fs/write-file',
		'@stdlib/fs/unlink'
	]
});

ns.push({
	'alias': 'reNativeFunction',
	'path': '@stdlib/regexp/native-function',
	'value': require( '@stdlib/regexp/native-function' ),
	'type': 'Function',
	'related': [
		'@stdlib/regexp/function-name',
		'@stdlib/utils/function-name'
	]
});

ns.push({
	'alias': 'reorderArguments',
	'path': '@stdlib/utils/reorder-arguments',
	'value': require( '@stdlib/utils/reorder-arguments' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/mask-arguments',
		'@stdlib/utils/reverse-arguments'
	]
});

ns.push({
	'alias': 'repeat',
	'path': '@stdlib/string/repeat',
	'value': require( '@stdlib/string/repeat' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/pad'
	]
});

ns.push({
	'alias': 'replace',
	'path': '@stdlib/string/replace',
	'value': require( '@stdlib/string/replace' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'replaceBefore',
	'path': '@stdlib/string/replace-before',
	'value': require( '@stdlib/string/replace-before' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/replace-after'
	]
});

ns.push({
	'alias': 'reRegExp',
	'path': '@stdlib/regexp/regexp',
	'value': require( '@stdlib/regexp/regexp' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/regexp-from-string'
	]
});

ns.push({
	'alias': 'rescape',
	'path': '@stdlib/utils/escape-regexp-string',
	'value': require( '@stdlib/utils/escape-regexp-string' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'reSemVer',
	'path': '@stdlib/regexp/semver',
	'value': require( '@stdlib/regexp/semver' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-semver'
	]
});

ns.push({
	'alias': 'resolveParentPath',
	'path': '@stdlib/fs/resolve-parent-path',
	'value': require( '@stdlib/fs/resolve-parent-path' ),
	'type': 'Function',
	'related': [
		'@stdlib/fs/resolve-parent-path-by'
	]
});

ns.push({
	'alias': 'resolveParentPathBy',
	'path': '@stdlib/fs/resolve-parent-path-by',
	'value': require( '@stdlib/fs/resolve-parent-path-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/fs/resolve-parent-path'
	]
});

ns.push({
	'alias': 'reUncPath',
	'path': '@stdlib/regexp/unc-path',
	'value': require( '@stdlib/regexp/unc-path' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-unc-path'
	]
});

ns.push({
	'alias': 'reUtf16SurrogatePair',
	'path': '@stdlib/regexp/utf16-surrogate-pair',
	'value': require( '@stdlib/regexp/utf16-surrogate-pair' ),
	'type': 'Function',
	'related': [
		'@stdlib/regexp/utf16-unpaired-surrogate'
	]
});

ns.push({
	'alias': 'reUtf16UnpairedSurrogate',
	'path': '@stdlib/regexp/utf16-unpaired-surrogate',
	'value': require( '@stdlib/regexp/utf16-unpaired-surrogate' ),
	'type': 'Function',
	'related': [
		'@stdlib/regexp/utf16-surrogate-pair'
	]
});

ns.push({
	'alias': 'reverseArguments',
	'path': '@stdlib/utils/reverse-arguments',
	'value': require( '@stdlib/utils/reverse-arguments' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/mask-arguments',
		'@stdlib/utils/reorder-arguments'
	]
});

ns.push({
	'alias': 'reverseString',
	'path': '@stdlib/string/reverse',
	'value': require( '@stdlib/string/reverse' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'reviveBasePRNG',
	'path': '@stdlib/random/base/reviver',
	'value': require( '@stdlib/random/base/reviver' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/reviver'
	]
});

ns.push({
	'alias': 'reviveBuffer',
	'path': '@stdlib/buffer/reviver',
	'value': require( '@stdlib/buffer/reviver' ),
	'type': 'Function',
	'related': [
		'@stdlib/buffer/to-json'
	]
});

ns.push({
	'alias': 'reviveComplex',
	'path': '@stdlib/complex/reviver',
	'value': require( '@stdlib/complex/reviver' ),
	'type': 'Function',
	'related': [
		'@stdlib/complex/float64',
		'@stdlib/complex/float32',
		'@stdlib/complex/reviver-float64',
		'@stdlib/complex/reviver-float32'
	]
});

ns.push({
	'alias': 'reviveComplex64',
	'path': '@stdlib/complex/reviver-float32',
	'value': require( '@stdlib/complex/reviver-float32' ),
	'type': 'Function',
	'related': [
		'@stdlib/complex/float32',
		'@stdlib/complex/reviver-float64',
		'@stdlib/complex/reviver'
	]
});

ns.push({
	'alias': 'reviveComplex128',
	'path': '@stdlib/complex/reviver-float64',
	'value': require( '@stdlib/complex/reviver-float64' ),
	'type': 'Function',
	'related': [
		'@stdlib/complex/float64',
		'@stdlib/complex/reviver-float32',
		'@stdlib/complex/reviver'
	]
});

ns.push({
	'alias': 'reviveError',
	'path': '@stdlib/error/reviver',
	'value': require( '@stdlib/error/reviver' ),
	'type': 'Function',
	'related': [
		'@stdlib/error/to-json'
	]
});

ns.push({
	'alias': 'reviveRegExp',
	'path': '@stdlib/regexp/reviver',
	'value': require( '@stdlib/regexp/reviver' ),
	'type': 'Function',
	'related': [
		'@stdlib/regexp/to-json'
	]
});

ns.push({
	'alias': 'reviveTypedArray',
	'path': '@stdlib/array/reviver',
	'value': require( '@stdlib/array/reviver' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/to-json'
	]
});

ns.push({
	'alias': 'reWhitespace',
	'path': '@stdlib/regexp/whitespace',
	'value': require( '@stdlib/regexp/whitespace' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-whitespace'
	]
});

ns.push({
	'alias': 'rpad',
	'path': '@stdlib/string/right-pad',
	'value': require( '@stdlib/string/right-pad' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/left-pad',
		'@stdlib/string/pad'
	]
});

ns.push({
	'alias': 'rtrim',
	'path': '@stdlib/string/right-trim',
	'value': require( '@stdlib/string/right-trim' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/left-trim',
		'@stdlib/string/trim'
	]
});

ns.push({
	'alias': 'rtrimN',
	'path': '@stdlib/string/right-trim-n',
	'value': require( '@stdlib/string/right-trim-n' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/left-trim-n',
		'@stdlib/string/trim'
	]
});


// EXPORTS //

module.exports = ns;
