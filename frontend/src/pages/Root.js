import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
    // const navigation = useNavigation();
    const token = useLoaderData();

    return (
        <>
            <MainNavigation />
            <main>
                {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;
