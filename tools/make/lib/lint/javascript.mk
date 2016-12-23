
# VARIABLES #

# Define the linter to use when linting JavaScript source files:
JAVASCRIPT_LINTER ?= jshint


# DEPENDENCIES #

ifeq ($(JAVASCRIPT_LINTER), jshint)
	include $(TOOLS_MAKE_LIB_DIR)/lint/jshint.mk
else ifeq ($(JAVASCRIPT_LINTER), eslint)
	include $(TOOLS_MAKE_LIB_DIR)/lint/eslint.mk
endif


# TARGETS #

# Check code quality.
#
# This target lints all JavaScript source code.

lint-javascript: lint-javascript-src lint-javascript-tests lint-javascript-examples lint-javascript-benchmarks

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


# Check benchmark code quality.
#
# This target lints only JavaScript benchmark files.

lint-javascript-benchmarks: $(NODE_MODULES)
	$(QUIET) $(FIND_BENCHMARKS_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JAVASCRIPT_LINT) $(JAVASCRIPT_LINT_FLAGS) $$file || exit 1; \
	done

.PHONY: lint-javascript-benchmarks


# Check JavaScript code quality.
#
# This target lints JavaScript files. Note that we expect `$FILES` to be a JavaScript file list.

lint-javascript-files: $(NODE_MODULES)
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JAVASCRIPT_LINT) $(JAVASCRIPT_LINT_FLAGS) $$file || exit 1; \
	done

.PHONY: lint-javascript-files

