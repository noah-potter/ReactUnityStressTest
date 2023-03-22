Unity Version: 2021.3.8f1 LTS  
React Unity Version: 0.15.1

### About this project

This is an example of elements not being rendered. The app is supposed to render a green grid, but often, a random amount of tiles aren't rendered on the first render.

The way I've been able to to reproduce isn't anything special. Essentially, this happens to me when I render a decent number of components on startup, let's say around 150 elements. This repo is just to to isolate the issue in a simplified environment.

All the action is happening in `StressTest.tsx` so it may be easier to copy that file into an existing project of yours and render it on startup. I don't know if it'll happen on other machines yet though. Sometimes it renders correctly consistently, but saving the typescript files to trigger a rebuild, or restarting the editor can causing the incorrect rendering to start happening.

### Expected output

![](/expected_output.png)

### Example actual output

![](/actual_output.png)

### Previous test

`/pyramid.webm` is another example of a previous test I was running that shows the initial squares not rendering. I figured the grid shows it better.
