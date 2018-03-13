
import * as login from './components/Login/types';

/**
 * All possible objects in Redux store
 *
 * @export
 * @interface IApplicationState
 */
export interface IApplicationState {
    login?: login.ILoginAction;

}

/**
 * Describes possible props for a components.
 *
 * All actions and state objects might not be available.
 *
 * @export
 * @interface IProps
 */
export interface IProps extends IApplicationState {
    dispatch?: any;
    FacebookLogin: login.FacebookLogin;
}