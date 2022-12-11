import { useRef, useContext } from 'react';
import { API_KEY } from '../../env';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
    const newPasswordInputRef = useRef();
    const authCtx = useContext(AuthContext);

    const submitHandler = e => {
        e.preventDefault();

        const enteredNewPassword = newPasswordInputRef.current.value;

        fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    idToken: authCtx.token,
                    password: enteredNewPassword,
                    returnSecureToken: false
                })
            }
        ).then(res => {
            //
        });
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="new-password" minLength="6">
                    New Password
                </label>
                <input
                    type="password"
                    id="new-password"
                    ref={newPasswordInputRef}
                />
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    );
};

export default ProfileForm;
