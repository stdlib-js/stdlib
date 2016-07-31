# Frequently Asked Questions

> Common answers to common questions.


#### Why numeric computing in JavaScript?

1. __Speed__: JavaScript is fast for a dynamically compiled language. This is largely due to the need for browser vendors to run web applications as fast as possible, thus forcing vendors to make continuous performance improvements and create highly optimized runtime environments.
1. __Rendering Engine__: web browsers are performant, highly optimized view engines, supporting a range of rendering modes (DOM, canvas, WebGL). The web browser has become the preferred medium for interactive graphics, with most major numeric computing platforms supporting some form of web browser rendering. Accordingly, if JavaScript is already being used to render data as a plot, also makes sense to support numeric manipulation of that data without requiring language context switching and the additional complexity of establishing bridges between different languages and platforms.
1. __Community__: JavaScript has one of the largest and most diverse developer communities. Giving that community access to better and more intermediate tools for numeric computing enables more potential creative applications and use cases. And further, numeric computing has traditionally been the purview of companies selling expensive software only accessible to industry and large academic institutions. By creating free and open numeric computing tools in JavaScript, numeric computing is democratized and made accessible to a community which has typically not had access to such tools.
1. __Ubiquity__: JavaScript is ubiquitous, being supported on nearly any device with a web browser and, now, being pushed as a preferred scripting language in the Internet of Things (IoT). Thus, if a numeric compute application can run in JavaScript, the broader the potential reach of that application.
1. __Distribution__: distributing a numeric compute application is considerably easier when compared to traditional numeric computation platforms. Because JavaScript is ubiquitous, the need for installing additional languages and tooling is often unnecessary. A web browser is frequently all that is required.
1. __Package Management__: Node.js package management is superior to anything available in other numeric computing environments. As developers who must manage Python virtual environments or implement odd workarounds to support multiple versions of the same dependency can attest, the Node.js strategy makes dependency management trivial. And further, the tight integration with npm makes distribution even more frictionless. Frictionless is not a common adjective used in describing package management in other numeric computing environments.



#### Why provide custom Math implementations?

1. ECMA-262 does not mandate specific algorithms (only recommends `libm`). Accordingly, JavaScript implementors are free to choose any algorithm, which means that numeric computation results often differ across environments. This renders JavaScript not amenable to reproducible computation.
1. ECMA-262 does not require a minimum precision. As a result, JavaScript implementors make non-transparent trade-offs between speed and accuracy, frequently favoring speed above all else. While traditional web applications may not require highly accurate Math results, many numeric computation applications do. And because the implementations are not transparent, debugging accuracy issues in numeric computation applications which use native Math built-ins is considerably more difficult.
1. Because native Math functions are implementation dependent, numeric computation applications are __not__ portable. By creating a set of standard Math implementations, we ensure that results on one platform are reproducible on every other platform.
1. Native math functions frequently have bugs (see [docs/native_math_bugs.md][native-math-bugs]).
1. Native math functions are often buried deep in compiler code and written in languages other than JavaScript. By implementing Math functions purely in JavaScript, the hope is that the underlying algorithms are more transparent, approachable, forkable, and debuggable.



#### Will we support promises?

No.



<!-- <links> -->

<!-- TODO: internal project link -->

[native-math-bugs]: https://github.com/stdlib-js/stdlib/docs/native_math_bugs.md

<!-- </links> -->
