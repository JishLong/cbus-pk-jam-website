<h1 align="center">Automated Builds</h1>

There is a [GitHub action](../../.github/workflows/create-build.yaml) that will automatically create/update any 
[build branch](../management/branch-semantics.md) when the corresponding version branch is created/updated. This action
will also run when a [new version is cut](automated-version-cutting.md).

This automatic creating/updating of build branches allows for easier [deployment](deployment.md).
