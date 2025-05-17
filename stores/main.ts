export const useMain = defineStore("main", () => {
  const number = ref(1);

  const double = computed(() => number.value * 2);

  const increment = (amount = 1) => {
    number.value += amount;
  };

  return { number, double, increment };
});
