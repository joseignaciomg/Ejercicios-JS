export const eventname = "getpubsub";
export function createEvent(instance) {
  return new CustomEvent(eventname, {
    detail: { instance: instance },
    cancelable: true,
    bubbles: true,
    composed: true,
  });
}
