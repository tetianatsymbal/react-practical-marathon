import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import DataItem from "./DataItem";
import ErrorFallback from "./ErrorFallback";

function DataList() {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <DataItem />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <DataItem />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <DataItem />
      </ErrorBoundary>
    </div>
  );
}

export default DataList;
