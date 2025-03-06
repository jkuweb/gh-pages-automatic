interface EnvVariables {
	GITHUB_API_BASE_URL: string;
	GITHUB_ORGANIZATION: string;
}

export const ENV_VARIABLES: EnvVariables = {
	GITHUB_API_BASE_URL: import.meta.env.PUBLIC_GITHUB_API_BASE_URL,
	GITHUB_ORGANIZATION: import.meta.env.PUBLIC_GITHUB_MEMBER_ORGANIZATION,
};
