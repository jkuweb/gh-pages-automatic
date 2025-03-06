import React, { PropsWithChildren } from 'react';
import { Container } from '@mui/material';

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Container
				maxWidth='lg'
				sx={{ backgroundColor: '#f0f8ff', minHeight: '100vh' }}
			>
				{children}
			</Container>
		</>
	);
};
