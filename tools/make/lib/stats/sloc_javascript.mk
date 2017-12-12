
# VARIABLES #

# Define the path of the executable for calculating JavaScript SLOC:
JAVASCRIPT_SLOC ?= $(TOOLS_PKGS_DIR)/static-analysis/js/sloc-file-list/bin/cli

# Define the command flags:
JAVASCRIPT_SLOC_FLAGS ?=


# TARGETS #

# Calculate SLOC.
#
# This target calculates JavaScript source lines of code (SLOC).

stats-sloc-javascript: stats-sloc-javascript-src stats-sloc-javascript-tests stats-sloc-javascript-examples stats-sloc-javascript-benchmarks

.PHONY: stats-sloc-javascript


# Calculate source code SLOC.
#
# This target calculates source lines of code (SLOC) for only JavaScript source files.

stats-sloc-javascript-src: $(JAVASCRIPT_SLOC) $(NODE_MODULES)
	$(QUIET) $(FIND_SOURCES_CMD) | $(NODE) $(JAVASCRIPT_SLOC) $(JAVASCRIPT_SLOC_FLAGS)

.PHONY: stats-sloc-javascript-src


# Calculate test SLOC.
#
# This target calculates source lines of code (SLOC) for only JavaScript test files.

stats-sloc-javascript-tests: $(JAVASCRIPT_SLOC) $(NODE_MODULES)
	$(QUIET) $(FIND_TESTS_CMD) | $(NODE) $(JAVASCRIPT_SLOC) $(JAVASCRIPT_SLOC_FLAGS)

.PHONY: stats-sloc-javascript-tests


# Calculate example code SLOC.
#
# This target calculates source lines of code (SLOC) for only JavaScript example files.

stats-sloc-javascript-examples: $(JAVASCRIPT_SLOC) $(NODE_MODULES)
	$(QUIET) $(FIND_EXAMPLES_CMD) | $(NODE) $(JAVASCRIPT_SLOC) $(JAVASCRIPT_SLOC_FLAGS)

.PHONY: stats-sloc-javascript-examples


# Calculate benchmark SLOC.
#
# This target calculates source lines of code (SLOC) for only JavaScript benchmark files.

stats-sloc-javascript-benchmarks: $(JAVASCRIPT_SLOC) $(NODE_MODULES)
	$(QUIET) $(FIND_BENCHMARKS_CMD) | $(NODE) $(JAVASCRIPT_SLOC) $(JAVASCRIPT_SLOC_FLAGS)

.PHONY: stats-sloc-javascript-benchmarks


# Calculate SLOC.
#
# This target calculates source lines of code (SLOC) for JavaScript files. Note that we expect `$FILES` to be a JavaScript file list.
#
# TODO: address possibility of `$FILES` exceeding maximum allowed shell arguments

stats-sloc-javascript-files: $(JAVASCRIPT_SLOC) $(NODE_MODULES)
	$(QUIET) $(NODE) $(JAVASCRIPT_SLOC) $(JAVASCRIPT_SLOC_FLAGS) $(FILES)

.PHONY: stats-sloc-javascript-files
