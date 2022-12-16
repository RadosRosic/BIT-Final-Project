# M N N R

CRUD app for middleman between IT companies and IT experts. The application uses a localserver DB, but can be configured for a different backend.

## Created by

Marija Mitrović, Nevena Petrović, Nemanja Nikolić, Radoš Rosić for final project at BIT.

December 2022.

### Getting started

If you are not using `npm` you can use `yarn` instead.

> npm install\
> npm start

### Connecting to DB

Go to `interviews-report-mock-api` folder.

If you are not using `npm` you can use `yarn` instead.

> npm install\
> npm start

For more info see `README.md` in `interviews-report-mock-api` folder.

Credits to Nenad Bugaric for the API.

### Login

Login is not necessary, however without login parts of the application are offlimits, and only GET method is supported. Once logged in, POST, PUT, and DELETE can be used as well.

> username: dev@dev.com\
> password: developer

To proceed without logging in simply click `Continue`.

### Viewing candidates

You do not need to be logged in to do this.
Landing page with candidates cards will be displayed. Clicking on a signle candidate will show more info and available reports for selected candidate.

### Creating report

You need to be logged in to do this.
Click on `Create` -> `Create Report` or navigate to `/reports/create-report`.

1. Select candidate
2. Select company
3. Select date, interview phase, interview status, write some notes

All fields are mandatory.

Next interview phase is dependent on previous one being marked as `passed`.
Once the `final` phase has been marked as `passed`, the candidate cannot have any more interviews with said company.

### Deleting report

You need to be logged in to do this.
Click on `Reports` or navigate to `/reports`.

On the right-hand side (⇨ ⇨ this way for Ana ⇨ ⇨) of reports list, you will see a trashcan icon. Once clicked you will be prompted to confirm deletion.
Deleted report cannot be restored. Use with caution.

Due to interview phases dependancy on eachother, deleting a previous report will prevent you from creating next phase reports, until there is a valid report for the missing phase.
For example, a candidate has passed `CV`, `HR`, and `Tech` phases at a company. Deleting `HR` report will prevent you from generating `Final` phase report until you post `HR` phase report again.

### Creating candidate

You need to be logged in to do this.
Click on `Create` -> `Create Candidate` or navigate to `/reports/create-candidate`.

All fields are mandatory.
For best experince the image should be in portrait format.

### Editing candidate

You need to be logged in to do this.

1. Click on `Candidates` or navigate to `/candidates`
2. Click on a card of a candidate you wish to edit

You will be redirected to edit candidate page. All field are mandatory. For best experince the image should be in portrait format.

### Creating company

You need to be logged in to do this.
Click on `Create` -> `Create Company` or navigate to `reports/create-company`.

All fields are mandatory.
