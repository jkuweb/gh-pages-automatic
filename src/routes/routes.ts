import { generatePath } from 'react-router-dom';

export const ROUTES = {
	HOME: '/',
	GITHUB_MEMBER_COLLECTION: '/github-members',
	GITHUB_MEMBER_DETAIL: '/github-member/:login',
};

interface SwitchRoutes {
	HOME: string;
	GITHUB_MEMBER_COLLECTION: string;
	GITHUB_MEMBER_DETAIL: string;
}

export const switchRoutes: SwitchRoutes = {
	HOME: '/',
	GITHUB_MEMBER_COLLECTION: '/github-members',
	GITHUB_MEMBER_DETAIL: '/github-member/:login',
};

interface Routes
	extends Omit<
		SwitchRoutes,
		'GITHUB_MEMBER_DETAIL' | 'CHARACTER_MEMBER_DETAIL'
	> {
	githubDetails: (login: string) => string;
}

export const routes: Routes = {
	...switchRoutes,
	githubDetails: login =>
		generatePath(switchRoutes.GITHUB_MEMBER_DETAIL, { login }),
};
