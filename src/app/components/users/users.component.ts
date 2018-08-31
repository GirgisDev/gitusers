import { Component } from '@angular/core';

import { GituserService } from './../../services/gituser.service';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})
export class UsersComponent {
	users: any;
	currentUser: any;
	detailedUser: any = {};

	constructor(private gituserService: GituserService) {
		// calling getuSers function
		this.getUsers();
	}

	// subscribe to the getUsers method of the GituserService service
	getUsers() {
		this.gituserService.getUsers().subscribe(users => {
			// pushing the objects into users array
			this.users = users;

			// setting the current user to the first user,
			// so there is always a current user
			this.currentUser = this.users[0];
			console.log(this.users);

			// getting the full details using the url property of the last get request
			this.gituserService.getDetailedUser(this.currentUser.url).subscribe(user => {
				this.detailedUser = user;

				console.log(this.detailedUser);
				
			});
		});

	}

	loadMore() {
		this.gituserService.loadMore();
		this.getUsers();
	}

	updateUser(username) {
		// check to see which objects has that username and push to the current user
		for(let user of this.users) {
			if (user.login === username) {
				this.currentUser = user;

				// getting the full details using the url property of the last get request
				this.gituserService.getDetailedUser(this.currentUser.url).subscribe(user => {
					this.detailedUser = user;

					console.log(this.detailedUser);
					
				});
			}
		}
	}


}
