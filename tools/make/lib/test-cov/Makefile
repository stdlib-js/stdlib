
# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/test-cov/javascript.mk


# TARGETS #

# Run units and generate a test coverage report.
#
# This target instruments source code, runs unit tests, and outputs a test coverage report.

test-cov: test-javascript-cov

.PHONY: test-cov


# View a test coverage report.
#
# This target opens an HTML coverage report in a local web browser.

view-cov: view-javascript-cov

.PHONY: view-cov


# Remove a coverage artifacts.
#
# This target deletes coverage artifacts, such as coverage reports and associated HTML pages.

clean-cov: clean-javascript-cov

.PHONY: clean-cov
