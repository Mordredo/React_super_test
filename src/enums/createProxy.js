const statusProxy = (f) => new Proxy(f, {
  apply(target, thisArg, args) {
    return target.apply(thisArg, args);
  }
});

export default statusProxy;
