
# VARIABLES #

# Define the command for setting executable permissions:
MAKE_EXECUTABLE ?= chmod +x

# Define the path to the [Travis CI][1] configuration file:
#
# [1]: https://docs.travis-ci.com/user/customizing-the-build
TRAVIS_CONF ?= $(ROOT_DIR)/.travis.yml

# Define the path of the linter executable:
LINT_TRAVIS_CONF ?= $(TOOLS_DIR)/lint/travis-conf/lint


# TARGETS #

# Lint configuration.
#
# This target lints a Travis CI configuration file.

lint-conf-travis:
	$(QUIET) $(MAKE_EXECUTABLE) $(LINT_TRAVIS_CONF)
	$(QUIET) $(LINT_TRAVIS_CONF) $(TRAVIS_CONF)

.PHONY: lint-conf-travis
