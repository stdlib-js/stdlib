
# VARIABLES #

# Define the command for setting executable permissions:
MAKE_EXECUTABLE ?= chmod +x

# Define the Node environment:
NODE_ENV_TEST ?= $(NODE_ENV)

# Define the Node path:
NODE_PATH_TEST ?= $(NODE_PATH)

# Define the test runner to use when running JavaScript tests:
JAVASCRIPT_TEST_RUNNER ?= tape

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

tools-test-javascript: $(NODE_MODULES)
	$(QUIET) for test in $(TOOLS_TESTS); do \
		echo ''; \
		echo "Running test: $$test"; \
		NODE_ENV=$(NODE_ENV_TEST) \
		NODE_PATH=$(NODE_PATH_TEST) \
		$(JAVASCRIPT_TEST) \
			$(JAVASCRIPT_TEST_FLAGS) \
			$$test \
		| $(TAP_REPORTER) || exit 1; \
	done

.PHONY: tools-test-javascript


# Generate a JavaScript test summary.
#
# This target runs JavaScript unit tests and aggregates TAP output as a test summary.

tools-test-javascript-summary: $(NODE_MODULES)
	$(QUIET) for test in $(TOOLS_TESTS); do \
		echo ''; \
		echo "Running test: $$test"; \
		NODE_ENV=$(NODE_ENV_TEST) \
		NODE_PATH=$(NODE_PATH_TEST) \
		$(JAVASCRIPT_TEST) \
			$(JAVASCRIPT_TEST_FLAGS) \
			$$test \
		| $(TAP_SUMMARY) || exit 1; \
	done

.PHONY: tools-test-javascript-summary


# Run unit tests against Node.js versions.
#
# This targets runs JavaScript unit tests against specific Node.js versions.

tools-test-node-versions: $(NODE_MODULES)
	$(QUIET) $(MAKE_EXECUTABLE) $(JAVASCRIPT_TEST_NODE_VERSIONS)
	$(QUIET) $(JAVASCRIPT_TEST_NODE_VERSIONS) $(JAVASCRIPT_TEST_NODE_VERSIONS_FLAGS) $(TOOLS_TESTS)

.PHONY: tools-test-node-versions
