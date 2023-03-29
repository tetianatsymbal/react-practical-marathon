import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import DataReceiver from "./DataReceiver";
import ErrorFallback from "./ErrorFallback";

function DataReceiverWithBoundary() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <DataReceiver />
      </ErrorBoundary>
    </>
  );
}

export default DataReceiverWithBoundary;
