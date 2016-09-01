
# VARIABLES #

# Define the analysis tool to use when analyzing JavaScript files:
JAVASCRIPT_COMPLEXITY_TOOL ?= plato

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

complexity-javascript: $(NODE_MODULES)
	$(QUIET) $(JAVASCRIPT_COMPLEXITY) $(JAVASCRIPT_COMPLEXITY_FLAGS) $(SOURCES) $(TESTS) $(EXAMPLES)

.PHONY: complexity-javascript


# Analyze source code complexity.
#
# This target analyzes only JavaScript source files.

complexity-javascript-src: $(NODE_MODULES)
	$(QUIET) $(JAVASCRIPT_COMPLEXITY) $(JAVASCRIPT_COMPLEXITY_FLAGS) $(SOURCES)

.PHONY: complexity-javascript-src


# Analyze test code complexity.
#
# This target analyzes only JavaScript test files.

complexity-javascript-tests: $(NODE_MODULES)
	$(QUIET) $(JAVASCRIPT_COMPLEXITY) $(JAVASCRIPT_COMPLEXITY_FLAGS) $(TESTS)

.PHONY: complexity-javascript-tests


# Analyze example code complexity.
#
# This target analyzes only JavaScript example files.

complexity-javascript-examples: $(NODE_MODULES)
	$(QUIET) $(JAVASCRIPT_COMPLEXITY) $(JAVASCRIPT_COMPLEXITY_FLAGS) $(EXAMPLES)

.PHONY: complexity-javascript-examples


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
