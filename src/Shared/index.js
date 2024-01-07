// REACT
import { lazy } from "react";

// IMPORTS
const Table = lazy(() => import('./Table.Shared'));
const MUIDialog = lazy(() => import('./MUIDialog.Shared'));
const Form = lazy(() => import('./Form.Shared'));
const SideDrawer = lazy(() => import('./SideDrawer.Shared'));
const OrderTable = lazy(() => import('./OrderTable.Shared'));

// EXPORTS
export { Table, MUIDialog, Form, SideDrawer, OrderTable }