import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

// below, the tags add text to the bottom and top of the page
// delete later if don't want
const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className='page'>
                {/* <span className='tags top-tags'>&lt;welcome&gt;</span> */}

                <Outlet />

                {/* <span className='tags bottom-tags'>
                &lt;/to&gt;
                <br />
                <span className='bottom-tag-html'>&lt;kristen's webpage&gt;</span>

                </span> */}
            </div>
        </div>
    )
}

export default Layout