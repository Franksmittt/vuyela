declare module '@builder.io/partytown/react' {
  import { ComponentType } from 'react';
  
  export interface PartytownConfig {
    forward?: string[];
    resolveUrl?: (url: URL, location: Location, type: string) => URL | null;
    lib?: string;
    debug?: boolean;
  }
  
  export const Partytown: ComponentType<{ config?: PartytownConfig }>;
}



