
# VARIABLES #

# Define the name of the coverage report:
COVERAGE_NAME ?= $(NODE_ENV_TEST)

# Define the path of the `lcov.info` file which will be sent to the coverage service:
LCOV_INFO ?= $(COVERAGE_DIR)/lcov.info


# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/coverage-service/codecov.mk


# TARGETS #

#/
# Sends coverage statistics to a hosted code coverage service.
#
# @param {string} COVERAGE_SERVICE - code coverage service name
# @param {string} LCOV_INFO - path of the `lcov.info` file which will be sent to the coverage service
# @param {string} [COVERAGE_NAME] - coverage report name
# @param {string} [CI_SERVICE] - continuous integration (CI) service from which the coverage report originates
#
# @example
# make coverage
#/
coverage:
ifeq ($(COVERAGE_SERVICE), codecov)
	$(QUIET) LCOV_INFO=$(LCOV_INFO) CI_SERVICE=$(CI_SERVICE) COVERAGE_NAME=$(COVERAGE_NAME) $(MAKE) -f $(this_file) coverage-codecov
endif

.PHONY: coverage
