import { computed, onMounted, onUnmounted, ref } from "vue";

export default function useBreakpoint() {
  let windowWindth = ref(window.innerWidth);
  const onWidthChange = () => (windowWindth.value = window.innerWidth);
  onMounted(() => window.addEventListener("resize", onWidthChange));
  onUnmounted(() => window.removeEventListener("resize", onWidthChange));

  const type = computed(() => {
    let size = "sm";
    if (windowWindth.value > 549 && windowWindth.value < 1200) size = "md";
    if (windowWindth.value > 1199) size = "lg";
    return size;
  });

  return {
    type,
  };
}
