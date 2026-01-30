"use client";

import React, { useEffect, useState } from "react";
import { isWebGLAvailable } from "../utils/webgl";

export const SafeWebGLWrapper = ({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) => {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    setCanRender(isWebGLAvailable());
  }, []);

  if (!canRender) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};
