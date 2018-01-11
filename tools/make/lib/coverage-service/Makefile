
# VARIABLES #

# Define the name of the coverage report:
COVERAGE_NAME ?= $(NODE_ENV_TEST)

# Define the path of the `lcov.info` file which will be sent to the coverage service:
LCOV_INFO ?= $(COVERAGE_DIR)/lcov.info


# DEPENDENCIES #

ifeq ($(COVERAGE_SERVICE), codecov)
	include $(TOOLS_MAKE_LIB_DIR)/coverage-service/codecov.mk
endif


# TARGETS #

#/
# Sends coverage statistics to a hosted code coverage service.
#
# @param {string} LCOV_INFO - path of the `lcov.info` file which will be sent to the coverage service
# @param {string} COVERAGE_SERVICE - code coverage service name
#
# @example
# make coverage
#/
coverage:
ifeq ($(COVERAGE_SERVICE), codecov)
	$(QUIET) CI_SERVICE=$(CI_SERVICE) LCOV_INFO=$(LCOV_INFO) COVERAGE_NAME=$(COVERAGE_NAME) $(MAKE) -f $(this_file) coverage-codecov
endif

.PHONY: coverage
