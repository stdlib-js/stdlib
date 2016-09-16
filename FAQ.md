# Frequently Asked Questions

> Common answers to common questions.


* [Why numeric computing in JavaScript?](#numeric-computing-in-javascript)
* [What about WebAssembly?](#web-assembly)
* [Why reimplement and provide custom Math implementations?](#custom-math-implementations)
* [Why reimplement module functionality already available on npm?](#reimplementing-existing-packages)
* [Backward compatibility?](#backward-compatibility)
* [Promise support?](#promise-support)
* [ES2015 and beyond?](#es2015)
* [Why a monorepo?](#monorepo)
* [How can I contribute?](#contributing)


---

<!-- <faq-questions> -->

<!-- <faq-question> -->

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

<a name="web-assembly"></a>

### What about WebAssembly?

[WebAssembly][wasm] proposes to fundamentally change the web platform by providing a low-level compilation target, which, in the future, will allow any language to be compiled to run on the Web. Once [WebAssembly][wasm] is ubiquitously supported, web developers will be able to use, e.g., a numeric computation library from, not just JavaScript, but any language, including traditional languages, such as R, Python, Julia, and C/C++ (provided the library can compile). While the possibility of using libraries like [NumPy][numpy] and [scikit-learn][scikit-learn] on the Web is exciting, this is not viewed as an existential threat for the following reasons:

1. __Compilation__: as developers who have used [asm.js][asm] to compile C and C++ libraries to run on the Web can attest, the process is not as simple as defining input and output targets. Often pre-compiled code has to be massaged into a form suitable for compilation, which means work is involved, requiring both time and labor.
1. __Timescale__: [WebAssembly][wasm] is not likely to be ubiquitous anytime soon (as of 2016) and a need exists now for numeric computation libraries which work on the Web.
1. __Monoglot__: developers will still build JavaScript applications and most will, all things being equal, want to use a library written in the same idiom. Using a single language stack reduces cognitive overhead and simplifies application development.
1. __Legacy__: [WebAssembly][wasm] is unlikely to replace JavaScript, but, instead, serve a complementary role. JavaScript has a long and decorated history as part of the web platform. Relegating JavaScript to the dust bin would entail breaking the Web, an outcome which has been and will continue to be untenable, thus securing JavaScript's privileged status. 


<!-- </faq-question> -->


<!-- <faq-question> -->

<a name="custom-math-implementations"></a>

### Why reimplement and provide custom Math implementations?

1. [ECMA-262][ecma-262] does not mandate specific algorithms (only recommends `libm`). Accordingly, JavaScript implementors are free to choose any algorithm, which means that numeric computation results often differ across environments. This renders JavaScript not amenable to reproducible computation.
1. [ECMA-262][ecma-262] does not require a minimum [precision][mdn-math]. As a result, JavaScript implementors make non-transparent trade-offs between speed and accuracy, frequently favoring speed above all else. While traditional web applications may not require highly accurate Math results, many numeric computation applications do. And because the implementations are not transparent, debugging accuracy issues in numeric computation applications which use native Math built-ins is considerably more difficult.
1. Because native Math functions are implementation dependent, numeric computation applications are __not__ portable. By creating a set of standard Math implementations, we ensure that results on one platform are reproducible on every other platform.
1. Native math functions frequently have bugs (see [docs/native_math_bugs.md][native-math-bugs]).
1. Native math functions are often buried deep in compiler code and written in languages other than JavaScript. By implementing Math functions purely in JavaScript, the hope is that the underlying algorithms are more transparent, approachable, forkable, and debuggable.

<!-- </faq-question> -->


<!-- <faq-question> -->

<a name="reimplementing-existing-packages"></a>

### Why reimplement module functionality already available on npm?

* __Consistency__: package structure, documentation, testing, and code style vary widely, often as artifacts of author taste and eccentricities. By adhering to a single style, library consumers can focus on implementation details, rather than continual and arbitrary style distractions.
* __Quality__: packages range from extremely high quality to extremely poor quality, with the distribution of packages skewed toward the latter end of the spectrum. Any reimplementation of existing package functionality is done to ensure the same high standard and quality across all project modules.
* __Control__: bringing functionality "in-house" enables control of release cycles, testing, distribution, interface design, and API changes. 

<!-- </faq-question> -->


<!-- <faq-question> -->

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

<a name="promise-support"></a>

### Promise support?

No.

<!-- </faq-question> -->


<!-- <faq-question> -->

<a name="es2015"></a>

### ES2015 and beyond?

Only __if__ three conditions are met:

1. ES2015+ features can be used __without__ breaking backwards compatibility.
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
