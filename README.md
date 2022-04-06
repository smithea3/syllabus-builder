# Syllabus Builder

This project is intended to help faculty members with drafting a course syllabus by providing a starter template. After faculty provide a few details about their course in a form, they can get a template that includes all class session dates in one of several file formats.

This project is an adaptation of Rice University's [Syllabus Maker](http://wcaleb.rice.edu/syllabusmaker/) tool [created by W. Caleb McDaniel](https://github.com/wcaleb/ricescheduler). It attempts to provide the same functionality with static pages instead of a server-side service. Naturally, it's also tailored to Duke University's needs and uses a data file instead of Duke's less scrape-able academic calendar.

## Development

This project requires [Node](https://nodejs.org/) and **npm** (or yarn installed separately if you prefer). You'll then need to install dependencies from the project root:

```shell
$ npm install
```

The project config includes a few scripts:

- `npm run preview` - builds and starts vite dev server with hot reloading.
- `npm run build` - builds the project and outputs to a `build` folder.

### Updating the Calendar

The data file for the academic calendar is located at `src/calendar.json`. It will need to be updated each academic year with closings and other important events.
