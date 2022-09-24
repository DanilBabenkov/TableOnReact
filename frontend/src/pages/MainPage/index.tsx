import React from 'react';
import Page from '@components/Page';
import GoodsTable from '@features/goods-table/ui';

const MainPage: React.FC = () => {
	return (
		<Page>
			<GoodsTable />
		</Page>
	);
};

export default MainPage;
