/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as EditorImport } from './routes/editor'
import { Route as AdminImport } from './routes/admin'
import { Route as R404Import } from './routes/$404'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const EditorRoute = EditorImport.update({
  id: '/editor',
  path: '/editor',
  getParentRoute: () => rootRoute,
} as any)

const AdminRoute = AdminImport.update({
  id: '/admin',
  path: '/admin',
  getParentRoute: () => rootRoute,
} as any)

const R404Route = R404Import.update({
  id: '/$404',
  path: '/$404',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/$404': {
      id: '/$404'
      path: '/$404'
      fullPath: '/$404'
      preLoaderRoute: typeof R404Import
      parentRoute: typeof rootRoute
    }
    '/admin': {
      id: '/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminImport
      parentRoute: typeof rootRoute
    }
    '/editor': {
      id: '/editor'
      path: '/editor'
      fullPath: '/editor'
      preLoaderRoute: typeof EditorImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/$404': typeof R404Route
  '/admin': typeof AdminRoute
  '/editor': typeof EditorRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/$404': typeof R404Route
  '/admin': typeof AdminRoute
  '/editor': typeof EditorRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/$404': typeof R404Route
  '/admin': typeof AdminRoute
  '/editor': typeof EditorRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/$404' | '/admin' | '/editor'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/$404' | '/admin' | '/editor'
  id: '__root__' | '/' | '/$404' | '/admin' | '/editor'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  R404Route: typeof R404Route
  AdminRoute: typeof AdminRoute
  EditorRoute: typeof EditorRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  R404Route: R404Route,
  AdminRoute: AdminRoute,
  EditorRoute: EditorRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/$404",
        "/admin",
        "/editor"
      ]
    },
    "/": {
      "filePath": "index.jsx"
    },
    "/$404": {
      "filePath": "$404.jsx"
    },
    "/admin": {
      "filePath": "admin.jsx"
    },
    "/editor": {
      "filePath": "editor.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
