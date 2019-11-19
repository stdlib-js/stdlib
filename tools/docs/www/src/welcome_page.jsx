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

// MODULES //

import React, { Fragment } from 'react';


// MAIN //

const WelcomePage = ( props ) => {
	return (
		<Fragment>
			<nav className="navbar">
				<a href="https://stdlib.io/">Home</a>
			</nav>
			<div className="readme" >
				<h2>project documentation</h2>
				<section class="banner" >
					<div class="image" align="center" >
						<br />
						<br />
						<img src="https://cdn.rawgit.com/stdlib-js/stdlib/9f7d30f089ecc458a8b836a75afab75caf5c0b36/docs/assets/logo_banner.svg" alt="stdlib logo" />
						<br />
						<br />
						<br />
						<br />
					</div>
				</section>
				<section class="intro">
					<p>
						stdlib (<a href="https://en.wikipedia.org/wiki/Help:IPA/English">/ˈstændərd lɪb/</a> "standard lib") is a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing applications. The library provides a collection of robust, high performance libraries for mathematics, statistics, data processing, streams, and more and includes many of the utilities you would expect from a standard library.
					</p>
				</section>
				<section>
					<h2>Features</h2>

					<ul>
						<li>150+ <a href={`https://stdlib.io/${props.version}/docs/api/@stdlib/assert/`}>special math functions</a></li>
						<li>35+ <a href={`https://stdlib.io/${props.version}/docs/api/@stdlib/stats/base/dists/`}>probability distributions</a>, with support for evaluating probability density functions (PDFs), cumulative distribution functions (CDFs), quantiles, moments, and more.</li>
						<li>40+ <a href={`https://stdlib.io/${props.version}/docs/api/@stdlib/random/base/`}>seedable pseudorandom number generators</a> (PRNGs).</li>
						<li>200+ general <a href={`https://stdlib.io/${props.version}/docs/api/@stdlib/utils/`}>utilities</a> for data transformation, functional programming, and asynchronous control flow.</li>
						<li>200+ <a href={`https://stdlib.io/${props.version}/docs/api/@stdlib/assert/`}>assertion utilities</a> for data validation and feature detection.</li>
						<li>50+ <a href={`https://stdlib.io/${props.version}/docs/api/@stdlib/datasets/`}>sample datasets</a> for testing and development.</li>
						<li>A <a href={`https://stdlib.io/${props.version}/docs/api/@stdlib/plot/ctor`}>plot API</a> for data visualization and exploratory data analysis.</li>
						<li>Native add-ons for interfacing with BLAS libraries, with pure JavaScript fallbacks.</li>
						<li>A <a href={`https://stdlib.io/${props.version}/docs/api/@stdlib/bench/harness`}>benchmark framework</a> supporting TAP.</li>
						<li>REPL environment with integrated help and examples.</li>
						<li>Can be bundled using <a href="http://browserify.org/">Browserify</a>, <a href="https://webpack.js.org/">Webpack</a>, and other bundlers for use in web browsers.</li>
					</ul>

					<h2>Getting Help</h2>

					<p>Ask questions and get help from the community on the project's <a href="https://gitter.im/stdlib-js/stdlib">Gitter</a> channel.</p>

					<h2>Prerequisites</h2>

					<p>Running stdlib <b>requires</b> the following prerequisites</p>

					<ul>
						<li>
							<a href="https://nodejs.org/en/">Node.js</a>: JavaScript runtime (version <code>>= 0.10</code>)
						</li>
						<li>
							<a href="https://www.npmjs.com/">npm</a>: package manager (version <code>&gt; 2.7.0</code>; if Node <code>&lt; 1.0.0</code>, version <code>&gt; 2.7.0</code> and <code>&lt; 4.0.0</code>; if Node <code>&lt; 6.0.0</code>, version <code>&gt; 2.7.0</code> and <code>&lt; 6.0.0</code>)
						</li>
					</ul>

					<p>Most functionality in stdlib is implemented exclusively in JavaScript; however, some implementations try to capture performance benefits by using <a href="https://nodejs.org/api/addons.html">native bindings</a> and/or <a href="http://webassembly.org/">WebAssembly</a>. While **not** required to run stdlib, as <b>every</b> stdlib implementation has a JavaScript fallback, the following dependencies are <b>required</b> for building native add-ons, including linking to BLAS and LAPACK libraries:</p>

					<ul>
						<li>
							<a href="https://www.gnu.org/software/make/">GNU make</a> development utility and task runner
						</li>
						<li>
							<a href="https://www.gnu.org/software/bash/">GNU bash</a>: an sh-compatible shell
						</li>
						<li>
							<a href="http://gcc.gnu.org/">gcc &amp; g++</a> or <a href="http://clang.llvm.org/">Clang</a>: C/C++ compilation and linking (g++ version <code>>= 4.8</code>; clang version <code>>= 3.5</code>, Xcode version <code>>=8.3.1</code> on OS X)
						</li>
						<li>
							<a href="https://gcc.gnu.org/fortran/">gfortran</a>: Fortran compilation and linking (version <code>>= 4.8</code>)
						</li>
					</ul>

					<p>While <b>not</b> required to run stdlib, the following dependencies are <b>required</b> for automatically downloading external libraries:</p>

					<ul>
						<li><a href="http://curl.haxx.se/">curl</a>, <a href="http://www.gnu.org/software/wget">wget</a>, or <a href="http://www.freebsd.org/cgi/man.cgi?fetch%281%29">fetch</a>(FreeBSD): utilities for downloading remote resources</li>
					</ul>

					<p>The following external libraries can be automatically downloaded and compiled from source using <code>make</code>:</p>

					<ul>
						<li><a href="https://github.com/xianyi/OpenBLAS">OpenBLAS</a>: optimized BLAS library</li>
						<li><a href="https://electron.atom.io/">Electron</a>: framework for cross-platform desktop applications</li>
					</ul>

					<h2>Installation</h2>

					<p>To install as a library or application dependency,</p>

					<pre>
						<code className="hljs language-bash">
							$ npm install @stdlib/stdlib
						</code>
					</pre>

					<p>To install globally for use as a command-line utility,</p>

					<pre>
						<code className="hljs language-bash">
							$ npm install -g @stdlib/stdlib
						</code>
					</pre>

					<p>which will expose the <code>stdlib</code> command. For example, to see available sub-commands</p>

					<pre>
						<code className="hljs language-bash">
							$ stdlib help
						</code>
					</pre>

					<p>and to run the <a href={`https://stdlib.io/${props.version}/docs/api/@stdlib/repl/`}>REPL</a></p>

					<pre>
						<code className="hljs language-bash">
							$ stdlib repl
						</code>
					</pre>

					<p>For distributable bundles for use in browser environments or as shared ("vendored") libraries in server environments, see the <a href={`https://github.com/stdlib-js/stdlib/tree/${props.version}/dist`}><code>dist</code></a> directory and associated <a href={`https://github.com/stdlib-js/stdlib/tree/${props.version}/dist`}>guide</a>.</p>

					<p>Otherwise, to install as a system library, follow the <a href={`https://github.com/stdlib-js/stdlib/blob/${props.version}/docs/development.md#download`}>download</a>, <a href={`https://github.com/stdlib-js/stdlib/blob/${props.version}/docs/development.md`}>configuration</a>, and <a href={`https://github.com/stdlib-js/stdlib/blob/${props.version}/docs/development.md#installation`}>installation</a> instructions as described in the <a href={`https://github.com/stdlib-js/stdlib/blob/${props.version}/docs/development.md`}>development guide</a>.</p>

					<h2>License</h2>

					<p>See <a href="https://raw.githubusercontent.com/stdlib-js/stdlib/develop/LICENSE">LICENSE</a></p>

					<h2>Copyright</h2>

					<p>Copyright © 2016-2019. The Stdlib <a href="https://github.com/stdlib-js/stdlib/graphs/contributors" >Authors</a></p>

				</section>
			</div>
		</Fragment>
	);
};


// EXPORTS //

export default WelcomePage;
