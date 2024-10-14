# node/express/ts starter kit

A lightweight launchpad for Express + TypeScript projects.

## what is this?

I've worked with Node + Express before, but I'm still new to integrating TS into that stack -- for that matter, any kind of "manual" implementation of TS. All my TS experience is in the context of `create-next-app`, where I've had the luxury of not needing to consider build steps, transpilation, `tsconfig` minutia, etc.

Occasionally I've sat down, read a TS + Express tutorial, worked through it, hit some snags, and left it for later. But when "later" happens, I've forgotten what the snags are and how I was thinking of resolving them.  And I'm often skeptical of some of the tutorial's implicit choices, but after a break it can be hard to recall any research I might have done to make an educated decision.

Therefore, the purpose of this repo is to serve as a "known-good" starter kit that I can use as a launchpad for current and future projects without having to reinvent the wheel.

## why did you set it up this way?

My choices in setting this up were based on a couple specific principles:

- Make TypeScript work, and keep it simple
- Avoid unnecessary packages
- Use ES6 imports

Basically, I wanted this repo to be about as trim as possible and projects made with it can add dependencies as needed.  Over time as I gain more experience with this stack I imagine I'll acquire stronger opinions about which TS tooling to use, but for now -- this is fine.

## instructions for use (macOS/Linux commands)

1. If you're not me, fork the repo
2. Clone the repo into a new folder with the name of your project:

   `git clone git@github.com:continentaldivide/ts-node-test.git example-repo-name`

3. Move into the folder and get rid of the git history so you don't inherit my commits from the starter kit:

   ```
   cd example-repo-name
   rm -rf .git
   ```

4. Delete this README so you can add one appropriate for the project:

   `rm README.md`

5. Install dependencies

   `npm i`

6. Re-add git

   ```
   git init
   git add .
   git commit -m "Initial commit"
   ```

7. run `npm run dev` and ensure that nodemon launches the server and you can view a response at `localhost:8888`
