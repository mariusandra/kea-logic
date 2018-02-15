webpackJsonp([17],{549:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return b});var i,c,l=n(6),u=n.n(l),s=n(61),p=n(132),d=n(741),f=n(573),y=n(217),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h={guideExample1:n(742),guideExample2:n(743)},b=(i=Object(s.a)({actions:[f.a,["toggleFeature"]],props:[f.a,["features"]]}))(c=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),m(t,[{key:"render",value:function(){this.props.features,this.actions.toggleFeature;return u.a.createElement("div",{className:"connected-scene"},u.a.createElement("div",{className:"description"},u.a.createElement("p",null,u.a.createElement("strong",{style:{color:"red"}},"NB!")," Dynamic Connected Logics are a work in progress! They work, but there are specific issues still left to fix. For more information, please follow ",u.a.createElement("a",{href:"https://github.com/keajs/kea/issues/72"},"this issue"),"."),u.a.createElement("h2",null,"Dynamic Connected logic"),u.a.createElement("p",null,"If you need dynamic components (with a ",u.a.createElement("code",null,"key"),") that also share data with other components, you will need to connect them in a special way."),u.a.createElement("p",null,"You will need to use the ",u.a.createElement("code",null,"withKey(key)")," method on the logic and pass it the ",u.a.createElement("code",null,"key")," that points to the part of the dynamic logic store that you want to access."),u.a.createElement(y.default,{className:"javascript"},h.guideExample1),u.a.createElement("p",null,"The ",u.a.createElement("code",null,"key")," can either be a regular string, number or oter literal... or you can pass a function that calculates it from the props of the component you are connecting to."),u.a.createElement("p",null,"In the last example we dynamically passed the key from the ",u.a.createElement("code",null,"id")," prop."),u.a.createElement("p",null,"Here you can see a complete example:"),u.a.createElement(y.default,{className:"javascript"},h.guideExample2),u.a.createElement("p",null,"And here you can see it in action:"),u.a.createElement("div",{className:"demo"},u.a.createElement(d.a,null)),u.a.createElement("p",null,"Next page: ",u.a.createElement(p.a,{to:"/guide/forms"},"Forms"))))}}]),t}(l.Component))||c},573:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=n(11),a=n.n(r),i=n(61),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.a=Object(i.d)({actions:function(){return{toggleFeature:function(e){return{feature:e}}}},reducers:function(e){var t=e.actions;return{features:[{},a.a.object,o({},t.toggleFeature,function(e,t){var n=t.feature;return c({},e,o({},n,!e[n]))})]}}})},741:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return v});var c,l,u,s=n(6),p=n.n(s),d=n(11),f=n.n(d),y=n(61),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=Object(y.d)({key:function(e){return e.id},path:function(e){return["scenes","dynamic",e]},actions:function(){return{doit:!0}},reducers:function(e){var t=e.actions,n=e.key;return{done:[!1,f.a.bool,i({},t.doit,function(e,t){return n===t.key||e})]}}}),b=h(c=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),m(t,[{key:"render",value:function(){return p.a.createElement("div",null,"OnlyData - id: ",this.props.id,", done: ",this.props.done?"true":"false")}}]),t}(s.Component))||c,g=(l=Object(y.a)({actions:[h.withKey(function(e){return e.id}),["doit"]],props:[h.withKey(function(e){return e.id}),["done"]]}))(u=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),m(t,[{key:"render",value:function(){return p.a.createElement("div",null,"DataWithButtion - id: ",this.props.id,", done: ",this.props.done?"true":"false",p.a.createElement("button",{onClick:this.actions.doit},"Do it!"))}}]),t}(s.Component))||u,v=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),m(t,[{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement("div",{style:{border:"1px solid black",padding:10}},p.a.createElement(b,{id:123}),p.a.createElement(g,{id:123})),p.a.createElement("br",null),p.a.createElement("div",{style:{border:"1px solid black",padding:10}},p.a.createElement(g,{id:999}),p.a.createElement(b,{id:999})))}}]),t}(s.Component)},742:function(e,t){e.exports="@connect({\n  props: [\n    // connecting to a regular logic store\n    regularLogic, [\n      'regularField'\n    ],\n\n    // connecting to a dynamic logic store,\n    // we must pass in the key of the dynamic part\n    dynamicLogic.withKey(12), [\n      'doneFor12'\n    ],\n\n    // connecting to a dynamic logic store,\n    // the key is derived from the connected component's props\n    dynamicLogic.withKey(props => props.id), [\n      'done'\n    ]\n  ]\n})\n"},743:function(e,t){e.exports="// create a dynamic logic store\nconst dynamicLogic = kea({\n  key: (props) => props.id,\n\n  path: (key) => ['scenes', 'dynamic', key],\n\n  actions: () => ({\n    doit: true\n  }),\n\n  reducers: ({ actions, key }) => ({\n    done: [false, PropTypes.bool, {\n      [actions.doit]: (state, payload) => key === payload.key ? true : state\n    }]\n  })\n})\n\n// wrap it around a component\n@dynamicLogic\nclass OnlyData extends Component {\n  render () {\n    return <div>OnlyData - id: {this.props.id}, done: {this.props.done ? 'true' : 'false'}</div>\n  }\n}\n\n// create another helper that wants data from this dynamic logic store\n@connect({\n  actions: [\n    dynamicLogic.withKey(props => props.id), [\n      'doit'\n    ]\n  ],\n  props: [\n    dynamicLogic.withKey(props => props.id), [\n      'done'\n    ]\n  ]\n})\nclass DataWithButtion extends Component {\n  render () {\n    return (\n      <div>\n        DataWithButtion - id: {this.props.id}, done: {this.props.done ? 'true' : 'false'}\n        <button onClick={this.actions.doit}>Do it!</button>\n      </div>\n    )\n  }\n}\n\n// main demo\nexport default class Demo extends Component {\n  render () {\n    return (\n      <div>\n        <div style={{ border: '1px solid black', padding: 10 }}>\n          <OnlyData id={123} />\n          <DataWithButtion id={123} />\n        </div>\n        <br />\n        <div style={{ border: '1px solid black', padding: 10 }}>\n          <DataWithButtion id={999} />\n          <OnlyData id={999} />\n        </div>\n      </div>\n    )\n  }\n}\n"}});