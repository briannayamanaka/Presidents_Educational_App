# This is a project for Thomas Powell's CSE 134B Winter 2017 class.

[see demo.pdf in cs134/public/assignment5 for a simple walkthrough of our application]

Our application, U.S. Presidents is a now fully working and styled application.

It allows users to create an account so they may login (using any email or gmail) and maintain their account, which is essentially a "Dex" of preferred United States Presidents. 

Users are able to see what presidents are in the original dex (45 United States presidents) and based on what they discover about the presidents and their own preferences, users can create their own dex of their favorite presidents. As they continue to explore our library of images (gallergy) and our timeline of U.S. history, users can decide what presidents to keep, add, or remove from their dex.

Using the CRUD actions we experimented with in HW4, we were able to create and polish the following functions:

- (C) myFavs() CREATES the original dex of presidents by populating the page with a html elements that we append to, to form a dex of         user's favorite presidents. The creation is triggered by the first "favorite" marked by the user. Before then, a new user's 			  			Favorite page will be blank (except for the menu).
- (R) isFav() allows for users to see favorited presidents without navigating to favorites list. At any time, users can access and 						REVIEW their dex of favorited presidents from any page in the application. If users are looking at the original list of 45 							presidents, they can click on the individual presidents to see whether or not the president has been added to their favorite list. 			 This allows for the reader to rely on recognition instead of having to memorize many presidents over long periods of time.
- (U) addFavoritePresident() is a function that gives users the ability to UPDATE their dex of presidents. Being able to continuously         update their favorites' list serves as an incentive for users to keep learning about U.S. presidents through pictures and a 						timeline of important political events. The "favorite" button used to update the list of favorite presidents is intuitively 						located on the image of the president, following the format of many soccuessful social media hubs.
- (D) removeFavoritePresident() adds flexibility to the range of users' actions by providing a means for users to DELETE presidents from       their favorites list. This is also another tactic to keep users motivated to learn about each presidents' terms and what they 					could have done during their presidency to warrant removal from the favorites list.

Some interesting sidenotes on the progress of our project:
- Some of the prior project ideas included other educational websites geared towards younger students (space, dinosaurs, classes)
- We ended up not deviating much from our original blueprints
- We decided to go with the framework version of our project instead of the vanilla version out of uniformity and simplicity
- Although importing framework libraries was faster and easier, I personally preferred vanilla programming because of the freedom and 		total control you have over the design.
- To speed up our pages (particularly the presidents page) we employed a javascript class to load images as we scroll.
- As we made progress on our application, we constantly tested it on Android mobile devices to ensure everthing would still be legible
	and aesthetically presented. 
- We did not have time to cover cross browser testing, so our application may potentially look/behave differently if visited through
	Safari, Internet Explorer, or Firefox
- Our directory and file structure was very consistent for all five projects.
		- From public, you can access all five assignments
		- Each of the assignment directories has 3 main items: 1)index.html, 2).firebaserc, and 3)wireframes
		- In wireframes, you'll find the bulk of our files. There were only three javascript files, and one css file so we kept those in one 			 directory.
		- Within wireframes, we separated the repetative files that were large in number; for example, all president profiles are in one 					directory, all president images are in another, and all gallery images in a third.

Our primary aim is to present a clean and simple format geared towards younger students, parents and educators free from bias and misconstructions. Our secondary goal is to provide of-age or soon-to-be of-age American citizens with the knowledge they need to cast a well-informed and researched vote.


Project Members: Brianna Yamanaka, Gabriel Rangel, Kevin Wong

[Link to our website] (https://cse-134b-b2127.firebaseapp.com)
