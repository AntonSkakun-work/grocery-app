interface EnvConfig {
  apiBaseUrl: string;
}

const getEnvVar = (key: string, defaultValue: string): string => {
  return import.meta.env[key] || defaultValue;
};

export const env: EnvConfig = {
  apiBaseUrl: getEnvVar("VITE_API_BASE_URL", "http://localhost:3002"),
};
