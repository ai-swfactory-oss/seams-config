# seams-config

Seams for configuration-file tools: yamllint, Taplo and Kustomize. Each package is a typed SDK seam over one tool, with a fake under `./testing`.

This repository holds only the guarded skeleton so far: `createYamllint` returns a seam that reports no problems, `createTaplo` returns a seam that reports no diagnostics, `createKustomize` returns a seam that builds no manifests, and each package's `./testing` holds a fake of its seam.

## Packages

- `@ai-swfactory-oss/seams-yamllint`: the seam over yamllint.
- `@ai-swfactory-oss/seams-taplo`: the seam over Taplo.
- `@ai-swfactory-oss/seams-kustomize`: the seam over Kustomize.

## Licence

MIT
