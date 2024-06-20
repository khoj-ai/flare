/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import { Container, Engine } from "tsparticles-engine";

declare global {
    interface Window {
        particlesInit: (engine: Engine) => Promise<void>;
        particlesLoaded: (container: Container) => void;
    }
}

export {};