import { Types } from 'mongoose';
import { User } from '../../users/entities/user.entity';
import { Role } from '../enums/role.enum';

export function getSeedData() {
  const johnDoeId = new Types.ObjectId();
  const adminId = new Types.ObjectId();
  const bondId = new Types.ObjectId();
  const rickId = new Types.ObjectId();
  const mortyId = new Types.ObjectId();

  const seedUsers: User[] = [
    {
      roles: [Role.User],
      password: '$2b$10$SKsIewDAtvctM/TxjgfYpOzHVJIsyumsgwvp63c2nRo1RJE1XuXPC',
      username: 'johndoe',
      _id: johnDoeId,
    },
    {
      roles: [Role.User, Role.Admin],
      password: '$2b$10$SKsIewDAtvctM/TxjgfYpOzHVJIsyumsgwvp63c2nRo1RJE1XuXPC',
      username: 'admin',
      _id: adminId,
    },
    {
      roles: [Role.User],
      password: '$2b$10$SKsIewDAtvctM/TxjgfYpOzHVJIsyumsgwvp63c2nRo1RJE1XuXPC',
      username: 'bond007',
      _id: bondId,
    },
    {
      roles: [Role.User, Role.Admin],
      password: '$2b$10$SKsIewDAtvctM/TxjgfYpOzHVJIsyumsgwvp63c2nRo1RJE1XuXPC',
      username: 'rick-c137',
      _id: rickId,
    },
    {
      roles: [Role.User],
      password: '$2b$10$SKsIewDAtvctM/TxjgfYpOzHVJIsyumsgwvp63c2nRo1RJE1XuXPC',
      username: 'morty-c137',
      _id: mortyId,
    },
  ];

  const seedPosts = [
    {
      body: `<p>Hey there,</p><p>Version 13.0.0 is here and it has some great updates for Angular developers everywhere. 🎉🎉</p><h1>TL;DR 🙌</h1><p>✅ <strong>View Engine is no longer available in Angular as of v13</strong></p><p>✅ Changes to the Angular Package Format (APF)</p><p>✅ <strong>Component API updates</strong></p><p>✅ End of IE11 support</p><p>✅ Improvements to the Angular CLI</p><p>✅ Framework changes and dependency updates ( <strong>TypeScript 4.4</strong>, <strong>Rxjs 7.4</strong>)</p><p>✅ Improvements to Angular tests</p><p>✅ Angular material component updates</p><p>✅ PR merges from community</p><p>✅ Docs Updated | Docs updating | Docs will be updated</p><h1>How to update to version 12</h1><p>Visit <a href="https://update.angular.io/" target="_blank">update.angular.io</a> for detailed information and guidance. To have the best update experience,</p><p>Update to 13</p><pre>ng update @angular/cli @angular/core
    </pre><p><br /></p><p>In order to update your global angular,</p><pre>npm i -g @angular/cli
    </pre><p><br /></p><h1>What’s in this release?</h1><h2>✅ Ivy is the default engine available in v13 👌</h2><ul><li>The Angular team already mentioned they will be removing View Engine from future major releases.</li><li>Read about this from Minko Gechev right <a href="https://blog.angular.io/upcoming-improvements-to-angular-library-distribution-76c02f782aa4" target="_blank">here</a></li><li>👉 Removing View Engine also means that Angular can reduce its reliance on ngcc <a href="https://angular.io/guide/glossary#ngcc" target="_blank">(Angular compatibility compiler)</a></li></ul><h2>✅ Changes to the Angular Package Format (APF)</h2><ul><li>👉 Libraries built with the latest version of the APF ( <a href="https://angular.io/guide/angular-package-format" target="_blank">Angular package format</a>) will no longer require the use of ngcc because of standardization on more modern JS formats such as ES2020.</li><li>As a result of these changes library developers can expect leaner package output and faster execution</li><li>Removed older output formats, including View Engine specific metadata from APF in v13</li><li>update in APF to support Node Package Exports which help developers from inadvertently relying on internal APIs that may change.</li></ul><h2>✅ Component API update</h2><ul><li>Before the changes in Angular v13, dynamically creating components required a lot of boilerplate code.</li><li>👉 The new API removes the need for <a href="https://angular.io/api/core/ComponentFactoryResolver" target="_blank">ComponentFactoryResolver</a> being injected into the constructor.</li><li>👉 Ivy creates the opportunity to instantiate the component with <a href="https://angular.io/api/core/ViewContainerRef#createComponent" target="_blank">ViewContainerRef.createComponent</a> without creating an associated factory.</li></ul><p><br /></p>`,
      title: 'Angular v13.0.0 Released',
      thumbnailUrl:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--A72eK5_5--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bjli6fcvz63cqnlico6t.png',
      author: johnDoeId,
    },
    {
      body: `<blockquote>This Metaverse is going to be far more pervasive and powerful than anything else. If one central company gains control of this, they will become more powerful than any government and be a god on Earth. Timothy Dean Sweeney (Epic Games)</blockquote><h2>What is the Metaverse?</h2><p>Before I begin, I would like to inform those of you who are well-versed in the Metaverse concept that this article may not be for you, that the vast majority of people I have spoken to have no idea what the Metaverse is, and it is to them that I write.</p><p>There are currently many definitions and speculations on what the Metaverse is and how it should be defined, for this article I will be sticking with a definition from the <a href="https://www.matthewball.vc/all/forwardtothemetaverseprimer" target="_blank">Metaverse Primer</a> by venture capitalist and writer Matthew Ball (who was previously head of strategy at Amazon Studios):</p><blockquote>The Metaverse is a massively scaled and interoperable network of real-time rendered 3D virtual worlds which can be experienced synchronously and persistently by an effectively unlimited number of users, and with continuity of data, such as identity, history, entitlements, objects, communications, and payments.</blockquote><p>To put it simply, the Metaverse is a virtual universe made up of connected experiences built to be cross-platform. That is, it isn't just accessible by VR headsets alone, but a whole range of devices including but not limited to computer systems, gaming consoles, mobile phones, XR hardware not leaving out physical presence.</p><p>The term Metaverse comes from Neal Stephenson’s 1992 sci-fi novel Snow Crash, where it was used to describe a VR successor to the internet. The Novel inspired the popular Ready Player One movie, which portrays a possibility of what the Metaverse could shape up to look like. It is important to note however that the Novel proposes VR as the Metaverse of the future, but current trajectories and experts say otherwise. The Metaverse is perceived by many experts as the successor of mobile internet and 2D communications. Rather than just having access to the internet when virtually communicating with friends, the metaverse would empower us to exist within the internet in what will lead to increased Social Presence.</p><h2>Social Presence and the Metaverse</h2><p>Social presence is important because it goes beyond just communicating in real-time, which your phone and various meeting apps can do, to communicating and interacting as if you are physically together, with gestures, reactions, impressions, and interactions playing a very big role, <a href="https://dev.to/babatunde/the-impact-of-social-presence-and-co-presence-on-virtual-and-augmented-reality-4b9h" target="_blank">my article</a> about the impact of Social presence and Co-presence dives deeper into this.</p><p>The concept of "presence" distinguishes the Internet from the metaverse; Matthew Ball, who has written extensively on the subject, defined the Metaverse in 2020 as possessing the seven qualities, the Metaverse must:</p><ol><li>Be persistent – which is to say, it never “resets” or “pauses” or “ends”, it just continues indefinitely.</li><li>Be synchronous and live – even though pre-scheduled and self-contained events will happen, just as they do in “real life”, the Metaverse will be a living experience that exists consistently for everyone and in real-time</li><li>Be without any cap to concurrent users, while also providing each user with an individual sense of “presence” – everyone can be a part of the Metaverse and participate in a specific event/place/activity together, at the same time and with individual agency.</li><li>Be a fully functioning economy – individuals and businesses will be able to create, own, invest, sell, and be rewarded for an incredibly wide range of “work” that produces “value” that is recognized by others.</li><li>Be an experience that spans both the digital and physical worlds, private and public networks/experiences, and open and closed platforms.</li><li>Offer unprecedented interoperability of data, digital items/assets, content, and so on across each of these experiences – your “Counter-Strike” gun skin, for example, could also be used to decorate a gun in Fortnite, or be gifted to a friend on/through Facebook. Similarly, a car designed for Rocket League (or even for Porsche’s website) could be brought over to work in Roblox. Today, the digital world basically acts as though it were a mall where every store used its own currency, required proprietary ID cards, had proprietary units of measurement for things like shoes or calories, and different dress codes, etc.</li><li>Be populated by “content” and “experiences” created and operated by an incredibly wide range of contributors, some of whom are independent individuals, while others might be informally organized groups or commercially-focused enterprises.</li></ol><h2>Facebook’s (Meta) name change and effect.</h2><p>The Metaverse will introduce a new degree of freedom in social communication. Not one person or brand can tell you how it would shape up to look like, although many companies are already shaping various aspects of its possible future.</p><p>A few weeks before Facebook's name change to Meta, Microsoft’s CEO Satya Nadella <a href="https://www.youtube.com/watch?v=uS46IO_sKwc" target="_blank">endorsed the Metaverse</a> as a strategic goal for Microsoft, where he talked about the use of both Azure digital Twin and Azure IoT to implement Metaverse like solutions, he was also quoted saying:</p><blockquote>"as the virtual and physical worlds converge the metaverse made up of digital twins, simulated environments, and mixed reality, is emerging as a first-class platform."</blockquote><p>Microsoft later used the word “enterprise metaverse" in a subsequent event, making it clear that it isn’t only Facebook that has its eyes on the ball nor understands the opportunities this new and emerging landscape will provide.</p><p>The truth is we may not fully know what the Metaverse of the future will look like, the first reason being that it is at a very early stage and it is obvious that Facebook's name change and works in the hardware, software and gaming ecosystem has stirred things up, Facebook's ambition is bold, not just the name change, the Oculus Quest 2 released by Facebook has surpassed expectations with over 1.8 million units sold as of 2020, making the company one of the top deliverers of immersive experiences.</p>`,
      title:
        'Exploring the concept of the Metaverse and what it could mean for humans changed',
      thumbnailUrl:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--M2hpw8zG--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2gjtkaudbuxwwcmwlsc8.png',
      author: johnDoeId,
    },

    {
      body: `<p>Now a days a lots of people are working on a side projects or the PoC(proof of concept) to showcase their work with rest of the world. For showing your work to rest of the world it required a deployment cost and also the person should have a knowledge regarding the deploying their apps to some server. Looking a bit weird 😟, right? Here I have come up with the quick solution for you guys. How we can deploy our NodeJs application within 5 minutes using App Engine.</p><p>Google App Engine is a cloud computing platform as a service for developing and hosting web applications in Google-managed data centers. App Engine offers automatic scaling for web applications—as the number of requests increases for an application, App Engine automatically allocates more resources for the web application to handle the additional demand.</p><p>Google App Engine primarily supports Go, PHP, Java, Python, Node.js, .NET, and Ruby applications, although it can also support other languages via "custom runtimes". Here we are going to use the Standard environment provide some free quota which can be enough for showing our work to the world.🤙</p><h2>Step 1</h2><blockquote>First step is to create your own NodeJS project that you wanted to deploy using App Engine</blockquote><p>Here is link of the sample boiler plate code for the NodeJS application. <a href="https://github.com/freeCodeCamp/boilerplate-npm/" target="_blank">Link</a></p><p>You can clone (hint: git clone ) this repo in your local and our step 1 is done 👏.</p><h2>Step 2</h2><blockquote>We need to create a GCP project to deploy our Node application.</blockquote><ol><li>Go to <a href="https://console.cloud.google.com/cloud-resource-manager" target="_blank">https://console.cloud.google.com/cloud-resource-manager</a></li><li>Click on the create new project</li><li>Provide Project name and location</li><li>Click on the Create button.</li></ol><p><em>Note: Make sure you have enabled the Cloud Build API and Enabled the Billing for your GCP project</em></p><p>You probably see that new project will be created. Congratulations 👏 you have passed the 2nd stage 💪. To be honest you nailed it.😄.</p><h2>Step 3</h2><blockquote>Download Cloud SDK installer &amp; setup our GCP project in local</blockquote><p>Follow the steps mention in the official document of the Google.</p><p><a href="https://cloud.google.com/sdk/docs/quickstart" target="_blank">Link</a></p><p>Once you have downloaded the Cloud SDK then go to the location of your repository.</p><p><br /></p><blockquote>1: Run the command: gcloud init</blockquote><blockquote>You probably see the below screen. (You may have some less options which I have in the below screenshot)</blockquote><p><br /></p><blockquote>2: Select Create a new configuration option.</blockquote><p><br /></p><blockquote>3: Copy Project ID from GCP Console.</blockquote>`,
      title: 'Deploy NodeJS Application within 5 minutes',
      thumbnailUrl:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--XDrSNyBt--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/27y98dj2q686r8r6ntuf.jpg',
      author: johnDoeId,
    },

    {
      body: `<h2>ReactJS Books</h2><p><br /></p><p>The Road to learn React takes you on the journey learning React the pragmatic way. You will build a real world application, consume a real API, write tests for your application, implement exciting features such as caching and filtering, and deploy your application in the end. Along the way, you will transition smoothly from JavaScript ES5 to JavaScript ES6 and beyond. Furthermore you will learn plenty of vanilla JavaScript things. Everything without all the other complex tooling and libraries that surround React.</p><p>Here you will get best ReactJS books for building user interfaces.This is an up-to-date list of recommended books for learning React.</p><p><br /></p><h2>1.Pro React 16</h2><p>Use the enormously popular React framework to build dynamic JavaScript applications that take advantage of the capabilities of modern browsers and devices. You will learn how React brings the power of strong architecture and responsive data to the client, providing the foundation for complex and rich user interfaces.</p><p>Best-selling author Adam Freeman explains how to get the most from React. He begins by describing the React architecture and the benefits it offers and then shows you how to use React and its associated tools and libraries in your projects, starting from the nuts and bolts and building up to the most advanced and sophisticated features, going in-depth to</p><p> give you the knowledge you need.</p><p><br /></p><p><a href="https://amzn.to/2DCSHsO" target="_blank"></a></p><p><a href="https://amzn.to/2DCSHsO" target="_blank">View on Amazon</a></p><h2>2.Learning React</h2><p><br /></p><ul><li>A Hands-On Guide to Building Web Applications Using React and Redux (2nd Edition)</li></ul><p>As far as new web frameworks and libraries go, React is quite the runaway success. It not only deals with the most common problems developers face when building complex apps, it throws in a few additional tricks that make building the visuals for such apps much, much easier.</p><p>What React isn’t, though, is beginner-friendly and approachable. Until now. In Learning React , author Kirupa Chinnathambi brings his fresh, clear, and very personable writing style to help web developers new to React understand its fundamentals and how to use it to build really performant (and awesome) apps.</p><p>The only book on the market that helps you get your first React app up and running in just minutes, Learning React is chock-full of colorful illustrations to help you visualize difficult concepts and practical step-by-step examples to show you how to apply what you learn.</p><p><br /></p><p><a href="https://amzn.to/2ILuXXD" target="_blank"></a></p><p><a href="https://amzn.to/2ILuXXD" target="_blank">View on Amazon</a></p><h2>3.Building React.js Applications with Redux</h2><p><br /></p><p>Starting with the basics, Geary shows how to use Redux as a stand-alone state container, how to use Redux with React, and then how to implement more advanced and powerful Redux/React scenarios. Geary shows how React bindings for Redux enable you to separate stateless presentation components from components that are connected to React. You'll learn how react-redux bindings can automatically connect to the Redux store, and how they enforce good programming practice by separating concerns between containers and their associated stateless components. Geary also illustrates advanced aspects of Redux through a complex application example.</p><p><br /></p>`,
      title: 'Best React.js Books You Have To Read',
      author: adminId,
      thumbnailUrl:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--TylFX_Bc--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/0tvc7rb9fvhwufb4o5hp.jpg',
    },

    {
      body: `<h2>Introduction</h2><blockquote>“Before software can be reusable, it first has to be usable.” – <a href="https://en.wikipedia.org/wiki/Ralph_Johnson_(computer_scientist)" target="_blank">Ralph Johnson</a></blockquote><blockquote><br /></blockquote><p><a href="https://en.wikipedia.org/wiki/Module" target="_blank">Modules</a> are independent building blocks of a software program. They are basically a design pattern that implements features of <a href="https://en.wikipedia.org/wiki/Modular_programming" target="_blank">modular design</a> in programming languages. The module system is supported in many languages and is quite popular since the way dependencies are handled, packaged, and managed determines how easy it is to work with a large and growing source code.</p><p>In modular design, business logic pertaining to a particular feature or functionality is packaged (modularized) in a standardized format for reusability, flexibility, and for the sake of reducing complexity. This setup affords a loosely coupled system due to a smooth interface of communication, as there are no global variables or shared state.</p><p>Although the concept of modules is <a href="https://en.wikipedia.org/wiki/Modular_programming#Terminology" target="_blank">quite different depending on the language</a>, they are akin to the idea of <a href="https://en.wikipedia.org/wiki/Module_pattern#Namespaces" target="_blank">namespaces</a> in languages like Java. Modules enable code organization by splitting a codebase into reusable components such that each performs individual functions and can be combined or composed to form larger functionalities or an entire application.</p><p>In Node.js, the <a href="https://nodejs.org/docs/latest/api/modules.html#modules_modules" target="_blank">module system</a> has come a long way from its earlier adoption of <a href="https://requirejs.org/docs/commonjs.html" target="_blank">CommonJS</a>. Today, <a href="https://nodejs.org/dist/latest-v13.x/docs/api/esm.html#esm_ecmascript_modules" target="_blank">ECMAScript modules</a> (ES modules), though still <a href="https://nodejs.org/api/documentation.html#documentation_stability_index" target="_blank">experimental</a> at the time of writing, are the official standard for packaging code for reuse in both client- and server-side JavaScript.</p><p><br /></p><p><br /></p><h2>Table of contents</h2><p>In this article, we are going to learn about ES modules in Node. However, we will briefly explore other ways of handling and organizing server-side code with CommonJS.</p><p>Why? So that we have a point of reference to recognize the benefits of ES modules. In essence, we will learn about the challenges it tries to solve that earlier module systems were not adapted to solve.</p><p>We will be looking at:</p><p><br /></p><ul><li><strong>An introduction to ES modules</strong> — here, we introduce ES modules in an exciting way</li><li><strong>A brief history of ES modules</strong> — here, we learn about the transition from the earlier module system to ES modules. We will also briefly examine how interoperable these modules systems are with one another</li><li><strong>Adding support for ES modules in Node</strong> — here, we learn about how we can incrementally add support for ES modules in Node. We also learn how to migrate an old codebase to start using ES modules</li><li><strong>Comparing and contrasting features</strong> — here, we will learn about the features of both these module systems and how they compare</li><li><strong>ES modules moving forward</strong></li><li><br /></li></ul><h2>Prerequisites</h2><p>To easily follow along with this tutorial, it is advisable to have the latest version of Node.js installed. Instructions on how to do so are available in the <a href="https://nodejs.org/en/" target="_blank">Node documentation</a>.</p><p>Also, for better context, readers may need to be fairly knowledgeable with the <a href="https://requirejs.org/docs/commonjs.html" target="_blank">CommonJS</a> module system in Node. It is equally welcoming for newcomers learning the Node.js module system or applying ES modules in their Node projects today.</p><p><br /></p><h2>Introducing ES modules</h2><p>With the release of <a href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V13.md#2020-02-18-version-1390-current-codebytere" target="_blank">Node version 13.9.0</a>, <a href="https://nodejs.org/api/esm.html#esm_introduction" target="_blank">ES modules</a> can now be used without an experimental flag since they are enabled by default. With ES modules, modules are defined with the use of the <code>import</code> and <code>export</code> keywords instead of the <code>require()</code> function in CommonJS. Here is how they are used:</p><p><br /></p><pre>export function sayLanguage(language) {
   }
  
  //f.js
  
  
  import {sayLanguage} from './f.js';
  
  
  //g.js
  
  
  retina@alex es-modules in Node % node -v
  v13.7.0
  retina@alex es-modules in Node % node g.js 
  (node:77133) ExperimentalWarning: The ESM module loader is experimental.
  I love JavaScript!
  undefined
  retina@alex es-modules in Node %
  </pre><p><br /></p><p>Details about these keyword bindings can be found in the spec <a href="https://tc39.es/ecma262/#prod-ModuleItem" target="_blank">here</a>. Also, we can peek at the Mozilla development network <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements" target="_blank">doc</a> for more information.</p><p><br /></p><blockquote><strong>Note</strong> : The code snippet above shows the <code>ExperimentalWarning</code> for the module loader due to the Node version on my local machine. However, it is likely this would change in later Node versions.</blockquote>`,
      title: 'ES modules in Node today',
      thumbnailUrl:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--GoNydtOk--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/j1qdm4r37kd10klsi649.jpeg',
      author: adminId,
    },

    {
      body: `<p>In this article, I am going to tell you about how I made Google fully functional Clone with <code>next.js</code> and <code>tailwind</code>. So Let's dive in.</p><p>In this we are not redirecting user to the google page, instead we are using google custom search API to perform all operation in the same domain <em>User can only fetch this API about 100 times so be careful with that you cannot search more that 100 times</em></p><p><strong>Note</strong> - If you are developing this by yourself then must use mock data so don't exhaust your API request limit</p><p><br /></p><h4>Features</h4><ul><li>Realtime and Accurate Google Search</li><li>Full Screen mode</li><li>Installable PWA</li><li>Search Any Query</li><li>Full Responsiveness</li><li>Show your location based on you IP</li><li>Dark Theme support based on user's device setting</li></ul><h4>Technologies I've used -</h4><ul><li><a href="https://nextjs.org/" target="_blank">Next.js</a></li><li><a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a></li><li><a href="https://rb.gy/0lfupd" target="_blank">Custom Search JSON API</a></li></ul><p><br /></p>`,
      thumbnailUrl:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--VVZ5eEC3--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8uor57ilohhbwpnjel1b.png',
      author: bondId,
      title: 'Fully functional google clone with next.js',
    },
    {
      body: `<h2>What is a canonical URL?</h2><p>We live in a world where information is posted, shared, re-shared, listicled, compiled, tweeted, re-blogged - I could go on. With so many copies of the same article existing on the internet, this presents an interesting issue for Search Engines: How do Search Engines know the original source of the post?</p><p>Canonical URLs are a way to indicate where the original post came from.</p><p><br /></p><h2>What are the benefits of a canonical URL?</h2><p>The high level response to this question is "SEO Benefits" - but let's look at a more detailed level.</p><p>If canonical URLs didn't exist and you posted an article on your blog, DEV, and Hashnode search engines would find themselves in a predicament when trying to serve your article to a search query - how do they know which to serve? Instead of getting "full credit" for your post, each post would have their own search result profile and in turn look like spam to search engines - effectively resulting each fighting with each other for ranking and dragging each other down the results page.</p><p>Thanks to canonical URLs, search engines don't need to assume the posts are all spam and can properly serve the original post to users searching for information - returning to a situation where the original post is claiming full credit!</p><p><br /></p><h2>When to use a canonical URL?</h2><p>Based on the description of the benefits, you can probably guess that any time you post your post on another platform you'll want to include a canonical URL linking back to your blog (or wherever you want the "True source" to be coming from).</p><p>Not as intuitive is that you also want to include the canonical URL back to the original source <em>on the original source's page!</em> This essentially functions as an extra indicator to search engines that you are in fact the original source that other sites are claiming you are!</p><p><br /></p><h2>How to use a canonical URL</h2><p>Now we know what a canonical URL is - so how do we use one?</p><p>If you're working with a personal site and can alter the HTML, you'll want to include the following in your <code>&lt;head&gt;</code>:</p><p><br /></p><pre>&lt;head&gt;
    &lt;link rel="canonical" content="https://yourdomain.com/slug/path/whatever/" /&gt;
  &lt;/head&gt;
  </pre><p><br /></p><p>Replacing the <code>https://yourdomain.com/slug/path/whatever/</code> with the full URL to your post! If you're working with a Static Site Generator there are ways to help automate the setting of these values - <a href="https://terabytetiger.com/lessons/articles/gridsome-seo-improvement-checklist/#set-a-canonical-url" target="_blank">Example of setting canonical URL in Gridsome</a></p><p>On sites like DEV or Hashnode, there are also ways to create these links back - usually under names such as "Original Source", "Canonical URL", or "Reposting from"</p><p><br /></p>`,
      thumbnailUrl:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--st7f3bnM--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4jpwfji4sl9u27y897qk.png',
      author: mortyId,
      title: 'Intro to SEO | What is a Canonical URL',
    },
    {
      body: `<p><a href="https://reactjs.org/" target="_blank">React</a> is a JavaScript library for building user interfaces. This guide targets React v15 to v16.</p><p><br /></p><h3>Components</h3><pre>import React from 'react'
      import ReactDOM from 'react-dom'
      </pre><p><br /></p><pre>class Hello extends React.Component {
        render () {
          return &lt;div className='message-box'&gt;
            Hello {this.props.name}
          &lt;/div&gt;
        }
      }
      </pre><p><br /></p><pre>const el = document.body
      ReactDOM.render(&lt;Hello name='John' /&gt;, el)
      </pre><p><br /></p><p>Use the <a href="http://jsfiddle.net/reactjs/69z2wepo/" target="_blank">React.js jsfiddle</a> to start hacking. (or the unofficial <a href="http://jsbin.com/yafixat/edit?js,output" target="_blank">jsbin</a>)</p><h3>Import multiple exports</h3><p><br /></p><pre>import React, {Component} from 'react'
      import ReactDOM from 'react-dom'
      </pre><p><br /></p><pre>class Hello extends Component {
        ...
      }
      </pre><p><br /></p><h3>Properties</h3><pre>&lt;Video fullscreen={true} autoplay={false} /&gt;
      </pre><p><br /></p><pre>render () {
        this.props.fullscreen
        const { fullscreen, autoplay } = this.props
        ···
      }
      </pre><p><br /></p><p>Use <code>this.props</code> to access properties passed to the component.</p><p>See: <a href="https://reactjs.org/docs/tutorial.html#using-props" target="_blank">Properties</a></p><h3>States</h3><p><br /></p><pre>constructor(props) {
        super(props)
        this.state = { username: undefined }
      }
      </pre><p><br /></p><pre>this.setState({ username: 'rstacruz' })
      </pre><p><br /></p><pre>render () {
        this.state.username
        const { username } = this.state
        ···
      }
      </pre><p><br /></p><p>Use states (<code>this.state</code>) to manage dynamic data.</p><p>With <a href="https://babeljs.io/" target="_blank">Babel</a> you can use <a href="https://github.com/tc39/proposal-class-fields" target="_blank">proposal-class-fields</a> and get rid of constructor</p><p><br /></p>`,
      thumbnailUrl:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--HMQnDOhe--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3ls8dyoo7yfgowq3zqf4.jpeg',
      author: rickId,
      title: 'The Most Powerful React JS Cheat Sheet',
    },
  ];

  return {
    seedUsers,
    seedPosts,
  };
}
