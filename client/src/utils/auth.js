import decode from 'jwt-decode';

class AuthService {
	getProfile() {
		return decode(this.getToken());
	}

	loggedIn() {
		// Checks if there is a saved token and it's still valid
		const token = this.getToken();
		return !!token && !this.isTokenExpired(token) ? true : false;
	}

	isTokenExpired(token) {
		try {
			const decoded = decode(token);
			if (decoded.exp < Date.now() / 1000) {
				localStorage.removeItem('id_token');
				return true;
			} else return false;
		} catch (err) {
			return err;
		}
	}

	getToken() {
		// Retrieves the user token from localStorage
		return localStorage.getItem('id_token');
	}

	login(idToken) {
		// Saves user token to localStorage
		localStorage.setItem('id_token', idToken);

		window.location.assign('/dashboard'); //might need to change depends on pages
	}

	logout() {
		// Clear user token and profile data from localStorage
		localStorage.removeItem('id_token');
		// this will reload the page and reset the state of the application
		window.location.reload();
	}
}

export default new AuthService();
