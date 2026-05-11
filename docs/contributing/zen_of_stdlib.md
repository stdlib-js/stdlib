<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

<!-- lint disable expected-html-sections -->

# Zen of stdlib

```text
Do one thing. Do it well.
Embrace radical modularity.
Favor composition over configuration.
Stability is a feature.

Make it obvious and predictable.
Don't be clever.

Complexity kills.
Push complexity up the stack.

If it's hard to explain, it's a bad idea.
If it's hard to test, it's a bad design.

Failure should be easy to diagnose.

Value consistency above all else.
Except when correctness, safety, or clarity demands otherwise.

Write it like C.
Be explicit. Avoid polymorphism by default.

Automate where it scales; stop where it obscures.

Code is read more than it is written.
Be kind to your future self.

Code is craft.
Tend to the garden.

Mistakes are infectious.
Fix them early.

Simple is beautiful.
```

* * *

## Notes

### Do one thing

Avoid overloaded interfaces. A package should do one thing completely within its scope.

### Do it well

Prefer simple, robust implementations. Avoid shortcuts that compromise correctness, clarity, or maintainability.

### Embrace radical modularity

If it can stand alone, it should be a package. Decompose aggressively. Small, well-defined modules enable reuse, testing, and long-term maintainability.

### Favor composition over configuration

Avoid building widgets with many buttons. What you remove is more important and valuable than what you add.

### Stability is a feature

Build dependable software which stands the test of time. Don't break people's code.

### Make it obvious and predictable

Readers should never have to guess what something does. If an interface is contradictory, that is a sign it is poorly designed.

### Don't be clever

Inscrutable code is worse than no code at all.

### Complexity kills

Complexity makes code hard to reason about. Complex code collapses under its own weight. Complex interfaces create combinatorial problems. Complexity is the enemy of scale.

### Push complexity up the stack

Avoid overloading lower-level interfaces with complex interfaces and configuration. As you move down the stack, interfaces should become simpler, more predictable, and have less configurable behavior.

### If it's hard to explain, it's a bad idea

Prefer principled designs over incremental patches. Rewrites are expensive; think deeply before committing to an interface.

### If it's hard to test, it's a bad design

Full test coverage should be straightforward. Tests should reflect normal and expected use cases. If correctness depends primarily on obscure or arcane cases, that is a tell.

### Failure should be easy to diagnose

If an implementation is labor-intensive to debug, it is likely wrong and too complex.

### Value consistency above all else

When in Rome, do as the Romans do. No one will remember you for style points. If it's simple and boring, it's probably better.

### Except when correctness, safety, or clarity demands otherwise

Conventions matter, but not so much that exceptions cannot be made where warranted; however, there is a high bar for the exceptional.

### Write it like C

Prefer predictable performance. Favor monomorphic code paths. Avoid hidden allocations and polymorphic behavior unless clearly justified.

### Be explicit

Your mental model likely doesn't match that of others. Avoid relying on implied behavior.

### Avoid polymorphism by default

Monomorphic is best. Polymorphic is not great. Megamorphic is terrible.

### Automate where it scales; stop where it obscures

Automate repetitive work. Do not automate away necessary differences.

### Code is read more than it is written

You write it once. It is read forever. Document what you've done and why you've done it.

### Be kind to your future self

You aren't going to remember what you've done a week from now, let alone a month or year from now. Save yourself a headache by finishing what you've started and documenting your decisions. Your future self will thank you for your generosity.

### Code is craft

Take pride in your work. Code should be high quality, principled, reasoned, and rigorous.

### Tend to the garden

If you see something, do something. Don't let broken windows remain broken.

### Mistakes are infectious

Small inconsistencies propagate. A bad pattern copied once becomes precedent; copied twice, it becomes convention.

### Fix them early

Left unchecked, mistakes become systemic problems. Fix issues early before they spread.

### Simple is beautiful

Prefer elegance born from restraint. Make code simple, minimal, and easy to scan. Use negative space to highlight salient information. Take pride in writing code that is as clear to read as it is efficient to run.
