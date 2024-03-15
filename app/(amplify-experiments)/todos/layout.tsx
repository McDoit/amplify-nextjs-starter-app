import React from 'react';
import { Amplify } from "aws-amplify";

import config from '@/amplifyconfiguration.json';

Amplify.configure(config);

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
        {/* <h1>THIS IS NEW LAYOUT</h1> */}
        {children}
      </section>
    )
  }
