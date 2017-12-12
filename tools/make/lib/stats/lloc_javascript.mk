
# VARIABLES #

# Define the path of the executable for calculating JavaScript LLOC:
JAVASCRIPT_LLOC ?= $(TOOLS_PKGS_DIR)/static-analysis/js/lloc-file-list/bin/cli

# Define the command flags:
JAVASCRIPT_LLOC_FLAGS ?=


# TARGETS #

# Calculate LLOC.
#
# This target calculates JavaScript logical lines of code (LLOC).

stats-lloc-javascript: stats-lloc-javascript-src stats-lloc-javascript-tests stats-lloc-javascript-examples stats-lloc-javascript-benchmarks

.PHONY: stats-lloc-javascript


# Calculate source code LLOC.
#
# This target calculates logical lines of code (LLOC) for only JavaScript source files.

stats-lloc-javascript-src: $(JAVASCRIPT_LLOC) $(NODE_MODULES)
	$(QUIET) $(FIND_SOURCES_CMD) | $(NODE) $(JAVASCRIPT_LLOC) $(JAVASCRIPT_LLOC_FLAGS)

.PHONY: stats-lloc-javascript-src


# Calculate test LLOC.
#
# This target calculates logical lines of code (LLOC) for only JavaScript test files.

stats-lloc-javascript-tests: $(JAVASCRIPT_LLOC) $(NODE_MODULES)
	$(QUIET) $(FIND_TESTS_CMD) | $(NODE) $(JAVASCRIPT_LLOC) $(JAVASCRIPT_LLOC_FLAGS)

.PHONY: stats-lloc-javascript-tests


# Calculate example code LLOC.
#
# This target calculates logical lines of code (LLOC) for only JavaScript example files.

stats-lloc-javascript-examples: $(JAVASCRIPT_LLOC) $(NODE_MODULES)
	$(QUIET) $(FIND_EXAMPLES_CMD) | $(NODE) $(JAVASCRIPT_LLOC) $(JAVASCRIPT_LLOC_FLAGS)

.PHONY: stats-lloc-javascript-examples


# Calculate benchmark LLOC.
#
# This target calculates logical lines of code (LLOC) for only JavaScript benchmark files.

stats-lloc-javascript-benchmarks: $(JAVASCRIPT_LLOC) $(NODE_MODULES)
	$(QUIET) $(FIND_BENCHMARKS_CMD) | $(NODE) $(JAVASCRIPT_LLOC) $(JAVASCRIPT_LLOC_FLAGS)

.PHONY: stats-lloc-javascript-benchmarks


# Calculate LLOC.
#
# This target calculates logical lines of code (LLOC) for JavaScript files. Note that we expect `$FILES` to be a JavaScript file list.
#
# TODO: address possibility of `$FILES` exceeding maximum allowed shell arguments

stats-lloc-javascript-files: $(JAVASCRIPT_LLOC) $(NODE_MODULES)
	$(QUIET) $(NODE) $(JAVASCRIPT_LLOC) $(JAVASCRIPT_LLOC_FLAGS) $(FILES)

.PHONY: stats-lloc-javascript-files
