<template>
    <ul>
        <router-link tag="li" to="/"><a>Home</a></router-link>
        <router-link tag="li" to="/army-builder" ><a>Army Builder</a><ul><router-link v-for="(submenu, i) in armyMenu" :key="i" tag="li" :to="submenu.route"><a>{{ submenu.name }}</a></router-link></ul></router-link>
        <router-link tag="li" to="/about"><a>About</a></router-link>
        <router-link tag="li" to="/contact"><a>Contact</a></router-link>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            armyMenu: [
                { name: "HQ", route: "/army-builder/hq"},
                { name: "Elite Units", route: "/army-builder/elites"},
                { name: "Fast Attack", route: "/army-builder/fast-attack"},
                { name: "Tactical Units", route: "/army-builder/tactical"},
                { name: "Vehicles", route: "/army-builder/vehicles"}
            ]
        }
    }
}
</script>