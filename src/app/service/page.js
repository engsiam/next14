"use client";
import React, { useEffect, useState } from 'react';

const DeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState(null);

  useEffect(() => {
    const platform = getPlatform();
    const browserName = getBrowserName();

    const deviceInfo = {
      platform,
      browserName,
    };

    setDeviceInfo(deviceInfo);
  }, []);

  const getBrowserName = () => {
    const userAgent = window.navigator.userAgent;

    if (userAgent.indexOf('Edg') !== -1) {
      return 'Edge';
    } else if (userAgent.indexOf('Chrome') !== -1) {
      return 'Chrome';
    } else if (userAgent.indexOf('Firefox') !== -1) {
      return 'Firefox';
    } else if (userAgent.indexOf('Safari') !== -1 && userAgent.indexOf('Version/') !== -1) {
      return 'Safari'; // Check for "Version/" to distinguish Safari on iOS
    } else if (userAgent.indexOf('Safari') !== -1) {
      return 'Mobile Safari'; // Assume Mobile Safari if "Safari" is present but "Version/" is not
    } else if (userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident') !== -1) {
      return 'Internet Explorer';
    } else {
      return 'Unknown';
    }
  };

  const getPlatform = () => {
    const userAgent = window.navigator.userAgent;

    if (userAgent.match(/Android/i)) {
      return 'Android';
    } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
      return 'iOS';
    } else if (userAgent.match(/Windows Phone/i)) {
      return 'Windows Phone';
    } else if (userAgent.match(/Windows NT 10.0/i)) {
      return 'Windows 10';
    } else if (userAgent.match(/Windows NT 11.0/i)) {
      return 'Windows 11';
    } else {
      return window.navigator.platform;
    }
  };

  return (
    <div>
      {deviceInfo && (
        <div>
          <p>Platform: {deviceInfo.platform}</p>
          <p>Browser Name: {deviceInfo.browserName}</p>
        </div>
      )}
    </div>
  );
};

export default DeviceInfo;
