import type { DockerOptions, ContainerInfo, HealthStatus } from "./types.js";
/**
 * Check if Docker is available
 */
export declare function isDockerAvailable(): Promise<boolean>;
/**
 * Build Docker image from local Dockerfile
 */
export declare function buildImage(contextPath: string, options?: DockerOptions): Promise<void>;
/**
 * Start a Docker container
 */
export declare function startContainer(options?: DockerOptions): Promise<string>;
/**
 * Stop a Docker container
 */
export declare function stopContainer(containerNameOrId?: string): Promise<void>;
/**
 * Check if container is running
 */
export declare function isContainerRunning(containerName?: string): Promise<boolean>;
/**
 * Get container health status
 */
export declare function getContainerHealth(containerName?: string): Promise<HealthStatus>;
/**
 * Get container info
 */
export declare function getContainerInfo(containerName?: string): Promise<ContainerInfo | null>;
/**
 * Stream container logs
 */
export declare function streamContainerLogs(containerName: string | undefined, onLog: (line: string) => void): {
    stop: () => void;
};
//# sourceMappingURL=docker.d.ts.map