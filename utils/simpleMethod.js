export const simpleMethod = data => data;

export const fancyMethod = async data => {
  const otherMethod = await import("./otherMethod").then(
    module => module.otherMethod
  );
  return otherMethod(data);
};
