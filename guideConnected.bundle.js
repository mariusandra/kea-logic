webpackJsonp([9],{548:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return y});var l,i,c=n(734),s=(n.n(c),n(6)),u=n.n(s),p=n(61),m=n(132),d=n(573),h=n(217),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),g={guideExample1:n(736),guideExample2:n(737),guideExample3:n(738),guideExample4:n(739),guideExample5:n(740)},y=(l=Object(p.a)({actions:[d.a,["toggleFeature"]],props:[d.a,["features"]]}))(i=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),f(t,[{key:"render",value:function(){var e=this.props.features,t=this.actions.toggleFeature;return u.a.createElement("div",{className:"connected-scene"},u.a.createElement("div",{className:"description"},u.a.createElement("h2",null,"Example #5 - Connected logic"),u.a.createElement("p",null,"Attaching actions, reducers and selectors to your components will get you pretty far."),u.a.createElement("p",null,"However, there comes a time in every application's life when that's no longer enough. Perhaps you need to share code between components? Perhaps you want to separate concerns to make it more readable? Perhaps the logic has grown over 200 lines and really should be yanked out of ",u.a.createElement("code",null,"index.js"),"?"),u.a.createElement("p",null,"Whatever the reason, you're in luck! Kea was originally built just for this. The inline version that we've been using until now (",u.a.createElement("code",null,"@kea({})(Component)"),") came much later."),u.a.createElement("p",null,"So how do you separate your ",u.a.createElement("strong",null,"logic")," from your components?"),u.a.createElement("p",null,"Let's look at a real world example: this guide itself.")),u.a.createElement("div",{className:"description"},u.a.createElement("h2",null,"Separating concerns"),u.a.createElement("p",null,"You might have noticed buttons that look like this:"),u.a.createElement("p",null,u.a.createElement("button",{onClick:function(){return t("connectedGuideHelp")}},"Tell me more!")),e.connectedGuideHelp?u.a.createElement("div",{className:"extra-help"},'"more"!'):null,u.a.createElement("p",null,"How do they work?"),u.a.createElement("p",null,"When I started writing the guide, I just put this code on top of every component:"),u.a.createElement(h.default,{className:"javascript"},g.guideExample1),u.a.createElement("p",null,"The code is rather straightforward, perhaps just a little bit unfamiliar."),u.a.createElement("p",null,"We have an object, ",u.a.createElement("code",null,"features"),", which contains booleans that can be toggled on and off. We return a new object every time the action ",u.a.createElement("code",null,"toggleFeature(feature)")," is called, flipping the boolean for the requested feature."),u.a.createElement("p",null,"While it worked fine, it became repetetive to copy this same code on top of every page in the guide. Code duplication is usually a ",u.a.createElement("button",{onClick:function(){return t("connectedCodeSmell")}},"code smell")," and should be handled approriately."),e.connectedCodeSmell?u.a.createElement("div",{className:"extra-help"},u.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Code_smell"},"Wikipedia"),": ",u.a.createElement("em",null,u.a.createElement("strong",null,"Code smell,"),' also known as bad smell, in computer programming code, refers to any symptom in the source code of a program that possibly indicates a deeper problem. According to Martin Fowler, "a code smell is a surface indication that usually corresponds to a deeper problem in the system". Another way to look at smells is with respect to principles and quality: ',u.a.createElement("strong",null,'"smells are certain structures in the code that indicate violation of fundamental design principles and negatively impact design quality"'),". Code smells are usually not bugs—they are not technically incorrect and do not currently prevent the program from functioning. Instead, they indicate weaknesses in design that may be slowing down development or increasing the risk of bugs or failures in the future. Bad code smells can be an indicator of factors that contribute to technical debt."),u.a.createElement("br",null),u.a.createElement("br",null),"Yeah, yeah... I just wanted to use another hint box!"):null,u.a.createElement("p",null,"So how do we stop this madness?"),u.a.createElement("p",null,"First we must extract the logic to a separate file. Let's call it ",u.a.createElement("code",null,"features-logic.js"),":"),u.a.createElement(h.default,{className:"javascript"},g.guideExample2),u.a.createElement("p",null,"You skip the ",u.a.createElement("code",null,"@")," in front of ",u.a.createElement("code",null,"@kea"),", but everything else remains the same."),u.a.createElement("p",null,"Then we have a few ways to import it."),u.a.createElement("p",null,"The simplest is to do a drop-in replacement:"),u.a.createElement(h.default,{className:"javascript"},g.guideExample3),u.a.createElement("p",null,"That's simple and works fine, but will only get you so far. There are a few things wrong with this approach:"),u.a.createElement("p",null,"First, it's not clear what you're importing. As ",u.a.createElement("a",{href:"https://mariusandra.com/blog/2012/09/two-strategies-for-writing-better-code/"},"code is read far more times than it's written"),", it's very very useful to be as explicit as possible. Your future self will thank you immensely! In this case you have no idea what extra props and actions your component will receive without having to open ",u.a.createElement("code",null,"features-logic.js")," and checking it out yourself."),u.a.createElement("p",null,"You also don't know what baggage you're getting. There might be hundreds of new actions and props, which your relatively simple component will receive. That will slow down the page, as a change in each of them will trigger re-rendering."),u.a.createElement("p",null,"What if one of the props changes? For example the new intern replaces the action ",u.a.createElement("code",null,"toggleFeature")," with two new actions: ",u.a.createElement("code",null,"setFeature")," and ",u.a.createElement("code",null,"clearFeature"),". Without (manually or automatically) clicking the buttons, you won't know that the action is no longer there. Bummer."),u.a.createElement("p",null,"What's more, you can't chain calls like this and you can't add other actions that only this component will use."),u.a.createElement("p",null,"So what's the solution? Answer: the ",u.a.createElement("code",null,"@connect({ ... })")," helper!"),u.a.createElement(h.default,{className:"javascript"},g.guideExample4),u.a.createElement("p",null,"While the syntax may look alien at first, it's very comfortable to use and optimised for readability."),u.a.createElement("p",null,"With ",u.a.createElement("code",null,"connect")," you may import as many props and actions from as many logic stores as you like. In case you make a typo (",u.a.createElement("code",null,"highlghtTheme")," instead of ",u.a.createElement("code",null,"highlightTheme"),"), you will get an error in the JS console and can fix it immediately. Just connect your logic and use it!"),u.a.createElement("p",null,"What if you also want to add actions and reducers only this component will use?"),u.a.createElement("p",null,"No problem! Just replace ",u.a.createElement("code",null,"@connect")," with ",u.a.createElement("code",null,"@kea({ connect: {}, /* other stuff */ })")," like so:"),u.a.createElement(h.default,{className:"javascript"},g.guideExample5),u.a.createElement("p",null,"If this is not redux-heaven, I don't know what is!"),u.a.createElement("p",null,"Next page: ",u.a.createElement(m.a,{to:"/guide/dynamic-connected"},"Dynamic Connected Logic"))))}}]),t}(s.Component))||i},573:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n(11),r=n.n(o),l=n(61),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.a=Object(l.d)({actions:function(){return{toggleFeature:function(e){return{feature:e}}}},reducers:function(e){var t=e.actions;return{features:[{},r.a.object,a({},t.toggleFeature,function(e,t){var n=t.feature;return i({},e,a({},n,!e[n]))})]}}})},734:function(e,t,n){var a=n(735);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0};o.transform=void 0;n(87)(a,o);a.locals&&(e.exports=a.locals)},735:function(e,t,n){t=e.exports=n(86)(void 0),t.push([e.i,"",""])},736:function(e,t){e.exports="// index.js\nimport React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { kea } from 'kea'\n\n@kea({\n  actions: () => ({\n    toggleFeature: (feature) => ({ feature })\n  }),\n  reducers: ({ actions }) => ({\n    features: [{}, PropTypes.object, {\n      [actions.toggleFeature]: (state, payload) => {\n        const { feature } = payload\n        return {\n          ...state,\n          [feature]: !state[feature]\n        }\n      }\n    }]\n  })\n})\nexport default class CounterExampleScene extends Component {\n  // ...\n\n  render () {\n    const { features } = this.props\n    const { toggleFeature } = this.actions\n\n    return (\n      <div>\n        <button onClick={() => toggleFeature('reducerDetails')}>{'Tell me more!'}</button>\n\n        {features.reducerDetails ? (\n          <div className='extra-help'>\n            extra help comes here\n          </div>\n        ) : null}\n      </div>\n    )\n  }\n}\n"},737:function(e,t){e.exports="// features-logic.js\nimport PropTypes from 'prop-types'\nimport { kea } from 'kea'\n\nexport default kea({\n  actions: () => ({\n    toggleFeature: (feature) => ({ feature })\n  }),\n  reducers: ({ actions }) => ({\n    features: [{}, PropTypes.object, {\n      [actions.toggleFeature]: (state, payload) => {\n        const { feature } = payload\n        return {\n          ...state,\n          [feature]: !state[feature]\n        }\n      }\n    }]\n  })\n})\n"},738:function(e,t){e.exports="// index.js\nimport React, { Component } from 'react'\n\nimport featuresLogic from '../features-logic'\n\n@featuresLogic\nexport default class CounterExampleScene extends Component {\n  // no change here\n}\n"},739:function(e,t){e.exports="import React, { Component } from 'react'\nimport { connect } from 'kea'\n\nimport featuresLogic from '../features-logic'\nimport someOtherLogic from '../some-other-logic'\n\n@connect({\n  actions: [\n    featuresLogic, [\n      'toggleFeature'\n    ]\n  ],\n  props: [\n    featuresLogic, [\n      'features'\n    ],\n    someOtherLogic, [\n      'isMenuOpen',\n      'isPageLoading',\n      'highlightTheme'\n    ]\n  ]\n})\nexport default class CounterExampleScene extends Component {\n  // as we were...\n  render () {\n    const { features, isMenuOpen, isPageLoading, highlightTheme } = this.props\n    const { toggleFeature } = this.actions\n    // ...\n  }\n}\n"},740:function(e,t){e.exports="import React, { Component } from 'react'\nimport { connect } from 'kea'\n\nimport featuresLogic from '../features-logic'\n\n@kea({\n  connect: {\n    actions: [\n      featuresLogic, [\n        'toggleFeature'\n      ]\n    ],\n    props: [\n      featuresLogic, [\n        'features'\n      ]\n    ]\n  },\n  actions: {\n    doSomething: (id) => ({ id })\n  },\n  // ...\n})\nexport default class CounterExampleScene extends Component {\n  // no change here\n}\n"}});