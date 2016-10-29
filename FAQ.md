# Frequently Asked Questions

> Common answers to common questions.


* [Why numeric computing in JavaScript?](#numeric-computing-in-javascript)
* [What about WebAssembly?](#web-assembly)
* [Why reimplement and provide custom Math implementations?](#custom-math-implementations)
* [Why not change the official ECMAScript specification to use better Math algorithms?](#ecmascript-math-specification)
* [Why reimplement module functionality already available on npm?](#reimplementing-existing-packages)
* [Backward compatibility?](#backward-compatibility)
* [Promise support?](#promise-support)
* [ES2015 and beyond?](#es2015)
* [Why a monorepo?](#monorepo)
* [How can I contribute?](#contributing)


<!-- <faq-questions> -->

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

<a name="web-assembly"></a>

### What about WebAssembly?

[WebAssembly][wasm] proposes to fundamentally change the web platform by providing a low-level compilation target, which, in the future, will allow any language to be compiled to run on the Web. Once [WebAssembly][wasm] is ubiquitously supported, web developers will be able to use, e.g., a numeric computation library from, not just JavaScript, but any language, including traditional languages, such as R, Python, Julia, and C/C++ (provided the library can compile). While the possibility of using libraries like [NumPy][numpy] and [scikit-learn][scikit-learn] on the Web is exciting, this is not viewed as an existential threat for the following reasons:

1. __Compilation__: as developers who have used [asm.js][asm] to compile C and C++ libraries to run on the Web can attest, the process is not as simple as defining input and output targets. Often pre-compiled code has to be massaged into a form suitable for compilation, which means work is involved, requiring both time and labor.
1. __Bundling__: page load times are, and will continue to be, important, especially for business critical applications. The JavaScript community has invested considerable time and effort to both developing tooling and improving the web platform to bundle only code which is actually used and needed. Libraries written in other languages (e.g., [NumPy][numpy]) are not as amenable to modular bundles. Lack of modularity combined with significant size renders many non-JavaScript libraries impractical for web applications.
1. __Timescale__: [WebAssembly][wasm] is not likely to be ubiquitous anytime soon (as of 2016) and a need exists now for numeric computation libraries which work on the Web.
1. __Monoglot__: developers will still build JavaScript applications and most will, all things being equal, want to use a library written in the same idiom. Using a single language stack reduces cognitive overhead and simplifies application development.
1. __Legacy__: [WebAssembly][wasm] is unlikely to replace JavaScript, but, instead, serve a complementary role. JavaScript has a long and decorated history as part of the web platform. Relegating JavaScript to the dust bin would entail breaking the Web, an outcome which has been and will continue to be untenable, thus securing JavaScript's privileged status. 


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

### Why not change the official ECMAScript specification to use better Math algorithms?

Common arguments in support of changing the official ECMAScript specification:

* __network__: more and better built-ins translates to smaller bundles and thus decreased network costs.
* __standards__: everyone benefits from using common implementations.
* __evergreen__: improving built-ins means existing codebases using built-ins get "upgraded" (and patched) for free.

On the surface, the above arguments seem compelling. They fail, however, to recognize the rather messy reality of JavaScript applications and originate from a misunderstanding as to how JavaScript is implemented and practiced today.

A central thesis of this project is as follows:

> The standard Math library in JavaScript is fundamentally broken and cannot, and should not, be fixed through the official ECMAScript standard.

The reasons are as follows:

1. __underspecified standard__: the ECMAScript specification for the standard Math library is underspecified, but not without merit. Namely, underspecification allows those implementing the specification to make trade-offs between speed and precision. Were the specification to mandate a particular algorithm, e.g., for `Math.sin`, implementers would be locked into __always__ using a particular implementation. Especially for special functions, different algorithms will yield different results under varying conditions. Thus, to change an underlying algorithm would mean to break backward compatibility. By not committing themselves to any hard backward compatibility constraints, implementors maintain a degree of flexibility, including the ability to use algorithms which cater to a particular user base (gaming versus numeric computing). In which case, underspecification has advantages.   

1. __cross-browser variability__: an underspecified standard, however, has disadvantages. Because implementors are free to choose underlying algorithms, relying exclusively on built-in Math functionality renders portability across more than one environment impossible. Even if all implementors happened to use the same underlying algorithm, a developer cannot, *a priori*, __guarantee__ or assume that only one algorithm is implemented. The default assumption must be: *if more than one algorithm can exist, more than one algorithm will exist*.

1. __no single codebase__: unlike other standard libraries (e.g., Golang, Python, Julia, etc), JavaScript does not have a single shared codebase. Each browser manufacturer has their own implementation and independent codebase with varying architecture and organization. More fundamentally, a common *implementation* does __not__ exist; only common *interfaces* exist. Thus, a developer wanting to write a numerical application must navigate and understand multiple sources of truth. Such expenditures incur significant overhead, especially when wanting to file issues, submit patches, or standardize a particular algorithm. For example, a patch in Chrome does not translate to a patch in Safari. Because each implementor is free to erect a protected castle, those writing numerical algorithms are resigned to treating the standard Math library as a black box and must always cater to the lowest common denominator (which is often the empirically determined slowest and/or least precise algorithm).

1. __versioning__: a developer does not have the freedom to choose which version of a particular algorithm she is given. In an "evergreen" environment, her application is only guaranteed a consistent interface, not an underlying implementation. Each background update may influence results in subtle ways and introduce bugs and unforeseen variability. A developer relying exclusively on standard library built-ins cannot assume reproducibility upon relaunching a browser. Thus, not only is cross-browser portability problematic, but same-browser-different-version portability is problematic. 

1. __required shims__: because no common codebase exists and implementors make mistakes, application developers are dependent on shims (i.e., libraries which ensure consistent implementations across browsers, provide missing built-in functionality, and patch bugs). The issue here, of course, is that, if an application developer must supply a shim, reduced network cost due to the presence of built-ins is non-existent: an implementation is sent over the network regardless in order to patch a possibly buggy environment. While a developer could use browser sniffing and HTTP2 to lazily load patches, such practices incur a performance cost. Accordingly, if an implementation is sent irrespective of whether an environment provides an implementation natively, why does an environment need to guarantee the existence of an implementation in the first place?

1. __globals__: standard library functions are unprotected globals (they need to be, or else how would shims work?). This means, however, that, not only must a numerical application developer worry about cross-browser and same-browser portability, but she must also worry about third party libraries overriding built-ins. Hence, a numerical application developer must always consider a JavaScript environment a hostile environment, leaving her no choice but to provide her own guarded implementations.

1. __testing__: while implementors can be reasonably trusted to implement a specification, implementors vary in their knowledge and ability to rigorously test numerical algorithms. Too often numerical tests fail to adequately cover input argument regimes and edge cases, and rarely do tests cross-compare against implementations in other platforms and environments. While outside developers are free to contribute tests to implementation codebases, the lack of a single codebase means that work must be duplicated across many other codebases.

1. __no golden algorithm__: those who advocate for standard algorithms assume that __a__ standard algorithm is all that is needed. The reality, however, is that different applications require different algorithms. For example, many developers believe (incorrectly) that an environment only needs one pseudorandom number generator (PRNG). And if we only implemented the very best possible PRNG, our problems would be solved. Such a belief, however, is mistaken. Numerical applications, particularly simulations, often require more than one different type of PRNG (e.g., LCG versus Xorshift) in order to ensure that the results of a simulation are not an artifact of the PRNG itself. Furthermore, having a standardized, e.g., `Math.sin`, algorithm does __not__ eliminate the need for other algorithms which compute sine. The "optimal" implementation depends on a variety of factors, including speed, precision, value range, and more. Ultimately, the individual best equipped to determine which algorithm is most appropriate for an application is the developer herself.

1. __timescale__: specifications and bug fixes are implemented over extended timescales. Historically, improving the standard Math library has been low priority (e.g., Mozilla first identified the need to improve `Math.random()` in 2006 and did not do so until 2015). Even if advocating for official inclusion in ECMAScript was believed desirable, the time involved to enact such implementation is not worth the effort: community solutions can simply move much faster in terms of development, testing, patching, and maintenance.

1. __trust__: at a very fundamental level, trust is broken. This reason underscores all the others. A continued history of bugs, poor algorithms, insufficient testing, lack of IEEE 754 compliance, favoring speed at the cost of precision, insufficient domain knowledge, and carelessness with backward compatibility present an overwhelming case that JavaScript environments cannot, on their own, be relied upon to provide a single consistent solution to the Math problem.

Based on the reasons above, Math is fundamentally broken at the standards and native implementation levels. Nevertheless, based on the existence of solid low-level primitives, speed, and ecosystem, this project maintains that JavaScript __is__ a viable platform for numeric and mathematical computing. The solution, however, does not entail standardization, but rather the development of independent community-driven solutions which can provide the kind of rigorous, robust, and performant numerical algorithms applications need. 


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

1. With regard to the Node.js [long-term release schedule][node-lts], simply because a Node.js version has reached its end-of-life (EOL), this does not mean that a) the Node.js version is no longer used or b) library authors ought to stop supporting that version. As long as libraries use the simplest, lowest level abstraction, the question as to whether a library should support a legacy Node.js version should never arise. The only time where dropping legacy support may be justified is when supporting native [add-ons][node-addons], as maintenance costs can be significantly higher.
1. Functionality should not only enable the future, but also allow probing the past. In an ideal world, everyone would use the latest and greatest engine; however, in the real world, not everyone can. Legacy systems abound for very valid and practical reasons; that they will continue to exist is not going to change. To achieve the greatest possible reach, functionality should account for these environments. The best approach for doing so is to use the simplest possible primitives which are most likely to be supported across the widest range of environments.
1. Consumers should have control over their migration schedules. In general, library developers are far too quick to drop support for legacy environments, citing maintenance costs, often as a thinly veiled desire to force consumers to upgrade. This parental and cavalier attitude fails to acknowledge the practical realities that many consumers face when building real-world applications. Once real-world applications are deployed in production environments, they assume lives of their own, becoming critical zero downtime components without concern for a library author's desire for evolution. All too frequently, a developer's desire for modernity (and trendiness) creates needless downstream effects, especially in those instances where the cost of maintenance is effectively zero.

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

<a name="contributing"></a>

### How can I contribute?

See the [contributing guide][contributing-guide].

<!-- </faq-question> -->


<!-- </faq-questions> -->


<!-- <links> -->

[dom]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[canvas]: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
[webgl]: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API

[shiny]: http://shiny.rstudio.com/
[bokeh]: http://bokeh.pydata.org/en/latest/
[plotly]: https://plot.ly/matlab/

[stackoverflow-developer-survey]: http://stackoverflow.com/research/developer-survey-2016
[module-counts]: http://www.modulecounts.com/

[javascript-ubiquity]: https://blog.codinghorror.com/javascript-the-lingua-franca-of-the-web/

[cylon-js]: https://github.com/hybridgroup/cylon/
[iot-js]: https://github.com/Samsung/iotjs
[jerryscript]: https://github.com/Samsung/jerryscript
[johnny-five]: https://github.com/rwaldron/johnny-five

[virtualenvs]: http://docs.python-guide.org/en/latest/dev/virtualenvs/
[npm]: https://www.npmjs.com/

[mdn-math]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

[native-math-bugs]: https://github.com/stdlib-js/stdlib/blob/master/docs/native_math_bugs.md
[contributing-guide]: https://github.com/stdlib-js/stdlib/blob/master/CONTRIBUTING.md

[wasm]: https://github.com/WebAssembly/spec/
[asm]: http://asmjs.org/spec/latest/
[numpy]: http://www.numpy.org/
[scikit-learn]: http://scikit-learn.org/stable/

[semver]: http://semver.org/
[node-lts]: https://github.com/nodejs/LTS
[node-addons]: https://nodejs.org/api/addons.html

[ecma-262]: http://www.ecma-international.org/publications/standards/Ecma-262.htm

<!-- </links> -->
