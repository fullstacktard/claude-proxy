import type { ExecutionMode, RunnerOptions, HealthStatus } from "./types.js";
export declare class ClaudeProxyRunner {
    private mode;
    private port;
    private host;
    private configPath?;
    private debug;
    private process;
    private containerId;
    constructor(options?: RunnerOptions);
    /**
     * Start the proxy
     */
    start(): Promise<void>;
    /**
     * Stop the proxy
     */
    stop(): Promise<void>;
    /**
     * Check if proxy is running
     */
    isRunning(): Promise<boolean>;
    /**
     * Get health status
     */
    getHealth(): Promise<HealthStatus>;
    /**
     * Get current mode
     */
    getMode(): ExecutionMode;
    private startDocker;
    private startLocal;
}
//# sourceMappingURL=runner.d.ts.map