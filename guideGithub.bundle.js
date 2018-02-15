webpackJsonp([5],{547:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return w});var o,i,l=n(6),c=n.n(l),u=n(61),p=n(132),m=n(217),h=n(589),d=n(611),f=n(722),g=n(723),y=n(573),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b={input:n(724),takeLatest:n(725),api:n(726),reducers:n(727),api2:n(728),view:n(729),call:n(730),put:n(731),selector:n(732),full:n(733)},w=(o=Object(u.a)({actions:[y.a,["toggleFeature"]],props:[y.a,["features"]]}))(i=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),E(t,[{key:"render",value:function(){var e=this.props.features,t=this.actions.toggleFeature;return c.a.createElement("div",{className:"counter-singleton-scene"},c.a.createElement("div",{className:"description"},c.a.createElement("h2",null,"Example #4 - Github"),c.a.createElement("p",null,"In this guide we are going to build a component that asks for an username and then fetches all the repositories for that user on Github."),c.a.createElement("p",null,"The final result will look like this:"),c.a.createElement("div",{className:"demo"},c.a.createElement(d.a,null))),c.a.createElement("div",{className:"description"},c.a.createElement(h.a,null)),c.a.createElement("div",{className:"description"},c.a.createElement("h2",null,"1. Input the username"),c.a.createElement("p",null,"Now that you have seen the end result, let's build it, piece by piece."),c.a.createElement("p",null,"The first thing we want to do is to have an input element to enter the username."),c.a.createElement("p",null,"If you have followed the other parts of this guide, you should know how to get this part working."),c.a.createElement("p",null,"Hopefully after some tinkering you will come up with something like this:"),c.a.createElement(m.default,{className:"javascript"},b.input),c.a.createElement("p",null,"Live demo:"),c.a.createElement("div",{className:"demo"},c.a.createElement(f.a,null)),c.a.createElement("p",null,"You could probably have gotten as far with react's ",c.a.createElement("code",null,"setState"),", but since we want to capture this event, we'll go straight for the kea solution.")),c.a.createElement("div",{className:"description"},c.a.createElement("h2",null,"2. Capture ",c.a.createElement("code",null,"setUsername")," and trigger an API call"),c.a.createElement("p",null,"The next step is to intercept Redux and listen for each instance of the ",c.a.createElement("code",null,"setUsername")," action being triggered."),c.a.createElement("p",null,"We do this with the ",c.a.createElement("code",null,"takeLatest")," option and a special worker function which does the API call."),c.a.createElement("button",{onClick:function(){return t("takeBoth")}},"takeLatest vs takeEvery?"),e.takeBoth?c.a.createElement("div",{className:"extra-help"},c.a.createElement("p",null,"There are two helpers we can use: ",c.a.createElement("code",null,"takeLatest")," and ",c.a.createElement("code",null,"takeEvery")),c.a.createElement("p",null,"What's the difference?"),c.a.createElement("p",null,"It's simple: ",c.a.createElement("code",null,"takeEvery")," runs the worker every time an action is called. ",c.a.createElement("code",null,"takeLatest")," does the same, but if a previous worker is still running, it will be cancelled and restarted."),c.a.createElement("p",null,"In practice this means ",c.a.createElement("code",null,"takeLatest")," let's us write code with less bugs: we will only handle the last API call that was made."),c.a.createElement("p",null,'Otherwise, for example, there might be a race condition, where when typing "reactjs", the results for "reactj" will arrive after "reactjs" and invalidate our state.'),c.a.createElement("p",null,"It's also super easy to implement debouncing and throttling when using ",c.a.createElement("code",null,"takeLatest"),". We will do so in a short while.")):null,c.a.createElement("p",null,"The code to hook them up would look something like this:"),c.a.createElement(m.default,{className:"javascript"},b.takeLatest)),c.a.createElement("div",{className:"description"},c.a.createElement("h2",null,"3. Trigger the actual call"),c.a.createElement("p",null,"Now that we have a time and a place where we can make the API call, let's actually make it."),c.a.createElement("p",null,"We will use the standard ",c.a.createElement("code",null,"Fetch")," API for it."),c.a.createElement("p",null,"The code for this, with an additional 100ms debounce, will look like this:"),c.a.createElement(m.default,{className:"javascript"},b.api),c.a.createElement("p",null,"Note the ",c.a.createElement("code",null,"yield")," statements that we use to synchronously resolve promises without any nested callbacks!"),c.a.createElement("p",null,"There are more details on ",c.a.createElement("code",null,"yield")," and the code that you can use inside the workers in the ",c.a.createElement(p.a,{to:"/guide/sliders"},"sliders guide"),".")),c.a.createElement("div",{className:"description"},c.a.createElement("h2",null,"4. Store the response of the call"),c.a.createElement("p",null,"Now that we get the repositories, where to put them?"),c.a.createElement("p",null,"The answer: in a few new reducers."),c.a.createElement("p",null,"We're interested in 3 things:"),c.a.createElement("ol",null,c.a.createElement("li",null,"Whether we're currently fetching and data: ",c.a.createElement("code",null,"isLoading")),c.a.createElement("li",null,"The repositories that we have fetched: ",c.a.createElement("code",null,"repositories")),c.a.createElement("li",null,"Any error that might have occurred: ",c.a.createElement("code",null,"error"))),c.a.createElement("p",null,"We can get all of this by just adding two new actions:"),c.a.createElement("ol",null,c.a.createElement("li",null,"One to set the repositories: ",c.a.createElement("code",null,"setRepositories")),c.a.createElement("li",null,"One to set the error message: ",c.a.createElement("code",null,"setFetchError"))),c.a.createElement("p",null,"Hooking them up gives the following result:"),c.a.createElement(m.default,{className:"javascript"},b.reducers),c.a.createElement("p",null,"Now we just need to call the right actions from the worker:"),c.a.createElement(m.default,{className:"javascript"},b.api2),c.a.createElement("p",null,"Note that we have to use the redux-saga ",c.a.createElement("code",null,"put")," effect when dispatching the actions.")),c.a.createElement("div",{className:"description"},c.a.createElement("h2",null,"5. Display the result"),c.a.createElement("p",null,"The last step is to display the repositories to the user. To do this we use the following code:"),c.a.createElement(m.default,{className:"javascript"},b.view),c.a.createElement("p",null,"Giving us the following result:"),c.a.createElement("div",{className:"demo"},c.a.createElement(g.a,null)),c.a.createElement("p",null,"It works! Almost..."),c.a.createElement("p",null,"What's still missing?"),c.a.createElement("p",null,"Well, for starters it would be nice if it would fetch all the respositories on page load."),c.a.createElement("p",null,"Also, it would be great to sort the repositories by the number of stars")),c.a.createElement("div",{className:"description"},c.a.createElement("h2",null,"6. Last steps"),c.a.createElement("p",null,"No problem, we can fix that!"),c.a.createElement("p",null,"First, to load the repositories on page load, we have two options, both requiring the ",c.a.createElement("code",null,"start")," function that is run when the component is mounted."),c.a.createElement("p",null,"Option #1 is to call the ",c.a.createElement("code",null,"fetchRepositories")," worker directly using redux-saga's ",c.a.createElement("code",null,"call"),":"),c.a.createElement(m.default,{className:"javascript"},b.call),c.a.createElement("p",null,"This works, but it feels kind of hacky. We're pretending to be an action that triggers the worker."),c.a.createElement("p",null,"The other option is to go through redux and execute the ",c.a.createElement("code",null,"setUsername")," action with the default username:"),c.a.createElement(m.default,{className:"javascript"},b.put),c.a.createElement("p",null,"It feels cleaner, but there's still something weird with calling ",c.a.createElement("code",null,"setUsername")," with the username that's already set."),c.a.createElement("p",null,"In the end, both approaches get the job done, and it's up to you to figure out which makes more sense depening on your situation."),c.a.createElement("p",null,"The second problem had to do with sorting the results."),c.a.createElement("p",null,"For that we can create a selector that takes the ",c.a.createElement("code",null,"repositories")," as input and outputs a sorted array:"),c.a.createElement(m.default,{className:"javascript"},b.selector),c.a.createElement("p",null,"Now all that's left to do is to replace ",c.a.createElement("code",null,"repositories")," with ",c.a.createElement("code",null,"sortedRepositories")," in your component."),c.a.createElement("p",null,"Because the selectors are made with ",c.a.createElement("code",null,"reselect")," under the hood, you can be sure that they will only be recalculated (resorted in this case) when the original input (repositories) change."),c.a.createElement("p",null,"That's much better than re-sorting them on every call to ",c.a.createElement("code",null,"render()"),".")),c.a.createElement("div",{className:"description"},c.a.createElement("h2",null,"7. Final result"),c.a.createElement("p",null,"Adding the finishing touches gives us this final result:"),c.a.createElement("div",{className:"demo"},c.a.createElement(d.a,null)),c.a.createElement("p",null,"With this code:"),c.a.createElement(m.default,{className:"javascript"},b.full),c.a.createElement("p",null,"There's still one thing that's broken:"),c.a.createElement("p",null,"If a github user or organisation has more than 100 repositories, only the first 100 results will be returned. Github's API provides a way to ask for the next 100 results (the ",c.a.createElement("a",{href:"https://developer.github.com/v3/repos/#response"},c.a.createElement("code",null,"Link")," headers"),"), but as resolving this is outside the scope of this guide, it will be left as an exercise for the reader ;).")),c.a.createElement("div",{className:"description"},"Next page: ",c.a.createElement(p.a,{to:"/guide/connected"},"Connected logic")))}}]),t}(l.Component))||i},573:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n(11),s=n.n(a),o=n(61),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.a=Object(o.d)({actions:function(){return{toggleFeature:function(e){return{feature:e}}}},reducers:function(e){var t=e.actions;return{features:[{},s.a.object,r({},t.toggleFeature,function(e,t){var n=t.feature;return i({},e,r({},n,!e[n]))})]}}})},589:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return m});var o=n(6),i=n.n(o),l=n(132),c=n(217),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p={importSaga:n(590),installSaga:n(591)},m=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),u(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"0. Install ",i.a.createElement("code",null,"kea-saga")),i.a.createElement("p",null,"We'll be using sagas in this example. To add support for them, install the ",i.a.createElement("code",null,"kea-saga")," and ",i.a.createElement("code",null,"redux-saga")," packages."),i.a.createElement(c.default,{className:"bash"},p.installSaga),i.a.createElement("p",null,"Then import ",i.a.createElement("code",null,"sagaPlugin")," from ",i.a.createElement("code",null,"kea-saga")," in your ",i.a.createElement("code",null,"store.js")," and add it to the plugins array in ",i.a.createElement("code",null,"getStore()")),i.a.createElement(c.default,{className:"javascript"},p.importSaga),i.a.createElement("p",null,i.a.createElement(l.a,{to:"/effects/saga"},"Read here for more")))}}]),t}(o.Component)},590:function(e,t){e.exports="import sagaPlugin from 'kea-saga'\n\nconst store = getStore({\n  plugins: [\n    sagaPlugin\n  ]\n})\n"},591:function(e,t){e.exports="# if using yarn\nyarn add kea-saga redux-saga\n\n# if using npm\nnpm install kea-saga redux-saga --save\n"},611:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return y});var i,l,c=n(6),u=n.n(c),p=n(11),m=n.n(p),h=n(61),d=n(48),f=n(133),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=(i=Object(h.d)({actions:function(){return{setUsername:function(e){return{username:e}},setRepositories:function(e){return{repositories:e}},setFetchError:function(e){return{message:e}}}},reducers:function(e){var t,n,r,a=e.actions;return{username:["keajs",m.a.string,o({},a.setUsername,function(e,t){return t.username})],repositories:[[],m.a.array,(t={},o(t,a.setUsername,function(){return[]}),o(t,a.setRepositories,function(e,t){return t.repositories}),t)],isLoading:[!0,m.a.bool,(n={},o(n,a.setUsername,function(){return!0}),o(n,a.setRepositories,function(){return!1}),o(n,a.setFetchError,function(){return!1}),n)],error:[null,m.a.string,(r={},o(r,a.setUsername,function(){return null}),o(r,a.setFetchError,function(e,t){return t.message}),r)]}},selectors:function(e){var t=e.selectors;return{sortedRepositories:[function(){return[t.repositories]},function(e){return e.sort(function(e,t){return t.stargazers_count-e.stargazers_count})},m.a.array]}},start:regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.actions.setUsername,e.next=3,this.get("username");case 3:return n=e.sent,e.next=6,Object(d.e)(t(n));case 6:case"end":return e.stop()}},e,this)}),takeLatest:function(e){var t=e.actions,n=e.workers;return o({},t.setUsername,n.fetchRepositories)},workers:{fetchRepositories:regeneratorRuntime.mark(function e(t){var n,r,a,s,o,i,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.actions,r=n.setRepositories,a=n.setFetchError,s=t.payload.username,e.next=4,Object(f.b)(100);case 4:return e.next=6,window.fetch("https://api.github.com/users/"+s+"/repos?per_page=250");case 6:if(o=e.sent,200!==o.status){e.next=15;break}return e.next=10,o.json();case 10:return i=e.sent,e.next=13,Object(d.e)(r(i));case 13:e.next=20;break;case 15:return e.next=17,o.json();case 17:return l=e.sent,e.next=20,Object(d.e)(a(l.message));case 20:case"end":return e.stop()}},e,this)})}}))(l=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),g(t,[{key:"render",value:function(){var e=this.props,t=e.username,n=e.isLoading,r=e.repositories,a=e.sortedRepositories,s=e.error,o=this.actions.setUsername;return u.a.createElement("div",{className:"example-github-scene"},u.a.createElement("div",{style:{marginBottom:20}},u.a.createElement("h1",null,"Search for a github user"),u.a.createElement("input",{value:t,type:"text",onChange:function(e){return o(e.target.value)}})),n?u.a.createElement("div",null,"Loading..."):r.length>0?u.a.createElement("div",null,"Found ",r.length," repositories for user ",t,"!",a.map(function(e){return u.a.createElement("div",{key:e.id},u.a.createElement("a",{href:e.html_url,target:"_blank"},e.full_name)," - ",e.stargazers_count," stars, ",e.forks," forks.")})):u.a.createElement("div",null,s?"Error: "+s:"No repositories found"))}}]),t}(c.Component))||l},722:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return f});var i,l,c=n(6),u=n.n(c),p=n(11),m=n.n(p),h=n(61),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=(i=Object(h.d)({actions:function(){return{setUsername:function(e){return{username:e}}}},reducers:function(e){var t=e.actions;return{username:["keajs",m.a.string,o({},t.setUsername,function(e,t){return t.username})]}}}))(l=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),d(t,[{key:"render",value:function(){var e=this.props.username,t=this.actions.setUsername;return u.a.createElement("div",{className:"example-github-scene"},u.a.createElement("div",{style:{marginBottom:20}},u.a.createElement("h1",null,"Search for a github user"),u.a.createElement("input",{value:e,type:"text",onChange:function(e){return t(e.target.value)}})),u.a.createElement("div",null,"Repos will come here..."))}}]),t}(c.Component))||l},723:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return y});var i,l,c=n(6),u=n.n(c),p=n(11),m=n.n(p),h=n(61),d=n(48),f=n(133),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=(i=Object(h.d)({actions:function(){return{setUsername:function(e){return{username:e}},setRepositories:function(e){return{repositories:e}},setFetchError:function(e){return{message:e}}}},reducers:function(e){var t,n,r,a=e.actions;return{username:["keajs",m.a.string,o({},a.setUsername,function(e,t){return t.username})],repositories:[[],m.a.array,(t={},o(t,a.setUsername,function(){return[]}),o(t,a.setRepositories,function(e,t){return t.repositories}),t)],isLoading:[!1,m.a.bool,(n={},o(n,a.setUsername,function(){return!0}),o(n,a.setRepositories,function(){return!1}),o(n,a.setFetchError,function(){return!1}),n)],error:[null,m.a.string,(r={},o(r,a.setUsername,function(){return null}),o(r,a.setFetchError,function(e,t){return t.message}),r)]}},takeLatest:function(e){var t=e.actions,n=e.workers;return o({},t.setUsername,n.fetchRepositories)},workers:{fetchRepositories:regeneratorRuntime.mark(function e(t){var n,r,a,s,o,i,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.actions,r=n.setRepositories,a=n.setFetchError,s=t.payload.username,e.next=4,Object(f.b)(100);case 4:return e.next=6,window.fetch("https://api.github.com/users/"+s+"/repos?per_page=250");case 6:if(o=e.sent,200!==o.status){e.next=15;break}return e.next=10,o.json();case 10:return i=e.sent,e.next=13,Object(d.e)(r(i));case 13:e.next=20;break;case 15:return e.next=17,o.json();case 17:return l=e.sent,e.next=20,Object(d.e)(a(l.message));case 20:case"end":return e.stop()}},e,this)})}}))(l=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),g(t,[{key:"render",value:function(){var e=this.props,t=e.username,n=e.isLoading,r=e.repositories,a=e.error,s=this.actions.setUsername;return u.a.createElement("div",{className:"example-github-scene"},u.a.createElement("div",{style:{marginBottom:20}},u.a.createElement("h1",null,"Search for a github user"),u.a.createElement("input",{value:t,type:"text",onChange:function(e){return s(e.target.value)}})),n?u.a.createElement("div",null,"Loading..."):r.length>0?u.a.createElement("div",null,"Found ",r.length," repositories for user ",t,"!",r.map(function(e){return u.a.createElement("div",{key:e.id},u.a.createElement("a",{href:e.html_url,target:"_blank"},e.full_name)," - ",e.stargazers_count," stars, ",e.forks," forks.")})):u.a.createElement("div",null,a?"Error: "+a:"No repositories found"))}}]),t}(c.Component))||l},724:function(e,t){e.exports="import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { kea } from 'kea'\n\n@kea({\n  actions: () => ({\n    setUsername: (username) => ({ username })\n  }),\n\n  reducers: ({ actions }) => ({\n    username: ['keajs', PropTypes.string, {\n      [actions.setUsername]: (_, payload) => payload.username\n    }]\n  })\n})\nexport default class ExampleGithubScene extends Component {\n  render () {\n    const { username } = this.props\n    const { setUsername } = this.actions\n\n    return (\n      <div className='example-github-scene'>\n        <div style={{marginBottom: 20}}>\n          <h1>Search for a github user</h1>\n          <input value={username}\n                 type='text'\n                 onChange={e => setUsername(e.target.value)} />\n        </div>\n        <div>\n          Repos will come here...\n        </div>\n      </div>\n    )\n  }\n}\n"},725:function(e,t){e.exports="@kea({\n  actions: ...,\n  reducers: ...,\n\n  takeLatest: ({ actions, workers }) => ({\n    [actions.setUsername]: workers.fetchRepositories\n  }),\n\n  workers: {\n    * fetchRepositories (action) {\n      const { username } = action.payload\n\n      console.log(`setUsername called with ${username}`)\n    }\n  }\n})\n"},726:function(e,t){e.exports="import { delay } from 'redux-saga'\n\nconst API_URL = 'https://api.github.com'\n\n@kea({\n  // ...\n\n  workers: {\n    * fetchRepositories (action) {\n      const { username } = action.payload\n\n      yield delay(100) // debounce for 100ms\n\n      const url = `${API_URL}/users/${username}/repos?per_page=250`\n      const response = yield window.fetch(url)\n\n      if (response.status === 200) {\n        const json = yield response.json()\n        // we have the repositories in `json`\n        // what to do with them?\n      } else {\n        const json = yield response.json()\n        // there's an error in `json.message`\n        // what to do with it?\n      }\n    }\n  }\n})\n"},727:function(e,t){e.exports="@kea({\n  actions: () => ({\n    setUsername: (username) => ({ username }),\n    setRepositories: (repositories) => ({ repositories }),\n    setFetchError: (message) => ({ message })\n  }),\n\n  reducers: ({ actions }) => ({\n    username: ['keajs', PropTypes.string, {\n      [actions.setUsername]: (_, payload) => payload.username\n    }],\n    repositories: [[], PropTypes.array, {\n      [actions.setUsername]: () => [],\n      [actions.setRepositories]: (_, payload) => payload.repositories\n    }],\n    isLoading: [false, PropTypes.bool, {\n      [actions.setUsername]: () => true,\n      [actions.setRepositories]: () => false,\n      [actions.setFetchError]: () => false\n    }],\n    error: [null, PropTypes.string, {\n      [actions.setUsername]: () => null,\n      [actions.setFetchError]: (_, payload) => payload.message\n    }]\n  })\n})\n"},728:function(e,t){e.exports="import { put } from 'redux-saga/effects' // new\n\n@kea({\n  workers: {\n    * fetchRepositories (action) {\n      const { setRepositories, setFetchError } = this.actions // new\n      const { username } = action.payload\n\n      yield delay(100)\n\n      const url = `${API_URL}/users/${username}/repos?per_page=250`\n      const response = yield window.fetch(url)\n\n      if (response.status === 200) {\n        const json = yield response.json()\n        yield put(setRepositories(json)) // new\n      } else {\n        const json = yield response.json()\n        yield put(setFetchError(json.message)) // new\n      }\n    }\n  }\n})\n"},729:function(e,t){e.exports="export default class ExampleGithubScene extends Component {\n  render () {\n    const { username, isLoading, repositories, error } = this.props\n    const { setUsername } = this.actions\n\n    return (\n      <div className='example-github-scene'>\n        <div style={{marginBottom: 20}}>\n          <h1>Search for a github user</h1>\n          <input value={username}\n                 type='text'\n                 onChange={e => setUsername(e.target.value)} />\n        </div>\n        {isLoading ? (\n          <div>\n            Loading...\n          </div>\n        ) : repositories.length > 0 ? (\n          <div>\n            Found {repositories.length} repositories for user {username}!\n            {repositories.map(repo => (\n              <div key={repo.id}>\n                <a href={repo.html_url} target='_blank'>{repo.full_name}</a>\n                {' - '}\n                {repo.stargazers_count} stars, {repo.forks} forks.\n              </div>\n            ))}\n          </div>\n        ) : (\n          <div>\n            {error ? `Error: ${error}` : 'No repositories found'}\n          </div>\n        )}\n      </div>\n    )\n  }\n}\n"},730:function(e,t){e.exports="import { call } from 'redux-saga/effects'\n\n@kea({\n  start: function * () {\n    const username = yield this.get('username')\n    yield call(this.workers.fetchRepositories, { payload: { username } })\n  }\n})\n"},731:function(e,t){e.exports="@kea({\n  start: function * () {\n    const { setUsername } = this.actions\n    const username = yield this.get('username')\n    yield put(setUsername(username))\n  }\n})\n"},732:function(e,t){e.exports="@kea({\n  selectors: ({ selectors }) => ({\n    sortedRepositories: [\n      () => [selectors.repositories],\n      (repositories) => {\n        return repositories.sort((a, b) => b.stargazers_count - a.stargazers_count)\n      },\n      PropTypes.array\n    ]\n  })\n})\n"},733:function(e,t){e.exports="import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { kea } from 'kea'\n\nimport { put, call } from 'redux-saga/effects'\nimport { delay } from 'redux-saga'\n\nconst API_URL = 'https://api.github.com'\n\n@kea({\n  actions: () => ({\n    setUsername: (username) => ({ username }),\n    setRepositories: (repositories) => ({ repositories }),\n    setFetchError: (message) => ({ message })\n  }),\n\n  reducers: ({ actions }) => ({\n    username: ['keajs', PropTypes.string, {\n      [actions.setUsername]: (_, payload) => payload.username\n    }],\n    repositories: [[], PropTypes.array, {\n      [actions.setUsername]: () => [],\n      [actions.setRepositories]: (_, payload) => payload.repositories\n    }],\n    isLoading: [true, PropTypes.bool, {\n      [actions.setUsername]: () => true,\n      [actions.setRepositories]: () => false,\n      [actions.setFetchError]: () => false\n    }],\n    error: [null, PropTypes.string, {\n      [actions.setUsername]: () => null,\n      [actions.setFetchError]: (_, payload) => payload.message\n    }]\n  }),\n\n  selectors: ({ selectors }) => ({\n    sortedRepositories: [\n      () => [selectors.repositories],\n      (repositories) => repositories.sort(\n                          (a, b) => b.stargazers_count - a.stargazers_count),\n      PropTypes.array\n    ]\n  }),\n\n  start: function * () {\n    const { setUsername } = this.actions\n    const username = yield this.get('username')\n    yield put(setUsername(username))\n  },\n\n  takeLatest: ({ actions, workers }) => ({\n    [actions.setUsername]: workers.fetchRepositories\n  }),\n\n  workers: {\n    * fetchRepositories (action) {\n      const { setRepositories, setFetchError } = this.actions\n      const { username } = action.payload\n\n      yield delay(100) // debounce for 100ms\n\n      const url = `${API_URL}/users/${username}/repos?per_page=250`\n      const response = yield window.fetch(url)\n\n      if (response.status === 200) {\n        const json = yield response.json()\n        yield put(setRepositories(json))\n      } else {\n        const json = yield response.json()\n        yield put(setFetchError(json.message))\n      }\n    }\n  }\n})\nexport default class ExampleGithubScene extends Component {\n  render () {\n    const { username, isLoading, repositories,\n            sortedRepositories, error } = this.props\n    const { setUsername } = this.actions\n\n    return (\n      <div className='example-github-scene'>\n        <div style={{marginBottom: 20}}>\n          <h1>Search for a github user</h1>\n          <input value={username}\n                 type='text'\n                 onChange={e => setUsername(e.target.value)} />\n        </div>\n        {isLoading ? (\n          <div>\n            Loading...\n          </div>\n        ) : repositories.length > 0 ? (\n          <div>\n            Found {repositories.length} repositories for user {username}!\n            {sortedRepositories.map(repo => (\n              <div key={repo.id}>\n                <a href={repo.html_url} target='_blank'>{repo.full_name}</a>\n                {' - '}{repo.stargazers_count} stars, {repo.forks} forks.\n              </div>\n            ))}\n          </div>\n        ) : (\n          <div>\n            {error ? `Error: ${error}` : 'No repositories found'}\n          </div>\n        )}\n      </div>\n    )\n  }\n}\n"}});