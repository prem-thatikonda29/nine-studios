"use client";

import { useState, useEffect } from "react";

type DeviceType = "mobile" | "tablet" | "laptop";

function getDeviceType(width: number): DeviceType {
  if (width <= 425) {
    return "mobile";
  } else if (width > 425 && width <= 768) {
    return "tablet";
  } else {
    return "laptop";
  }
}

export function useDeviceType(): DeviceType {
  const [deviceType, setDeviceType] = useState<DeviceType>(() => {
    // Initialize with correct value on mount to avoid hydration mismatch
    if (typeof window !== "undefined") {
      return getDeviceType(window.innerWidth);
    }
    return "laptop";
  });

  useEffect(() => {
    const updateDeviceType = () => {
      const newDeviceType = getDeviceType(window.innerWidth);
      setDeviceType(newDeviceType);
      console.log("Device type detected:", newDeviceType, "Width:", window.innerWidth);
    };

    // Set initial value
    updateDeviceType();

    // Update on resize
    window.addEventListener("resize", updateDeviceType);

    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return deviceType;
}
