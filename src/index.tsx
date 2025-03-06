import { createRoot } from 'react-dom/client';
import { App } from './app';
import { GithubMemberProvider } from '@/pods/github-members/github-member/providers/github-member.provider';
import { GithubCollectionProvider } from '@/pods/github-members/github-member-collection/providers';
import { PaginationProvider } from '@/common/providers';
import './style.module.scss';

const rootElement = document.getElementById('root');
if (rootElement) {
	const root = createRoot(rootElement);
	root.render(
		<PaginationProvider>
			<GithubCollectionProvider>
				<GithubMemberProvider>
					<App />
				</GithubMemberProvider>
			</GithubCollectionProvider>
		</PaginationProvider>
	);
}
