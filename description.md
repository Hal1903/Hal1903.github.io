# Documentation on Structure and Updates

### App.js
Defines routing config: what pages to display, URL path, and URL parameters/variables needed to route.
... path="/course/:topic" shows a list of articles
... path="/course/:topic/:articleId" uses dynamic parameters to show /SUBJECT/ARTICLE post.

### Courses.js
Contains all the course panels and descriptions.
onClick={() => navigate(`/course/${course.id}`)} inserts course ID to the URL and instructs to look up the corresponding article list i.e. articleMap[topic].
course.id should match the folder name so that the loader and this navigate logic works properly.

### utils/loadPosts
This loads the posts, used in ArticleList navigated from Courses.
require.context is a webpack feature telling webpack to look only .js in the src/posts and its subdirectories
-> context is a function that lists all the matching files that can be extracted via .keys().
module i.e. context(key) is a dict-like object: keys={__esModule, default, title, ...} and values. key is a string of path matched.
articleMap is a nested object of articleName: {default: ..., variable1: ..., ...}. 
Ordering logic is done by naming system of article js files.

### pages/Home.js
contains Slideshow, Timeline, and Gacha.

### pages/ArticleList.js


### pages/MarkdownArticle.js
This is a framework of articles, containing UI miscellaneous and actual post components.

### components/Timeline.js
The content is hard coded here.

### Slideshow.js
This includes all the paths to the images for slideshow.

### src/posts/SUBJECT/articleX_Y


### public
Contains all the images and blog posts in html format.
Academic resources are in .js because they are more likely to get shared hence should have better UI, 



### posts katex
No more than 2 matrices in the same block should be added. It will overflow.


### Resource Creation
Run on git bash in the project root folder:
for i in {3..10}; do touch src/posts/{topic}/article${i}_0.js; done


### Building + Deploying + Uploading to GitHub
Run on git bash in the project root folder:
$ /bin/bash "c:\Users\...\project_folder\all.bash"