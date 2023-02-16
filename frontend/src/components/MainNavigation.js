import { Form, NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';

const isLinkActive = ({ isActive }) => (isActive ? classes.active : undefined);

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to="/" className={isLinkActive} end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/events" className={isLinkActive}>
                            Events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/newsletter" className={isLinkActive}>
                            Newsletter
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/auth?mode=login" className={isLinkActive}>
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <Form action="/logout" method="post">
                            <button type="submit">Logout</button>
                        </Form>
                    </li>
                </ul>
            </nav>
            <NewsletterSignup />
        </header>
    );
}

export default MainNavigation;
