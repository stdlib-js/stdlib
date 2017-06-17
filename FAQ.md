<!--lint disable no-heading-punctuation-->

# Frequently Asked Questions

> Common answers to common questions.


* [Why use this project?](#why-use)
* [Why numeric computing in JavaScript?](#numeric-computing-in-javascript)
* [Why not use R, Python, or Julia?](#other-languages)
* [Why not exclusively use native add-ons?](#native-add-ons)
* [What about WebAssembly?](#web-assembly)
* [Why reimplement and provide custom Math implementations?](#custom-math-implementations)
* [Why not change the ECMAScript specification to use better Math algorithms?](#ecmascript-math-specification)
* [What can be done at the standards level to better support numeric computing?](#ecmascript-recommendations)
* [Why reimplement module functionality already available on npm?](#reimplementing-existing-packages)
* [Backward compatibility?](#backward-compatibility)
* [Why use semicolons?](#semicolons)
* [Import support?](#import-support)
* [Promise support?](#promise-support)
* [ES2015 and beyond?](#es2015)
* [Why a monorepo?](#monorepo)
* [Why are library packages in a node_modules directory?](#lib-node-modules)
* [How can I support the project?](#supporting)
* [Why contribute?](#why-contribute)
* [How can I contribute?](#contributing)


<!-- <faq-questions> -->


<!-- <faq-question> -->

---

<a name="why-use"></a>

### Why use this project?

This project

1. provides high quality, rigorous, and robust implementations having common licensing, documentation, tooling, and style

1. provides peer-reviewed portable JavaScript libraries

1. provides modular, well-defined interfaces which may be forked, customized, and combined as needed

1. provides implementations which work cross-platform (Windows and POSIX), cross-environment (Node.js and web browsers), and cross-context (command-line, REPL, and JavaScript applications)

1. provides accurate and performant algorithms and implementations for numeric and scientific computing

1. increases productivity by

   - deterring reinvention
   - accelerating initial development
   - reducing bugs
   - reducing long-term maintenance costs
   - reducing search, evaluation, and quality-control requirements

1. provides standard reference implementations

1. establishes best practice


<!-- </faq-question> -->


<!-- <faq-question> -->

---

<a name="numeric-computing-in-javascript"></a>

### Why numeric computing in JavaScript?

1. __Speed__: JavaScript is fast for a dynamically compiled language. This is largely due to the need for browser vendors to run web applications as fast as possible, thus forcing vendors to make continuous performance improvements and create highly optimized runtime environments.
1. __Rendering Engine__: web browsers are performant, highly optimized view engines, supporting a range of rendering modes ([DOM][dom], [canvas][canvas], [WebGL][webgl]). The web browser has become the preferred medium for interactive graphics, with most major numeric computing platforms supporting some form of web browser rendering ([R][shiny], [Python][bokeh], [MATLAB][plotly]). Accordingly, if JavaScript is already being used to render data as a plot, supporting numeric manipulation of that data without requiring language context switching and the additional complexity of establishing bridges between different languages and platforms also makes sense.
1. __Community__: JavaScript has one of the [largest][stackoverflow-developer-survey] and most diverse developer [communities][stackoverflow-developer-survey]. Giving that community access to better and more intermediate tools for numeric computing enables more potential creative applications and use cases. And further, numeric computing has traditionally been the purview of companies selling expensive software only accessible to industry and large academic institutions. By creating free and open numeric computing tools in JavaScript, numeric computing is democratized and made accessible to a [community][module-counts] which has typically not had access to such tools.
1. __Ubiquity__: JavaScript is [ubiquitous][javascript-ubiquity], being supported on nearly any device with a web browser and, now, being pushed as a preferred scripting language in the Internet of Things (IoT) ([Cylon.js][cylon-js], [iot.js][iot-js], [JerryScript][jerryscript], [Johnny-Five][johnny-five]). Thus, if a numeric compute application can run in JavaScript, the broader the potential reach of that application.
1. __Distribution__: distributing a numeric compute application is considerably easier when compared to traditional numeric computation platforms. Because JavaScript is ubiquitous, the need for installing additional languages and tooling is often unnecessary. A web browser is frequently all that is required.
1. __Package Management__: Node.js package management is superior to anything available in other numeric computing environments. As developers who must manage Python [virtual environments][virtualenvs] or implement odd workarounds to support multiple versions of the same dependency can attest, the Node.js strategy makes dependency management trivial. And further, the tight integration with [npm][npm] makes distribution even more frictionless. Frictionless is not a common adjective used in describing package management in other numeric computing environments.

<!-- </faq-question> -->


<!-- <faq-question> -->

---

<a name="other-languages"></a>

### Why not use R, Python, or Julia?

You should use JavaScript because

1. __Language__: you like JavaScript.
1. __Simplicity__: you want to minimize language context-switching, reduce build system complexity, and use a smaller stack.
1. __Flexibility__: you want flexibility. With the exception of Python and few others, most languages commonly used for numeric computing are ill-suited for general purpose applications (e.g., MATLAB is never used to provide an authentication service). While specialization can mean better support for specialized syntax and libraries, specialization also correlates with reduced flexibility and fewer use cases.
1. __Parity__: you recognize that other languages, as languages, have no inherent advantage over JavaScript. With few exceptions, the same criticisms leveled against JavaScript as to why the language is not suitable for numeric computing (e.g., single-threaded, lacks native support for big integers, dynamically compiled, etc) are equally applicable to other languages, such as R and Python. That those languages have risen to prominence is more attributable to chance rather than to comparative advantage.
1. __Browsers__: you want to perform numeric computation in a web browser. JavaScript is, and will continue to be, the language of the Web.
1. __Forward Compatibility__: standards compliant code written now will work in the future. A key mandate when evolving the ECMAScript specification is that new language features must not break the web, thus ensuring that code written in the past continues to work in modern environments. This stands in contrast to language schisms like Python 2 and 3.
1. __Edge Computing__: you want to outsource server-side computation to client applications. A numeric compute-enabled client application can analyze data, train models, and generate predictions with shorter latency and lower server costs. Contrary to other languages and environments, a self-contained web application (similar in concept to a pre-compiled binary) which leverages JavaScript for numeric computation does not require persistent server infrastructure or containerization.
1. __Node.js__: you want to perform numeric computation in a Node.js application. Node.js is now regularly used by over [98%][node-fortune-500] of Fortune 500 companies (with accelerating industry adoption) and is well-suited for a wide range of applications (including numeric computing) due to its performance and flexibility.
1. __Community__: you want to leverage the continually growing JavaScript and Node.js community. JavaScript has one of the [largest][stackoverflow-developer-survey] and most diverse developer [ecosystems][stackoverflow-developer-survey]. Using JavaScript means greater access to help, expertise, and resources, including tutorials, workshops, and education materials.
1. __Visualization__: you want tighter integration between computation and data visualization. Other languages require intermediary layers to translate computational results into visual artifacts. These layers often involve network requests, longer latency, and increased complexity. Using JavaScript for numeric computation removes the need for intermediaries, allowing immediate and more transparent integration between computation and visualization.
1. __Mad science__: you are interested in mad science applications. Certain applications are only possible in JavaScript due to tight integration between the language and web APIs (e.g., client-based peer-to-peer distributed computing).
1. __Future__: you want to be part of the future: a future where numeric and scientific computation in JavaScript is not only possible, but also inevitable. 

<!-- </faq-question> -->


<!-- <faq-question> -->

---

<a name="native-add-ons"></a>

### Why not exclusively use native add-ons?

Native [add-ons][node-add-ons] have several disadvantages:

1. __Maintenance__: historically, native [add-ons][node-add-ons] have entailed considerable maintenance costs. Due to a rapidly changing V8 API and a V8 development approach which does not prioritize backward compatibility, each successive Node.js version required rewriting native [add-ons][node-add-ons] to accommodate breaking changes. To address this problem, the Native Abstractions for Node.js project ([NAN][node-nan]) provides a V8 API abstraction layer which [add-ons][node-add-ons] can target, thus allowing an [add-on][node-add-ons] to maintain compatibility between Node.js versions. While [NAN][node-nan] does reduce maintenance costs, costs are not entirely eliminated.

   __Aside__: [NAN][node-nan] is scheduled to be superseded by an [ABI stable API][node-napi], which will provide a similar abstraction layer but also across VMs (e.g., V8 and Chakra).

1. __Portability__: the primary means for building native [add-ons][node-add-ons] is [node-gyp][node-gyp], a tool which wraps [GYP][gyp] (a deprecated build tool formerly used by the Chromium team) and aims to provide a cross-platform approach for compiling Node.js native [add-ons][node-add-ons]. While [GYP][gyp] is suitable for many native [add-on][node-add-ons] use cases, the tool is less well-suited for building numeric and scientific computing libraries. In particular, [GYP][gyp] is primarily oriented toward compiling C/C++ libraries and applications. This orientation is problematic because numeric computing libraries often require the ability to not only compile C/C++, but also Fortran, CUDA, and other compiled languages. On Linux systems, [GYP][gyp] can leverage the GNU compiler toolchain, including [gfortran][gfortran]; however, [node-gyp][node-gyp]'s reliance on Microsoft Visual Studio (MSVS) [prevents][msvs-fortran-issue] compiling [add-ons][node-add-ons] containing Fortran code on Windows. Furthermore, building [add-ons][node-add-ons] on Windows requires installing Windows [build tools][node-windows-build-tools], and, currently, the [recommended][node-windows-build-tools] means of installation is not backward compatible with Node.js environments prior to version `4`. Lastly, while pre-building binaries is one way to circumvent compilation and portability issues, cross-compilation is neither straightforward nor foolproof and does not obviate the need for portable compilation (see debugging below). 

1. __Web browsers__: native [add-ons][node-add-ons] are not compatible with or portable to web browsers. ([WebAssembly][wasm] will not change this fact.)

1. __Complexity__: compilation presupposes the existence of compilers (e.g., [gfortran][gfortran]) and other tooling in order to successfully compile, thus often requiring out-of-band installation, setup, and configuration. In short, compilation increases complexity and increases the risk that something can and will go wrong.

1. __Development__: native Node.js [add-ons][node-add-ons] require significant upfront development costs compared to porting implementations to JavaScript. Creating a native [add-on][node-add-ons] entails more than writing a simple wrapper around an existing C/C++ library; the process involves additional tooling, testing, and development procedures, all requiring time and effort. These costs are acutely apparent during iteration cycles targeting multiple platforms. In comparison, as a higher-level language, JavaScript facilitates faster development, has built-in portability, and has minimized performance costs.

1. __Bundling__: existing low-level C/C++ and Fortran numeric computing libraries are often large monoliths. Hence, writing a Node.js native [add-on][node-add-ons] which exposes a single function from one of these libraries requires linking to a much larger codebase, resulting in larger bundle sizes, increased network costs, and longer installation times. And while many systems may come with pre-installed numeric computing libraries (e.g., Apple Accelerate Framework), their existence is neither guaranteed nor is detecting their existence trivial.

1. __Debugging__: debugging and instrumentation require separate compilation pathways. JavaScript implementations have the luxury of abundant tooling for dynamic inspection and instrumentation. The same cannot be said for native [add-ons][node-add-ons].

Despite the disadvantages articulated above, this project __does__ include Node.js native [add-ons][node-add-ons] and will continue to do so. However, each [add-on][node-add-ons] must include a JavaScript fallback in order to address cross-platform portability. While beneficial, native [add-ons][node-add-ons] are only part of what must be a more comprehensive solution to providing numeric computing facilities to Node.js, JavaScript, and the Web.

<!-- </faq-question> -->


<!-- <faq-question> -->

---

<a name="web-assembly"></a>

### What about WebAssembly?

[WebAssembly][wasm] proposes to fundamentally change the web platform by providing a low-level compilation target, which, in the future, will allow any language to be compiled to run on the Web. Once [WebAssembly][wasm] is ubiquitously supported, web developers will be able to use, e.g., a numeric computation library from, not just JavaScript, but any language, including traditional languages, such as R, Python, Julia, and C/C++ (provided the library can compile). While the possibility of using libraries like [NumPy][numpy] and [scikit-learn][scikit-learn] on the Web is exciting, this is not viewed as an existential threat for the following reasons:

1. __Compilation__: as developers who have used [asm.js][asm] to compile C and C++ libraries to run on the Web can attest, the process is not as simple as defining input and output targets. Often pre-compiled code has to be massaged into a form suitable for compilation, which means work is involved, requiring both time and labor.
1. __Bundling__: page load times are, and will continue to be, important, especially for business critical applications. The JavaScript community has invested considerable time and effort to both developing tooling and improving the web platform to bundle only code which is actually used and needed. Libraries written in other languages (e.g., [NumPy][numpy]) are not as amenable to modular bundles. Lack of modularity combined with significant size renders many non-JavaScript libraries impractical for web applications.
1. __Timescale__: [WebAssembly][wasm] is not likely to be ubiquitous anytime soon (as of 2016) and a need exists now for numeric computation libraries which work on the Web.
1. __Monoglot__: developers will still build JavaScript applications and most will, all things being equal, want to use a library written in the same idiom. Using a single language stack reduces cognitive overhead and simplifies application development.
1. __Legacy__: [WebAssembly][wasm] is unlikely to replace JavaScript, but, instead, serve a complementary role. JavaScript has a long and decorated history as part of the web platform. Relegating JavaScript to the dust bin would entail breaking the Web, an outcome which has been and will continue to be untenable, thus securing JavaScript's privileged status.
1. __Scripting__: [WebAssembly][wasm] does __not__ eliminate the need for a scripting language. Even if lower level, performance critical math implementations are [WebAssembly][wasm] compiled C/C++ libraries, a dynamic, loosely typed, interpreted scripting language is still necessary. The iteration cycle when using compiled languages is simply too long when compared to dynamic languages, particularly within the context of interactive analysis. Accordingly, functionality is, and will continue to be, necessary in JavaScript, a scripting language to which, given the size and energy of its community, every other scripting language pales in comparison.

<!-- see also https://www.quora.com/Will-WebAssembly-make-JavaScript-skills-more-or-less-valuable-in-the-future -->


<!-- </faq-question> -->


<!-- <faq-question> -->

---

<a name="custom-math-implementations"></a>

### Why reimplement and provide custom Math implementations?

1. [ECMA-262][ecma-262] does not mandate specific algorithms (only recommends `libm`). Accordingly, JavaScript implementors are free to choose any algorithm, which means that numeric computation results often differ across environments. This renders JavaScript not amenable to reproducible computation.
1. [ECMA-262][ecma-262] does not require a minimum [precision][mdn-math]. As a result, JavaScript implementors make non-transparent trade-offs between speed and accuracy, frequently favoring speed above all else. While traditional web applications may not require highly accurate Math results, many numeric computation applications do. And because the implementations are not transparent, debugging accuracy issues in numeric computation applications which use native Math built-ins is considerably more difficult.
1. Because native Math functions are implementation dependent, numeric computation applications are __not__ portable. By creating a set of standard Math implementations, we ensure that results on one platform are reproducible on every other platform.
1. Native math functions frequently have bugs (see [docs/native_math_bugs.md][native-math-bugs]).
1. Native math functions are often buried deep in compiler code and written in languages other than JavaScript. By implementing Math functions purely in JavaScript, the hope is that the underlying algorithms are more transparent, approachable, forkable, and debuggable.

<!-- </faq-question> -->


<!-- <faq-question> -->

---

<a name="ecmascript-math-specification"></a>

### Why not change the ECMAScript specification to use better Math algorithms?

Common arguments in support of changing the official ECMAScript specification:

* __standards__: everyone benefits from using common implementations.
* __network__: more and better built-ins translates to smaller bundles and thus decreased network costs.
* __evergreen__: improving built-ins means existing codebases using built-ins get "upgraded" (and patched) for free.

On the surface, the above arguments seem compelling. They fail, however, to recognize the rather messy reality of JavaScript applications and originate from a misunderstanding as to how JavaScript is implemented and practiced today.

A central thesis of this project is as follows:

> The standard Math library in JavaScript is fundamentally broken and cannot, and should not, be fixed by changing the official ECMAScript specification.

The reasons are as follows:

<!--lint disable list-item-spacing-->

1. __underspecified standard__: the ECMAScript specification for the standard Math library is underspecified, but not without merit. Namely, underspecification allows those implementing the specification to make trade-offs between speed and precision. Were the specification to mandate a particular algorithm, e.g., for `Math.sin`, implementers would be locked into __always__ using a particular implementation. Especially for special functions, different algorithms will yield different results under varying conditions. Thus, to change an underlying algorithm would mean to break backward compatibility. By not committing themselves to any hard backward compatibility constraints, implementors maintain a degree of flexibility, including the ability to use algorithms which cater to a particular user base (gaming versus numeric computing). In which case, underspecification has advantages.   

1. __cross-browser variability__: an underspecified standard, however, has disadvantages. Because implementors are free to choose underlying algorithms, relying exclusively on built-in Math functionality renders portability across more than one environment impossible. Even if all implementors happened to use the same underlying algorithm, a developer cannot, *a priori*, __guarantee__ or assume that only one algorithm is implemented. The default assumption must be: *if more than one algorithm can exist, more than one algorithm will exist*.

1. __no single codebase__: unlike other standard libraries (e.g., Golang, Python, Julia, etc), JavaScript does not have a single shared codebase. Each browser manufacturer has their own implementation and independent codebase with varying architecture and organization. More fundamentally, a common *implementation* does __not__ exist; only common *interfaces* exist. Thus, a developer wanting to write a numerical application must navigate and understand multiple sources of truth. Such expenditures incur significant overhead, especially when wanting to file issues, submit patches, or standardize a particular algorithm. For example, a patch in Chrome does not translate to a patch in Safari. Because each implementor is free to erect a protected castle, those writing numerical algorithms are resigned to treating the standard Math library as a black box and must always cater to the lowest common denominator (which is often the empirically determined slowest and/or least precise algorithm).

1. __versioning__: a developer does not have the freedom to choose which version of a particular algorithm she is given. In an "evergreen" environment, her application is only guaranteed a consistent interface, not an underlying implementation. Each background update may influence results in subtle ways and introduce bugs and unforeseen variability. A developer relying exclusively on standard library built-ins cannot assume reproducibility upon relaunching a browser. Thus, not only is cross-browser portability problematic, but same-browser-different-version portability is problematic. 

1. __required shims__: because no common codebase exists and implementors make mistakes, application developers are dependent on shims (i.e., libraries which ensure consistent implementations across browsers, provide missing built-in functionality, and patch bugs). The issue here, of course, is that, if an application developer must supply a shim, reduced network cost due to the presence of built-ins is non-existent: an implementation is sent over the network regardless in order to patch a possibly buggy environment. While a developer could use browser sniffing and HTTP2 to lazily load patches, such practices incur a performance cost. Accordingly, if an implementation is sent irrespective of whether an environment provides an implementation natively, why does an environment need to guarantee the existence of an implementation in the first place?

1. __globals__: standard library functions are unprotected globals (they need to be, or else how would shims work?). This means, however, that, not only must a numerical application developer worry about cross-browser and same-browser portability, but she must also worry about third party libraries overriding built-ins. Hence, a numerical application developer must always consider a JavaScript environment a hostile environment, leaving her no choice but to provide her own guarded implementations.

1. __testing__: while implementors can be reasonably trusted to implement a specification, implementors vary in their knowledge and ability to rigorously test numerical algorithms. Too often numerical tests fail to adequately cover input argument regimes and edge cases, and rarely do tests cross-compare against implementations in other platforms and environments. While outside developers are free to contribute tests to implementation codebases, the lack of a single codebase means that work must be duplicated across many other codebases.

1. __no golden algorithm__: those who advocate for standard algorithms assume that __a__ standard algorithm is all that is needed. The reality, however, is that different applications require different algorithms. For example, many developers believe (incorrectly) that an environment only needs one pseudorandom number generator (PRNG). And if we only implemented the very best possible PRNG, our problems would be solved. Such a belief, however, is mistaken. Numerical applications, particularly simulations, often require more than one different type of PRNG (e.g., LCG versus Xorshift) in order to ensure that the results of a simulation are not an artifact of the PRNG itself. Furthermore, having a standardized, e.g., `Math.sin`, algorithm does __not__ eliminate the need for other algorithms which compute sine. The "optimal" implementation depends on a variety of factors, including speed, precision, value range, and more. Ultimately, the individual best equipped to determine which algorithm is most appropriate for an application is the developer herself.

1. __timescale__: specifications and bug fixes are implemented over extended timescales. Historically, improving the standard Math library has been low priority (e.g., Mozilla first identified the need to improve `Math.random()` in 2006 and did not do so until 2015). Even if advocating for official inclusion in ECMAScript was believed desirable, the time involved to enact such implementation is not worth the effort: community solutions can simply move much faster in terms of development, testing, patching, and maintenance.

1. __trust__: at a very fundamental level, trust is broken. This reason underscores all the others. JavaScript environments cannot, on their own, be relied upon to provide a single consistent solution to the Math problem.

<!-- 1. __trust__: at a very fundamental level, trust is broken. This reason underscores all the others. A continued history of bugs, poor algorithms, insufficient testing, lack of IEEE 754 compliance, favoring speed at the cost of precision, insufficient domain knowledge, and carelessness with backward compatibility present an overwhelming case that JavaScript environments cannot, on their own, be relied upon to provide a single consistent solution to the Math problem. -->

<!--lint enable list-item-spacing-->

Based on the reasons above, Math is fundamentally broken at the standards and native implementation levels. Nevertheless, based on the existence of solid low-level primitives, speed, and ecosystem, this project maintains that JavaScript __is__ a viable platform for numeric and mathematical computing. The solution, however, does not entail standardization, but rather the development of independent community-driven solutions which can provide the kind of rigorous, robust, and performant numerical algorithms applications need.

__Note__: To their credit, browser vendors have tried to improve and standardize their implementations. Their efforts to continue doing so are needed and important, but their improvement does __not__ obviate the need for independent community-driven solutions.

<!-- </faq-question> -->


<!-- <faq-question> -->

---

<a name="ecmascript-recommendations"></a>

### What can be done at the standards level to better support numeric computing?

To better support numeric computing, standards bodies can do the following:

1. __64-bit integers__: add support for 64-bit integers. 64-bit integers (both signed and unsigned) are important for the following reasons:

   * __Bit manipulation__. Currently, the only way to manipulate the bits of a double-precision floating-point number is to use typed arrays (see [`toWords()`][stdlib-float64-to-words]), which is problematic because the process is, when compared to modern languages, [slow][stdlib-frexp] and [inefficient][stdlib-ldexp]. Modern languages with 64-bit integer support allow the bits of a double-precision floating-point number to be [reinterpreted][golang-float64bits] as a 64-bit integer, thus enabling easier manipulation, faster operations, and more efficient [code][golang-frexp]. This is especially important for low level implementations of transcendental [functions][stdlib-exp10] where bit manipulation can lead to significant performance gains.
   * __Pseudorandom number generation__. Modern pseudorandom number generators (PRNGs) commonly use 64-bit integers. Hence, lack of native 64-bit integer support prevents implementing more robust PRNGs which have longer periods and better randomness qualities (e.g., [xorshift*][xorshift*], [PCG][pcg], and [Mersenne twister (64-bit)][mersenne-twister]).
   * __IDs__. In modern applications, 32-bit integer IDs are rarely enough. 32-bit integers have on the order of `10**9` unique values compared to `10**19` for 64-bit integers. With 64-bit integer support, additional efficient hashing and bit masking algorithms become feasible.

1. __128-bit integers__: add support for 128-bit integers. 128-bit integers (both signed and unsigned) are important for the following reasons:

   * __Cryptography__. 128-bit integers are a common key size for [symmetric ciphers][symmetric-ciphers], and, importantly, 128-bit integers facilitate support for additional cryptographically secure pseudorandom number generators (CSPRNGs).
   * __Universally unique identifiers__. Universally unique identifiers ([UUIDs][uuid]) are stored as 128-bit values.
   * __Arbitrary-precision arithmetic__. [Arbitrary-precision arithmetic][arbitrary-precision-arithmetic] is beneficial for high precision applications and in preventing overflow, computing fundamental mathematical constants, and evaluating precision errors in fixed-precision calculations.

1. __Large arrays__: add support for large arrays. Arrays are currently limited to [`2**32-1`][ecma-262-array-length] (approximately `4` billion) elements. Many applications will never reach this limit; however, as datasets continue to increase in size, the need for larger arrays will become more apparent. For example, consider a `100000 x 100000` dense matrix, which is not uncommon when working with sensor data and trying to find correlations. This matrix will have `10` billion elements. Given current length limitations, one cannot store this data contiguously in a plain JavaScript array, thus resulting in increased cache misses and decreased performance.

   __Aside:__ typed arrays and, more generally, array-like objects may have as many as [`2**53-1`][ecma-262-tolength] elements. In the case of typed arrays, however, one must allocate memory upon instantiation; thus, growing a typed array as needed, while possible, is neither straightforward nor efficient.

1. __Typed objects__: add support for [typed objects][typed-objects-proposal]. Typed objects would facilitate efficient memory storage of data, which is critical for [performant][five-things-that-make-go-fast] numeric computations. In short,

   * typed objects allow compact data structures and avoid unnecessary indirection
   * typed objects enable better cache utilization
   * better cache utilization leads to better performance

   Complex numbers are a prime example where typed objects would be immensely valuable. Particularly for complex vector arrays, the ability to access adjacent memory locations would result in significant performance benefits.

1. __Value types__: add support for [value types][typed-objects-explainer]. Value types allow for creating custom types and enabling compiler optimizations. As with [typed objects][typed-objects-proposal], complex numbers are a prime example where value types are valuable, due to value comparison via structural equivalence.

1. __Operator overloading__: add support for [operator overloading][operator-overloading]. Assuming [typed objects][typed-objects-proposal] and [value types][typed-objects-explainer], a natural extension is [operator overloading][operator-overloading]. Currently, element-wise vector operations and use cases such as matrix multiplication require either verbose OOP semantics (e.g., `M1.mul( M2 )` ) or functional equivalents requiring internal argument validation (e.g., `mul( M1, M2 )`. Contrast JavaScript to languages such as MATLAB or Julia which allow for compact expressions (e.g., `M1 .* M2`). Furthermore, operator overloading has a general appeal beyond vector and matrix operations, such as enabling cleaner `Date` arithmetic. The ability to write compact, and yet expressive, code would significantly broaden the appeal of JavaScript for numeric computing.

   __Aside__: vector and matrix operations will require additional operators. For instance, when multiplying matrices, need to distinguish between element-wise multiplication versus the matrix product. In languages such as MATLAB and Julia, element-wise operators include a period (e.g., `M1 .* M2` versus `M1 * M2`).

1. __Big numbers__: add support for big [integers][julia-bigint], [rationals][golang-big], and [floats][julia-bigfloat]. In addition to cryptography and computing irrational numbers, arbitrary precision arithmetic is useful for algorithms involving double-precision floating-point numbers. Currently, lack of efficient, and relatively performant, big number support limits the scope and types of implemented algorithms, including for basic transcendental functions.

1. __SIMD__: add support for long SIMD. Currently, [proposals][ecmascript-simd] for [SIMD][mdn-simd-js] in JavaScript have focused on [short SIMD][mozilla-simd], which is well-suited for graphics applications. However, [short SIMD][mozilla-simd] is __not__ particularly well-suited for large vector operations, which are common in numeric computing (e.g., BLAS).

   __Aside:__ JavaScript may never have native SIMD support. Instead, SIMD may be possible only via [WebAssembly][wasm]. Lack of native JavaScript SIMD support would be unfortunate, as plenty of applications exist (e.g., scripting for purposes of analysis and data manipulation), which would benefit from SIMD operations without requiring a context switch to a lower-level language and additional compilation steps.

1. __Parallelism__: add support for lightweight threading (parallelism). Currently, [data parallelism][data-parallelism], i.e., the same operations performed on different subsets of the same data, is only achievable by manual data orchestration and task execution via either [web workers][mdn-web-workers] (browser) or [child processes][node-child-process] (Node.js). While [web workers][mdn-web-workers] support [Transferable Objects][mdn-transferable-objects] thus allowing shared memory access, the same is not true for Node.js. Particularly in Node.js, task parallelism is heavyweight and cumbersome, especially for use cases like parallel computation involving matrix elements (e.g., compare to MATLAB's [`parfor`][matlab-parfor]). The ability to easily distribute data to a worker pool (processors) would provide a significant performance boost to many data analysis tasks.

1. __GPGPU__: provide better support for [GPGPU][gpgpu]. Currently, performing general purpose GPU (GPGPU) computing tasks within a browser is only possible via [WebGL][webgl] and awkward usage of shaders, which are designed for generating graphics, not generic number crunching. Additionally, synchronous data transfers between the main thread and the GPU are expensive, debugging support is limited, and reading floating-point textures is not possible without workarounds which encode floating-point numbers into integer outputs (RGBA). While [compute shaders][compute-shaders] and [Vulkan][vulkan] promise better GPGPU support, we are years away from realizing their proposed benefits via JavaScript. Once realized, however, embarrassingly parallel computation tasks and machine learning techniques such as neural networks become more viable and efficient.

<!-- </faq-question> -->


<!-- <faq-question> -->

---

<a name="reimplementing-existing-packages"></a>

### Why reimplement module functionality already available on npm?

* __Consistency__: package structure, documentation, testing, and code style vary widely, often as artifacts of author taste and eccentricities. By adhering to a single style, library consumers can focus on implementation details, rather than continual and arbitrary style distractions.
* __Quality__: packages range from extremely high quality to extremely poor quality, with the distribution of packages skewed toward the latter end of the spectrum. Any reimplementation of existing package functionality is done to ensure the same high standard and quality across all project modules.
* __Control__: bringing functionality "in-house" enables control of release cycles, testing, distribution, interface design, and API changes. 

<!-- </faq-question> -->


<!-- <faq-question> -->

---

<a name="backward-compatibility"></a>

### Backward compatibility?

#### Interfaces

From time to time, interfaces may change in incompatible and breaking ways. Software evolves and such changes are part of the normal course of development. In compliance with [semantic versioning][semver], these changes will result in [major version][semver] changes. As long as your [package manager][npm] supports [semantic versioning][semver], libraries and applications which consume this project, or elements of this project, should not break and may independently upgrade whenever is most convenient.


#### Engines

This project has every intent on maintaining backward compatibility with older Node.js engines, including those which have reached their end-of-life (EOL) and including those which are pre-ES2015 beginning with Node.js __v0.10.x__. Accordingly, interface changes and new features should __never__ break this compatibility. The reasons for maintaining compatibility are as follows:

1. With regard to the Node.js [long-term release schedule][node-lts], simply because a Node.js version has reached its end-of-life (EOL), this does not mean that a) the Node.js version is no longer used or b) library authors ought to stop supporting that version. As long as libraries use the simplest, lowest level abstraction, the question as to whether a library should support a legacy Node.js version should never arise. The only time where dropping legacy support may be justified is when supporting native [add-ons][node-add-ons], as maintenance costs can be significantly higher.
1. Functionality should not only enable the future, but also allow probing the past. In an ideal world, everyone would use the latest and greatest engine; however, in the real world, not everyone can. Legacy systems abound for very valid and practical reasons; that they will continue to exist is not going to change. To achieve the greatest possible reach, functionality should account for these environments. The best approach for doing so is to use the simplest possible primitives which are most likely to be supported across the widest range of environments.
1. Consumers should have control over their migration schedules. In general, library developers are far too quick to drop support for legacy environments, citing maintenance costs, often as a thinly veiled desire to force consumers to upgrade. This parental and cavalier attitude fails to acknowledge the practical realities that many consumers face when building real-world applications. Once real-world applications are deployed in production environments, they assume lives of their own, becoming critical zero downtime components without concern for a library author's desire for evolution. All too frequently, a developer's desire for modernity (and trendiness) creates needless downstream effects, especially in those instances where the cost of maintenance is effectively zero.

<!-- </faq-question> -->


<!-- <faq-question> -->

---

<a name="semicolons"></a>

### Why use semicolons?

For the following reasons:

1. __Convention__: this project has historically used semicolons and has not found any reason compelling enough to stop doing so.
1. __Explicitness__: this project prefers explicitly terminating statements.
1. __Complexity__: while the [ECMAScript Specification][ecma-262-asi] provides rules governing automatic semicolon insertion ([ASI][ecma-262-asi]), structuring code around these rules increases cognitive overhead and does not provide significant tangible benefit (cumulative keystrokes aside). That workarounds must be employed to prevent [ASI][ecma-262-asi]-enabled errors (e.g., leading semicolons, etc) increases code complexity and imposes an unnecessary cost.
1. __Semantic meaning__: semicolons have semantic meaning within the project REPL. If a statement is not terminated by a semicolon, the REPL prints the statement's return value; otherwise, the REPL considers the statement silent. Such behavior is a common convention in other environments (e.g., MATLAB and Julia) and is especially convenient for silencing output involving large datasets.
1. __Consistency__: given that the project attaches additional meaning to semicolons, that library implementations should be "silent" is also a matter of consistency.

<!-- </faq-question> -->


<!-- <faq-question> -->

---

<a name="import-support"></a>

### Import support?

No. This stance may be reevaluated when the following conditions are met:

1. The specification has finalized.
1. The specification is widely and consistently implemented.
1. Node.js provides official support.
1. Inclusion maintains backward compatibility with earlier Node.js versions and non-ES2015 environments.
1. Inclusion does not require a transpiler toolchain.


#### But what about tree shaking?

Tree shaking (i.e., removing unused symbols) treats the symptom, not the disease. A disciplined emphasis on modularity and crafting implementations which do one thing and do one thing well obviates the need for removing unused symbols.

<!-- </faq-question> -->


<!-- <faq-question> -->

---

<a name="promise-support"></a>

### Promise support?

No.

<!-- </faq-question> -->


<!-- <faq-question> -->

---

<a name="es2015"></a>

### ES2015 and beyond?

Only __if__ three conditions are met:

1. ES2015+ features can be used __without__ breaking backward compatibility.
1. ES2015+ features provide something which is absolutely needed but literally not possible in ES5 and earlier environments.
1. ES2015+ features can be polyfilled in older environments __without__ transpilation.

The reasons are as follows:

* __Abstraction__: in general, the lower the abstraction, the less magic. Less magic means increased comprehensibility, a smaller surface area, and more control over performance and optimization. Many ES2015+ features are higher-order abstractions for things already possible in ES5. The preference of this project is to eschew higher-order abstractions for the simplest primitives and the greatest clarity.
* __Control__: unless a transpiler is developed in-house, transpilation requires third party tooling. Transpilers range from the good to the bad, with many generating unoptimized transpiled code. (And why would they? They are designed to be general tools.) Accordingly, efficiency and performance would reside outside the control of this project, which is not an acceptable cost.
* __Backward Compatibility__: the ability to probe the past is equally as valuable as the ability to build for the future.
* __Transparency__: source code matches distributed code. This one-to-one correspondence means a) easier debugging without maintenance overhead (e.g., source-maps) and b) individuals reading the source code can better form expectations as to how that code will execute in a deployed environment.
* __Simplicity__: any additional interface, syntax, or build step adds complexity.

<!-- </faq-question> -->


<!-- <faq-question> -->

---

<a name="monorepo"></a>

### Why a monorepo?

* __Tooling__: a monorepo facilitates better and more extensive tooling related to actual development. A polyrepo approach requires more tooling orthogonal to development, such as tooling for aggregation and maintaining repository consistency.
* __Dependencies__: a monorepo enables easier management of project dependencies, particularly development dependencies related to testing and automation.
* __Coordination__: a monorepo facilitates coordination of changes across multiple modules and/or an entire project.
* __Issues__: a monorepo centralizes issues and bug reporting. Managing and tracking issues and bug reports across many repositories is time consuming and error prone.
* __Testing__: a monorepo drastically simplifies continuous, automated testing. Integration testing across multiple repositories requires extensive tooling, which distracts from core library development. Further, individual repositories are frequently tested only when a change happens to code within __that__ repository, which means that bugs caused by changes to other project repositories are caught after-the-fact, rather than pro-actively via continuous testing.
* __Context__: a monorepo provides a single entry point and context by which new and existing users can access the project. In a polyrepo approach, new and existing users often lack the required context to understand how an individual repository fits within a larger project.

<!-- </faq-question> -->


<!-- <faq-question> -->

---

<a name="lib-node-modules"></a>

### Why are library packages in a node_modules directory?

This project leverages the Node.js module resolution [algorithm][node-require] to resolve dependencies by name rather than by path. Hence, the project avoids relative require paths. For example,

``` javascript
var foo = require( './../../../../../@stdlib/foo' );
```

becomes

``` javascript
var foo = require( '@stdlib/foo' );
```

In general, far too many developers are oblivious to the module resolution [algorithm][node-require], often resorting to various unnecessary hacks, such as setting environment variables (e.g., `NODE_PATH`), using globals, creating symbolic links (symlink), using `require` wrappers, running startup scripts, or actually hacking `require` itself (see [here][modifying-node-path-hack] and [here][list-of-require-hacks] as representative references). A superior approach is to leverage the module resolution [algorithm][node-require] to scope internal packages to their relevant context. For example, consider the following application directory structure

``` text
/
  app/
      index.js
      a.js
      b.js
      node_modules/ # => local app dependencies
          debug/
              index.js
          logger/
              index.js
      routes/
          index.js
          login/
              index.js
              login.js
              post.js
              onerror.js
          logout/
              index.js
              logout.js
              post.js
              onerror.js
          node_modules/ # => local routes dependencies
              start/
                  index.js
              end/
                  index.js
              response-time/
                  index.js
      models/
          index.js
          c.js
          d.js
          user/
              index.js
              e.js
              f.js
              node_modules/ # => local user model dependencies
                  foo/
                      index.js
                  bar/
                      index.js
          data/
              index.js
              g.js
              h.js
              i.js
              node_modules/ # => local data model dependencies
                  transform/
                      index.js
                  analyze/
                      index.js
                  morph/
                      index.js
          node_modules/ # => local models dependencies
              db-connect/
                  index.js
              db-get/
                  index.js
              db-set/
                  index.js
              db-update/
                  index.js
              db-delete/
                  index.js
  node_modules/ # => external dependencies
      beep/
      boop/
      bop/
```

where `g.js`

``` javascript
var beep = require( 'beep' );
var debug = require( 'debug' );
var get = require( 'db-get' );
var transform = require( 'transform' );
var h = require( './h.js' );

// ...
```

By leveraging `node_modules`, each local `node_modules` dependency

1. is scoped to its relevant context
2. does not pollute the top-level `node_modules` directory which contains external dependencies
3. allows modules within a scope to require the dependency by name rather than by relative path in a manner similar to `node_modules` dependencies in parent scopes (including external dependencies)
4. may be elevated to a higher scope without needing to update require paths

In short, the module resolution [algorithm][node-require] provides a simple and robust cross-platform solution for managing both external and local module dependencies.

__Aside__: A common objection to the directory structure above is that tools often ignore anything within a `node_modules` folder (e.g., linters, unit test runners, etc). That this project is able to configure tools to recognize files within `node_modules` folders is evidence to the contrary. If a tool cannot be configured otherwise, that is a flaw in the tool, not in the approach.

<!-- </faq-question> -->


<!-- <faq-question> -->

---

<a name="supporting"></a>

### How can I support the project?

You can support the project by

* contributing algorithms and implementations
* adding tests and benchmarks
* helping improve documentation and examples
* using the project and offering feedback
* filing bug reports and flagging performance regressions
* advocating for standards committees to add features at the specification level to better enable numeric computing in JavaScript
* helping promote the project on social media, at your company, and within your networks
* providing build and infrastructure support
* providing financial support

If you have additional ideas, get in touch, and we'll do our best to help!


<!-- </faq-question> -->


<!-- <faq-question> -->

---

<a name="why-contribute"></a>

### Why contribute?

You should contribute

* if you want to write high quality software
* if you want to learn underlying algorithms
* if you want to learn how to write rigorous and robust implementations
* if you want to bring numeric and scientific computing to JavaScript and the Web
* if you want to be part of a dedicated, supportive, and inclusive community
* if you believe in what we are doing and want to be a part of it :)

Reach out, get in touch, and we'll be happy to get you started!

<!-- </faq-question> -->


<!-- <faq-question> -->

---

<a name="contributing"></a>

### How can I contribute?

See the [contributing guide][contributing-guide].

<!-- </faq-question> -->


<!-- </faq-questions> -->


<!-- <definitions> -->

[dom]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[canvas]: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

[webgl]: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API
[gpgpu]: https://en.wikipedia.org/wiki/General-purpose_computing_on_graphics_processing_units
[compute-shaders]: https://www.khronos.org/opengl/wiki/Compute_Shader
[vulkan]: https://www.khronos.org/vulkan/

[shiny]: http://shiny.rstudio.com/
[bokeh]: http://bokeh.pydata.org/en/latest/
[plotly]: https://plot.ly/matlab/

[stackoverflow-developer-survey]: http://stackoverflow.com/research/developer-survey-2016
[module-counts]: http://www.modulecounts.com/
[node-fortune-500]: https://nodejs.org/en/blog/announcements/foundation-advances-growth/

[javascript-ubiquity]: https://blog.codinghorror.com/javascript-the-lingua-franca-of-the-web/

[cylon-js]: https://github.com/hybridgroup/cylon/
[iot-js]: https://github.com/Samsung/iotjs
[jerryscript]: https://github.com/Samsung/jerryscript
[johnny-five]: https://github.com/rwaldron/johnny-five

[virtualenvs]: http://docs.python-guide.org/en/latest/dev/virtualenvs/
[npm]: https://www.npmjs.com/

[mdn-math]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
[mdn-simd-js]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD
[mdn-web-workers]: https://developer.mozilla.org/en-US/docs/Web/API/Worker/Worker
[mdn-transferable-objects]: https://developer.mozilla.org/en-US/docs/Web/API/Transferable

[native-math-bugs]: https://github.com/stdlib-js/stdlib/blob/develop/docs/native_math_bugs.md
[contributing-guide]: https://github.com/stdlib-js/stdlib/blob/develop/CONTRIBUTING.md

[wasm]: https://github.com/WebAssembly/spec/
[asm]: http://asmjs.org/spec/latest/

[gyp]: https://gyp.gsrc.io/
[gfortran]: https://gcc.gnu.org/fortran/
[msvs-fortran-issue]: https://github.com/nodejs/node-gyp/issues/1102

[numpy]: http://www.numpy.org/
[scikit-learn]: http://scikit-learn.org/stable/

[semver]: http://semver.org/

[node-lts]: https://github.com/nodejs/LTS
[node-add-ons]: https://nodejs.org/api/addons.html
[node-nan]: https://github.com/nodejs/nan
[node-gyp]: https://github.com/nodejs/node-gyp
[node-windows-build-tools]: https://github.com/felixrieseberg/windows-build-tools
[node-napi]: https://github.com/nodejs/abi-stable-node/
[node-require]: https://nodejs.org/api/modules.html
[node-child-process]: https://nodejs.org/api/child_process.html

[modifying-node-path-hack]: https://lostechies.com/derickbailey/2014/02/20/how-i-work-around-the-require-problem-in-nodejs/
[list-of-require-hacks]: https://gist.github.com/branneman/8048520

[ecma-262]: http://www.ecma-international.org/publications/standards/Ecma-262.htm
[ecma-262-array-length]: http://www.ecma-international.org/ecma-262/6.0/#sec-arraycreate
[ecma-262-tolength]: http://www.ecma-international.org/ecma-262/6.0/#sec-tolength
[ecma-262-asi]: https://www.ecma-international.org/ecma-262/5.1/#sec-7.9

[golang-frexp]: https://github.com/golang/go/blob/c007ce824d9a4fccb148f9204e04c23ed2984b71/src/math/frexp.go#L27
[golang-float64bits]: https://github.com/golang/go/blob/964639cc338db650ccadeafb7424bc8ebb2c0f6c/src/math/unsafe.go#L17
[golang-big]: https://golang.org/pkg/math/big/

[julia-bigint]: http://docs.julialang.org/en/stable/stdlib/numbers/?highlight=bigfloat#Base.BigInt
[julia-bigfloat]: http://docs.julialang.org/en/stable/stdlib/numbers/?highlight=bigfloat#Base.BigFloat

[stdlib-frexp]: https://github.com/stdlib-js/stdlib/blob/0b1a64efef8859a17a60edb7ccaab62937b77a63/lib/node_modules/%40stdlib/math/base/special/frexp/lib/frexp.js#L67
[stdlib-ldexp]: https://github.com/stdlib-js/stdlib/blob/0b1a64efef8859a17a60edb7ccaab62937b77a63/lib/node_modules/%40stdlib/math/base/special/ldexp/lib/ldexp.js#L105
[stdlib-exp10]: https://github.com/stdlib-js/stdlib/blob/0b1a64efef8859a17a60edb7ccaab62937b77a63/lib/node_modules/%40stdlib/math/base/special/exp10/lib/exp10.js#L131
[stdlib-float64-to-words]: https://github.com/stdlib-js/stdlib/blob/1db589dcd5a8f8c4e4ab3bae8e8c47bd0c0266e8/lib/node_modules/%40stdlib/math/base/utils/float64-to-words/lib/to_words.js

[xorshift*]: https://en.wikipedia.org/wiki/Xorshift
[pcg]: http://www.pcg-random.org/other-rngs.html
[mersenne-twister]: https://en.wikipedia.org/wiki/Mersenne_Twister

[uuid]: https://en.wikipedia.org/wiki/Universally_unique_identifier
[symmetric-ciphers]: https://en.wikipedia.org/wiki/Symmetric-key_algorithm
[arbitrary-precision-arithmetic]: https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic

[mozilla-simd]: https://hacks.mozilla.org/2014/10/introducing-simd-js/
[ecmascript-simd]: https://github.com/tc39/ecmascript_simd/

[five-things-that-make-go-fast]: http://dave.cheney.net/2014/06/07/five-things-that-make-go-fast

[typed-objects-proposal]: https://github.com/dslomov/typed-objects-es7
[typed-objects-explainer]: https://github.com/nikomatsakis/typed-objects-explainer

[operator-overloading]: https://en.wikipedia.org/wiki/Operator_overloading

[data-parallelism]: https://en.wikipedia.org/wiki/Data_parallelism

[matlab-parfor]: https://www.mathworks.com/help/distcomp/parfor.html

<!-- </definitions> -->
