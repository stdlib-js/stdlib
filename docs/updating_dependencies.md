# Updating Dependencies

> A guide to updating project dependencies.

## Introduction

This is a guide to updating project dependencies. Various project dependencies require tailored update procedures, which are documented here.

## Electron

To update [Electron][electron], perform the following steps:

1.  Check the version release notes to ensure that updating [Electron][electron] will **not** introduce breaking changes. Note that a major [Electron][electron] release does **not** imply breaking changes within the project. What matters is what changes are included in the release and whether those changes affect our usage of [Electron][electron].

    If updating [Electron][electron] **will** introduce breaking changes, assess the implications to the project and determine whether the changes affect internal project usage or will cause downstream effects for project consumers. If the former, assess whether refactoring to accommodate the changes is possible. In both scenarios, consult with a project lead to determine an update strategy.

2.  Update the configuration file found in `/etc` for David, a package which monitors npm for new releases, to use the desired [Electron][electron] version.

3.  Update the default `DEPS_ELECTRON_VERSION` Makefile environment variable value to the desired [Electron][electron] version.

4.  For each [Electron][electron] checksum found in `/deps/checksums`, rename the folder to the desired [Electron][electron] version and update the checksum for each target platform. If [Electron][electron] adds support for a new target platform, add the checksum. If [Electron][electron] removes support for a target platform, remove the existing checksum.

5.  Commit the changes.

## Node Modules

To update `node_modules` dependencies, perform the following steps:

1.  Check the dependency's release notes, changelog, and/or commit history to ensure that updating the dependency will **not** introduce breaking changes. Note that a major release does **not** imply breaking changes within the project. What matters is what changes are included in the release and whether those changes affect our usage of the dependency.

    If updating a dependency **will** introduce breaking changes, assess the implications to the project and determine whether the changes affect internal project usage or will cause downstream effects for project consumers. If the former, assess whether refactoring to accommodate the changes is possible. In both scenarios, consult with a project lead to determine an update strategy.

2.  Remove the dependency. If the dependency is a production dependency,

    <!-- run-disable -->

    ```bash
    $ npm uninstall <package> --save
    ```

    If the dependency is a development dependency,

    <!-- run-disable -->

    ```bash
    $ npm uninstall <package> --save-dev
    ```

    Note that the above commands will remove the dependency **and** update the root `package.json`.

3.  Install the dependency. If the dependency is a production dependency,

    <!-- run-disable -->

    ```bash
    $ npm install <package> --save
    ```

    If the dependency is a development dependency,

    <!-- run-disable -->

    ```bash
    $ npm install <package> --save-dev
    ```

    Note that the above commands will install the dependency **and** update the root `package.json`.

4.  Commit the changes.

<section class="links">

[electron]: https://www.electronjs.org/

</section>

<!-- /.links -->
