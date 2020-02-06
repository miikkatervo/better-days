# Better Days

The current master branch is deployed using Netlify.
Open https://jolly-hugle-6697c3.netlify.com/ to view it in the browser.

This single-page web application is used to enhance your mental wellbeing. This is done by everyday, preferebaly in the morning, to go to the app and fill out a quick daily-mood-survey. The survey asks you your current mood from one to five (1 = horrible, 5 = great). Then it asks you what you are grateful for and what you are stressed or worried about at that moment. This makes the user have to process his/her feelings, which usually helps out if he/she is feeling down. 

After the survey, the user can see a summary of his/her past feelings. This contains a mood-reflection view and view containing a chart of the user's moods in the past. The mood-reflection-view contains some words of encouragement depending on the user's current mood. It also displays a random mood from the past: if the user is currently feeling down (1-2), it will show what the user was greatful for in the past, to lift up his/her spirits. If the user is feeling fine (3-5), it will show what he/she was worried about in the past. The point is to show that the thing he/she was stressing about was not that bad, because he/she is now feeling well. The goal is that the user starts to slowly understand that feelings come and go, and to not get too overwhelmed by his/her current mood, because in the end things aren't usually as bad as they appear.

At the end of the summary, the user receives a daily quote. The quote is fetched from a free quote-api https://quotes.rest/. On top of giving the user thoughtful quotes, this acts as an incentive for the user to fill out the daily-mood-survey every day.

The user's data is stored in Google's Cloud Firestore https://firebase.google.com/docs/firestore and the user authentication is handled via Google Sign-In.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
