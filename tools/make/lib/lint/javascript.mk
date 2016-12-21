
# VARIABLES #

# Define the linter to use when linting JavaScript source files:
JAVASCRIPT_LINTER ?= jshint


# DEPENDENCIES #

ifeq ($(JAVASCRIPT_LINTER), jshint)
	include $(TOOLS_MAKE_LIB_DIR)/lint/jshint.mk
endif


# TARGETS #

# Check code quality.
#
# This target lints all JavaScript source code.

lint-javascript: lint-javascript-src lint-javascript-tests lint-javascript-examples

.PHONY: lint-javascript


# Check source code quality.
#
# This target lints only JavaScript source files.

lint-javascript-src: $(NODE_MODULES)
	$(QUIET) $(FIND_SOURCES_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JAVASCRIPT_LINT) $(JAVASCRIPT_LINT_FLAGS) $$file || exit 1; \
	done

.PHONY: lint-javascript-src


# Check test code quality.
#
# This target lints only JavaScript test files.

lint-javascript-tests: $(NODE_MODULES)
	$(QUIET) $(FIND_TESTS_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JAVASCRIPT_LINT) $(JAVASCRIPT_LINT_FLAGS) $$file || exit 1; \
	done

.PHONY: lint-javascript-tests


# Check example code quality.
#
# This target lints only JavaScript example files.

lint-javascript-examples: $(NODE_MODULES)
	$(QUIET) $(FIND_EXAMPLES_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JAVASCRIPT_LINT) $(JAVASCRIPT_LINT_FLAGS) $$file || exit 1; \
	done

.PHONY: lint-javascript-examples

