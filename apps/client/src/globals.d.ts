import type { UnleashClient } from 'unleash-proxy-client';

global {
  interface Window {
    unleash: UnleashClient;
  }
}