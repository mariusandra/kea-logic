webpackJsonp([6],{563:function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return h});var l,c,s=t(6),i=t.n(s),u=t(61),m=t(217),d=t(132),p=t(573),g=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),f={install:t(807),import:t(808),store:t(809),usage:t(810),keaSagas:t(811),keaStart:t(812),keaStop:t(813),keaTakeEvery:t(814),keaTakeLatest:t(815),keaWorkers:t(816)},h=(l=Object(u.a)({actions:[p.a,["toggleFeature"]],props:[p.a,["features"]]}))(c=function(e){function n(){return a(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,e),g(n,[{key:"render",value:function(){var e=this.props.features,n=this.actions.toggleFeature;return i.a.createElement("div",null,i.a.createElement("div",{className:"description"},i.a.createElement("h2",null,"Sagas"),i.a.createElement("p",null,"Kea has first class support for sagas via the ",i.a.createElement("a",{href:"https://github.com/keajs/kea-saga"},i.a.createElement("code",null,"kea-saga"))," plugin."),i.a.createElement("p",null,"Read more about Sagas on the ",i.a.createElement("a",{href:"https://redux-saga.js.org/"},"redux-saga")," homepage."),i.a.createElement("p",null,'Also read the sections of the guide marked "with kea-saga" to learn more.')),i.a.createElement("div",{className:"description"},i.a.createElement("h2",null,"Installation"),i.a.createElement("p",null,"First install the ",i.a.createElement("a",{href:"https://github.com/keajs/kea-saga"},i.a.createElement("code",null,"kea-saga"))," and ",i.a.createElement("a",{href:"https://github.com/redux-saga/redux-saga"},i.a.createElement("code",null,"redux-saga"))," packages:"),i.a.createElement(m.default,{className:"bash"},f.install),i.a.createElement("p",null,"Then you have a few ways to install the plugin:"),i.a.createElement(m.default,{className:"javascript"},f.import),i.a.createElement("p",null,"Use whichever way is most convenient for your setup."),i.a.createElement("p",null,"Note that the ",i.a.createElement("code",null,"kea-saga")," plugin needs to be installed globally as it needs to add its middleware to the store. You can't use it as a local plugin inside ",i.a.createElement("code",null,"kea({})")," calls."),i.a.createElement("p",null,"If you have configured your store through ",i.a.createElement(d.a,{to:"/api/store"},i.a.createElement("code",null,"getStore()")),", you're all set!"),i.a.createElement("p",null,i.a.createElement("button",{onClick:function(){return n("sagaManualStore")}},"I'm not using ",i.a.createElement("code",null,"getStore"))),e.sagaManualStore?i.a.createElement("div",{className:"extra-help"},i.a.createElement("p",null,"If, you wish to configure your store manually, connect the saga middleware like so:"),i.a.createElement(m.default,{className:"javascript"},f.store)):null),i.a.createElement("div",{className:"description"},i.a.createElement("h2",null,"Usage"),i.a.createElement("p",null,"First, read the docs on the ",i.a.createElement("a",{href:"https://redux-saga.js.org/"},"redux-saga")," homepage to learn how sagas work."),i.a.createElement("p",null,"Adding ",i.a.createElement("code",null,"kea-saga")," will give your logic stores access to the keys: ",i.a.createElement("code",null,"start"),", ",i.a.createElement("code",null,"stop"),", ",i.a.createElement("code",null,"takeEvery"),", ",i.a.createElement("code",null,"takeLatest"),", ",i.a.createElement("code",null,"workers"),", ",i.a.createElement("code",null,"sagas"),"."),i.a.createElement(m.default,{className:"javascript"},f.usage),i.a.createElement("h4",null,"start: ",i.a.createElement("code",null,"function * () ","{}")),i.a.createElement("p",null,"Saga that is started whenever the component is connected or the saga exported from this component starts"),i.a.createElement("p",null,"Note: sagas are started before your ",i.a.createElement("u",null,"wrapped component's")," ",i.a.createElement("code",null,"componentDidMount"),". Actions dispatched before this lifecycle method will not be seen inside ",i.a.createElement("code",null,"start"),"."),i.a.createElement(m.default,{className:"javascript"},f.keaStart),i.a.createElement("h4",null,"stop: ",i.a.createElement("code",null,"function * () ","{}")),i.a.createElement("p",null,"Saga that is started whenever the component is disconnected or the saga exported from this component is cancelled"),i.a.createElement("p",null,"This function is called right before your ",i.a.createElement("u",null,"wrapped component's")," ",i.a.createElement("code",null,"componentWillUnmount")," lifecycle method."),i.a.createElement(m.default,{className:"javascript"},f.keaStop),i.a.createElement("h4",null,"takeEvery: ",i.a.createElement("code",null,"({ actions }) => ({})")),i.a.createElement("p",null,"Run the following workers every time the action is dispatched"),i.a.createElement("p",null,"Note: sagas are started before your wrapped component's ",i.a.createElement("code",null,"componentDidMount"),". Actions dispatched before this lifecycle method will not be seen by ",i.a.createElement("code",null,"takeEvery"),"."),i.a.createElement(m.default,{className:"javascript"},f.keaTakeEvery),i.a.createElement("h4",null,"takeLatest: ",i.a.createElement("code",null,"({ actions }) => ({})")),i.a.createElement("p",null,"Run the following workers every time the action is dispatched, cancel the previous worker if still running"),i.a.createElement("p",null,"Note: sagas are started before your wrapped component's ",i.a.createElement("code",null,"componentDidMount"),". Actions dispatched before this lifecycle method will not be seen by ",i.a.createElement("code",null,"takeLatest"),"."),i.a.createElement(m.default,{className:"javascript"},f.keaTakeLatest),i.a.createElement("h4",null,"workers: ",i.a.createElement("code",null,"{}")),i.a.createElement("p",null,"An object of workers which you may reference in other sagas."),i.a.createElement(m.default,{className:"javascript"},f.keaWorkers),i.a.createElement("h4",null,"sagas: ",i.a.createElement("code",null,"[]")),i.a.createElement("p",null,"Array of sagas that get exported with this component's saga"),i.a.createElement(m.default,{className:"javascript"},f.keaSagas)),i.a.createElement("div",{className:"description"},i.a.createElement("h2",null,"FAQ"),i.a.createElement("p",null,i.a.createElement("strong",null,"My sagas won't start with my component!")),i.a.createElement("p",null,i.a.createElement("code",null,"kea-saga")," injects itself into your component's ",i.a.createElement("code",null,"componentDidMount")," function and starts the sagas before returning control to the original ",i.a.createElement("code",null,"componentDidMount"),"."),i.a.createElement("p",null,"Because ",i.a.createElement("a",{href:"https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=MYGwhgzhAEDKD2BbApgFwBYEsB2BzaA3gFDTTDzYSoBOArsKvNdABQCUhJpZFE8IyAHQh4uFgHIqYaqhy5xbLgF8uXKdgAm0jQDFa2BpgqsOxbj0r8hIseIBG4BcqJdp1eAHc9B2cYC8JtB-AHyc5uSWAsKiEg5gcU6kKipEEXxRNiwIKBhyggAO7oyoAJ75Qupa1Lr6hhSKAPQN0AC0oQBmtb7YgQQpaVbRYtloWHgFRfCl5YJunt512I3NbdD6GsjtOMgaLgKo0Hw5Y_gB2MgecEijcuxERzfjldoL3XdEQA&debug=false&circleciRepo=&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=6.26.0"},"of the way")," ES classes work, if you define your ",i.a.createElement("code",null,"componentDidMount")," as an arrow function (",i.a.createElement("code",null,"componentDidMount = () => {}"),"), it will only be declared after your class is instantiated and it will overwrite modifications by ",i.a.createElement("code",null,"kea-saga"),"."),i.a.createElement("p",null,"Thus, at least for now, keep your ",i.a.createElement("code",null,"componentDidMount")," as a regular function. See more details in ",i.a.createElement("a",{href:"https://github.com/keajs/kea-saga/issues/2"},"this issue"),".")))}}]),n}(s.Component))||c},573:function(e,n,t){"use strict";function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=t(11),r=t.n(o),l=t(61),c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e};n.a=Object(l.d)({actions:function(){return{toggleFeature:function(e){return{feature:e}}}},reducers:function(e){var n=e.actions;return{features:[{},r.a.object,a({},n.toggleFeature,function(e,n){var t=n.feature;return c({},e,a({},t,!e[t]))})]}}})},807:function(e,n){e.exports="yarn add kea-saga redux-saga\nnpm install --save kea-saga redux-saga\n"},808:function(e,n){e.exports="// the cleanest way\nimport sagaPlugin from 'kea-saga'\nimport { getStore } from 'kea'\n\nconst store = getStore({\n  plugins: [ sagaPlugin ]\n})\n\n// another way\nimport sagaPlugin from 'kea-saga'\nimport { activatePlugin } from 'kea'\n\nactivatePlugin(sagaPlugin)\n\n// the shortest way\nimport 'kea-saga/install'\n"},809:function(e,n){e.exports="import { keaReducer, activatePlugin } from 'kea'\nimport sagaPlugin, { keaSaga } from 'kea-saga'\n\nexport default function getStore () {\n  activatePlugin(sagaPlugin)\n\n  const reducers = combineReducers({\n    kea: keaReducer('kea'),\n    scenes: keaReducer('scenes')\n  })\n\n  const sagaMiddleware = createSagaMiddleware()\n  const finalCreateStore = compose(\n    applyMiddleware(sagaMiddleware)\n  )(createStore)\n\n  const store = finalCreateStore(reducers)\n\n  sagaMiddleware.run(keaSaga)\n\n  return store\n}\n"},810:function(e,n){e.exports="import { kea } from 'kea'\n\nexport default kea({\n  // ... see the api docs for more\n\n  start: function * () {\n    // saga started or component mounted\n    console.log(this)\n  },\n\n  stop: function * () {\n    // saga cancelled or component unmounted\n  },\n\n  takeEvery: ({ actions, workers }) => ({\n    [actions.simpleAction]: function * () {\n      // inline worker\n    },\n    [actions.actionWithDynamicPayload]: workers.dynamicWorker\n  }),\n\n  takeLatest: ({ actions, workers }) => ({\n    [actions.actionWithStaticPayload]: function * () {\n      // inline worker\n    },\n    [actions.actionWithManyParameters]: workers.dynamicWorker\n  }),\n\n  workers: {\n    * dynamicWorker (action) {\n      const { id, message } = action.payload // if from takeEvery/takeLatest\n      // reference with workers.dynamicWorker\n    },\n    longerWayToDefine: function * () {\n      // another way to define a worker\n    }\n  },\n\n  sagas: [saga1, saga2]\n})\n"},811:function(e,n){e.exports="// Input\nsagas: [saga1, saga2]\n\n// Output\nmyRandomSceneLogic.saga == function * () {\n  yield fork(saga1)\n  yield fork(saga2)\n\n  // start() ...\n}\n"},812:function(e,n){e.exports="// Input\nstart: function * () {\n  // saga started or component mounted\n  console.log(this)\n}\n\n// Output\nmyRandomSceneLogic.saga == function * () {\n  // saga started or component mounted\n  console.log(this)\n  // => { actions, workers, path, key, get: function * (), fetch: function * () }\n}\n"},813:function(e,n){e.exports="// Input\nstop: function * () {\n  // saga cancelled or component unmounted\n}\n\n// Output\nmyRandomSceneLogic.saga == function * () {\n  try {\n    // start()\n  } finally {\n    if (cancelled()) {\n      // saga cancelled or component unmounted\n    }\n  }\n}\n"},814:function(e,n){e.exports="// Input\ntakeEvery: ({ actions, workers }) => ({\n  [actions.simpleAction]: function * () {\n    // inline worker\n  },\n  [actions.actionWithDynamicPayload]: workers.dynamicWorker\n})\n\n// Output\nmyRandomSceneLogic.saga == function * () {\n  // pseudocode\n  yield fork(function * () {\n    yield [\n      takeEvery(actions.simpleAction.toString(), function * () {\n        // inline worker\n      }.bind(this)),\n      takeEvery(actions.actionWithDynamicPayload.toString(), workers.dynamicWorker.bind(this))\n    ]\n  })\n}\n"},815:function(e,n){e.exports="// Input\ntakeLatest: ({ actions, workers }) => ({\n  [actions.simpleAction]: function * () {\n    // inline worker\n  },\n  [actions.actionWithDynamicPayload]: workers.dynamicWorker\n})\n\n// Output\nmyRandomSceneLogic.saga == function * () {\n  // pseudocode\n  yield fork(function * () {\n    yield [\n      takeLatest(actions.simpleAction.toString(), function * () {\n        // inline worker\n      }.bind(this)),\n      takeLatest(actions.actionWithDynamicPayload.toString(), workers.dynamicWorker.bind(this))\n    ]\n  })\n}\n"},816:function(e,n){e.exports="// Input\nworkers: {\n  * dynamicWorker (action) {\n    const { id, message } = action.payload // if from takeEvery/takeLatest\n    // reference with workers.dynamicWorker\n  },\n  longerWayToDefine: function * () {\n    // another worker\n  }\n}\n\n// Output\nmyRandomSceneLogic.workers == {\n  dynamicWorker: function (action) *\n    const { id, message } = action.payload // if from takeEvery/takeLatest\n    // reference with workers.dynamicWorker\n  }.bind(myRandomSceneLogic),\n\n  longerWayToDefine: function () * {\n    // another worker\n  }.bind(myRandomSceneLogic)\n}\n"}});