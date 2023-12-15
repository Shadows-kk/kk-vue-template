import { reactive } from "vue";

export function createFormItem(formItemtype, payload, next, prev) {
  if (!next) {
    next = () => null;
  }
  if (!prev) {
    prev = () => null;
  }
  const nextFunc = (current) => {};
  const formItem = reactive({
    type: formItemtype,
    payload,
    next: nextFunc,
    prev,
  });
  return formItem;
}
