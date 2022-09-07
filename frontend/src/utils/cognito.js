import {
		CognitoUserPool,
		CognitoUser,
		AuthenticationDetails
	} from 'amazon-cognito-identity-js';

export function authenticate(userName,password, config){

	var authenticationData = {
		Username: userName,
		Password: password

	var authenticationDetails = new AuthenticationDetails(authenticationData);

	var poolData = {
		UserPoolId: config.cognito.USER_POOL_ID, // Your user pool id here
		ClientId: config.cognito.APP_CLIENT_ID, // Your client id here
	};

	var userPool = new CognitoUserPool(poolData);

	var userData = {
		Username: email,
		Pool: userPool,
	};
	var cognitoUser = new CognitoUser(userData);
	cognitoUser.authenticateUser(authenticationDetails, {
		onSuccess: function(result) {
			var accessToken = result.getAccessToken().getJwtToken();

			//POTENTIAL: Region needs to be set if not already set previously elsewhere.
			AWS.config.region = config.cognito.REGION;

			AWS.config.credentials = new AWS.CognitoIdentityCredentials({
				IdentityPoolId: config.cognito.IDENTITY_POOL_ID, // your identity pool id here
				Logins: {
					// Change the key below according to the specific region your user pool is in.
					['cognito-idp.'+ config.cognito.REGION + '.amazonaws.com/' + config.cognito.USER_POOL_ID]: result
						.getIdToken()
						.getJwtToken(),
				},
			});

			//refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
			AWS.config.credentials.refresh(error => {
				if (error) {
					console.log(error)
					// console.error(error);
				} else {
					// Instantiate aws sdk service objects now that the credentials have been updated.
					// example: var s3 = new AWS.S3();
					console.log('Successfully logged!');
					
				}
			});
		},

		onFailure: function(err) {
			alert(err.message || JSON.stringify(err));
		},
	}