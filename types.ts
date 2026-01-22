
// Added React import to resolve namespace issues for React.ReactNode types
import React from 'react';

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export interface Step {
  id: number;
  title: string;
  description: string;
}

export interface TrustBadge {
  icon: React.ReactNode;
  text: string;
  subtext: string;
}