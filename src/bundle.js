const requireComponents = require.context('../src', true, /\/\w+-\w+\.vue$/);

requireComponents.keys().forEach(fileName => {
    const componentConfig = requireComponents(fileName);

    var componentName = fileName.split('/').pop().replace(/\.\w+$/, '');

    Vue.component(componentName, componentConfig.default || componentConfig);
});