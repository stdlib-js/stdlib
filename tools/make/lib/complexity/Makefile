
# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/complexity/javascript.mk


# RULES #

# Generate a complexity report.
#
# This target analyzes source code and generates a complexity report.

complexity: complexity-javascript

.PHONY: complexity


# Analyze source code complexity.
#
# This target analyzes only source files.

complexity-src: complexity-javascript-src

.PHONY: complexity-src


# Analyze test code complexity.
#
# This target analyzes only test files.

complexity-tests: complexity-javascript-tests

.PHONY: complexity-tests


# Analyze example code complexity.
#
# This target analyzes only example files.

complexity-examples: complexity-javascript-examples

.PHONY: complexity-examples


# Analyze benchmark code complexity.
#
# This target analyzes only benchmark files.

complexity-benchmarks: complexity-javascript-benchmarks

.PHONY: complexity-benchmarks


# View a complexity report.
#
# This target opens an HTML complexity report in a local web browser.

view-complexity: view-javascript-complexity

.PHONY: view-complexity


# Remove complexity artifacts.
#
# This target deletes complexity artifacts, such as complexity reports and associated HTML pages.

clean-complexity: clean-javascript-complexity

.PHONY: clean-complexity
