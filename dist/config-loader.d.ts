/**
 * claude-proxy configuration loader
 *
 * Loads and validates configuration from ~/.claude-workflow/claude-proxy-config.yaml
 * Enforces mutual exclusivity between agent_routing and model_routing modes.
 *
 * @example
 * const config = loadClaudeProxyConfig();
 * if (config) {
 *   console.log('Agent routing enabled:', config.routing.agent_routing);
 * }
 */
import type { ClaudeProxyConfig, ConfigValidationResult } from "./types.js";
/**
 * Global workflow directory path
 * Can be overridden via CLAUDE_PROXY_CONFIG_DIR environment variable for standalone usage
 */
export declare const CLAUDE_WORKFLOW_DIR: string;
/**
 * Path to claude-proxy configuration file
 */
export declare const CLAUDE_PROXY_CONFIG_PATH: string;
/**
 * Default configuration values
 */
export declare const DEFAULT_CONFIG: ClaudeProxyConfig;
/**
 * Validate claude-proxy configuration
 * Enforces mutual exclusivity of routing modes
 *
 * @param config - Configuration to validate
 * @returns Validation result with errors and warnings
 */
export declare function validateClaudeProxyConfig(config: ClaudeProxyConfig): ConfigValidationResult;
/**
 * Load and validate claude-proxy config from global folder
 *
 * @param options - Loading options
 * @param options.silent - Suppress warning messages
 * @returns Loaded configuration or null if not found/invalid
 */
export declare function loadClaudeProxyConfig(options?: {
    silent?: boolean;
}): ClaudeProxyConfig | null;
/**
 * Check if agent routing is enabled
 * Convenience function for quick checks
 *
 * @returns true if agent routing is enabled, false otherwise
 */
export declare function isAgentRoutingEnabled(): boolean;
/**
 * Check if model routing is enabled
 * Convenience function for quick checks
 *
 * @returns true if model routing is enabled, false otherwise
 */
export declare function isModelRoutingEnabled(): boolean;
/**
 * Get the effective routing mode
 *
 * @returns "agent" | "model" | "passthrough"
 */
export declare function getRoutingMode(): "agent" | "model" | "passthrough";
/**
 * Get fallback configuration
 *
 * @returns Fallback configuration with defaults applied
 */
export declare function getFallbackConfig(): ClaudeProxyConfig["fallback"];
//# sourceMappingURL=config-loader.d.ts.map