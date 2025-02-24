<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Devcontainer Setup

> Step-by-Step Tutorial on How to Set Up the Repository in a Dev Container

## Introduction

We appreciate your interest in contributing to stdlib! Below, we've provided a step-by-step tutorial on how to set up the project locally on your device using a dev container.

The stdlib repository includes a preconfigured dev container, making it the easiest way to set up your development environment. It ensures proper linting, EditorConfig, and tooling are configured right from the start.

**Note:** The dev container does not yet support ARM64 architectures. For more information, or if you're interested in adding ARM64 support, you can visit this [issue][devcontainer-issue].

### Prerequisites

Setting up the stdlib dev container **requires** the following prerequisites:

-   [Git][git]: Version control
-   [Docker][docker]: Containerization
-   [VS Code][vscode]: Preferred IDE

### Download

To acquire the source code, first navigate to the parent directory where you want to place the project’s [Git][git] repository.

<!-- run-disable -->

```bash
$ cd /path/to/parent/destination/directory
```

Next, clone the repository.

<!-- run-disable -->

```bash
$ git clone https://github.com/stdlib-js/stdlib.git
```

If you are wanting to contribute to stdlib, first [fork][github-fork] the repository and amend the previous command.

<!-- run-disable -->

```bash
$ git clone https://github.com/<username>/stdlib.git
```

Open the repository in VS Code.

```bash
$ cd stdlib && code .
```

When prompted, open the repository in the dev container.

![image](https://github.com/user-attachments/assets/233c08d2-57ec-46c4-8e12-ecb3ca608f83)

Please be patient, as the post-create script may take some time to install all the required languages and dependencies.

![image](https://github.com/user-attachments/assets/8cd011e8-ec41-4216-be1c-d10ce5824928)

Close the terminal and wait for other dependencies to install.

![image](https://github.com/user-attachments/assets/06dbea2a-fb02-446a-a527-2f0626272811)

![image](https://github.com/user-attachments/assets/f7199eb5-f0a4-4fa2-aeba-856279b95c9f)

Close the terminal after the installation is completed.

![image](https://github.com/user-attachments/assets/267cd367-2eff-4d8b-8fb6-721cf5b066e2)

If you see this when you open the terminal, then the dev container installation was successful!

![image](https://github.com/user-attachments/assets/598259d3-7ce2-4e86-8147-78ba634701a7)

<section class="links">

[git]: http://git-scm.com/

[docker]: https://www.docker.com/

[vscode]: https://code.visualstudio.com/

[devcontainer-issue]: https://github.com/stdlib-js/stdlib/issues/4934

[github-fork]: https://help.github.com/articles/fork-a-repo/

</section>

<!-- /.links -->
