import Icon from './src/Icon.vue';

Icon.install = (app) => {
  app.component(Icon.name, Icon);
};

export default Icon;
