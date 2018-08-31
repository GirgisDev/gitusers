import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GituserService {
	private client_id = 'd151b22bef67f9ba94a6';
	private client_secret = 'd95bea6acd2f2aa1b118edc9ed94a6d56aaf177c';
	private perPage = 5;
	url = '';

	constructor(private http: Http) {
		console.log("Github service ready...");
		// this.getUsers();
	}

	getUsers () {
		return this.http.get(
			"http://api.github.com/users?since=0" 
			+ "?client_id=" 
			+ this.client_id 
			+ "&client_secret=" 
			+ this.client_secret + "&per_page=" + this.perPage)
					.map(res => res.json())
	}

	getDetailedUser(url) {
		return this.http.get(
			url 
			+ "?client_id=" 
			+ this.client_id 
			+ "&client_secret=" 
			+ this.client_secret)
					.map(res => res.json())
	}

	loadMore() {
    // if the number of the user loaded is more than or equal to 20,
    // the function will return
		if (this.perPage >= 20) {
			return;
		}
  
    // increment the perPage variable,
    // to increase the number of git users in the request
		this.perPage += 5;

    // call getYsers function to make a new request,
    // with the new number of users
		this.getUsers();
	}

}
