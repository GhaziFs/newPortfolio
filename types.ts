import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Design';
  icon: React.ReactNode;
}

export interface Project {
  image: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}
