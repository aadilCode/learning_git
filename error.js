function handleAuthError(error) {
	if (error && error.status === 401) {
		return "Invalid credentials. Please try again.";
	} else if (error && error.status === 403) {
		return "You are not authorized to access this resource.";
	} else {
		return "An authentication error occurred.";
	}
}

module.exports = handleAuthError;
