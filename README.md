# Monorepo - App with domains without Nx

Simple project with domains libs and demo application.

Pros:
- Fine grain code and testing subdivision by domains

Cons:
- Extra work for each lib generated (remove angular.json and tsconfig references )

The libs are:
- Stored into libs folder
- Don't have any build script in angular json and refecerences in tsconfig

Imports from the domains libraries are always from the public-api.ts that works as a gateway.

All the domain feature, ui and utils could be implemented as separate libs inside a single domains.

Example of an extended structure with 2 more feature in luggages domain:

libs --
    luggages --
        domain // default lib
        feature-tracking // lib for luggages tracking
        feature-boarding // lib for luggages embark procedures
    ticket --
        domain // default lib