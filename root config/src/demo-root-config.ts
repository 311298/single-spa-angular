import { registerApplication, start, LifeCycles } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     import(
//       /* webpackIgnore: true */ // @ts-ignore-next
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// // registerApplication({
// //   name: "@demo/navbar",
// //   app: () =>
// //     import(
// //       /* webpackIgnore: true */ // @ts-ignore-next
// //       "@demo/navbar"
// //     ),
// //   activeWhen: ["/"],
// // });

// start({
//   urlRerouteOnly: true,
// });

registerApplication({
name: "@demo/angular-16", 
 app: () =>
  System.import("@demo/angular-16") 
   .then((module: LifeCycles<{}>) => ({
    bootstrap: module.bootstrap,
    mount: module.mount,
    unmount: module.unmount,
   }))
   .catch((error) => {
    console.error("Failed to load micro-frontend:", error);
    return Promise.reject(error);
   }),
  activeWhen: 
  // [
  //   '/angular-16',
    (location) => location.pathname.includes("/dashboard"), 
  // ],
});

registerApplication({
name: "@demo/mfe-angular", 
 app: () =>
  System.import("@demo/mfe-angular") 
   .then((module: LifeCycles<{}>) => ({
    bootstrap: module.bootstrap,
    mount: module.mount,
    unmount: module.unmount,
   }))
   .catch((error) => {
    console.error("Failed to load micro-frontend:", error);
    return Promise.reject(error);
   }),
  activeWhen: 
  // [
  //   '/mfe-angular',
     (location) => location.pathname.includes("/app1"),
  // ],
});

registerApplication({
name: "@demo/mfe-angular-2", 
 app: () =>
  System.import("@demo/mfe-angular-2") 
   .then((module: LifeCycles<{}>) => ({
    bootstrap: module.bootstrap,
    mount: module.mount,
    unmount: module.unmount,
   }))
   .catch((error) => {
    console.error("Failed to load micro-frontend:", error);
    return Promise.reject(error);
   }),
  activeWhen: 
  // [
  //   '/mfe-angular-2',
     (location) => location.pathname.includes("/app2"),
  // ],
});

start({
 urlRerouteOnly: true,
});
