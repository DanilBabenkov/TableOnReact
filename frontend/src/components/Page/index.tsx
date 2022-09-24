import React from 'react';
import Flex from '@components/Flex';

interface PageProps {
	children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({children}) => {

	return (
		<Flex
			container
			flexDirection="column"
			alignItems="center"
			minHeight="100vh"
			justifyContent="space-between"
		>
			{children}
		</Flex>
	);
};

export default Page;
