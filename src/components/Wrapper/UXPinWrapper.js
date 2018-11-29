import React from "react";
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/styles.css';

 export default function UXPinWrapper({ children }) {
    return <AppProvider>{children}</AppProvider>;
  }
  