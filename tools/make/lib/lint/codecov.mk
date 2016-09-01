
# VARIABLES #

# Define the path to the [Codecov][1] configuration file:
#
# [1]: https://github.com/codecov/support/wiki/Codecov-Yaml
CODECOV_CONF ?= $(ROOT_DIR)/.codecov.yml


# TARGETS #

# Lint configuration.
#
# This target lints a Codecov configuration file.

lint-conf-codecov:
	$(QUIET) curl -X POST --data-binary @$(CODECOV_CONF) https://codecov.io/validate

.PHONY: lint-conf-codecov
