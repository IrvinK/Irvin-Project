"use strict";
var router_1 = require('@angular/router');
var contactpage_component_1 = require('./contactpage/contactpage.component');
var mainpage_component_1 = require('./mainpage/mainpage.component');
var detailpage_component_1 = require('./detailpage/detailpage.component');
var appRoutes = [
    {
        path: 'contactpage',
        component: contactpage_component_1.ContactpageComponent
    },
    {
        path: 'mainpage',
        component: mainpage_component_1.MainComponent
    },
    {
        path: 'detailpage',
        component: detailpage_component_1.DetailpageComponent
    },
    {
        path: '', redirectTo: 'mainpage', pathMatch: 'full' },
    {
        path: '**', redirectTo: 'mainpage', pathMatch: 'full' },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map