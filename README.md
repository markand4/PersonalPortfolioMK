# Mark Kurpiel's Personal Portfolio Web Application 

Live Site: https://personal-portfolio-markkurpiel.vercel.app/


## Tools Used 

1. [Next.js- Framework](https://nextjs.org/) 
2. [Vercel- Deployment](https://vercel.com/dashboard)
3. [Tailwindcss-Styling](https://tailwindcss.com/)
5. [SendGrid- Api for email](https://sendgrid.com/)



## Setup

Get the code by either cloning this repository using git

```
git clone https://github.com/sanity-io/example-frontend-next-js.git
```

... or [downloading source code](https://github.com/sanity-io/example-frontend-next-js/archive/master.zip) code as a zip archive.

Once downloaded, open the terminal in the project directory, and install dependencies with:

```
npm install
```

If you're running your own Sanity project with the example movie dataset, go to `lib/sanity.js` and change the following lines:

```
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'NAME_OF_YOUR_DATASET',
```

You can locate the ID of your project in the header of the [management page for your project](https://manage.sanity.io/).

You also need to enable `localhost:3000` in your CORS Origins settings! Either through the [management page](https://manage.sanity.io/) under `settings` or by running the below in the project folder you set up with `sanity init`:

```
sanity cors add http://localhost:3000
```

Then start the example app with:

```
npm run dev
```

The app should now be up and running at http://localhost:3000 🚀
