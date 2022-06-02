export default {
  beforeMount(el, binding) {
    let iconClass = `fa fa-${binding.value} text-green-400 text-2xl`;
    if (binding.arg === 'full') {
      iconClass = binding.value;
    }
    if (binding.value.right) {
      iconClass += ' float-right';
    }

    // eslint-disable-next-line no-param-reassign
    el.innerHTML += `<i class="${iconClass}"></i>`;
  },
};
