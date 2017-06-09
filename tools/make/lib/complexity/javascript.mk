
# VARIABLES #

# Define the output directory:
JAVASCRIPT_COMPLEXITY_DIR ?= $(COMPLEXITY_DIR)/javascript


# DEPENDENCIES #

ifeq ($(JAVASCRIPT_COMPLEXITY_TOOL), plato)
	include $(TOOLS_MAKE_LIB_DIR)/complexity/plato.mk
endif


# TARGETS #

# Analyze code complexity.
#
# This target analyzes all JavaScript source code.
#
# TODO: address bash argument length errors

complexity-javascript: $(NODE_MODULES)
	$(QUIET) $(JAVASCRIPT_COMPLEXITY) $(JAVASCRIPT_COMPLEXITY_FLAGS) $(SOURCES) $(TESTS) $(EXAMPLES) $(BENCHMARKS)

.PHONY: complexity-javascript


# Analyze source code complexity.
#
# This target analyzes only JavaScript source files.
#
# TODO: address bash argument length errors

complexity-javascript-src: $(NODE_MODULES)
	$(QUIET) $(JAVASCRIPT_COMPLEXITY) $(JAVASCRIPT_COMPLEXITY_FLAGS) $(SOURCES)

.PHONY: complexity-javascript-src


# Analyze test code complexity.
#
# This target analyzes only JavaScript test files.
#
# TODO: address bash argument length errors

complexity-javascript-tests: $(NODE_MODULES)
	$(QUIET) $(JAVASCRIPT_COMPLEXITY) $(JAVASCRIPT_COMPLEXITY_FLAGS) $(TESTS)

.PHONY: complexity-javascript-tests


# Analyze example code complexity.
#
# This target analyzes only JavaScript example files.
#
# TODO: address bash argument length errors

complexity-javascript-examples: $(NODE_MODULES)
	$(QUIET) $(JAVASCRIPT_COMPLEXITY) $(JAVASCRIPT_COMPLEXITY_FLAGS) $(EXAMPLES)

.PHONY: complexity-javascript-examples


# Analyze benchmark code complexity.
#
# This target analyzes only JavaScript benchmark files.
#
# TODO: address bash argument length errors

complexity-javascript-benchmarks: $(NODE_MODULES)
	$(QUIET) $(JAVASCRIPT_COMPLEXITY) $(JAVASCRIPT_COMPLEXITY_FLAGS) $(BENCHMARKS)

.PHONY: complexity-javascript-benchmarks


# View a complexity report.
#
# This target opens an HTML JavaScript complexity report in a local web browser.

view-javascript-complexity:
ifeq ($(JAVASCRIPT_COMPLEXITY_TOOL), plato)
	$(QUIET) $(MAKE) -f $(this_file) view-plato-report
endif

.PHONY: view-javascript-complexity


# Remove a complexity directory.
#
# This target cleans up a JavaScript complexity directory by removing it entirely.

clean-javascript-complexity:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(JAVASCRIPT_COMPLEXITY_DIR)

.PHONY: clean-javascript-complexity
