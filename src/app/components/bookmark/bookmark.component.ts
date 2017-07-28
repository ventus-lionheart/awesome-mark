import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-bookmark',
  	templateUrl: './bookmark.component.html',
  	styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

  	constructor() { }

  	ngOnInit() {
  	}

	// Get bookmarks from local storage
	restoredBookmarks = localStorage.getItem('bookmarks');
	// Set bookmarks to localStorage bookmarks
	bookmarks = (localStorage.getItem('bookmarks') !== null) ? JSON.parse(this.restoredBookmarks) : [ {name: 'Learn Angular', url: 'https://angular.io/', marked: false, show: false}, {name: 'YouTube', url: 'https://www.youtube.com/', marked: false, show: false} ];

	/* -- Helper Functions for event handling -- */

	// Uppercase the 1st letter of a string
	toUpperFirst(text) {
		return text.charAt(0).toUpperCase() + text.slice(1);
	}

	// Toggle favorite and update localStorage
	toggleFavorite(i) {
		this.bookmarks[i].marked = !this.bookmarks[i].marked;
		localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
	}

	// Delete a bookmark and update localStorage
	deleteBookmark(i) {
		this.bookmarks.splice(i, 1);
		localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
	}

	// Add a bookmark and update localStorage
	addBookmark(bName, bUrl) {
		// Form validation
		if(bName === "" || bUrl === "") {
			return;
		}
		if(bName == " " || bUrl == " ") {
			return;
		}
		var capitalizeName = this.toUpperFirst(bName);
		this.bookmarks.push({'name': capitalizeName, 'url': bUrl, 'marked': false, 'show': false});
		localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
		var inputValue = document.getElementById('bookmark-name') as HTMLInputElement;
		inputValue.value = "";
		inputValue.placeholder = "Name";
		var inputValue = document.getElementById('bookmark-url') as HTMLInputElement;
		inputValue.value = "";
		inputValue.placeholder = "URL";
	}

	// Show form to edit
	showForm(i) {
		this.bookmarks[i].show = !this.bookmarks[i].show;
		localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
	}

	// Edit a bookmark and update localStorage
 	editBookmark(eName, eUrl, i){
		if(eName === "" || eUrl === "") {
			return;
		}
		if(eName == " " || eUrl == " ") {
			return;
		}

		var capitalizeName = this.toUpperFirst(eName);
		this.bookmarks[i].name = eName;
		this.bookmarks[i].url = eUrl;
		this.bookmarks[i].show = false;
		localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
	}

	// Cancel editing
	cancelEdit(i) {
		this.bookmarks[i].show = false;
		localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
	}

}

// Define bookmarks object
interface bookmarks {
	name: string;
	url: string;
	marked: boolean;
}
