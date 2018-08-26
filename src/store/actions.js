export default {

  setPageTitle(context, payload) {
    context.commit('SET_PAGE_TITLE', payload);
  },

  setEntity(context, payload) {
    context.commit('SET_ENTITY', payload);
  },

};
