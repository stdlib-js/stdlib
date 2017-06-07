
# VARIABLES #

# Define test runner to use when running JavaScript tests across multiple Node.js versions:
JAVASCRIPT_TEST_NODE_VERSIONS ?= $(TOOLS_DIR)/test/scripts/test_node_versions

# Define the command-line options to be used when invoking the versions runner:
JAVASCRIPT_TEST_NODE_VERSIONS_FLAGS ?= \
	--versions $(NODE_VERSIONS)


# DEPENDENCIES #

ifeq ($(JAVASCRIPT_TEST_RUNNER), tape)
	include $(TOOLS_MAKE_LIB_DIR)/test/tape.mk
endif


# TARGETS #

# Run JavaScript unit tests.
#
# This target runs JavaScript unit tests using a specified test runner and pipes TAP output to a reporter.

test-javascript: test-javascript-local

.PHONY: test-javascript


# Run JavaScript unit tests locally.
#
# This target runs JavaScript unit tests locally.

test-javascript-local: $(NODE_MODULES)
	$(QUIET) echo $(TESTS) | xargs -n1 | while read -r test; do \
		echo ''; \
		echo "Running test: $$test"; \
		NODE_ENV=$(NODE_ENV_TEST) \
		NODE_PATH=$(NODE_PATH_TEST) \
		$(JAVASCRIPT_TEST) \
			$(JAVASCRIPT_TEST_FLAGS) \
			$$test \
		| $(TAP_REPORTER) || exit 1; \
	done

.PHONY: test-javascript-local


# Generate a JavaScript test summary.
#
# This target runs JavaScript unit tests and aggregates TAP output as a test summary.

test-javascript-summary: $(NODE_MODULES)
	$(QUIET) echo $(TESTS) | xargs -n1 | while read -r test; do \
		echo ''; \
		echo "Running test: $$test"; \
		NODE_ENV=$(NODE_ENV_TEST) \
		NODE_PATH=$(NODE_PATH_TEST) \
		$(JAVASCRIPT_TEST) \
			$(JAVASCRIPT_TEST_FLAGS) \
			$$test \
		| $(TAP_SUMMARY) || exit 1; \
	done

.PHONY: test-javascript-summary


# Generate TAP output.
#
# This target runs JavaScript unit tests and streams raw TAP output.

test-javascript-tap: $(NODE_MODULES)
	$(QUIET) echo $(TESTS) | xargs -n1 | while read -r test; do \
		NODE_ENV=$(NODE_ENV_TEST) \
		NODE_PATH=$(NODE_PATH_TEST) \
		$(JAVASCRIPT_TEST) \
			$(JAVASCRIPT_TEST_FLAGS) \
			$$test; \
	done

.PHONY: test-javascript-tap


# Generate xUnit XML output.
#
# This target runs JavaScript unit tests and converts TAP output to xUnit XML.

test-javascript-xunit: SHELL=/bin/bash -o pipefail
test-javascript-xunit: $(NODE_MODULES)
	$(QUIET) echo $(TESTS) | xargs -n1 | while read -r test; do \
		NODE_ENV=$(NODE_ENV_TEST) \
		NODE_PATH=$(NODE_PATH_TEST) \
		$(JAVASCRIPT_TEST) \
			$(JAVASCRIPT_TEST_FLAGS) \
			$$test \
		| $(TAP_XUNIT) || exit 1; \
	done

.PHONY: test-javascript-xunit


# Run unit tests against Node.js versions.
#
# This targets runs JavaScript unit tests against specific Node.js versions.

test-node-versions: $(NODE_MODULES)
	$(QUIET) $(MAKE_EXECUTABLE) $(JAVASCRIPT_TEST_NODE_VERSIONS)
	$(QUIET) $(JAVASCRIPT_TEST_NODE_VERSIONS) $(JAVASCRIPT_TEST_NODE_VERSIONS_FLAGS) $(TESTS)

.PHONY: test-node-versions
