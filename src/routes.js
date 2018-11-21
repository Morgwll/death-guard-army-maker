import Home from './components/Home.vue';
import ArmyBuilder from './components/ArmyBuilder.vue';
import HQ from './components/units/hq/HQ.vue';
import FastAttack from './components/units/fa/FastAttack.vue';
import Tactical from './components/units/tc/TacticalUnit.vue';
import Elites from './components/units/el/Elites.vue';
import Vehicles from './components/units/vh/Vehicles.vue';
import Unit from './components/units/Unit.vue';
import Contact from './components/Contact.vue';
import About from './components/About.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/army-builder', component: ArmyBuilder, children: [
        { path: '/army-builder/hq', component: HQ, children: [
            { path: ':name', component: Unit}
        ] },
        { path: '/army-builder/elites', component: Elites, children: [
            { path: ':name', component: Unit}
        ] },
        { path: '/army-builder/fast-attack', component: FastAttack, children: [
            { path: ':name', component: Unit}
        ] },
        { path: '/army-builder/tactical', component: Tactical, children: [
            { path: ':name', component: Unit}
        ] },
        { path: '/army-builder/vehicles', component: Vehicles, children: [
            { path: ':name', component: Unit}
        ] }
    ]},
    { path: '/contact', component: Contact },
    { path: '/about', component: About }
]