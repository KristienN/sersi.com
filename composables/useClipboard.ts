export function useClipboard() {
  const copied = ref(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      copied.value = false;
    }
  };

  return {
    copy,
    copied,
  };
}
