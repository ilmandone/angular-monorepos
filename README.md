# Monorepo - App with domains without Nx

Simple project with custom domains libs and demo application.

The libs are:
- Stored into libs folder
- Don't have any build script in angular json and refecerences in tsconfig

Imports from the domains libraries are always from the public-api.ts that works as a gateway.

All the domain feature, ui and utils are implemented as lib's item and not as separate library