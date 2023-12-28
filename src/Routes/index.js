// REACT
import { lazy } from "react";

// IMPORTS
const Authentication = lazy(() => import('./Authentication.Routes'));
const Protected = lazy(() => import('./Protected.Routes'));
const Admin = lazy(() => import('./Admin.Routes'));

// EXPORTS
export { Authentication, Protected, Admin };